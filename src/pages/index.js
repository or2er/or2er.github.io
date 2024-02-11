import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={`min-h-screen `}>{/* <HeroSection /> */}</main>
    </div>
  );
}
