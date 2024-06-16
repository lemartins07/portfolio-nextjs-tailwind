import Heading from '@/app/components/Heading'
import { Button } from '@/app/components/Forms/Button'
import ContactInfo from '../components/ContactInfo'
import ContactLink from '../components/ContactLink'

import { fecthContactLinks } from '@/app/lib/data'
import Input from '../components/Forms/Input'
import Textarea from '../components/Forms/Textarea'

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

        <form className="flex-[1_1_42rem]">
          <div className="flex flex-wrap justify-between">
            <Input name="name" placeholder="your name" />
            <Input name="number" type="number" placeholder="your number" />
          </div>

          <div className="flex flex-wrap justify-between">
            <Input name="email" type="email" placeholder="your email" />
            <Input name="subject" type="text" placeholder="your subject" />
          </div>
          <Textarea name="message" placeholder="your message" />
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
