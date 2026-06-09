import { useState, useEffect } from 'react';
import { FloatingStars } from "@/components/stars/FloatingStars";
import { GithubIcon, EmailIcon, PhoneIcon, FacebookIcon, DiscordIcon } from '@/components/icons';

export const Footer = () => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.ipgeolocation.io/v3/ipgeo?apiKey=c8e1194a21b34af7b4d72e4c3d76a084/`);
        const data = await response.json();
        
        if (data) {
          setLocation(`${data.city}, ${data.country_name}`);
        }
      } catch (error) {
        console.error("Failed to fetch location", error);
      }
    };

    fetchStatus();
    
    const interval = setInterval(fetchStatus, 100000);
    return () => clearInterval(interval);
  }, []);

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full h-svh z-0 bg-[#0c0c0c] text-white flex flex-col justify-between p-6 md:p-8 overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen">
        <FloatingStars />
      </div>

      <div className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto pt-3 md:pt-0">
        <div className="flex gap-6 md:gap-8 font-medium text-sm md:text-base text-neutral-100">
          <a href="#projects" className="hover:text-neutral-400 transition-colors">Projects</a>
          <a href="#about" className="hover:text-neutral-400 transition-colors">About</a>
        </div>
        <div className="text-neutral-400 text-xs sm:text-sm md:text-base font-medium text-right flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
          <span>{location || "Gliwice"}</span>
          <span className="hidden sm:inline">✺</span>
          <span>{time ? time : "00:00"}</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-start md:items-center text-left md:text-center max-w-5xl mx-auto w-full gap-4 md:gap-6 flex-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tight leading-tight text-neutral-300">
          Good software makes business easier, great software makes it <span className="text-white font-medium">thrive</span>. Let’s aim for great!
        </h2>
        
        <div className="flex items-center gap-3 text-xs md:text-sm font-bold tracking-widest text-neutral-200">
          <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-[#00ff66]"></span>
          </span>
          AVAILABLE FOR WORK
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-7xl mx-auto gap-4 md:gap-8 text-sm md:text-base">
          <div className="flex flex-wrap justify-between items-center gap-4 md:gap-6 mt-12 text-sm font-medium text-white">
            <a href="https://github.com/kwoszek" target="_blank" rel="noopener noreferrer" title="GitHub" className="flex items-center hover:text-neutral-300 transition-colors flex items-center">
              <GithubIcon className="w-5 h-5 mr-2" />
            </a>
            <a href="https://discordapp.com/users/691251636458356787" target="_blank" rel="noopener noreferrer" title="Discord" className="flex items-center hover:text-neutral-300 transition-colors">
              <DiscordIcon className="w-5 h-5 mr-2" /> 
            </a>
            <a href="mailto:k.woszek@outlook.com" target="_blank" rel="noopener noreferrer" title="Email" className="flex items-center hover:text-neutral-300 transition-colors">
              <EmailIcon className="w-5 h-5 mr-2" /> 
            </a>
            <a href="https://www.facebook.com/krzysztof.woszek.58/" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-neutral-300 transition-colors flex items-center">
              <FacebookIcon className="w-5 h-5 mr-2" /> 
            </a>
            <a href="tel:+48799775195" target="_blank" rel="noopener noreferrer" title="Phone" className="hover:text-neutral-300 transition-colors flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" /> 
            </a>
          </div>
          <div className="text-neutral-500 font-medium">
          &copy; {new Date().getFullYear()} Krzysztof Woszek. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
