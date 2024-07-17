type InfoTitleProps = {
  title: string
  description: string | null | undefined
}

export function InfoTitle({ title, description }: InfoTitleProps) {
  return (
    <h3 className="text-3xl text-white py-4 px-0 font-normal">
      <span className="text-gray5 font-light">{title}:</span> {description}
    </h3>
  )
}
