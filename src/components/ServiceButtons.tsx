import { Button } from "@/components/ui/button";
import { Settings, Eye, FileSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";
import apmcLogo from "@/assets/apmc-logo.png";

const ServiceButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Service Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full shadow-lg"
            onClick={() => navigate('/services')}
          >
            <Settings className="mr-2 h-5 w-5" />
            Online Services
          </Button>
          <Button 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg"
            onClick={() => navigate('/booking')}
          >
            <Eye className="mr-2 h-5 w-5" />
            Online Slot Booking
          </Button>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg"
            onClick={() => navigate('/verify')}
          >
            <FileSearch className="mr-2 h-5 w-5" />
            Search Medical Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceButtons;
