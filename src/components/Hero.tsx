import Image from "next/image";
import underline from "@/assets/underline.svg";
import heroFrame from "@/assets/hero-frames.svg";

const Hero = () => {
  return (
    <div className="p-10 py-20 flex justify-center">
      <div className="">
        <h1 className="text-6xl font-bold max-w-2xl mt-6">
          Learn About Climate Change & Earn{" "}
        </h1>
        <Image
          src={underline.src}
          alt="underline"
          className="max-w-sm mt-5"
          width={1000}
          height={1000}
        />
        <p className="max-w-md mt-10">
          Empowering adults to fight climate change through education in a fun
          way and earn cryptocurrency and NFTs
        </p>

        <div className="text-sm flex gap-5">
          <button className="bg-custom-lime p-3 text-white rounded mt-10">Start Learning</button>
          <button className="bg-white p-3 text-custom-lime rounded mt-10 border border-custom-lime">Watch A Demo</button>
        </div>
      </div>

      <div>
        <Image
          src={heroFrame.src}
          alt="hero image"
          className="max-w-xl"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
export default Hero;
