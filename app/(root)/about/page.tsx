import Education from '@/components/sections/education'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'
import React from 'react'

const AboutPage = () => {
  return (
    <main className='text-white rounded p-8 flex flex-col gap-8'>
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold capitalize leading-[4rem] mb-4">I love creativity</h1>
        <p className="text-2xl text-muted-foreground mb-4 text-center">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="flex gap-8 text-justify text-muted-foreground leading-6 my-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quos odio cumque perferendis obcaecati ratione expedita dolore tempore ullam omnis exercitationem adipisci deserunt vel quaerat sit excepturi porro minima ea dignissimos magni consequuntur perspiciatis quam? Fugiat cupiditate mollitia consectetur assumenda beatae saepe. Quidem debitis molestiae hic temporibus recusandae saepe esse, obcaecati sequi, dolores praesentium, autem nihil sit rem nemo quasi illum dolore vero. Neque maxime corrupti magnam, doloribus eveniet, beatae eius vero officiis deserunt animi soluta nemo labore provident quae officia iste ab, aliquid unde at laborum incidunt cumque maiores. Libero repellendus iure delectus accusamus doloribus fugit dolorem ducimus aut fugiat. Nam quos repellendus quaerat. Impedit autem amet temporibus minima eveniet deserunt maxime eligendi, quod aut incidunt. Nemo incidunt reiciendis perspiciatis voluptatem repellat. Quo, porro repellendus. Libero aliquam dicta in! Expedita, fuga. Aut, officia. Exercitationem, maiores deserunt illum, quis quae consectetur nobis hic ducimus aliquam nisi ullam. Inventore, doloribus fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quos odio cumque perferendis obcaecati ratione expedita dolore tempore ullam omnis exercitationem adipisci deserunt vel quaerat sit excepturi porro minima ea dignissimos magni consequuntur perspiciatis quam? Fugiat cupiditate mollitia consectetur assumenda beatae saepe. Quidem debitis molestiae hic temporibus recusandae saepe esse, obcaecati sequi, dolores praesentium, autem nihil sit rem nemo quasi illum dolore vero. Neque maxime corrupti magnam, doloribus eveniet, beatae eius vero officiis deserunt animi soluta nemo labore provident quae officia iste ab, aliquid unde at laborum incidunt cumque maiores. Libero repellendus iure delectus accusamus doloribus fugit dolorem ducimus aut fugiat. Nam quos repellendus quaerat. Impedit autem amet temporibus minima eveniet deserunt maxime eligendi, quod aut incidunt. Nemo incidunt reiciendis perspiciatis voluptatem repellat. Quo, porro repellendus. Libero aliquam dicta in! Expedita, fuga. Aut, officia. Exercitationem, maiores deserunt illum, quis quae consectetur nobis hic ducimus aliquam nisi ullam. Inventore, doloribus fugit.
          </p>
        </div>
        <div className="flex my-8 px-8 w-full justify-between">
          <div className="px-8 border-l border-purple-500">
            <h2 className="text-3xl leading-10 mb-2">2020</h2>
            <p className="text-md text-muted-foreground">Graduated in ECE</p>
          </div>
          <div className="px-8 border-l border-purple-500">
            <h2 className="text-3xl leading-10 mb-2">6+ yrs</h2>
            <p className="text-md text-muted-foreground">Experience in IT Field</p>
          </div>
          <div className="px-8 border-l border-purple-500">
            <h2 className="text-3xl leading-10 mb-2">30+</h2>
            <p className="text-md text-muted-foreground">Open Source Projects</p>
          </div>
          <div className="px-8 border-l border-purple-500">
            <h2 className="text-3xl leading-10 mb-2">2012</h2>
            <p className="text-md text-muted-foreground">Coding Since</p>
          </div>
        </div>
      </section>
      <Experience />
      <Skills />
      <Education />
    </main>
  )
}

export default AboutPage