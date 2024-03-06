import Hero from "./section/hero";
import About from "./section/about";
import Contact from "./section/contact";
import Header from "./section/header";
import Projects from "./section/projects";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(30%_30%_at_20%_70%,rgba(251,191,36,0.3)_0%,rgba(255,255,255,0.00)_100%)]">
      <Header />
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>

      {/* <Hero /> */}
    </div>
  );
}
