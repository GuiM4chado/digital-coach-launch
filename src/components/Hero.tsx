import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-marketing.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(221, 83, 53, 0.9), rgba(221, 83, 53, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/40 z-[1]" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Transforme Sua Equipe em 
            <span className="block bg-gradient-to-r from-secondary to-secondary-glow bg-clip-text text-transparent">
              Especialistas em Marketing Digital
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Cursos práticos e treinamentos completos para capacitar sua equipe com as melhores estratégias do mercado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button variant="hero" size="lg" className="text-lg group">
              Começar Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Ver Cursos
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="text-white/80 mt-1">Alunos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">50+</div>
              <div className="text-white/80 mt-1">Cursos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">4.9★</div>
              <div className="text-white/80 mt-1">Avaliação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
