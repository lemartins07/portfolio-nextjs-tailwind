import { zfd } from 'zod-form-data'
import { z } from 'zod'

export const contactFormSchema = zfd.formData({
  name: zfd.text(
    z
      .string()
      .min(2, 'Must be at least 2 characters long.')
      .max(25, 'Must be no more than 25 characters long.'),
  ),
  number: zfd.text(
    z
      .string()
      .regex(/^\+\d{1,3}\d{10,14}$/, 'Must be a valid phone number.')
      .min(11, 'Must be at least 11 characters long.')
      .max(14, 'Must be no more than 14 characters long.'),
  ),
  subject: zfd.text(
    z
      .string()
      .min(2, 'Must be at least 2 characters long.')
      .max(100, 'Must be no more than 100 characters long.')
      .optional(),
  ),
  email: zfd.text(z.string().email({ message: 'Must be a valid email.' })),
  message: zfd.text(
    z
      .string()
      .min(10, 'Must be at least 10 characters long.')
      .max(1000, 'Must be no more than 1000 characters long.'),
  ),
})
