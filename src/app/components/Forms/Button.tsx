import { ButtonHTMLAttributes } from 'react'
import { FaUser } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: 'user' | ''
}

export default function Button({
  label,
  icon,
  disabled = false,
  ...props
}: ButtonProps) {
  let selectedIcon

  switch (icon) {
    case 'user':
      selectedIcon = <FaUser className="text-primaryColor" size={18} />
      break
  }
  return (
    <button
      {...props}
      disabled={disabled}
      className={`flex items-center justify-center self-center md:self-start w-max gap-4 mt-4 rounded-full bg-primaryColor p-3 text-gray1 text-3xl pl-8 transition-all hover:gap-8 ${props.className} ${disabled && 'opacity-80 cursor-not-allowed'}`}
    >
      {label}
      {selectedIcon && (
        <i className="flex items-center justify-center h-16 w-16 bg-gray3 rounded-full">
          {selectedIcon}
        </i>
      )}
    </button>
  )
}
