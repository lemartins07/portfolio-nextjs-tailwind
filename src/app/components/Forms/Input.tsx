import React, { InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type InputProps = {
  error?: string[] | null
  registerName?: string
  register?: UseFormRegister<FieldValues>
} & InputHTMLAttributes<HTMLInputElement>

export default function Input({
  error,
  registerName,
  register,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      <input
        className="w-full rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
        type="text"
        {...(register && registerName && { ...register(registerName) })}
        {...(React.isValidElement(props) && [props])}
      />

      {error &&
        error.map((e: string) => (
          <p className="mt-0 text-red text-xl" key={e}>
            {e}
          </p>
        ))}
    </div>
  )
}
