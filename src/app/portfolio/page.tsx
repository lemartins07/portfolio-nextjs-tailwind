import Image from 'next/image'
import Heading from '../ui/Heading'
import { FaRedo } from 'react-icons/fa'
import { fetchPortfoliosData } from '../lib/data'
import { Suspense } from 'react'

interface Portfolio {
  id: number
  name: string
  html_url: string
  description: string
  homepage: string
}

export default async function Page() {
  const portfolios: Portfolio[] = await fetchPortfoliosData()

  function formartUrl(url: string) {
    const formattedUrl = url.includes('https://') ? url : 'https://' + url

    return formattedUrl
  }
  return (
    <section className="portfolio">
      <Heading textWhite="my" textBlue="portfolio" />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(31rem,_1fr))] gap-8 mb-8">
        <Suspense fallback={<p>Carregando...</p>}>
          {portfolios &&
            portfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className="group h-[30rem] overflow-hidden relative"
              >
                <Image
                  src={`/${portfolio.name.toLowerCase()}.png`}
                  alt=""
                  width={630}
                  height={470}
                  className="h-full w-full object-cover"
                />
                <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col gap-8 items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
                  <h3 className="text-4xl text-white uppercase">
                    {portfolio.name}
                  </h3>
                  <p className="py-4 px-0 text-2xl leading-8 text-gray5">
                    {portfolio.description}
                  </p>
                  <div className="flex items-center justify-evenly w-full">
                    <a
                      href={formartUrl(portfolio.html_url)}
                      className="text-3xl text-primaryColor hover:text-white"
                      target="_blank"
                    >
                      repository
                    </a>
                    <a
                      href={formartUrl(portfolio.homepage)}
                      className="text-3xl text-primaryColor hover:text-white"
                      target="_blank"
                    >
                      live demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </Suspense>
      </div>

      <a
        href="#"
        className="flex items-center justify-center self-center md:self-start w-max gap-4 mt-4 rounded-full bg-primaryColor p-3 text-gray1 text-3xl pl-8 transition-all hover:gap-8"
      >
        load more
        <i className="flex items-center justify-center h-16 w-16 bg-gray3 rounded-full">
          <FaRedo className="text-primaryColor" size={18} />
        </i>
      </a>
    </section>
  )
}
