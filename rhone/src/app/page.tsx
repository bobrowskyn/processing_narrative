import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
