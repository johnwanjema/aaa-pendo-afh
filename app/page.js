import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Whychoose from "./components/Whychoose";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Faq";
import Contact from  "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Whychoose />
      <Services />
      <Testimonials/>
      <FAQ />
      <Contact/>
      <Footer />
    </>
  );
}


