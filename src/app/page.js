import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Landingpage from "./pages/landingpage/page";
import GridPage from "./pages/gridpage/page";
import CardA from "./components/cardA";
import CardB from "./components/cardB";
import CardC from "./components/cardC";
import OurProcess from "./components/process";
import TechStack from "./components/techstack";
import Testimonials from "./components/testimonial";
import Footer from "./components/footer";
import Hero from "./components/hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardB />
      <CardC />
      <OurProcess />
      <TechStack />
      <Testimonials />
      <Footer />
    </>
  );
}
