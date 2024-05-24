import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

const features = [
  {
    image: "primary-explorers.png",
    name: "Primary Explorers",
    description:
      "Colorful and engaging interface with animated characters and interactive lessons.",
  },
  {
    image: "junior-adventurers.png",
    name: "Junior Adventurers",
    description:
      "More advanced visuals and content with gamified challenges and quizzes.",
  },
  {
    image: "senior-champions.png",
    name: "Senior Champions",
    description:
      "In-depth modules, projects, and discussions on climate science and sustainability.",
  },
];

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
            <div className="w-44 border-2 border-gray-800 shadow-custom-heavy p-10">
              <p>Discover your climate in a fun and interesting way!</p>
            </div>

            <div className="w-44 border-2 border-gray-800 shadow-custom-heavy p-10">
              <p>Discover your climate in a fun and interesting way!</p>
            </div>

            <div className="w-44 border-2 border-gray-800 shadow-custom-heavy p-10">
              <p>Discover your climate in a fun and interesting way!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-custom-purple grid place-items-center text-center py-32 text-white">
        <h2 className="text-4xl font-bold">Earn tokens as you learn!</h2>
        <p className="text-xs max-w-md mt-2">
          Earn tokens after completing each module! Use these tokens to buy
          eco-friendly products made by fellow students in the future.
        </p>

        <button className="p-3 text-sm mt-5 bg-white text-black rounded">
          Register
        </button>
      </section>

      <section className="flex p-20 py-40 justify-center items-center gap-20">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-6">
            About Us and Our Passion for Climate Education
          </h2>
          <p className="text-sm">
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

        <div>
          <Image
            src="/Group 5.png"
            alt="Our Core Values"
            className="w-56"
            width={100}
            height={100}
          />
        </div>
      </section>

      <section className="p-20 bg-custom-purple text-white text-center grid place-items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Integer sodales elit
            faucibus facilisi. Accumsan dolor nec porttitor senectus nam
            bibendum id dictum tempor. Magna id lorem porta nunc. Posuere.
          </p>
        </div>

        <div className="h-80">
          {/* MARK: TOdo: load assets for team */}
          .............Team Section..................
        </div>
      </section>

      {/* features */}
      <section className="p-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <div className=" mt-10 flex flex-wrap gap-3 items-center justify-center">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="grid place-items-center border max-w-xs shadow-xl"
            >
              <Image
                src={`/features/${feature.image}`}
                alt={feature.name}
                className="w-full aspect-square"
                width={100}
                height={100}
              />
              <div className="p-5 text-sm">
                <h3 className="text-base font-bold mb-2">{feature.name}</h3>
                <p className=" max-w-sm">{feature.description}</p>
                <p className=" text-blue-700">Learn More</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center p-10">
          <button className="bg-blue-700 p-3 rounded text-white">
            See all Progams
          </button>
        </div>
      </section>

      <section className="bg-custom-purple p-20 text-white grid place-items-center text-center">
        <h2 className="text-4xl font-bold max-w-xl">
          We teach climate education with games and Tokens won
        </h2>
        <p className="max-w-md mt-6">
          Learn about climate change through fun games and earn tokens to redeem
          eco-friendly products made by fellow students.
        </p>

        <button className="text-black bg-white rounded p-2 mt-9">
          Register
        </button>
        <div></div>
      </section>

      {/* contact section */}
      <section className="py-20">

      <div className="flex bg-green-900 relative">
        <div className="w-9/12 bg-gray-50 p-20">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="max-w-lg">
            We value your feedback, inquiries, and suggestions. Feel free to get
            in touch with us through the following channels:
          </p>

          <form action="" className="flex gap-4 flex-col mt-9">
            <input
              className="border-b bg-transparent p-3 w-3/5"
              type="text"
              placeholder="Name"
            />

            <input
              className="border-b bg-transparent p-3 w-3/5"
              type="email"
              placeholder="Email"
            />

            <input
              className="border-b bg-transparent p-3 w-3/5"
              type="text"
              placeholder="Message"
            />

            <button className="bg-custom-grayBlack p-3 text-white max-w-md rounded-sm">
              Send
            </button>
          </form>
        </div>

        <div className="absolute bg-custom-grayBlack py-10 p-10 text-white right-0 top-1/3 space-y-10">
          <h4 className="text-xl font-bold">Info</h4>
          <p>08107308697, 08151828040, 08071263783</p>
          <p>No 5 Rayfield road Jos Nigeria</p>
        </div>
      </div>
      </section>
      <Footer />
    </main>
  );
}
