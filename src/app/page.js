import Hero from "@/components/HomeComponents/Hero";
import Navbar from "@/components/Layouts/Navbar";
import Image from "next/image";
export const metadata = {
  title: {
    default: "Home - Promote Project",
  },
};
export default function Home() {
  return (
    <div className="bg-[url('/images/hero-bg.png')] bg-no-repeat 2xl:bg-cover min-h-full w-full">
      <Navbar />
      <Hero />
    </div>
  );
}
