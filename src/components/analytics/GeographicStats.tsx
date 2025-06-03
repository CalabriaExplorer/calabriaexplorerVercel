
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Map } from 'lucide-react';

interface GeographicData {
  country: string;
  city?: string;
  visits: number;
  percentage: number;
  flag?: string;
}

interface GeographicStatsProps {
  countryData: GeographicData[];
  cityData: GeographicData[];
  onExport: () => void;
}

const GeographicStats = ({ countryData, cityData, onExport }: GeographicStatsProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5" />
            По странам
          </CardTitle>
          <Button variant="outline" size="sm" onClick={onExport} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Экспорт
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {countryData.slice(0, 8).map((country, index) => (
              <div key={country.country} className="flex items-center justify-between p-2 rounded bg-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <span className="text-sm">{country.flag}</span>
                  <span className="font-medium text-sm">{country.country}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">{formatNumber(country.visits)}</div>
                  <div className="text-xs text-gray-500">{country.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5" />
            По городам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {cityData.slice(0, 8).map((city, index) => (
              <div key={`${city.city}-${city.country}`} className="flex items-center justify-between p-2 rounded bg-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <div>
                    <div className="font-medium text-sm">{city.city}</div>
                    <div className="text-xs text-gray-500">{city.country}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">{formatNumber(city.visits)}</div>
                  <div className="text-xs text-gray-500">{city.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeographicStats;
