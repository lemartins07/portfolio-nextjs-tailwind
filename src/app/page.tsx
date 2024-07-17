import Image from 'next/image'
import { fetchUserData } from './lib/data'
import HeroData from './components/HeroData'

export default async function Home() {
  const data = await fetchUserData()

  return (
    <section className="flex items-center flex-wrap gap-8 md:gap-16 home-min-height text-center md:text-left">
      {data && (
        <>
          <div className="flex justify-center text-center flex-1-1-42">
            <Image
              alt={data.name || ''}
              src="/17189429960332.jpg"
              width={1024}
              height={1024}
              className="home-img"
              priority
            />
          </div>

          <HeroData name={data.name} bio={data.bio} skill={data.skill} />
        </>
      )}
    </section>
  )
}
