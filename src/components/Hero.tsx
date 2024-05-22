const Hero = () => {
  return (
    <div className="bg-slate-50 flex gap-20 justify-center p-9">
      <div className="max-w-lg">
        <h1 className="font-bold text-3xl">Save our climate by learning about climate change</h1>
        <p>
          Understanding the science behind climate change empowers us to make
          informed decisions that protect our planet. By exploring renewable
          energy, reducing waste, and adopting eco-friendly practices, we can
          collectively create a healthier, more sustainable future for all.
        </p>
      </div>
      <div className=" h-44 w-44 bg-slate-400">
        {/* load Assets for hero section */}
      </div>
    </div>
  );
};
export default Hero;
