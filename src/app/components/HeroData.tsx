'use client'

import Typewriter from 'typewriter-effect'
import Button from './Forms/Button'
import { useRouter } from 'next/navigation'

type HeroDataProps = {
  name: string | null
  skill: string | null
  bio: string | null
  handleTypewriterEnd: () => void
  showAll: boolean
}

export default function HeroData({
  name,
  skill,
  bio,
  handleTypewriterEnd,
  showAll,
}: HeroDataProps) {
  const router = useRouter()

  return (
    <div className="flex flex-col flex-1-1-42 items-center">
      <h3 className="text-white text-6xl md:text-7xl lg:text-8xl pb-2 font-bold">
        <Typewriter
          options={{
            strings: [],
            autoStart: true,
            loop: false,
            delay: 'natural',
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(`hi, i'm ${name || ''}`)
              .pauseFor(500)
              .callFunction(handleTypewriterEnd)
              .start()
          }}
        />
      </h3>
      <span
        className={`text-5xl text-primaryColor py-2 px-0 inline-block delay-0 ${showAll ? 'translate-x-0 opacity-100 transition-all duration-700 transform' : 'translate-x-32 opacity-0'}`}
      >
        {skill}
      </span>
      <p
        className={`text-2xl text-gray5 py-4 px-0 leading-8 transition-all duration-700 transform delay-300 ${showAll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {bio}
      </p>

      <div
        className={`transition-all duration-700 transform delay-500 ${showAll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <Button
          label="About Me"
          icon="user"
          onClick={() => router.push('/about')}
        />
      </div>
    </div>
  )
}
