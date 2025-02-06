// "use client";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { RainbowButton } from "@/components/button";
export const metadata = {
  title: "Resume",
  description: "This is the resume page.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function ResumePage() {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-0">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <div className="flex flex-col items-center justify-center space-y-4 ">
            <div className="space-y-2 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Resume
              </h2>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <Image
            src="/resume.jpg" // Path relative to the public folder
            alt="Resume Image"
            width={800} // Desired width in pixels
            height={600} // Desired height in pixels
          />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <RainbowButton href={"/resume.pdf"} target="_blank" >Download Resume</RainbowButton>
          </BlurFade>
      </div>
    </section>
  );
}
