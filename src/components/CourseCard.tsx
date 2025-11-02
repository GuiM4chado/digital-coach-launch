import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: string;
  rating: string;
  price: string;
}

export const CourseCard = ({ 
  title, 
  description, 
  image, 
  duration, 
  students, 
  rating,
  price 
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-lg)] transition-[var(--transition-smooth)] border-border">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold shadow-[var(--shadow-md)]">
          {price}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span>{rating}</span>
          </div>
        </div>
        
        <Button className="w-full" variant="default">
          Saiba Mais
        </Button>
      </div>
    </Card>
  );
};
