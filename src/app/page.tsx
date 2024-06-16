import Image from 'next/image'
import { getHomeData } from './lib/data'
import { Button } from './components/Forms/Button'

export default async function Home() {
  const data = await getHomeData()
  return (
    <section className="flex items-center flex-wrap gap-8 md:gap-16 home-min-height text-center md:text-left">
      {data && (
        <>
          <div className="flex justify-center text-center flex-1-1-42">
            <Image
              alt={data.name || ''}
              src="/leandro_portfolio_.png"
              width={700}
              height={700}
              className="home-img"
            />
          </div>

          <div className="flex flex-col flex-1-1-42">
            <h3 className="text-white text-5xl md:text-6xl pb-2 font-bold">
              hi, i am {data.name}
            </h3>
            <span className="text-5xl text-primaryColor py-2 px-0">
              {data.skill}
            </span>
            <p className="text-2xl text-gray5 py-4 px-0 leading-8">
              {data.bio}
            </p>

            <Button label="About Me" icon="user" />
          </div>
        </>
      )}
    </section>
  )
}
