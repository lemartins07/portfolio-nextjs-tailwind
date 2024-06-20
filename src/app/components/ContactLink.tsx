import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

type ContactLinkType = {
  name: string
  link: string
}

export default function ContactLink({ name, link }: ContactLinkType) {
  function iconSelector(name: string) {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub />
      case 'twitter':
        return <FaXTwitter />
      case 'instagram':
        return <FaInstagram />
      case 'linkedin':
        return <FaLinkedin />
    }
  }

  return (
    <a
      href={link}
      className="text-3xl h-[4.5rem] w-[4.5rem] rounded-full text-white bg-gray4 text-center flex items-center justify-center hover:bg-primaryColor"
      target="_blank"
    >
      {iconSelector(name)}
    </a>
  )
}
