import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { TimelineCard } from "@/components/timeline-card";
import { RainbowButton } from "@/components/button";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import Link from "next/link";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Meteors } from "@/components/magicui/meteor-ui";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
 
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <ScrollProgress className="top" />
     
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
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <RainbowButton href={"/resume"}>View Resume</RainbowButton>
      </BlurFade>

      <section id="work-experience">
        <div className="space-y-12 w-full py-10">
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
                    link={work.href}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="space-y-5 w-full py-5">
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
                      education.start == "" ? "" : "-"
                    } ${education.end}`}
                    image={education.logoUrl}
                    description={""}
                    link={education.href}
                    // altText={education.school}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">
                {/* <Image src="/icons/employee_card.svg" alt="employee card" fill /> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Skills
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 ">
                {/* <Image src="/icons/employee_card.svg" alt="employee card" fill /> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Projects
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects
              .filter((project) => project.favorite)
              .sort((a, b) => {
                const dateA = new Date(a.dates).getTime();
                const dateB = new Date(b.dates).getTime();
                return dateB - dateA; // Sort by descending date
              })
              .map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <RainbowButton href={"/projects"}>View All Projects</RainbowButton>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
