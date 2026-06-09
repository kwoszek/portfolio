export const Navbar = () => {
  return (
    <nav className="flex flex-none items-center justify-between p-6 md:p-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="font-semibold text-xl text-[#F05A28]">
        KW
      </div>
      <div className="flex gap-6 text-sm md:text-base font-medium">
        <a href="#about" className="hover:text-neutral-300 transition-colors">About</a>
        <a href="#projects" className="hover:text-neutral-300 transition-colors">Projects</a>
      </div>
    </nav>
  );
};
