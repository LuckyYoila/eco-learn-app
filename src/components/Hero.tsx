import Image from "next/image";
import underline from "@/assets/underline.svg"
import heroFrame from "@/assets/hero-frames.svg"

const Hero = () => {
  return (
    <div className="p-10 py-20 flex justify-between" >
      <div className="">
        <h1 className="text-7xl font-bold max-w-3xl mt-6">Learn About Climate Change & Earn </h1>
        <Image src={underline.src} alt="underline" className="max-w-lg mt-5" width={1000} height={1000} />
        <p className="max-w-xl mt-10">Empowering adults to fight climate change through education in a fun way and earn cryptocurrency and NFTs</p>
      </div>

      <div>
      <Image src={heroFrame.src} alt="hero image" className="max-w-lg" width={1000} height={1000} />
      </div>
    </div>
  );
};
export default Hero;
