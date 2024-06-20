import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'

type ContactInfoType = {
  icon: 'map' | 'envelope' | 'phone'
  title: string
  description: string | null | undefined
}

export default function ContactInfo({
  icon,
  title,
  description,
}: ContactInfoType) {
  function iconSelctor(icon: string) {
    switch (icon) {
      case 'map':
        return <FaMap />
      case 'envelope':
        return <FaEnvelope />
      case 'phone':
        return <FaPhone />
    }
  }
  return (
    <div className="flex gap-8 py-4 px-0">
      <i className="text-5xl text-primaryColor">{iconSelctor(icon)}</i>
      <div className="info">
        <h3 className="text-4xl text-white">{title}</h3>
        <p className="text-2xl text-gray5 py-4 px-0">{description}</p>
      </div>
    </div>
  )
}
