import PingingDot from "@/components/pinging-dot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { resume } from "@/data/resume";
import { socialMedia } from "@/data/social";
import authorImage from "@/public/images/author.png";
import { BriefcaseBusiness, CircleUserRound, GraduationCap, PhoneCall, PocketKnife } from "lucide-react";
import Link from "next/link";

const ResumePage = () => {
  return (
    <main className="flex flex-1 gap-4">
      <div className="flex flex-col w-[35%] max-w-[24rem] items-center bg-zinc-900 rounded p-4 border border-zinc-600/60">
        <section className="text-center">
          <div className="mb-6">
            <Avatar className="h-48 w-48 border-white border-4 bg-[radial-gradient(white,transparent)]">
              <AvatarImage src={authorImage.src} alt="@ResumeAuthor" />
              <AvatarFallback className="text-black">Ajay</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-2xl w-full text-center">
            {resume.fname} <span className="text-white">{resume.lname}</span>
          </h1>
          <p className="mt-2">{resume.position}</p>
        </section>
        <Separator className="my-4 bg-zinc-600/60" />
        <section className="p-2 flex flex-col gap-4 w-full">
          <div className="section-header flex gap-4 items-center text-2xl">
            <CircleUserRound className="h-8 w-8 text-purple-600" />
            <h2 className="uppercase text-purple-600">Profile</h2>
          </div>
          <p className="text-justify text-muted">
            {resume.profile}
          </p>
        </section>
        <Separator className="my-4 bg-zinc-600/60" />
        <section className="p-2 flex flex-col gap-4 w-full">
          <div className="section-header flex gap-4 items-center text-2xl">
            <PhoneCall className="h-8 w-8 text-purple-600" />
            <h2 className="uppercase text-purple-600">Contact</h2>
          </div>
          <ul>
            {resume.contact.map((contact, index) => {
              return (
                <li className="flex gap-4 items-center" key={index}>
                  <PingingDot />
                  {contact}
                </li>
              );
            })}
          </ul>
        </section>
        <Separator className="my-4 bg-zinc-600/60" />
        <section className="p-2 flex flex-col gap-4 w-full">
          <div className="section-header flex gap-4 items-center text-2xl">
            <PhoneCall className="h-8 w-8 text-purple-600" />
            <h2 className="uppercase text-purple-600">Social Links</h2>
          </div>
          <ul>
            {Object.entries(socialMedia).map(([key, value]) => (
              <li key={key} className="flex gap-4 items-center">
                <PingingDot />
                <Link href={value.href} target="_blank" rel="noopener">{value.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="w-full flex flex-col gap-4">
        <section className="flex flex-col gap-4 bg-zinc-900 rounded p-6 border border-zinc-600/60">
          <div className="section-header flex gap-4 items-center text-2xl">
            <BriefcaseBusiness className="h-8 w-8 text-purple-600" />
            <h2 className="uppercase">Work Experience</h2>
          </div>
          <ul className="flex flex-col ml-2">
            {resume.workExperiences.map((work, index) => {
              return (
                <li className="flex items-center gap-8 relative py-4" key={index}>
                  <div className="absolute h-full w-[2px] left-[5px] bg-slate-300/60"></div>
                  <PingingDot />
                  <div>
                    <h3 className="uppercase text-purple-600">{work.title} <span className="capitalize ml-4 text-slate-300/60">{work.date}</span></h3>
                    <p>{work.company}</p>
                    <p className="text-slate-300/60">{work.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="flex flex-col gap-4 bg-zinc-900 rounded p-6 border border-zinc-600/60">
          <div className="section-header flex gap-4 items-center text-2xl">
            <GraduationCap className="h-8 w-8 text-purple-600" />
            <h2 className="uppercase">Education/Qualifications</h2>
          </div>
          <ul className="flex flex-col ml-2">
            {resume.education.map((education, index) => {
              return (
                <li className="flex items-center gap-8 relative py-4" key={index}>
                  <div className="absolute h-full w-[2px] left-[5px] bg-slate-300/60"></div>
                  <PingingDot />
                  <div>
                    <h3 className="uppercase text-purple-600">{education.degree} <span className="capitalize ml-4 text-slate-300/60">{education.date}</span></h3>
                    <p>{education.school}</p>
                    <p className="text-slate-300/60">{education.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="flex flex-col gap-4 bg-zinc-900 rounded p-6 border border-zinc-600/60">
          <div className="section-header flex gap-4 items-center text-2xl">
            <PocketKnife className="h-8 w-8 text-purple-600" />
            <h2 className="uppercase text-purple-600">Skills</h2>
          </div>
          <div className="grid grid-cols-3 ml-2 gap-2">
            {resume.skills.map((skill, index) => {
              return (
                <div className="flex flex-col justify-center rounded p-4 border border-zinc-600/60" key={index}>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-300/60">{skill.percentage}%</span>
                    <div className="w-full h-2 bg-slate-300/60 rounded-full">
                      <div className="h-full bg-slate-300/80 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </div>
                  <h3 className="uppercase text-purple-600">{skill.label}</h3>
                  <p className="text-slate-300/60 text-justify">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div >
    </main >
  );
};

export default ResumePage;
