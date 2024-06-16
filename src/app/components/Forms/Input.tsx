import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function Input(props: InputProps) {
  return (
    <input
      className="w-[49%] rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
      type="text"
      {...props}
    />
  )
}
