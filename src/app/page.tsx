import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <Header />
        <Hero />
      </div>

      <section className="flex bg-[#A4D8B3] justify-center gap-10 p-10">
        <h2 className="text-2xl font-bold max-w-lg">
          Why climate Education and do our climate Speak?
        </h2>

        <div className="max-w-md">
          <p>
            Yes!! our climate speaks through changes in weather patterns, rising
            temperatures, and extreme events. By listening and learning, we can
            take action to address these urgent challenges.
          </p>

          <div className="flex justify-center flex-wrap gap-10 mt-10">
            <div className="w-44 border-2 border-black shadow-xl p-10">
              <p>Discover your climate in a fun and interesting way!</p>
            </div>

            <div className=" w-44 border-2 border-black shadow-xl p-10">
              <p>Discover your climate in a fun and interesting way!</p>
            </div>

            <div className="w-44 border-2 border-black shadow-xl p-10">
              <p>Discover your climate in a fun and interesting way!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#34285B] grid place-items-center text-center py-32 text-white">
        <h2 className="text-4xl font-bold">Earn tokens as you learn!</h2>
        <p className="text-xs max-w-md mt-2">
          Earn tokens after completing each module! Use these tokens to buy
          eco-friendly products made by fellow students in the future.
        </p>

        <button className="p-3 text-sm mt-5 bg-white text-black rounded">
          Register
        </button>
      </section>

      <section>
        <div>
          <h2>About Us and Our Passion for Climate Education</h2>
          <p>
            We are a passionate team of blockchain developers, full-stack
            software engineers, product managers, designers, environmentalists,
            and geographers dedicated to creating engaging climate education.
            Our mission is to make learning about climate change accessible and
            fun, empowering the next generation to take action for a sustainable
            future. By combining our diverse expertise, we aim to build
            innovative tools that inspire students to understand and address
            climate issues.
          </p>
        </div>

        <div></div>
      </section>
      <Footer />
    </main>
  );
}
