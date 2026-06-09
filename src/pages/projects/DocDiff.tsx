import { FloatingStars } from "@/components/stars/FloatingStars"
import { Navbar } from "@/components/layout/Navbar"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import MockupLaptop from "@/assets/docdiff/MockupLaptop.webp"
import createWorkspace from "@/assets/docdiff/create.jpeg"
import docsInCases from "@/assets/docdiff/docsincases.jpg"
import documentComparator from "@/assets/docdiff/documentcomparator.jpg"

export default function DocDiff() {
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
              DocDiff
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-neutral-400 max-w-3xl leading-relaxed"
            >
              A collaborative, high-accuracy legal document comparison and version control system designed for lawyers, recruiters, and operations teams.
            </motion.p>
          </header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-auto rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 mb-12 md:mb-24"
          >
            <img 
              src={MockupLaptop} 
              alt="DocDiff Web Application Mockup" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-32 lg:gap-40">
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-medium">The Challenge</h2>
                <div className="text-neutral-400 space-y-4 leading-relaxed">
                  <p>
                    During legal negotiations, agreements such as NDAs or Service Contracts undergo dozens of micro-revisions. Existing solutions present distinct limitations that hinder the workflow.
                  </p>
                  <ul className="list-disc list-outside ml-5 space-y-2">
                    <li><strong>Git/Developer Tools:</strong> Too technical for legal teams and struggle with word processor structures.</li>
                    <li><strong>Word "Track Changes":</strong> Becomes messy, hard to read, and often treats simple list shifts (e.g. inserting a clause that shifts items 2, 3, and 4 down) as complete deletions and rewrites, creating visual noise.</li>
                    <li><strong>Manual Review:</strong> Consumes hours of legal counsel time and is prone to human error.</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-medium">The Solution</h2>
                <div className="text-neutral-400 space-y-4 leading-relaxed">
                  <p>
                    DocDiff provides an intuitive, web-based dashboard where legal documents are organized into <strong>"Cases"</strong>. Users can collaborate with team members, upload successive file versions, and immediately review comparisons side-by-side.
                  </p>
                  <p>
                    The application fundamentally removes visual noise by identifying structural updates (like numbering shifts) and isolating actual content changes, ensuring negotiations remain smooth and focused on substance.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-10 md:gap-20">
              <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 md:mb-8">Core Features & User Flows</h2>
              
              <div className="grid grid-cols-1 gap-16 md:gap-24 lg:gap-32">
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Case-Based Workspace</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Users create centralized "Cases" (e.g. <em>Employment Contract - John Doe</em>) to group relevant documents. This ensures organized tracking across multiple legal matters without the clutter of a messy file system.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={createWorkspace} alt="Create Workspace UI" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Automated Email Ingestion & Collaboration</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Control accessibility by managing team permissions and adding reviewer emails to specific cases. Once added, the application automatically assigns and sends each user their own unique email agent. When collaborators attach this agent to emails containing document revisions, the system automatically pulls the document and attaches it to the case versions. While a manual upload option remains available, this automated workflow ensures a seamless chain of custody, tracking all files, version counts, and timelines effortlessly.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={docsInCases} alt="Document History UI" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col gap-8 items-center">
                  <div className="w-full flex flex-col gap-4 max-w-3xl text-center mb-4">
                    <h3 className="text-2xl font-medium">The Document Comparator (Core Innovation)</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      The side-by-side comparison screen detects four types of differences: <strong className="text-green-400">Added Lines</strong>, <strong className="text-red-400">Removed Lines</strong>, <strong className="text-blue-400">Changed Content</strong>, and <strong className="text-yellow-400">Numbering Shifts</strong>. 
                    </p>
                    <p className="text-neutral-400 leading-relaxed">
                      If an inserted clause causes all subsequent items to shift down, standard tools highlight the entire line as "modified." DocDiff isolates the point index and highlights <em>only the number</em> in yellow, while rendering the rest of the text normally. This instantly shows the reviewer that the clause content remains identical.
                    </p>
                  </div>
                  <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={documentComparator} alt="Document Comparator Interface" className="w-full h-auto" />
                  </div>
                </div>

              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-medium mb-8">Technical Architecture & Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Frontend & UI</h3>
                  <p className="text-neutral-400">Built with <strong>React</strong> and <strong>Material-UI (MUI)</strong> for a responsive, minimalist dark theme, paired with <strong>RTK Query</strong> for efficient state management and data fetching.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Backend Architecture</h3>
                  <p className="text-neutral-400">A robust <strong>Java Spring</strong> backend handles the complex logic of document comparison, version control, and secure case management.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Auth & Identity</h3>
                  <p className="text-neutral-400">Leverages a custom <strong>WordPress</strong> integration to seamlessly handle user authorization and authentication via Google SSO.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Infrastructure & Mailing</h3>
                  <p className="text-neutral-400">Containerized using <strong>Docker</strong> for reliable deployments. The automated email agent system is powered by a custom <strong>Postfix</strong> mailing configuration.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
