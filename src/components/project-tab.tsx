'use client'
import { useState } from "react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

interface ProjectTabsProps  {
  // projects: readonly ProjectProps[];
  categories: readonly string[];
}

const BLUR_FADE_DELAY = 0.04;
export function ProjectTabs({
  
  // projects,
  categories,
  // ...props
}: ProjectTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredProjects = DATA.projects.filter((project) =>
    project.category.find(cat=>cat==activeCategory)
  );
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md border",
              activeCategory === category
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:bg-muted"
            )}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {filteredProjects.sort((a, b) => {
                const dateA = new Date(a.dates).getTime();
                const dateB = new Date(b.dates).getTime();
                return dateB - dateA; // Sort by descending date
              }).map((project, id) => (
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
    </div>
  );
}
