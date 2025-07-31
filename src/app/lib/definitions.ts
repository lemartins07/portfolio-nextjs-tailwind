export type Portfolio = {
  id: number
  name: string
  html_url: string
  description: string
  homepage: string
}

export type FormValues = {
  name: string
  number: string
  subject: string
  email: string
  message: string
}

export type MailOptions = {
  from: string
  to: string
  subject: string
  text: string
  html?: string
}

export type GithubRepo = {
  id: number
  name: string
  homepage: string | null
  description: string | null
  language: string | null
  html_url: string | null
}
