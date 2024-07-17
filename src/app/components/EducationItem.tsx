import { FaGraduationCap } from 'react-icons/fa'

type EducationItemProps = {
  stardYear: string
  endYear?: string | null | undefined
  title: string
  description: string
}

export function EducationItem({
  description,
  endYear,
  stardYear,
  title,
}: EducationItemProps) {
  return (
    <div className="flex-[1_1_40rem] ml-8 pt-0 pl-14 pb-12 relative border-l-[0.1rem] border-gray5 border-solid border-t-0 border-r-0 border-b-0">
      <i className="h-[4.5rem] w-[4.5rem] rounded-full bg-primaryColor text-white flex justify-center items-center text-3xl absolute top-[-1rem] left-[-2.5rem]">
        <FaGraduationCap />
      </i>
      <span className="text-[1.7rem] text-white rounded-full py-2 px-6 bg-gray4">
        {stardYear} {endYear && `- ${endYear}`}
      </span>
      <h3 className="text-5xl py-4 px-0 text-white pt-12 font-normal">
        {title}
      </h3>
      <p className="text-2xl text-gray5">{description}</p>
    </div>
  )
}
