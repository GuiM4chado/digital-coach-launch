import { Target, TrendingUp, Award, Users } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Metodologia prática focada em aplicação imediata e resultados mensuráveis para seu negócio"
    },
    {
      icon: TrendingUp,
      title: "Conteúdo Atualizado",
      description: "Cursos constantemente atualizados com as últimas tendências e ferramentas do marketing digital"
    },
    {
      icon: Award,
      title: "Certificação Reconhecida",
      description: "Certificados validados pelo mercado que comprovam sua expertise em marketing digital"
    },
    {
      icon: Users,
      title: "Suporte Personalizado",
      description: "Comunidade ativa e mentoria especializada para tirar todas as suas dúvidas"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Por Que Escolher Nossos Cursos?
          </h2>
          <p className="text-xl text-muted-foreground">
            Diferenciais que fazem nossos alunos alcançarem resultados extraordinários
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-4 p-6 rounded-lg hover:bg-muted/50 transition-[var(--transition-smooth)]"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
