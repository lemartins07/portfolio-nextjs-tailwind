import Image from 'next/image'
import { FaUser } from 'react-icons/fa'

export default function Home() {
  return (
    <section className="flex items-center flex-wrap gap-8 md:gap-16 home-min-height text-center md:text-left">
      <div className="flex justify-center text-center flex-1-1-42">
        <Image
          alt="Leandro Martins"
          src="/leandro_portfolio_.png"
          width={700}
          height={700}
          className="home-img"
        />
      </div>

      <div className="flex flex-col flex-1-1-42">
        <h3 className="text-white text-5xl md:text-6xl pb-2 font-bold">
          hi, i am leandro martins
        </h3>
        <span className="text-5xl text-primaryColor py-2 px-0">
          Full Stack Developer
        </span>
        <p className="text-2xl text-gray5 py-4 px-0 leading-8">
          I Am Just A Web Developer Student Focused On Learn NodeJs, ReactJs And
          React Native.
        </p>
        <a
          href="#"
          className="flex items-center justify-center self-center md:self-start w-max gap-4 mt-4 rounded-full bg-primaryColor p-3 text-gray1 text-3xl pl-8 transition-all hover:gap-8"
        >
          about me
          <i className="flex items-center justify-center h-16 w-16 bg-gray3 rounded-full">
            <FaUser className="text-primaryColor" size={18} />
          </i>
        </a>
      </div>
    </section>
  )
}
