import { FloatingStars } from "@/components/stars/FloatingStars"
import { Navbar } from "@/components/layout/Navbar"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import MockupLaptopMesa from "@/assets/mesa/MockupLaptopMesa.webp"
import ganttOverview from "@/assets/mesa/ganttoverview.jpg"
import ganttSpecific from "@/assets/mesa/ganttspecific.jpg"
import instytucje from "@/assets/mesa/instytucje.jpg"
import pracownicy from "@/assets/mesa/pracownicy.jpg"

export default function Mesa() {
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
              Mesa
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-2xl text-neutral-400 max-w-3xl leading-relaxed"
            >
              A high-performance, real-time collaborative Gantt planning system built for multi-institution project coordination with sub-100ms synchronization.
            </motion.p>
          </header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-auto rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 mb-12 md:mb-24"
          >
            <img 
              src={MockupLaptopMesa} 
              alt="Mesa Gantt Chart Web Application Mockup" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-16 md:gap-32 lg:gap-40">
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-medium">The Challenge</h2>
                <div className="text-neutral-400 space-y-4 leading-relaxed">
                  <p>
                    Modern enterprises and multi-institutional operations require advanced coordination mechanisms. The client needed a highly advanced planning system capable of handling multiple projects, assigned to different institutions, with tasks assigned to diverse people, all rendered on the same unified Gantt chart.
                  </p>
                  <p>
                    Traditional tools rely on isolated sheets or separate project pages, leading to coordination silos, stale timelines, and conflict-resolution issues. Building an architecture that could neatly organize these complex relations in one place and sync updates instantly across the entire company was a massive systems design hurdle.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-medium">The Mesa Solution</h2>
                <div className="text-neutral-400 space-y-4 leading-relaxed">
                  <p>
                    Mesa resolves these hurdles by introducing a containerized, unified planning engine. It aggregates multiple projects from different institutions and assigns tasks to diverse personnel on a single, interactive Gantt chart.
                  </p>
                  <p>
                    Backed by an event-driven pub/sub gateway coordinating <strong>Apache Kafka</strong> and <strong>WebSockets</strong>, Mesa delivers immediate synchronization across the entire enterprise, while a custom HTML5 canvas typography system ensures clean visual scaling.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-10 md:gap-20">
              <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 md:mb-8">Advanced Gantt Chart & Modular Features</h2>
              
              <div className="grid grid-cols-1 gap-16 md:gap-24 lg:gap-32">
                
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Unified Multi-Institution Gantt Timeline</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      The core feat of Mesa is its ability to map multiple complex projects across different institutions onto a single, unified chart. Diverse stakeholders, teams, and individuals are assigned tasks concurrently. The system neatly organizes these multi-tenant tracks in one place, allowing cross-institution dependency visualization and automatic alignment.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={ganttOverview} alt="Unified Multi-Institution Gantt Timeline UI" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Stateless Real-Time Event Sync</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Whenever a user updates task progress or adjusts schedules, the browser submits an API request. The Node server commits the write to MongoDB and publishes the update event to a Kafka broker topic. Active consumers capture the message and broadcast it to subscribers, updating all connected charts across the organization in under 100ms.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={ganttSpecific} alt="Real-time timeline drag-and-drop sync" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Multi-Institution Workspace Administration</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Mesa enables multiple institutions to collaborate concurrently while maintaining strict boundary integrity. Organization managers configure cross-entity dependency trees and track multi-phase deliverables, with the underlying data isolated via tenant-specific routing queries.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={instytucje} alt="Multi-Institution tenancy administration panel" className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl font-medium">Granular Access Control & Personnel Management</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      Robust role authorization divides users into <code>admin</code>, <code>manager</code>, and <code>user</code> tiers. Admins direct general configurations, managers assign team members from different institutions and allocate budgeted work hours to tasks, and normal users track daily contributions. Mongoose database schemas enforce pre-save bcrypt security hooks and input validations to secure task states.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                    <img src={pracownicy} alt="Team roles and workspace resource allocation panel" className="w-full h-auto" />
                  </div>
                </div>

              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-medium mb-8">Technical Architecture & Topology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">WebSocket-Kafka Event Loop</h3>
                  <p className="text-neutral-400">By combining a stateless Express API tier with an Apache Kafka cluster, the backend scales horizontally indefinitely. WebSocket gateway instances subscribe to Kafka topics and broadcast state transitions to clients based on active topic registration.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Declarative Client-Side Caching</h3>
                  <p className="text-neutral-400">Utilizes <strong>Redux Toolkit (RTK) Query</strong> lifecycle handlers (`onCacheEntryAdded`) to manage WebSocket channels. When components mount, they subscribe dynamically, and automatically unsubscribe to clean up listeners when they unmount.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Authentication & Gatekeeping</h3>
                  <p className="text-neutral-400">WebSockets are validated during the connection handshake. The server extracts the token from query parameters and verifies the JWT signature before establishing a connection. Passwords are securely hashed using bcrypt on the database layer.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-white">Containerization & Local Mesh</h3>
                  <p className="text-neutral-400">The entire stack is containerized with <strong>Docker Compose</strong>. Incoming traffic is routed through an <strong>Nginx Reverse Proxy</strong>, directing API endpoints and front-end bundle queries to target containers behind a unified proxy mesh.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
