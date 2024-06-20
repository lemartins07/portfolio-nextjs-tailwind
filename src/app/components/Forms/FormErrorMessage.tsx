import React from 'react'

type ErrorMessageProps = {
  children: React.ReactNode
}

export function FormErrorMessage({ children }: ErrorMessageProps) {
  return <p className="mt-0 px-7 text-red-600 text-xl">{children}</p>
}
