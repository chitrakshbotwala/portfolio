import s from "/src/assets/images/s.png";
import c from "/src/assets/images/c.png";
import t from "/src/assets/images/t.png";
import d from "/src/assets/images/d.png";
import o from "/src/assets/images/o.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://streamableanime.me"
            img={s}
            alt="Streamable"
            name="Streamable"
            type="Working"
            year="2023"
            tools="JavaScript • NextJS • Backend Development"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://main--cvd19tracker.netlify.app/"
            img={c}
            alt="covid tracker"
            name="covid tracker page"
            type="working"
            year="2020"
            tools="HTML • TailwindCSS • JavaScript"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://tfg-ngo.vercel.app/"
            img={t}
            alt="NPO Website"
            name="TFG NPO website"
            type="Working"
            year="2023"
            tools="HTML • CSS • JavaScript "
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://dhaage-ten.vercel.app/"
            img={d}
            alt="Threads clone page mockup"
            name="THREADS CLONE"
            type="Not Working"
            year="2023"
            tools="MERN Stack • JavaScript"
          />
        </div>
     
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://opuntia-messenger.vercel.app/"
            img={o}
            alt="messenger project mockup"
            name="MESSENGER CLONE"
            type="Not working"
            year="2022"
            tools="MERN Stack • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
