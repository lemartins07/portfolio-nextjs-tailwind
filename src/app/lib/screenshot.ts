import fs from 'fs/promises'
import path from 'path'

const ACCESS_KEY = process.env.SCREENSHOTONE_KEY ?? '3eEMm5mnfH7zJA'
const API_URL = 'https://api.screenshotone.com/take'

export async function ensureScreenshot(url: string, fileName: string) {
  const filePath = path.join(process.cwd(), 'public', `${fileName}.jpg`)
  try {
    await fs.access(filePath)
    return
  } catch {
    // File does not exist; download it
  }

  const params = new URLSearchParams({
    access_key: ACCESS_KEY,
    url,
    format: 'jpg',
    block_cookie_banners: 'true',
    block_trackers: 'true',
    timeout: '60',
    image_quality: '80',
    download: 'true',
  })

  const res = await fetch(`${API_URL}?${params}`)
  if (!res.ok) {
    throw new Error(
      `Failed to download screenshot: ${res.status} ${res.statusText}`,
    )
  }
  const arrayBuffer = await res.arrayBuffer()
  await fs.writeFile(filePath, Buffer.from(arrayBuffer))
}
