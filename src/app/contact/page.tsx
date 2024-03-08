import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa'
import Heading from '../ui/Heading'
import { Button } from '../ui/Button'

export default function Page() {
  return (
    <section>
      <Heading textWhite="contact" textBlue="me" />

      <div className="flex items-center flex-wrap gap-8">
        <div className="w-[40rem]">
          <h1 className="text-5xl uppercase text-white pb-4">get in touch</h1>

          <p className="text-2xl text-gray5 py-4 px-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            excepturi saepe eaque ducimus. Ab, at amet similique natus corporis
            et!
          </p>

          <div className="py-8 px-0">
            <div className="flex gap-8 py-4 px-0">
              <i className="text-5xl text-primaryColor">
                <FaMap />
              </i>
              <div className="info">
                <h3 className="text-4xl text-white">address:</h3>
                <p className="text-2xl text-gray5 py-4 px-0">
                  porto alegre, brazil
                </p>
              </div>
            </div>

            <div className="flex gap-8 py-4 px-0">
              <i className="text-5xl text-primaryColor">
                <FaEnvelope />
              </i>
              <div className="info">
                <h3 className="text-4xl text-white">email:</h3>
                <p className="text-2xl text-gray5 py-4 px-0">
                  email@example.com
                </p>
              </div>
            </div>

            <div className="flex gap-8 py-4 px-0">
              <i className="text-5xl text-primaryColor">
                <FaPhone />
              </i>
              <div className="info">
                <h3 className="text-4xl text-white">number:</h3>
                <p className="text-2xl text-gray5 py-4 px-0">
                  +55-51-9988-77556
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href=""
              className="text-3xl h-[4.5rem] w-[4.5rem] rounded-full text-white bg-gray4 text-center flex items-center justify-center hover:bg-primaryColor"
            >
              <FaGithub />
            </a>
            <a
              href=""
              className="text-3xl h-[4.5rem] w-[4.5rem] rounded-full text-white bg-gray4 text-center flex items-center justify-center hover:bg-primaryColor"
            >
              <FaTwitter />
            </a>
            <a
              href=""
              className="text-3xl h-[4.5rem] w-[4.5rem] rounded-full text-white bg-gray4 text-center flex items-center justify-center hover:bg-primaryColor"
            >
              <FaInstagram />
            </a>
            <a
              href=""
              className="text-3xl h-[4.5rem] w-[4.5rem] rounded-full text-white bg-gray4 text-center flex items-center justify-center hover:bg-primaryColor"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="flex-[1_1_42rem]">
          <div className="flex flex-wrap justify-between">
            <input
              className="w-[49%] rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
              type="text"
              placeholder="your name"
            />
            <input
              className="w-[49%] rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
              type="number"
              placeholder="your number"
            />
          </div>

          <div className="flex flex-wrap justify-between">
            <input
              className="w-[49%] rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
              type="email"
              placeholder="your email"
            />
            <input
              className="w-[49%] rounded-[5rem] py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4"
              type="text"
              placeholder="your subject"
            />
          </div>

          <textarea
            name=""
            placeholder="your message"
            id=""
            cols={30}
            rows={10}
            className="w-full rounded-2xl py-5 px-7 text-2xl text-white normal-case my-3 mx-0 bg-gray4 resize-none h-[24rem]"
          ></textarea>
          <Button
            type="button"
            label="send message"
            className="py-4 px-12 cursor-pointer hover:bg-white text-gray3"
          />
        </form>
      </div>
    </section>
  )
}
