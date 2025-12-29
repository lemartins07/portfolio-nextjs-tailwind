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
  const [data, setData] = useState<UserData>({
    name: '',
    bio: '',
    skill: '',
  })
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleTypewriterEnd = () => {
    setShowAll(true)
  }

  useEffect(() => {
    fetchUserData().then((result) => {
      setData({
        name: result?.name ?? '',
        bio: result?.bio ?? '',
        skill: result?.skill ?? '',
      })
      setIsDataLoaded(true)
    })
  }, [])

  return (
    <section className="flex items-center flex-wrap gap-8 md:gap-16 home-min-height text-center md:text-left">
      <div className="flex justify-center text-center flex-1-1-42">
        <div className="relative flex items-center justify-center w-full">
          {!imageLoaded && (
            <div
              className="home-img-skeleton skeleton absolute"
              aria-hidden="true"
            />
          )}
          <Image
            src="/17189429960332.jpg"
            alt="Foto de perfil"
            width={1024}
            height={1024}
            priority
            loading="eager"
            sizes="(min-width: 768px) 42vw, 70vw"
            onLoad={() => setImageLoaded(true)}
            className={`home-img motion-preset-expand transition-opacity duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
      <HeroData
        name={data.name}
        bio={data.bio}
        skill={data.skill}
        handleTypewriterEnd={handleTypewriterEnd}
        showAll={showAll}
        isLoading={!isDataLoaded}
      />
    </section>
  )
}
