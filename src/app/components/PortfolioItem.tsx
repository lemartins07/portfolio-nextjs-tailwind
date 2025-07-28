import { Portfolio } from '../lib/definitions'
import { formartUrl } from '../lib/utils'
import ImageSuspense from './ImageSuspense'

type PortfolioItemType = {
  portfolio: Portfolio
}

export default function PortfolioItem({ portfolio }: PortfolioItemType) {
  return (
    <div
      key={portfolio.id}
      className="group h-[30rem] overflow-hidden relative rounded-lg shadow-3xl"
    >
      <ImageSuspense
        alt={portfolio.name}
        src={`/${portfolio.name.toLowerCase()}.jpg`}
        width={630}
        height={470}
      />
      <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col gap-8 items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
        <h3 className="text-4xl text-white uppercase">{portfolio.name}</h3>
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
  )
}
