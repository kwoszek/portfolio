import { FloatingStars } from "@/components/stars/FloatingStars"
import { Navbar } from "@/components/layout/Navbar"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import Mockup3Devices from "@/assets/Mockup3Devices.webp"
import checkInScr from "@/assets/checkInScr.webp"
import forumScr from "@/assets/forumScr.webp"
import FocusScr from "@/assets/FocusScr.webp"
import stats from "@/assets/stats.webp"
import Badges from "@/assets/Badges.webp"

export default function WorkSense() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <div className="relative z-10 bg-black flex flex-col min-h-svh shadow-2xl">
        <FloatingStars />
        <Navbar />

        <main className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-8 pt-20 md:pt-32 pb-16 md:pb-24 relative z-20">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 md:mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <header className="flex flex-col gap-6 mb-10 md:mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight"
            >
              WorkSense
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-neutral-400 max-w-3xl leading-relaxed"
            >
              Combating burnout among students and professionals through a holistic blend of mental health profiling, work hygiene, and community support.
            </motion.p>
          </header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-auto rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 mb-12 md:mb-24"
          >
            <img 
              src={Mockup3Devices} 
              alt="WorkSense on multiple devices" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-32 lg:gap-40">
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-medium">The Global Burnout Crisis</h2>
                <div className="text-neutral-400 space-y-4 leading-relaxed">
                  <p>
                    Research by WHO and APA confirms that burnout is no longer confined to corporate professionals, it heavily affects students and young adults as well. 
                    The combination of excess responsibilities, performance pressure, constant digital stimuli, and lack of rest leads to chronic stress, loss of motivation, and feelings of helplessness.
                  </p>
                  <p>
                    Existing applications tend to focus on either mental health <em>or</em> productivity, failing to bridge the gap. 
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-medium">The WorkSense Solution</h2>
                <div className="text-neutral-400 space-y-4 leading-relaxed">
                  <p>
                    WorkSense fills this critical gap by providing a multi-layered approach to healthier work and active regeneration. 
                    It serves as a comprehensive tool combining burnout prevention, mood analysis, psychological education, and a supportive community.
                  </p>
                  <p>
                    Built on CBT (Cognitive Behavioral Therapy) and ACT (Acceptance and Commitment Therapy) frameworks, the platform safely guides users toward sustainable productivity.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-10 md:gap-20">
              <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 md:mb-8">Core Features</h2>
              
              <div className="grid grid-cols-1 gap-16 md:gap-24 lg:gap-32">
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Daily Check-Up & AI Insights</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      An advanced mood and stress journal. Our algorithm analyzes energy levels, stress, mood, sleep, and workload. Based on these inputs, an AI-driven system suggests personalized psychological advice, breathing exercises, and micro-regeneration rituals.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={checkInScr} alt="Daily Check-Up UI" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Community Support Forum</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      According to the APA, loneliness increases the risk of burnout by over 50%. Our safe, moderated forum connects individuals experiencing similar struggles, providing crucial social support and peer validation that dramatically reduces burnout symptoms.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={forumScr} alt="Community Forum UI" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Focus Mode & Smart Reminders</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Built around the Pomodoro technique to reduce cognitive overload and encourage micro-breaks. Coupled with screen-time analysis, the app intelligently reminds users to hydrate, move, or do relaxation exercises when it detects prolonged uninterrupted work.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={FocusScr} alt="Focus Mode UI" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Data-Driven Progress</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Visualizing check-up data through stress charts, habit analysis, and energy trends. Monitoring progress increases the likelihood of positive behavioral changes by 65%, giving users clear visibility into their mental health journey.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={stats} alt="Statistics and Progress UI" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Gamified Self-Care</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      We turned self-care into a rewarding experience. Our badge and ranking system leverages dopamine mechanics to transform healthy habits into engaging, regular routines, a concept backed by behavioral science.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center justify-center p-8">
                    <img src={Badges} alt="Badges and Gamification UI" className="w-full h-auto max-h-[300px] object-contain" />
                  </div>
                </div>

              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-medium mb-8">The Future of WorkSense</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Smartwatch Integration</h3>
                  <p className="text-neutral-400">Monitoring HRV (Heart Rate Variability) to detect elevated stress in real-time and provide automatic, biological-based reminders for breathing and movement.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Mobile Application</h3>
                  <p className="text-neutral-400">Taking check-ups, focus sessions, and forum communication on the go to ensure continuous support anywhere, anytime.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Expert Led Workshops</h3>
                  <p className="text-neutral-400">A hybrid model featuring short educational sessions, stress-management workshops, and Q&A sessions led by professional psychologists.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Advanced AI Reminders</h3>
                  <p className="text-neutral-400">Analyzing work schedules, sleep quality, and circadian rhythms to perfectly time notifications to the user's biological needs.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
