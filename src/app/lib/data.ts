'use server'

import { PrismaClient } from '@prisma/client'
import apiError from './utils'
import { GithubRepo, Portfolio } from './definitions'
import { unstable_noStore as noStore } from 'next/cache'
import { ensureScreenshot } from './screenshot'

const prisma = new PrismaClient()

const API_GIT = process.env.GIT_API_KEY
const API_VERCEL = process.env.VERCEL_TOKEN

// Array com a ordem dos projetos mais importantes (preencha conforme desejar)
const featuredOrder = [
  'devchallenges-weather-app',
  'ignite-desafio-coffee-delivery',
  'devchallenges-catwiki',
  'dogs-nextjs',
  'ignite-timer',
  'responsive-portfolio',
  'dogs',
  'responsive-delivery',
  'bikecraft',
  'ignite-reactjs-desafio-todo-list',
  'ignite-dtmoney',
  'portfolio-nextjs',
  'portfolio-nextjs-tailwind',
]

export async function fetchUserData() {
  try {
    const result = await prisma.user.findFirst()

    await prisma.$disconnect()
    return result
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}

export async function fecthContactLinks() {
  try {
    const result = await prisma.userContact.findMany()

    await prisma.$disconnect()
    return result
  } catch (error: unknown) {
    await prisma.$disconnect()
    console.error('Database Error:', error)
    throw new Error('Failed to fetch contact link data.')
  }
}

export async function fecthSkills() {
  try {
    const result = await prisma.skills.findMany()

    await prisma.$disconnect()
    return result
  } catch (error: unknown) {
    await prisma.$disconnect()
    console.error('Database Error:', error)
    throw new Error('Failed to fetch contact link data.')
  }
}

export async function fetchEducation() {
  try {
    const result = await prisma.education.findMany()

    await prisma.$disconnect()
    return result
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}

async function getGithubData() {
  try {
    const response = await fetch(
      `https://api.github.com/users/lemartins07/repos?sort=updated&per_page=100`,
      {
        headers: {
          Authorization: `${API_GIT}`,
        },
        method: 'GET',
      },
    )

    if (!response.ok) throw new Error('Erro ao carregar dados do github.')

    const data = await response.json()

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}

async function getVercelData() {
  try {
    const response = await fetch(
      `https://api.vercel.com/v9/projects?limit=40`,
      {
        headers: {
          Authorization: `Bearer ${API_VERCEL}`,
        },
        method: 'GET',
      },
    )

    if (!response.ok) throw new Error('Erro ao carregar dados da vercel.')

    const data = await response.json()

    return { data, ok: true, error: '' }
  } catch (error: unknown) {
    return apiError(error)
  }
}

export async function fectchPortfolio() {
  noStore()
  try {
    const results = await Promise.allSettled([getGithubData(), getVercelData()])

    const dataGithub =
      results[0].status === 'fulfilled' ? results[0].value.data : null
    const dataVercel =
      results[1].status === 'fulfilled' ? results[1].value.data : null

    if (!dataGithub || !dataVercel) {
      throw new Error('Failed to fetch data from GitHub or Vercel')
    }

    const filteredData = dataGithub.filter(
      (repo: { homepage: null | string }) => repo.homepage !== null,
    )

    const data = filteredData
      .filter((githubRepo: { name: string }) => {
        return dataVercel.projects.some(
          (vercelRepo: { link: { repo: string } }) => {
            return githubRepo.name === vercelRepo.link.repo
          },
        )
      })
      .map((repo: GithubRepo) => ({
        id: repo.id,
        name: repo.name,
        homepage: repo.homepage,
        description: repo.description,
        language: repo.language,
        html_url: repo.html_url,
      }))
      .sort((a: Portfolio, b: Portfolio) => {
        const aIndex = featuredOrder.indexOf(a.name)
        const bIndex = featuredOrder.indexOf(b.name)
        if (aIndex === -1 && bIndex === -1) return 0
        if (aIndex === -1) return 1
        if (bIndex === -1) return -1
        return aIndex - bIndex
      }) as Portfolio[]

    for (const repo of data) {
      try {
        await ensureScreenshot(repo.homepage, repo.name.toLowerCase())
      } catch (e) {
        console.error('Screenshot error:', e)
      }
    }

    return { data, ok: true, error: '' }
  } catch (error) {
    return apiError(error)
  }
}
