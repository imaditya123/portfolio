"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { TimelineCard } from "@/components/timeline-card";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;
export function WorkTimeline() {
  const { scrollYProgress } = useScroll();

  const adjustedScrollProgress = useTransform(scrollYProgress, (value) =>
    Math.min(value * 5, 1)
  );

  // Option 2: Use the adjusted value with an increased stiffness for more responsiveness:
  const scaleY = useSpring(adjustedScrollProgress, {
    stiffness: 300, // Increased stiffness for a snappier response
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <ul
      className="mb-4 ml-4 divide-y divide-dashed relative pl-5 "
      //  ref={containerRef}
    >
      <motion.div
        className="ml-8 fixed inset-y-0 left-0 w-px origin-bottom bg-gradient-to-t from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]"
        style={{
          scaleY,
        }}
      />

      {DATA.work.map((work, id) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
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
  );
}
