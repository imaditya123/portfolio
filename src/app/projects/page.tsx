import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import { ProjectTabs } from "@/components/project-tab";

export const metadata = {
  title: "Projects",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-0">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 ">
            <div className="space-y-2 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Projects
              </h2>
            </div>
          </div>
        </BlurFade>
        <ProjectTabs categories={DATA.project_category}></ProjectTabs>
      </div>
    </section>
  );
}
