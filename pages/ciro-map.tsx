import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import '../styles/ciro-map.css';
import { Feature } from 'geojson';
import boundaryData from '../public/geo/ciro_marina.json' assert { type: 'json' };

const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false });
const GeoJSON = dynamic(() => import('react-leaflet').then(m => m.GeoJSON), { ssr: false });

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const iconRetinaUrl = (markerIcon2x as unknown as string) || '';
const iconUrl = (markerIcon as unknown as string) || '';
const shadowUrl = (markerShadow as unknown as string) || '';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
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
    category: 'supermarket',
    name_ru: 'Супермаркет Conad',
    name_en: 'Conad Supermarket',
    description_ru: 'Магазин с широким ассортиментом продуктов.',
    description_en: 'Well-stocked grocery store near the center.',
    image: '/images/conad_real.jpg',
  },
  {
    id: 2,
    lat: 39.37402,
    lng: 17.12214,
    category: 'supermarket',
    name_ru: 'Coop',
    name_en: 'Coop',
    description_ru: 'Супермаркет рядом с набережной.',
    description_en: 'Supermarket close to the seafront.',
    image: '/images/coop.jpg',
  },
  {
    id: 3,
    lat: 39.37398,
    lng: 17.12306,
    category: 'theatre',
    name_ru: 'Театр Alikia',
    name_en: 'Teatro Alikia',
    description_ru: 'Современный театр и культурная площадка.',
    description_en: 'Modern theatre and cultural venue.',
    image: '/images/teatro_alikia.jpg',
  },
  {
    id: 4,
    lat: 39.37017,
    lng: 17.11668,
    category: 'winery',
    name_ru: 'Винодельня Ippolito 1845',
    name_en: 'Ippolito 1845 Winery',
    description_ru: 'Историческая винодельня с дегустацией.',
    description_en: 'Historic winery offering tastings.',
    image: '/images/ippolito.jpg',
  },
];


const categories: Record<string, { ru: string; en: string }> = {
  supermarket: { ru: 'Супермаркеты', en: 'Supermarkets' },
  theatre: { ru: 'Театр', en: 'Theatre' },
  winery: { ru: 'Винодельни', en: 'Wineries' },
};

const CiroMapPage = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'supermarket',
    'theatre',
    'winery',
  ]);
  const [activePlace, setActivePlace] = useState<number | null>(null);
  const boundary = (boundaryData.features?.[0] ?? null) as Feature | null;
  const mapRef = useRef<L.Map | null>(null);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredPlaces = places.filter((p) =>
    selectedCategories.includes(p.category)
  );


  useEffect(() => {
    if (mapRef.current && boundary) {
      const boundaryLayer = L.geoJSON(boundary);
      const bounds = boundaryLayer.getBounds();
      const markerBounds = L.latLngBounds(
        places.map((p) => L.latLng(p.lat, p.lng))
      );
      const allBounds = bounds.extend(markerBounds);
      mapRef.current.fitBounds(allBounds);
      mapRef.current.setMaxBounds(bounds.pad(0.1));
    }
  }, [boundary]);

const handleCardClick = (place: Place) => {
  setActivePlace(place.id);
  mapRef.current?.flyTo([place.lat, place.lng], 17);
};

  const center: [number, number] = [39.37, 17.12];

  return (
    <>
      <Head>
        <title>Cirò Marina Map</title>
      </Head>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="md:w-7/12 w-full h-72 md:h-[600px]">
          <MapContainer
            center={center}
            zoom={14}
            minZoom={11}
            maxZoom={17}
            scrollWheelZoom={false}
            whenCreated={(m) => (mapRef.current = m)}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {boundary && (
              <GeoJSON
                data={boundary}
                pathOptions={{ color: 'red', fill: false, weight: 2 }}
              />
            )}
            {boundary &&
              filteredPlaces.map((place) => (
              <Marker
                key={place.id}
                position={[place.lat, place.lng]}
                eventHandlers={{ click: () => setActivePlace(place.id) }}
              >
                <Popup>
                  <div className="text-center w-[300px]">
                    <img
                      src={place.image}
                      alt={language === 'ru' ? place.name_ru : place.name_en}
                      className="place-photo mb-2"
                    />
                    <h3 className="font-semibold">
                      {language === 'ru' ? place.name_ru : place.name_en}
                    </h3>
                    <p className="text-sm my-1">
                      {language === 'ru' ? place.description_ru : place.description_en}
                    </p>
                    <a className="text-blue-600 underline" href="#">
                      {language === 'ru' ? 'Подробнее...' : 'More details...'}
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="md:w-5/12 w-full space-y-4 overflow-y-auto">
          <div className="flex justify-center gap-2 mb-2">
            <button
              className={`px-4 py-2 border rounded ${language === 'ru' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => setLanguage('ru')}
            >
              RU
            </button>
            <button
              className={`px-4 py-2 border rounded ${language === 'en' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mb-4 justify-center">
            {Object.entries(categories).map(([key, label]) => (
              <label key={key} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(key)}
                  onChange={() => toggleCategory(key)}
                />
                {language === 'ru' ? label.ru : label.en}
              </label>
            ))}
          </div>
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className={`border rounded p-2 flex flex-col items-center cursor-pointer ${activePlace === place.id ? 'border-blue-600' : ''}`}
              onClick={() => handleCardClick(place)}
            >
              <img
                src={place.image}
                alt={language === 'ru' ? place.name_ru : place.name_en}
                className="place-photo mb-2"
              />
              <h3 className="font-semibold">
                {language === 'ru' ? place.name_ru : place.name_en}
              </h3>
              <p className="text-sm text-center">
                {language === 'ru' ? place.description_ru : place.description_en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CiroMapPage;
