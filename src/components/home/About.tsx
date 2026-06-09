import { GithubIcon, EmailIcon, PhoneIcon, DiscordIcon, FacebookIcon } from '@/components/icons';

export const About = () => {
  return (
    <section id="about" className="w-full px-6 md:px-8 max-w-5xl mx-auto py-24 relative z-20">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="bg-[#111111] rounded-[2rem] p-8 md:p-12 flex flex-col justify-between w-full">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-2">
              Hello, I'm Krzysztof Woszek
            </h2>
            <p className="text-neutral-500 font-mono text-sm mb-8 md:mb-12">
            </p>

            <div className="flex flex-col gap-4 text-neutral-400 text-sm md:text-base leading-relaxed">
              <p>
                I'm a software developer based in Poniszowice, which is near Gliwice in Poland.
              </p>
              <p>
                I have a strong passion for creating software that not only meets business needs but also delights users. With experience in various programming languages and frameworks, I enjoy tackling complex problems and delivering elegant solutions. Whether it's building a new application from scratch or improving an existing one, I strive to write clean, efficient code that makes a positive impact. When I'm not coding, you can find me enjoying the outdoors with my friends or working on my car, a 1999 Toyota Celica, which is a great passion of mine.
              </p>
              <p>
                I'm always open to new opportunities and collaborations, so feel free to reach out if you'd like to connect or discuss potential projects. Let's create something amazing together!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4 md:gap-6 mt-12 text-sm font-medium text-white">
            <a href="https://github.com/kwoszek" target="_blank" rel="noopener noreferrer" title="GitHub" className="flex items-center hover:text-neutral-300 transition-colors flex items-center">
              <GithubIcon className="w-5 h-5 mr-2" /> <span>Github</span>
            </a>
            <a href="https://discordapp.com/users/691251636458356787" target="_blank" rel="noopener noreferrer" title="Discord" className="flex items-center hover:text-neutral-300 transition-colors">
              <DiscordIcon className="w-5 h-5 mr-2" /> <span>Discord</span>
            </a>
            <a href="mailto:k.woszek@outlook.com" target="_blank" rel="noopener noreferrer" title="Email" className="flex items-center hover:text-neutral-300 transition-colors">
              <EmailIcon className="w-5 h-5 mr-2" /> <span>Email</span>
            </a>
            <a href="https://www.facebook.com/krzysztof.woszek.58/" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-neutral-300 transition-colors flex items-center">
              <FacebookIcon className="w-5 h-5 mr-2" /> <span>Facebook</span>
            </a>
            <a href="tel:+48799775195" target="_blank" rel="noopener noreferrer" title="Phone" className="hover:text-neutral-300 transition-colors flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2" /> <span>Phone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
