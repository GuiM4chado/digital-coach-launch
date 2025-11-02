import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Marketing Digital Pro</h3>
            <p className="text-background/80">
              Transformando equipes em especialistas de marketing digital desde 2020.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Cursos</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-secondary transition-colors">SEO</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Redes Sociais</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">E-mail Marketing</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Google Ads</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Empresa</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Parceiros</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contato@marketingdigitalpro.com" className="hover:text-secondary transition-colors">
                  contato@marketingdigitalpro.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5511999999999" className="hover:text-secondary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>© 2025 Marketing Digital Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
