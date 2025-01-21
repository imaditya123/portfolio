import Hero from "./section/hero";
import About from "./section/about";
import Contact from "./section/contact";
import Header from "./section/header";
import Projects from "./section/projects";
// new imports
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { TimelineCard } from "@/components/timeline-card";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">
                {/* <Image src="/icons/employee_card.svg" alt="employee card" fill /> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Work Experience
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <TimelineCard
                    key={work.company}
                    title={work.company}
                    description={work.description}
                    subtitle={work.title}
                    dates={`${work.start} - ${work.end ?? "Present"}`}
                    image={work.logoUrl}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="space-y-10 w-full py-5">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">
                {/* <Image src="/icons/employee_card.svg" alt="employee card" fill /> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Education
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <TimelineCard
                    key={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    // description={education.description}
                    dates={`${education.start} ${
                      education.start == '' ? "" : "-"
                    } ${education.end}`}
                    image={education.logoUrl}
                    description={""}
                    // altText={education.school}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      {/* <section id="educations">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <TimelineCard
                key={education.school}

                title={education.school}
                subtitle={education.degree}
                    // description={education.description}
                 
                    dates={`${education.start} - ${education.end}`}
                    image={education.logoUrl}

               
                // altText={education.school}
             
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      {/* <Header /> */}

      {/* <Projects></Projects> */}
      <Contact></Contact>

      {/* <Hero /> */}
    </main>
  );
}
