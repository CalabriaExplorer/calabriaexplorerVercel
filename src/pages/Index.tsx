
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Route, Users, Calculator, Home, Instagram, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedAudience, setSelectedAudience] = useState<"tourist" | "relocator" | null>(null);
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Audience Selection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            {t("audience.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card 
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedAudience === "tourist" ? "ring-2 ring-[#0077B6]" : ""
              }`}
              onClick={() => setSelectedAudience("tourist")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#0077B6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-[#0077B6]">
                  {t("tourist.title")}
                </CardTitle>
                <CardDescription className="text-lg">
                  {t("tourist.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/tours">
                  <Button className="bg-[#0077B6] hover:bg-[#005A8A] text-white">
                    {t("tourist.button")}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedAudience === "relocator" ? "ring-2 ring-[#E2725B]" : ""
              }`}
              onClick={() => setSelectedAudience("relocator")}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#E2725B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-serif text-[#E2725B]">
                  {t("relocator.title")}
                </CardTitle>
                <CardDescription className="text-lg">
                  {t("relocator.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-[#E2725B] hover:bg-[#C85A42] text-white">
                  {t("relocator.button")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tourist Section */}
      {selectedAudience === "tourist" && (
        <section className="py-16 bg-[#F8FBFE]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#0077B6]">
              {t("tourist.section.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MapPin className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.explore.title")}</CardTitle>
                  <CardDescription>{t("tourist.explore.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calendar className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.calendar.title")}</CardTitle>
                  <CardDescription>{t("tourist.calendar.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Route className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.itineraries.title")}</CardTitle>
                  <CardDescription>{t("tourist.itineraries.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-[#0077B6] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("tourist.secrets.title")}</CardTitle>
                  <CardDescription>{t("tourist.secrets.description")}</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/tours">
                <Button size="lg" className="bg-[#0077B6] hover:bg-[#005A8A] text-white">
                  {t("tourist.plan")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Relocator Section */}
      {selectedAudience === "relocator" && (
        <section className="py-16 bg-[#FDF8F6]">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#E2725B]">
              {t("relocator.section.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Route className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.guide.title")}</CardTitle>
                  <CardDescription>{t("relocator.guide.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Home className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.estate.title")}</CardTitle>
                  <CardDescription>{t("relocator.estate.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.forum.title")}</CardTitle>
                  <CardDescription>{t("relocator.forum.description")}</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Calculator className="w-12 h-12 text-[#E2725B] mx-auto mb-2" />
                  <CardTitle className="text-lg">{t("relocator.calculator.title")}</CardTitle>
                  <CardDescription>{t("relocator.calculator.description")}</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button size="lg" className="bg-[#E2725B] hover:bg-[#C85A42] text-white">
                {t("relocator.begin")}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Why Calabria Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-12">{t("why.title")}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
              <p className="text-gray-600">{t("why.sunny")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">€1.20</div>
              <p className="text-gray-600">{t("why.espresso")}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">800km</div>
              <p className="text-gray-600">{t("why.coastline")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">{t("social.title")}</h2>
          <p className="text-gray-600 mb-8">{t("social.description")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                <Instagram className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
