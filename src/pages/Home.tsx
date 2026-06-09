import { FloatingStars } from "@/components/stars/FloatingStars"
import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/home/Hero"
import { SelectedWorks } from "@/components/home/SelectedWorks"
import { Projects } from "@/components/home/Projects"
import { Statement } from "@/components/home/Statement"
import { About } from "@/components/home/About"
import { Footer } from "@/components/layout/Footer"

export function Home() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <div className="relative z-10 bg-black flex flex-col min-h-svh mb-[100svh] shadow-2xl">
        <FloatingStars />
        <div className="flex flex-col min-h-svh">
          <Navbar />
          <Hero />
        </div>
        <SelectedWorks />
        <Projects />
        <Statement />
        <About />
        <div className="h-24 md:h-32 w-full bg-black"></div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
