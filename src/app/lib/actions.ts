'use server'

import apiError from './utils'

const API_GIT = process.env.GIT_API_KEY
const API_VERCEL = process.env.VERCEL_TOKEN

interface Portfolio {
  id: number
  name: string
  html_url: string
  description: string
  homepage: string
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

export default async function getPortfolioData() {
  try {
    const { data: dataGithub } = await getGithubData()

    const { data: dataVercel } = await getVercelData()

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
