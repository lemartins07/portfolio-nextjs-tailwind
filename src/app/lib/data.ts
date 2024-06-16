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
