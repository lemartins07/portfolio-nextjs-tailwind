'use client'

import Typewriter from 'typewriter-effect'
import Button from './Forms/Button'

type HeroDataProps = {
  name: string | null
  skill: string | null
  bio: string | null
}

export default function HeroData({ name, skill, bio }: HeroDataProps) {
  return (
    <div className="flex flex-col flex-1-1-42">
      <h3 className="text-white text-5xl md:text-6xl pb-2 font-bold">
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
              .start()
              .stop()
          }}
        />
      </h3>
      <span className="text-5xl text-primaryColor py-2 px-0">{skill}</span>
      <p className="text-2xl text-gray5 py-4 px-0 leading-8">{bio}</p>

      <Button label="About Me" icon="user" />
    </div>
  )
}
