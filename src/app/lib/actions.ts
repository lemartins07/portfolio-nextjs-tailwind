'use server'

import { ZodError } from 'zod'
import { contactFormSchema } from './validation'
import { env } from 'process'
import nodemailer from 'nodemailer'

export type State =
  | {
      status: 'success'
      message: string
    }
  | {
      status: 'error'
      message: string
      errors?: Array<{
        path: string
        message: string
      }>
    }
  | null

export async function submitContactMessage(
  prevState: State | null,
  data: FormData,
): Promise<State> {
  try {
    // Validate our data
    const { name, number, subject, email, message } =
      contactFormSchema.parse(data)
    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'lemartins07dev@gmail.com; leandromartins85@gmail.com',
      subject,
      text: message + ' ' + number,
    }

    const transporter = createTransporter()

    const result = await transporter.sendMail(mailOptions)

    console.log(result)

    return {
      status: 'success',
      message: 'Email sent successfully.',
    }
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: 'error',
        message: 'Invalid form data',
        errors: e.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: `Server validation: ${issue.message}`,
        })),
      }
    }
    return {
      status: 'error',
      message: 'Something went wrong. Please try again.',
    }
  }
}

function createTransporter() {
  const transporterOptions = {
    service: 'gmail',
    host: env.GMAIL_HOST,
    port: 587,
    secure: true,
    auth: {
      user: env.GMAIL_USER,
      pass: env.GMAIL_APP_KEY,
    },
  }
  const transporter = nodemailer.createTransport(transporterOptions)

  return transporter
}
