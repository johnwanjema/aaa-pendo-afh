import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Whychoose from "./components/Whychoose";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/Faq";
import Contact from  "./components/Contact";
import Footer from "./components/Footer";
import { pageMetadata, localBusinessJsonLd } from "./lib/seo";

export const metadata = pageMetadata({ path: "/" });

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()).replace(/</g, "\\u003c") }}
      />
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


