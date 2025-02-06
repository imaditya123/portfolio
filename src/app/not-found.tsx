"use-client";
import Link from "next/link";
import { RainbowButton } from "@/components/button";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <div className="block items-center max-h-full max-w-full mx-auto space-y-2">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <RainbowButton href={"/"}>Return Home</RainbowButton>
      </div>
    </div>
  );
}
