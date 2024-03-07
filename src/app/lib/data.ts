import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getHomeData() {
  try {
    const result = await prisma.user.findFirst()

    await prisma.$disconnect()
    return result
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}

export async function fetchPortfoliosData() {
  const result = await fetch(
    'https://portfolio-nextjs-tailwind-lemartins07.vercel.app/api/github',
    {
      method: 'GET',
    },
  )

  const data = await result.json()

  return data
}
