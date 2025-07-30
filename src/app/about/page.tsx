import Heading from '../components/Heading'
import { InfoCard } from '../components/InfoCard'
import { InfoTitle } from '../components/Forms/InfoTitle'
import { SkillImageBox } from '../components/SkillImageBox'
import { EducationItem } from '../components/EducationItem'
import { fecthSkills, fetchUserData, fetchEducation } from '../lib/data'

export default async function Page() {
  const user = await fetchUserData()
  const skills = await fecthSkills()
  const educations = await fetchEducation()

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
                <InfoTitle title="name" description={user?.name} />
                <InfoTitle
                  title="age"
                  description={user?.birthDate?.toDateString()}
                />
                <InfoTitle title="email" description={user?.email} />
                <InfoTitle title="address" description={user?.address} />
              </div>

              <div className="flex-[1_1_20rem]">
                <InfoTitle
                  title="freelance"
                  description={user?.freelance ? 'Available' : 'Not Available'}
                />
                <InfoTitle title="skill" description={user?.skill} />
                <InfoTitle
                  title="experience"
                  description={user?.experience?.toDateString()}
                />
                <InfoTitle title="language" description={user?.language} />
              </div>
            </div>
          </div>

          <div className="flex-[1_1_42rem] flex flex-wrap gap-8">
            <InfoCard title="4+" description="years of experience" />
            <InfoCard title="5+" description="Institutions Served" />
            <InfoCard title="20+" description="project completed" />
            <InfoCard title="10+" description="Courses & Certifications" />
          </div>
        </div>
      </section>

      <section className="skills">
        <Heading textWhite="my" textBlue="skills" />

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-6">
          {skills.map((skill) => (
            <SkillImageBox
              key={skill.id}
              name={skill.name}
              imagem={`/${skill.image}`}
            />
          ))}
        </div>
      </section>

      <section>
        <Heading textWhite="my" textBlue="education" />

        <div className="flex flex-wrap">
          {educations?.map((education) => (
            <EducationItem
              key={education.id}
              description={education.description}
              endYear={education.end}
              stardYear={education.begin}
              title={education.title}
            />
          ))}
        </div>
      </section>
    </>
  )
}
