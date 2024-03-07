import { PrismaClient } from '@prisma/client'
import { unstable_noStore as noStore } from 'next/cache'

const prisma = new PrismaClient()

export async function getHomeData() {
  try {
    const result = await prisma.user.findFirst()

    console.log(result)
    await prisma.$disconnect()
    return result
  } catch (e) {
    console.error(e)
    await prisma.$disconnect()
  }
}

export async function fetchPortfoliosData() {
  noStore()
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const result = await fetch('http://localhost:3000/api/github', {
    method: 'GET',
  })

  const data = await result.json()

  return data
}
