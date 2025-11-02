import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de Marketing",
      company: "TechStart",
      content: "Os cursos transformaram completamente nossa estratégia de marketing digital. Em 3 meses, aumentamos nosso tráfego orgânico em 150%!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "CEO",
      company: "E-commerce Pro",
      content: "Investimento que valeu cada centavo. Minha equipe está muito mais preparada e nossos resultados melhoraram significativamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Social Media",
      company: "Agência Digital",
      content: "Conteúdo atualizado e prático. Consegui aplicar tudo que aprendi e dobrar o engajamento dos meus clientes em poucas semanas.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultados reais de quem já transformou sua carreira e negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 space-y-4 hover:shadow-[var(--shadow-lg)] transition-[var(--transition-smooth)]">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-foreground italic">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} - {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
