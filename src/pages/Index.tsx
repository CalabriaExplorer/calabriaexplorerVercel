
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { CalendarCheck, MapPin, Users, FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const { toast } = useToast();
  const [audienceType, setAudienceType] = useState<"tourist" | "relocator" | null>(null);

  const handleAudienceSelect = (type: "tourist" | "relocator") => {
    setAudienceType(type);
    toast({
      title: type === "tourist" ? "Tourist Mode Activated" : "Relocator Mode Activated",
      description: type === "tourist" 
        ? "Discover the beauty and experiences of Calabria" 
        : "Start your journey to living in beautiful Calabria",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="text-[#E2725B]" />
            <h1 className="text-xl md:text-2xl font-bold font-serif">Calabria Explorer</h1>
          </div>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem className="px-2">
                <Link to="/" className="font-medium">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2">
                <Link to="#" className="font-medium">About</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2">
                <Link to="#" className="font-medium">Contact</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2">
                <Button variant="outline" size="sm">EN | IT</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <AspectRatio ratio={16/9} className="max-h-[70vh]">
          <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                Calabria: Where La Dolce Vita Meets Affordability
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Discover Italy's hidden gem - pristine beaches, rich culture, and authentic living
              </p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Beautiful Calabrian coastline" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </section>

      {/* Audience Selection */}
      {!audienceType && (
        <section className="py-16 bg-[#F5F0E6]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 font-bold">
              How would you like to experience Calabria?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Tourist Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Tourist enjoying Calabria"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-[#0077B6]">Explore as a Tourist</h3>
                  <p className="text-gray-600 mb-6">
                    Discover beautiful beaches, historical sites, local cuisine, and authentic experiences.
                  </p>
                  <Button 
                    className="w-full bg-[#0077B6] hover:bg-[#005f92]" 
                    onClick={() => handleAudienceSelect("tourist")}
                  >
                    Start Exploring
                  </Button>
                </div>
              </div>

              {/* Relocator Card */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Living in Calabria"
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-3 text-[#E2725B]">Relocate Here</h3>
                  <p className="text-gray-600 mb-6">
                    Everything you need to know about moving to and living in this affordable Mediterranean paradise.
                  </p>
                  <Button 
                    className="w-full bg-[#E2725B] hover:bg-[#c95a45]" 
                    onClick={() => handleAudienceSelect("relocator")}
                  >
                    Plan Your Move
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Audience-Specific Content */}
      {audienceType === "tourist" && (
        <section className="py-12 bg-[#F8FBFE] border-t-4 border-[#0077B6]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-8 text-[#0077B6]">Discover Calabria</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <MapPin size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Explore Map</h3>
                <p className="text-gray-600">Find beaches, historical sites, and hidden gems</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <CalendarCheck size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Event Calendar</h3>
                <p className="text-gray-600">Discover local festivals and cultural events</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FileText size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Itineraries</h3>
                <p className="text-gray-600">Pre-planned routes for the perfect vacation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Users size={36} className="text-[#0077B6] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Local Secrets</h3>
                <p className="text-gray-600">Stories and tips from Calabrian residents</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-[#0077B6] hover:bg-[#005f92]">
                Start Planning Your Trip
              </Button>
            </div>
          </div>
        </section>
      )}

      {audienceType === "relocator" && (
        <section className="py-12 bg-[#FDF8F6] border-t-4 border-[#E2725B]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold mb-8 text-[#E2725B]">Relocate to Calabria</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <FileText size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Relocation Guide</h3>
                <p className="text-gray-600">Step-by-step checklist for your move</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <MapPin size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Real Estate</h3>
                <p className="text-gray-600">Find your new home in Calabria</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <Users size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Expat Forum</h3>
                <p className="text-gray-600">Connect with others who've made the move</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <CalendarCheck size={36} className="text-[#E2725B] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Cost Calculator</h3>
                <p className="text-gray-600">Plan your budget for Calabrian living</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-[#E2725B] hover:bg-[#c95a45]">
                Begin Your Relocation Journey
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why Calabria Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 font-bold">Why Calabria?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold font-serif mb-2 text-[#0077B6]">300+</div>
              <p className="text-gray-600">Sunny days per year</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold font-serif mb-2 text-[#E2725B]">€1</div>
              <p className="text-gray-600">Average price for an espresso</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold font-serif mb-2 text-[#0077B6]">800km</div>
              <p className="text-gray-600">Of pristine coastline</p>
            </div>
          </div>
        </div>
      </section>

      {/* User-Generated Content */}
      <section className="py-16 bg-[#F5F0E6]">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-center mb-2 font-bold">#MyCalabria</h2>
          <p className="text-center text-gray-600 mb-8">See Calabria through the eyes of visitors and locals</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria landscape"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
            
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria landscape"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
            
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria beach"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
            
            <AspectRatio ratio={1/1} className="overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Calabria mountains"
                className="object-cover w-full h-full hover:scale-105 transition-transform"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Calabria Explorer</h3>
              <p className="text-gray-300 mb-4">Discover Italy's hidden gem - pristine beaches, rich culture, and authentic living</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Tourist Guide</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Relocation</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5.2 7.789c0 .137-.02.274-.02.411 0 4.235-3.234 9.139-9.139 9.139-1.815 0-3.506-.531-4.921-1.435.259.038.51.051.78.051 1.523 0 2.937-.521 4.039-1.397-1.421-.026-2.629-.963-3.035-2.261.198.038.395.051.593.051.282 0 .562-.038.833-.114-1.498-.303-2.615-1.6-2.615-3.156v-.051c.436.259.947.411 1.486.424-.878-.585-1.459-1.587-1.459-2.717 0-.6.16-1.156.444-1.637 1.599 1.968 4 3.275 6.717 3.403-.056-.243-.087-.499-.087-.755 0-1.815 1.47-3.285 3.301-3.285.945 0 1.815.396 2.413 1.042.752-.15 1.465-.423 2.101-.804-.259.785-.804 1.447-1.523 1.866.668-.076 1.297-.259 1.891-.523-.45.668-.997 1.244-1.637 1.713z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Calabria Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
