import Image from 'next/image'

type SkillImageBoxProps = {
  imagem: string
  name: string
}

export function SkillImageBox({ name, imagem }: SkillImageBoxProps) {
  return (
    <div className="p-8 flex flex-col justify-center items-center gap-4 rounded-lg bg-gray4 shadow-3xl">
      <Image src={imagem} alt="HTML" width={264 / 4} height={300 / 2} />
      <h3 className="text-white text-[1.7rem] uppercase font-normal">{name}</h3>
    </div>
  )
}
