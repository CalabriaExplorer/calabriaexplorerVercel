import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../styles/ciro-map.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Place {
  id: number;
  lat: number;
  lng: number;
  category: string;
  name_ru: string;
  name_en: string;
  description_ru: string;
  description_en: string;
  image: string;
}

const places: Place[] = [
  {
    id: 1,
    lat: 39.3763,
    lng: 17.12388,
    category: "supermarket",
    name_ru: "Супермаркет Conad",
    name_en: "Conad Supermarket",
    description_ru: "Популярный магазин рядом с пляжем.",
    description_en: "Popular grocery store near the beach.",
    image: "/images/conad_real.jpg",
  },
  {
    id: 2,
    lat: 39.37398,
    lng: 17.12306,
    category: "theatre",
    name_ru: "Театр Alikia",
    name_en: "Teatro Alikia",
    description_ru: "Современный театр и культурная площадка в Чиро-Марине.",
    description_en: "Modern theatre and cultural venue in Cirò Marina.",
    image: "/images/teatro_alikia.jpg",
  },
  {
    id: 3,
    lat: 39.37017,
    lng: 17.11668,
    category: "winery",
    name_ru: "Винодельня Ippolito 1845",
    name_en: "Ippolito 1845 Winery",
    description_ru: "Старинная калабрийская винодельня с дегустацией.",
    description_en: "Historic Calabrian winery with wine tasting.",
    image: "/images/ippolito.jpg",
  },
];

const ciroMarinaBoundary = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [17.113, 39.378],
        [17.135, 39.378],
        [17.135, 39.362],
        [17.113, 39.362],
        [17.113, 39.378],
      ],
    ],
  },
} as const;

const categories: Record<string, { ru: string; en: string }> = {
  supermarket: { ru: "Супермаркеты", en: "Supermarkets" },
  theatre: { ru: "Театр", en: "Theatre" },
  winery: { ru: "Винодельни", en: "Wineries" },
};

const CiroMap = () => {
  const [language, setLanguage] = useState<"ru" | "en">("ru");
  const [activeCategories, setActiveCategories] = useState<string[]>([
    "supermarket",
    "theatre",
    "winery",
  ]);

  const toggleCategory = (cat: string) => {
    setActiveCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredPlaces = places.filter((p) => activeCategories.includes(p.category));

  const center: [number, number] = [39.37, 17.12];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center gap-4 p-4">
        <button
          className={`px-4 py-2 rounded border ${language === "ru" ? "bg-blue-600 text-white" : "bg-white"}`}
          onClick={() => setLanguage("ru")}
        >
          RU
        </button>
        <button
          className={`px-4 py-2 rounded border ${language === "en" ? "bg-blue-600 text-white" : "bg-white"}`}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
      </div>
      <div className="flex justify-center gap-4 px-4">
        {Object.entries(categories).map(([key, label]) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={activeCategories.includes(key)}
              onChange={() => toggleCategory(key)}
              className="h-4 w-4"
            />
            {language === "ru" ? label.ru : label.en}
          </label>
        ))}
      </div>
      <div className="flex-1 mt-4">
        <MapContainer center={center} zoom={14} className="h-72 sm:h-96 w-full" scrollWheelZoom={false}>
          <TileLayer
            attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={ciroMarinaBoundary} pathOptions={{ color: "blue" }} />
          {filteredPlaces.map((place) => (
            <Marker key={place.id} position={[place.lat, place.lng]}>
              <Popup>
                <div className="text-center">
                  <img
                    src={place.image}
                    alt={language === "ru" ? place.name_ru : place.name_en}
                    className="place-photo mb-2"
                  />
                  <h3 className="font-semibold">
                    {language === "ru" ? place.name_ru : place.name_en}
                  </h3>
                  <p className="text-sm mt-1">
                    {language === "ru" ? place.description_ru : place.description_en}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="p-4 space-y-4">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="flex gap-4 border rounded p-2 items-center">
            <img
              src={place.image}
              alt={language === "ru" ? place.name_ru : place.name_en}
              className="place-photo"
            />
            <div>
              <h3 className="font-semibold">
                {language === "ru" ? place.name_ru : place.name_en}
              </h3>
              <p className="text-sm">
                {language === "ru" ? place.description_ru : place.description_en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CiroMap;
