type InfoCardProps = {
  title: string
  description: string
}

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="flex-[1_1_20rem] py-12 px-16 rounded-lg bg-gray4 shadow-3xl">
      <h3 className="text-[5rem] text-primaryColor">{title}</h3>
      <p className="text-[2rem] text-gray5">{description}</p>
    </div>
  )
}
