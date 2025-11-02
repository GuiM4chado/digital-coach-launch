import { CourseCard } from "./CourseCard";
import courseSeo from "@/assets/course-seo.jpg";
import courseSocial from "@/assets/course-social.jpg";
import courseEmail from "@/assets/course-email.jpg";
import courseAds from "@/assets/course-ads.jpg";

export const Courses = () => {
  const courses = [
    {
      title: "SEO e Otimização para Buscadores",
      description: "Domine as técnicas de SEO e posicione seu site no topo do Google. Aprenda otimização on-page, link building e análise de métricas.",
      image: courseSeo,
      duration: "12h",
      students: "324",
      rating: "4.9",
      price: "R$ 497"
    },
    {
      title: "Marketing em Redes Sociais",
      description: "Crie estratégias vencedoras para Instagram, Facebook, TikTok e LinkedIn. Aumente engajamento e conversões.",
      image: courseSocial,
      duration: "15h",
      students: "456",
      rating: "4.8",
      price: "R$ 597"
    },
    {
      title: "E-mail Marketing Avançado",
      description: "Construa campanhas de e-mail marketing que convertem. Automação, segmentação e copywriting persuasivo.",
      image: courseEmail,
      duration: "10h",
      students: "287",
      rating: "4.9",
      price: "R$ 447"
    },
    {
      title: "Google Ads e Tráfego Pago",
      description: "Aprenda a criar campanhas lucrativas no Google Ads. Otimização de budget, palavras-chave e ROI positivo.",
      image: courseAds,
      duration: "18h",
      students: "398",
      rating: "5.0",
      price: "R$ 697"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="cursos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Cursos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground">
            Treinamentos completos e atualizados com as melhores práticas do mercado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};
