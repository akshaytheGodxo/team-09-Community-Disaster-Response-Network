import Image from "next/image";
import Navbar from "@/component/Madhav/Navbar";
import Hero from "@/component/Prasoon/Hero";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      
    </div>
  );
}
