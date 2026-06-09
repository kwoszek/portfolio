import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react";

type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline';

export const Hero = () => {
  const [status, setStatus] = useState<DiscordStatus>('offline');
  const discordId = "691251636458356787"; 

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        const data = await response.json();
        
        if (data.success) {
          setStatus(data.data.discord_status);
        }
      } catch (error) {
        console.error("Failed to fetch Discord status", error);
      }
    };

    fetchStatus();
    
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const statusColors = {
    online: '#43b581',
    idle: '#faa61a',
    dnd: '#f04747',
    offline: '#747f8d'
  };

  const statusMessages = {
    online: 'Currently online on Discord',
    idle: 'Currently idle on Discord',
    dnd: 'Currently on do not disturb on Discord',
    offline: 'Currently offline on Discord'
  };

  return (
    <main className="flex flex-1 flex-col justify-center px-6 md:px-8 max-w-7xl mx-auto w-full relative z-10 pt-8 pb-6 md:pb-10">
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal tracking-tight leading-[1.15] max-w-3xl text-neutral-100">
          Hi, I'm Krzysztof Woszek,<br />
          a software developer who cares about crafting purposeful applications that help your business.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between border-t border-white/20 pt-10 md:pt-16 mt-auto gap-8">
        <div className="flex flex-col gap-3 text-neutral-300 text-xs sm:text-sm md:text-base">
          <p>Developed for various industries</p>
          <p>Currently working on an automotive machine vision project</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: statusColors[status] }}
              ></span>
              <span
                className="relative inline-flex rounded-full h-full w-full"
                style={{ backgroundColor: statusColors[status] }}
              ></span>
            </span>
            <span className="text-white text-xs sm:text-sm">{statusMessages[status]}</span>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 text-xs sm:text-sm md:text-base">
          <a href="#projects" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span>Scroll to see my works</span>
            <ArrowDown className="text-[#F05A28] w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </main>
  );
};
