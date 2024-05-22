import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <div className="bg-[#ffebce]">
      <Header />
      <Hero />
    </div>
    <Footer />
   </main>
  );
}
