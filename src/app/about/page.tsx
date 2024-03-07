import Image from 'next/image'
import Heading from '../ui/Heading'
import { FaGraduationCap } from 'react-icons/fa'

export default function Page() {
  return (
    <>
      <section>
        <Heading textWhite="About" textBlue="me" />

        <div className="flex items-center flex-wrap gap-8">
          <div className="flex-[1_1_42rem]">
            <h1 className="text-[4rem] text-white uppercase pb-4 font-bold">
              personal info
            </h1>

            <div className="py-4 px-0 flex flex-wrap gap-8">
              <div className="flex-[1_1_20rem]">
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">name:</span> leandro
                  martins
                </h3>
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">age:</span> 37
                </h3>
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">email:</span>{' '}
                  leandro.martins.85@gmail.com
                </h3>
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">address:</span> porto
                  alegre, brazil{' '}
                </h3>
              </div>

              <div className="box">
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">freelance:</span>{' '}
                  available
                </h3>
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">skill:</span>{' '}
                  front-end developer
                </h3>
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">experience:</span> 2
                  years
                </h3>
                <h3 className="text-2xl text-white py-4 px-0 font-normal">
                  <span className="text-gray5 font-light">language:</span>{' '}
                  portuguese, english{' '}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex-[1_1_42rem] flex flex-wrap gap-8">
            <div className="flex-[1_1_20rem] py-12 px-16 rounded-lg bg-gray4 shadow-3xl">
              <h3 className="text-[5rem] text-primaryColor">2+</h3>
              <p className="text-[2rem] text-gray5">years of experience</p>
            </div>

            <div className="flex-[1_1_20rem] py-12 px-16 rounded-lg bg-gray4 shadow-3xl  ">
              <h3 className="text-[5rem] text-primaryColor">450+</h3>
              <p className="text-[2rem] text-gray5">happy clients</p>
            </div>

            <div className="flex-[1_1_20rem] py-12 px-16 rounded-lg bg-gray4 shadow-3xl  ">
              <h3 className="text-[5rem] text-primaryColor">390+</h3>
              <p className="text-[2rem] text-gray5">project completed</p>
            </div>

            <div className="flex-[1_1_20rem] py-12 px-16 rounded-lg bg-gray4 shadow-3xl  ">
              <h3 className="text-[5rem] text-primaryColor">10+</h3>
              <p className="text-[2rem] text-gray5">awards won</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <Heading textWhite="my" textBlue="skills" />

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-6">
          <div className="p-8 flex flex-col justify-center items-center gap-4 rounded-lg bg-gray4 shadow-3xl">
            <Image
              src="/icon-html.png"
              alt="HTML"
              width={264 / 4}
              height={300 / 4}
            />
            <h3 className="text-white text-[1.7rem] uppercase font-normal">
              html
            </h3>
          </div>
          <div className="p-8 flex flex-col justify-center items-center gap-4 rounded-lg bg-gray4 shadow-3xl">
            <Image src="/icon-css.png" alt="CSS" width={264 / 4} height={300} />
            <h3 className="text-white text-[1.7rem] uppercase font-normal">
              css
            </h3>
          </div>
          <div className="p-8 flex flex-col justify-center items-center gap-4 rounded-lg bg-gray4 shadow-3xl">
            <Image
              src="/icon-js.png"
              alt="javascript"
              width={264 / 4}
              height={300 / 4}
            />
            <h3 className="text-white text-[1.7rem] uppercase font-normal">
              javascript
            </h3>
          </div>
          <div className="p-8 flex flex-col justify-center items-center gap-4 rounded-lg bg-gray4 shadow-3xl">
            <Image
              src="/icon-sass.png"
              alt="sass"
              width={264 / 4}
              height={300 / 4}
            />
            <h3 className="text-white text-[1.7rem] uppercase font-normal">
              sass
            </h3>
          </div>
          <div className="p-8 flex flex-col justify-center items-center gap-4 rounded-lg bg-gray4 shadow-3xl">
            <Image
              src="/icon-jquery.png"
              alt="jquery"
              width={264 / 4}
              height={300 / 4}
            />
            <h3 className="text-white text-[1.7rem] uppercase font-normal">
              jquery
            </h3>
          </div>
          <div className="p-8 flex flex-col justify-center items-center gap-4 rounded-lg bg-gray4 shadow-3xl">
            <Image
              src="/icon-react.png"
              alt="react.js"
              width={264 / 4}
              height={300 / 4}
            />
            <h3 className="text-white text-[1.7rem] uppercase font-normal">
              react.js
            </h3>
          </div>
        </div>
      </section>

      <section>
        <Heading textWhite="my" textBlue="education" />

        <div className="flex flex-wrap">
          <div className="flex-[1_1_40rem] ml-8 pt-0 pl-14 pb-12 relative border-l-[0.1rem] border-gray5 border-solid border-t-0 border-r-0 border-b-0">
            <i className="h-[4.5rem] w-[4.5rem] rounded-full bg-primaryColor text-white flex justify-center items-center text-3xl absolute top-[-1rem] left-[-2.5rem]">
              <FaGraduationCap />
            </i>
            <span className="text-[1.7rem] text-white rounded-full py-2 px-6 bg-gray4">
              2015 - 2016
            </span>
            <h3 className="text-5xl py-4 px-0 text-white pt-12 font-normal">
              front-end development
            </h3>
            <p className="text-2xl text-gray5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam accusamus ducimus, itaque sequi natus vero accusantium
              dolorum, magni possimus perferendis incidunt veniam alias, amet
              eum fugit rem ipsam quod repellat!
            </p>
          </div>

          <div className="flex-[1_1_40rem] ml-8 pt-0 pl-14 pb-12 relative border-l-[0.1rem] border-gray5 border-solid border-t-0 border-r-0 border-b-0">
            <i className="h-[4.5rem] w-[4.5rem] rounded-full bg-primaryColor text-white flex justify-center items-center text-3xl absolute top-[-1rem] left-[-2.5rem]">
              <FaGraduationCap size={18} />
            </i>
            <span className="text-[1.7rem] text-white rounded-full py-2 px-6 bg-gray4">
              2016 - 2017
            </span>
            <h3 className="text-5xl py-4 px-0 text-white pt-12 font-normal">
              front-end development
            </h3>
            <p className="text-2xl text-gray5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam accusamus ducimus, itaque sequi natus vero accusantium
              dolorum, magni possimus perferendis incidunt veniam alias, amet
              eum fugit rem ipsam quod repellat!
            </p>
          </div>
          <div className="flex-[1_1_40rem] ml-8 pt-0 pl-14 pb-12 relative border-l-[0.1rem] border-gray5 border-solid border-t-0 border-r-0 border-b-0">
            <i className="h-[4.5rem] w-[4.5rem] rounded-full bg-primaryColor text-white flex justify-center items-center text-3xl absolute top-[-1rem] left-[-2.5rem]">
              <FaGraduationCap size={18} />
            </i>
            <span className="text-[1.7rem] text-white rounded-full py-2 px-6 bg-gray4">
              2017 - 2018
            </span>
            <h3 className="text-5xl py-4 px-0 text-white pt-12 font-normal">
              front-end development
            </h3>
            <p className="text-2xl text-gray5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam accusamus ducimus, itaque sequi natus vero accusantium
              dolorum, magni possimus perferendis incidunt veniam alias, amet
              eum fugit rem ipsam quod repellat!
            </p>
          </div>
          <div className="flex-[1_1_40rem] ml-8 pt-0 pl-14 pb-12 relative border-l-[0.1rem] border-gray5 border-solid border-t-0 border-r-0 border-b-0">
            <i className="h-[4.5rem] w-[4.5rem] rounded-full bg-primaryColor text-white flex justify-center items-center text-3xl absolute top-[-1rem] left-[-2.5rem]">
              <FaGraduationCap size={18} />
            </i>
            <span className="text-[1.7rem] text-white rounded-full py-2 px-6 bg-gray4">
              2018 - 2019
            </span>
            <h3 className="text-5xl py-4 px-0 text-white pt-12 font-normal">
              front-end development
            </h3>
            <p className="text-2xl text-gray5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam accusamus ducimus, itaque sequi natus vero accusantium
              dolorum, magni possimus perferendis incidunt veniam alias, amet
              eum fugit rem ipsam quod repellat!
            </p>
          </div>
          <div className="flex-[1_1_40rem] ml-8 pt-0 pl-14 pb-12 relative border-l-[0.1rem] border-gray5 border-solid border-t-0 border-r-0 border-b-0">
            <i className="h-[4.5rem] w-[4.5rem] rounded-full bg-primaryColor text-white flex justify-center items-center text-3xl absolute top-[-1rem] left-[-2.5rem]">
              <FaGraduationCap size={18} />
            </i>
            <span className="text-[1.7rem] text-white rounded-full py-2 px-6 bg-gray4">
              2019 - 2020
            </span>
            <h3 className="text-5xl py-4 px-0 text-white pt-12 font-normal">
              front-end development
            </h3>
            <p className="text-2xl text-gray5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam accusamus ducimus, itaque sequi natus vero accusantium
              dolorum, magni possimus perferendis incidunt veniam alias, amet
              eum fugit rem ipsam quod repellat!
            </p>
          </div>
          <div className="flex-[1_1_40rem] ml-8 pt-0 pl-14 pb-12 relative border-l-[0.1rem] border-gray5 border-solid border-t-0 border-r-0 border-b-0">
            <i className="h-[4.5rem] w-[4.5rem] rounded-full bg-primaryColor text-white flex justify-center items-center text-3xl absolute top-[-1rem] left-[-2.5rem]">
              <FaGraduationCap size={18} />
            </i>
            <span className="text-[1.7rem] text-white rounded-full py-2 px-6 bg-gray4">
              2020 - 2021
            </span>
            <h3 className="text-5xl py-4 px-0 text-white pt-12 font-normal">
              front-end development
            </h3>
            <p className="text-2xl text-gray5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam accusamus ducimus, itaque sequi natus vero accusantium
              dolorum, magni possimus perferendis incidunt veniam alias, amet
              eum fugit rem ipsam quod repellat!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
