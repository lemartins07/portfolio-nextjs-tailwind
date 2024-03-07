interface HeadingProps {
  textBlue: string
  textWhite: string
}

export default function Heading({ textBlue, textWhite }: HeadingProps) {
  return (
    <h1
      className="text-center uppercase text-white mb-12 font-bold"
      style={{ fontSize: '6vw' }}
    >
      {textWhite}{' '}
      <span className="uppercase text-primaryColor">{textBlue}</span>
    </h1>
  )
}
