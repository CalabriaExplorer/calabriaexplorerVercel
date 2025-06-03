
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, TrendingDown } from 'lucide-react';

interface PageStatData {
  page: string;
  path: string;
  visits: number;
  prevVisits: number;
  change: number;
  percentage: number;
}

interface PageStatsTableProps {
  data: PageStatData[];
  onExport: () => void;
}

const PageStatsTable = ({ data, onExport }: PageStatsTableProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return null;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-400";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Популярные страницы</CardTitle>
        <Button variant="outline" size="sm" onClick={onExport} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Экспорт CSV
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.slice(0, 7).map((page, index) => (
            <div key={page.path} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                  <div>
                    <p className="font-medium text-sm">{page.page}</p>
                    <p className="text-xs text-gray-500">{page.path}</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{formatNumber(page.visits)}</span>
                  {getChangeIcon(page.change)}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={getChangeColor(page.change)}>
                    {page.change > 0 ? '+' : ''}{page.change}%
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{page.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {data.length > 7 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Показано {Math.min(7, data.length)} из {data.length} страниц
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PageStatsTable;
