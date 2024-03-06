"use-client";
import Link from "next/link";
import Header from "./section/header";

export default function NotFound() {
  return (
    <div className="h-screen bg-[radial-gradient(30%_30%_at_20%_70%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0.00)_100%)] px-auto">
      <div className="block items-center max-h-full max-w-full mx-auto">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>

      {/* <Hero /> */}
    </div>
  );
}
