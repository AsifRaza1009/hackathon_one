
import Image from "next/image";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import Hero2 from "@/Components/Hero2";
import Hero3 from "@/Components/Hero3";

import Hero1 from "@/Components/Hero1";
import Hero4 from "@/Components/Hero4";
import { Newsletter } from "../Components/Newsletter";



export default function Home() {
  return (
    <>
<Hero1/>
<Hero2/>
<Hero3/>
<Hero4/>
<Newsletter/>
    </>
  );
}
