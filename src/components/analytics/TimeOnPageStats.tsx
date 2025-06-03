
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Timer } from 'lucide-react';

interface TimeOnPageData {
  page: string;
  path: string;
  avgTimeMinutes: number;
  avgTimeSeconds: number;
  bounceRate: number;
  visits: number;
}

interface TimeOnPageStatsProps {
  data: TimeOnPageData[];
  onExport: () => void;
}

const TimeOnPageStats = ({ data, onExport }: TimeOnPageStatsProps) => {
  const formatTime = (minutes: number, seconds: number) => {
    if (minutes > 0) {
      return `${minutes}м ${seconds}с`;
    }
    return `${seconds}с`;
  };

  const getBounceRateColor = (rate: number) => {
    if (rate < 30) return "text-green-600";
    if (rate < 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Timer className="h-5 w-5" />
          Время на странице
        </CardTitle>
        <Button variant="outline" size="sm" onClick={onExport} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Экспорт CSV
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((page, index) => (
            <div key={page.path} className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-sm">{page.page}</p>
                  <p className="text-xs text-gray-500">{page.path}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">
                    {formatTime(page.avgTimeMinutes, page.avgTimeSeconds)}
                  </div>
                  <div className="text-xs text-gray-500">{page.visits} посещений</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Показатель отказов:</span>
                <span className={getBounceRateColor(page.bounceRate)}>
                  {page.bounceRate}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeOnPageStats;
