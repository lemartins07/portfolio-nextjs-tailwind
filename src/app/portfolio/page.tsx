// import { FaRedo } from 'react-icons/fa'
import { Suspense } from 'react'
import Heading from '../components/Heading'
import PortfolioList from '../components/PortfolioList'
import { PortfolioSkeleton } from '../components/PortfolioSkeleton'

export default async function Page() {
  return (
    <section className="portfolio">
      <Heading textWhite="my" textBlue="portfolio" />

      <Suspense fallback={<PortfolioSkeleton />}>
        <PortfolioList />
      </Suspense>

      {/*
      <a
        href="#"
        className="flex items-center justify-center self-center md:self-start w-max gap-4 mt-4 rounded-full bg-primaryColor p-3 text-gray1 text-3xl pl-8 transition-all hover:gap-8"
      >
        load more
        <i className="flex items-center justify-center h-16 w-16 bg-gray3 rounded-full">
          <FaRedo className="text-primaryColor" size={18} />
        </i>
      </a>
      */}
    </section>
  )
}
