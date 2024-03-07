import { NextResponse } from 'next/server'

const API_GIT = process.env.GIT_API_KEY
const API_VERCEL = process.env.VERCEL_TOKEN

async function getGithubData() {
  const resultGithub = await fetch(
    `https://api.github.com/users/lemartins07/repos?sort=updated&per_page=100`,
    {
      headers: {
        Authorization: `${API_GIT}`,
      },
      method: 'GET',
    },
  )

  return resultGithub.json()
}

async function getVercelData() {
  const resultVercel = await fetch(
    `https://api.vercel.com/v9/projects?limit=40`,
    {
      headers: {
        Authorization: `Bearer ${API_VERCEL}`,
      },
      method: 'GET',
    },
  )

  return resultVercel.json()
}

export async function GET() {
  try {
    const dataGithub = await getGithubData()

    const dataVercel = await getVercelData()

    const filteredData = dataGithub.filter(
      (repo: { homepage: null | string }) => repo.homepage !== null,
    )

    const result = filteredData.filter((githubRepo: { name: string }) => {
      return dataVercel.projects.some(
        (vercelRepo: { link: { repo: string } }) => {
          return githubRepo.name === vercelRepo.link.repo
        },
      )
    })

    return NextResponse.json(result)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Aconteceu um erro' })
  }
}
