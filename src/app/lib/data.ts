import { PrismaClient } from '@prisma/client'
import apiError from './utils'
import { Portfolio } from './definitions'
import { unstable_noStore as noStore } from 'next/cache'

const prisma = new PrismaClient()

const API_GIT = process.env.GIT_API_KEY
const API_VERCEL = process.env.VERCEL_TOKEN

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

    if (!response.ok) throw new Error('Erro ao pegar a foto.')

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

    if (!response.ok) throw new Error('Erro ao pegar a foto.')

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

    const data = filteredData.filter((githubRepo: { name: string }) => {
      return dataVercel.projects.some(
        (vercelRepo: { link: { repo: string } }) => {
          return githubRepo.name === vercelRepo.link.repo
        },
      )
    }) as Portfolio[]

    return { data, ok: true, error: '' }
  } catch (error) {
    return apiError(error)
  }
}
