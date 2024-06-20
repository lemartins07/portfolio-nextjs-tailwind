import Heading from '@/app/components/Heading'
import ContactInfo from '../components/ContactInfo'
import ContactLink from '../components/ContactLink'
import ContactForm from '../components/Forms/ContactForm'

import { fecthContactLinks, fetchUserData } from '@/app/lib/data'

export default async function Page() {
  const contactLinks = await fecthContactLinks()
  const userData = await fetchUserData()
  return (
    <section>
      <Heading textWhite="contact" textBlue="me" />

      <div className="flex items-center flex-wrap gap-8">
        <div className="w-[40rem]">
          <h1 className="text-5xl uppercase text-white pb-4">get in touch</h1>

          <p className="text-2xl text-gray5 py-4 px-0">
            Got an idea you want to bring to life? Whether you need a skilled
            programmer to turn your vision into reality or have any questions,
            feel free to reach out through the form below. Let&apos;s make
            something amazing together
          </p>

          <div className="py-8 px-0">
            <ContactInfo
              title="address:"
              description={userData?.address}
              icon="map"
            />
            <ContactInfo
              title="email:"
              description={userData?.email}
              icon="envelope"
            />
          </div>

          <div className="flex gap-4">
            {contactLinks &&
              contactLinks.map((contact) => (
                <ContactLink
                  key={contact.id}
                  name={contact.name || ''}
                  link={contact.link}
                />
              ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
