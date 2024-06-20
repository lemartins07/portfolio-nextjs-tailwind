'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { State, submitContactMessage } from '@/app/lib/actions'
import { ButtonHTMLAttributes, useEffect } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { FieldPath, useForm } from 'react-hook-form'
import { FormValues } from '@/app/lib/definitions'
import { contactFormSchema } from '@/app/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormErrorMessage } from './FormErrorMessage'

type SumbmitButtonProps = {
  label: string
  isValid: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

function SumbmitButton({ label, isValid, ...props }: SumbmitButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending || !isValid}
      {...props}
      className={`w-max rounded-full bg-primaryColor p-3 text-gray1 text-3xl px-8 ${pending || !isValid ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {label}
    </button>
  )
}

export default function ContactForm() {
  const {
    register,
    formState: { isValid, errors },
    setError,
    reset,
  } = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(contactFormSchema),
  })

  const [state, formAction] = useFormState<State, FormData>(
    submitContactMessage,
    null,
  )

  useEffect(() => {
    if (!state) {
      return
    }

    if (state.status === 'error') {
      state.errors?.forEach((error) => {
        setError(error.path as FieldPath<FormValues>, {
          message: error.message,
        })
      })
    }

    if (state.status === 'success') {
      reset()
    }
  }, [state, setError, reset])

  return (
    <form action={formAction} className="flex-[1_1_42rem]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        <div className="w-full">
          <input
            placeholder="your name"
            className="w-full rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
            {...register('name')}
          />
          <FormErrorMessage>
            <ErrorMessage name="name" errors={errors} />
          </FormErrorMessage>
        </div>

        <div className="w-full">
          <input
            placeholder="you phone number"
            className="w-full rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
            {...register('number')}
          />
          <FormErrorMessage>
            <ErrorMessage name="number" errors={errors} />
          </FormErrorMessage>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
        <div className="w-full">
          <input
            placeholder="your email"
            className="w-full rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
            {...register('email')}
          />
          <FormErrorMessage>
            <ErrorMessage name="email" errors={errors} />
          </FormErrorMessage>
        </div>

        <div className="w-full">
          <input
            placeholder="your subject"
            className="w-full rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
            {...register('subject')}
          />
          <FormErrorMessage>
            <ErrorMessage name="subject" errors={errors} />
          </FormErrorMessage>
        </div>
      </div>

      <div className="mb-4">
        <textarea
          cols={30}
          rows={10}
          placeholder="your message"
          className="w-full rounded-2xl py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4 resize-none h-[24rem]"
          {...register('message')}
        ></textarea>
        <FormErrorMessage>
          <ErrorMessage name="message" errors={errors} />
        </FormErrorMessage>
      </div>
      <div className="grid grid-cols-1 gap-4 items-center sm:grid-cols-2 ">
        <SumbmitButton isValid={isValid} label="send message" />
        <p className="text-3xl text-green-700" id="success-message">
          {state && state.status === 'success' && state.message}
        </p>
        <p className="text-3xl text-red-600" id="success-message">
          {state && state.status === 'error' && state.message}
        </p>
      </div>
    </form>
  )
}
