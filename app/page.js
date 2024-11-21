import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/NavBar";
import Image from "next/image";
import Head from "next/head";
import Services from "@/components/Home/Services";
import Portfolio from "@/components/Home/Portfolio";
import Clients from "@/components/Home/Clients";
import CtaSection from "@/components/Home/CtaSection";
import Education from "@/components/Home/Education";
import Pricing from "@/components/Home/Pricing";
import Testimonial from "@/components/Home/Testimonial";
import BlogSection from "@/components/Home/BlogSection";
import ContactSection from "@/components/Home/ContactSection";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Felicity Essien - Software Engineer</title>
        <link rel="icon" href="favicon.ico"></link>
        {/* <script src="/js/bundle.js" /> */}
        <Script
          src="js/bundle.js"
          strategy="lazyOnload"
          type="text/javascript"
        />
      </Head>
      <HeroSection />
      <AboutSection />
      <Services />
      <Portfolio />
      <Clients />
      <CtaSection />
      <Education />
      {/* <Pricing /> */}
      <Testimonial />
      <BlogSection />
      <ContactSection />
    </>
  );
}
