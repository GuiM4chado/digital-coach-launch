import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Courses />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
