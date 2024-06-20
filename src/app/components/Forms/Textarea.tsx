import { TextareaHTMLAttributes } from 'react'

type TextareaProps = {
  error?: string[] | null
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea({ error, ...props }: TextareaProps) {
  return (
    <>
      <textarea
        cols={30}
        rows={10}
        className="w-full rounded-2xl py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4 resize-none h-[24rem]"
        {...props}
      ></textarea>
      {error &&
        error.map((e: string) => (
          <p className="mt-0 text-red text-xl" key={e}>
            {e}
          </p>
        ))}
    </>
  )
}
