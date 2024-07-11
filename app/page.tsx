import Image from "next/image";
import Hero from "@/components/Hero"
import Grid from "@/components/Grid"
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
       
       <FloatingNav navItems={navItems}/>
       <Hero />
       <Grid/>
       <RecentProjects/>
       <Clients></Clients>
       <Experience></Experience>
       {/* <Approach></Approach> */}
       <Footer></Footer>
      </div>
    </main>
   );
}
