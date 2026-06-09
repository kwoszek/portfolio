export const SelectedWorks = () => {
  return (
    <section className="w-full px-6 md:px-8 max-w-7xl mx-auto py-16 md:py-24 relative z-10 mt-16 md:mt-24">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-white">SELECTED</span>{' '}
          <span className="text-neutral-500">WORKS</span>
        </h2>
        <p className="max-w-md lg:max-w-lg text-lg md:text-xl lg:text-2xl font-medium leading-tight text-white">
          A look into my process and the products I've crafted to create meaningful change.
        </p>
      </div>
    </section>
  );
};
