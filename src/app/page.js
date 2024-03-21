import Hero from "@/components/HomeComponents/Hero";
import Services from "@/components/HomeComponents/Services";
import Navbar from "@/components/Layout/Navbar";
import { Box } from "@mui/material";
import Image from "next/image";
export const metadata = {
  title: {
    default: "Home - Promote Project",
  },
};
export default function Home() {
  return (
    <Box>
      <Box className="bg-[url('/images/hero-bg.png')] relative -z-0 bg-no-repeat 2xl:bg-cover min-h-full w-full overflow-hidden">
        <Image src="/icons/hero-circle.svg" alt="" width={2208} height={2208} className="absolute right-0 top-0 object-cover -z-10 max-sm:hidden" />
        <Navbar />
        <Hero />
      </Box>
      <Services />
    </Box>
  );
}
