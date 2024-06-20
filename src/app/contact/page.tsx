import Heading from '@/app/components/Heading'
import ContactInfo from '../components/ContactInfo'
import ContactLink from '../components/ContactLink'
import ContactForm from '../components/Forms/ContactForm'

import { fecthContactLinks } from '@/app/lib/data'

export default async function Page() {
  const contactLinks = await fecthContactLinks()
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
            <ContactInfo
              title="address:"
              description="porto alegre, brazil"
              icon="map"
            />
            <ContactInfo
              title="email:"
              description="email@example.com"
              icon="envelope"
            />
            <ContactInfo
              title="number:"
              description="+55-51-9988-77556"
              icon="phone"
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
