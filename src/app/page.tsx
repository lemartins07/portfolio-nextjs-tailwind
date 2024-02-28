import Image from 'next/image'
import { FaUser } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <div>
        <Image
          alt="Leandro Martins"
          src="/leandro_portfolio_.png"
          width={700}
          height={700}
        />
      </div>

      <div className="">
        <h3>hi, i am leandro martins</h3>
        <span>front-end developer</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro
          facere expedita ab atque a consectetur odit vel soluta itaque.
        </p>
        <a href="#" className="btn">
          about me
          <i>
            <FaUser />
          </i>
        </a>
      </div>
    </main>
  )
}
