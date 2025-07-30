'use client'

import Typewriter from 'typewriter-effect'
import Button from './Forms/Button'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type HeroDataProps = {
  name: string | null
  skill: string | null
  bio: string | null
}

export default function HeroData({ name, skill, bio }: HeroDataProps) {
  const router = useRouter()
  const [showAll, setShowAll] = useState(false)
  const [skipAnimation, setSkipAnimation] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('heroAnimationShown')) {
      setShowAll(true)
      setSkipAnimation(true)
    }
  }, [])

  const handleTypewriterEnd = () => {
    setShowAll(true)
    sessionStorage.setItem('heroAnimationShown', 'true')
    console.log(sessionStorage.getItem('heroAnimationShown'))
  }

  return (
    <div className="flex flex-col flex-1-1-42">
      <h3 className="text-white text-5xl md:text-6xl pb-2 font-bold">
        {!skipAnimation ? (
          <Typewriter
            options={{
              strings: [],
              autoStart: true,
              loop: false,
              delay: 'natural',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`hi, i'am ${name || ''}`)
                .pauseFor(500)
                .callFunction(handleTypewriterEnd)
                .start()
            }}
          />
        ) : (
          <>{name}</>
        )}
      </h3>
      <span
        className={`text-5xl text-primaryColor py-2 px-0 inline-block transition-all duration-700 transform delay-0 ${showAll ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'} ${skipAnimation ? '' : 'delay-0'}`}
      >
        {skill}
      </span>
      <p
        className={`text-2xl text-gray5 py-4 px-0 leading-8 transition-all duration-700 transform delay-300 ${showAll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${skipAnimation ? '' : 'delay-300'}`}
      >
        {bio}
      </p>

      <div
        className={`transition-all duration-700 transform delay-500 ${showAll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${skipAnimation ? '' : 'delay-500'}`}
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
