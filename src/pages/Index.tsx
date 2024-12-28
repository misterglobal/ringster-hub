import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="flex justify-end p-4">
        <Button 
          onClick={() => navigate('/login')}
          variant="outline"
          className="hover:bg-primary hover:text-white"
        >
          Login
        </Button>
      </div>
      <Hero />
      <Features />
    </div>
  );
};

export default Index;