import "./globals.css";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/ResentProject";
import Skills from "@/components/Skills";
import MyApporach from "@/components/MyApporach";
import Contact from "@/components/Contact";
import PortfolioLoader from "@/components/PortfolioLoader";

export default function Home() {
  return (
    <PortfolioLoader loadingDuration={2500} minLoadingTime={1500}>
      <main className="relative bg-black-100 flex justify-center items-center
      flex-col overflow-clip mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <Grid />  
          <RecentProjects />
          <Skills />
          <MyApporach />
          <Contact />
        </div>
      </main>
    </PortfolioLoader>
  );
}
