type ApiError = {
  data: null
  ok: boolean
  error: string
}

export default function apiError(error: unknown): ApiError {
  if (error instanceof Error) {
    return {
      data: null,
      ok: false,
      error: error.message,
    }
  } else {
    return {
      data: null,
      ok: false,
      error: 'Erro genérico',
    }
  }
}

export function formartUrl(url: string) {
  const formattedUrl = url.includes('https://') ? url : 'https://' + url

  return formattedUrl
}
