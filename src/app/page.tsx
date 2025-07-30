'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchUserData } from './lib/data'
import HeroData from './components/HeroData'

interface UserData {
  name: string
  bio: string
  skill: string
}

export default function Home() {
  const [data, setData] = useState<UserData | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchUserData().then((result) => {
      if (result && result.name && result.bio && result.skill) {
        setData({
          name: result.name ?? '',
          bio: result.bio ?? '',
          skill: result.skill ?? '',
        })
      } else {
        setData(null)
      }
    })
  }, [])

  return (
    <section className="flex items-center flex-wrap gap-8 md:gap-16 home-min-height text-center md:text-left">
      {data && (
        <>
          <div className="flex justify-center text-center flex-1-1-42">
            <Image
              src="/17189429960332.jpg"
              alt="Foto de perfil"
              width={1024}
              height={1024}
              priority
              loading="eager"
              onLoadingComplete={() => setLoaded(true)}
              className={`home-img transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          <HeroData name={data.name} bio={data.bio} skill={data.skill} />
        </>
      )}
    </section>
  )
}
