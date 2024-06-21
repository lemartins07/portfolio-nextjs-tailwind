import PortfolioItem from '../components/PortfolioItem'
import { fectchPortfolio } from '../lib/data'

export default async function PortfolioList() {
  const { data: portfolios } = await fectchPortfolio()
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(31rem,_1fr))] gap-8 mb-8">
      {portfolios &&
        portfolios.map((portfolio) => (
          <PortfolioItem key={portfolio.id} portfolio={portfolio} />
        ))}
    </div>
  )
}
