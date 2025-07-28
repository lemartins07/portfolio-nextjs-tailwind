import fs from 'fs/promises'
import path from 'path'

const ACCESS_KEY = process.env.SCREENSHOTONE_KEY ?? '3eEMm5mnfH7zJA'

export async function ensureScreenshot(url: string, fileName: string) {
  const filePath = path.join(process.cwd(), 'public', `${fileName}.png`)
  try {
    await fs.access(filePath)
    return
  } catch {
    // File does not exist; download it
  }

  const shotUrl = `https://api.screenshotone.com/take?access_key=${ACCESS_KEY}&url=${encodeURIComponent(url)}&format=png&download=1`
  const res = await fetch(shotUrl)
  if (!res.ok) {
    throw new Error('Failed to download screenshot')
  }
  const arrayBuffer = await res.arrayBuffer()
  await fs.writeFile(filePath, Buffer.from(arrayBuffer))
}
