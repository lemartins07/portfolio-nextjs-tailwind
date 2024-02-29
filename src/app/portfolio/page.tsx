import Image from 'next/image'
import Heading from '../ui/Heading'
import { FaRedo } from 'react-icons/fa'

export default function Page() {
  return (
    <section className="portfolio">
      <Heading textBlue="my" textWhite="portfolio" />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(31rem,_1fr))] gap-8 mb-8">
        <div className="group h-[30rem] overflow-hidden relative">
          <Image
            src="/img-1.jpg"
            alt=""
            width={630}
            height={470}
            className="h-full w-full object-cover"
          />
          <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
            <h3 className="text-4xl text-white uppercase">project 01</h3>
            <p className="py-4 px-0 text-2xl leading-8 text-gray5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              incidunt assumenda voluptatem.
            </p>
            <a href="#" className="text-3xl text-primaryColor hover:text-white">
              read more
            </a>
          </div>
        </div>

        <div className="group h-[30rem] overflow-hidden relative">
          <Image
            src="/img-1.jpg"
            alt=""
            width={630}
            height={470}
            className="h-full w-full object-cover"
          />
          <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
            <h3 className="text-4xl text-white uppercase">project 01</h3>
            <p className="py-4 px-0 text-2xl leading-8 text-gray5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              incidunt assumenda voluptatem.
            </p>
            <a href="#" className="text-3xl text-primaryColor hover:text-white">
              read more
            </a>
          </div>
        </div>

        <div className="group h-[30rem] overflow-hidden relative">
          <Image
            src="/img-1.jpg"
            alt=""
            width={630}
            height={470}
            className="h-full w-full object-cover"
          />
          <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
            <h3 className="text-4xl text-white uppercase">project 01</h3>
            <p className="py-4 px-0 text-2xl leading-8 text-gray5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              incidunt assumenda voluptatem.
            </p>
            <a href="#" className="text-3xl text-primaryColor hover:text-white">
              read more
            </a>
          </div>
        </div>

        <div className="group h-[30rem] overflow-hidden relative">
          <Image
            src="/img-1.jpg"
            alt=""
            width={630}
            height={470}
            className="h-full w-full object-cover"
          />
          <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
            <h3 className="text-4xl text-white uppercase">project 01</h3>
            <p className="py-4 px-0 text-2xl leading-8 text-gray5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              incidunt assumenda voluptatem.
            </p>
            <a href="#" className="text-3xl text-primaryColor hover:text-white">
              read more
            </a>
          </div>
        </div>

        <div className="group h-[30rem] overflow-hidden relative">
          <Image
            src="/img-1.jpg"
            alt=""
            width={630}
            height={470}
            className="h-full w-full object-cover"
          />
          <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
            <h3 className="text-4xl text-white uppercase">project 01</h3>
            <p className="py-4 px-0 text-2xl leading-8 text-gray5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              incidunt assumenda voluptatem.
            </p>
            <a href="#" className="text-3xl text-primaryColor hover:text-white">
              read more
            </a>
          </div>
        </div>

        <div className="group h-[30rem] overflow-hidden relative">
          <Image
            src="/img-1.jpg"
            alt=""
            width={630}
            height={470}
            className="h-full w-full object-cover"
          />
          <div className="group-hover:translate-y-[0] absolute top-0 left-0 h-full w-full bg-gray4 flex flex-col items-center justify-center p-8 translate-y-[-100%] transition ease-linear duration-200">
            <h3 className="text-4xl text-white uppercase">project 01</h3>
            <p className="py-4 px-0 text-2xl leading-8 text-gray5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              incidunt assumenda voluptatem.
            </p>
            <a href="#" className="text-3xl text-primaryColor hover:text-white">
              read more
            </a>
          </div>
        </div>
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
