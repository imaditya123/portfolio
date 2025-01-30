"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { PDFViewer } from "@/components/pdf-viewer";

import Link from "next/link";
import { pdfjs, Document, Page } from "react-pdf";

const BLUR_FADE_DELAY = 0.04;
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default async function ResumePage() {
  return (
    <section id="Resume">
      <div className="space-y-12 w-full py-0">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 ">
            <div className="space-y-2 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <Link href="/resume.pdf">Resume</Link>
              </h2>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <PDFViewer classname=""  fileUrl={"/resume.pdf"}></PDFViewer>
        </BlurFade>
      </div>
    </section>
  );
}
