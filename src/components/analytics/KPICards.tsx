
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export interface KPIData {
  title: string;
  currentValue: number;
  percentChange: number;
  previousValue: number;
}

interface KPICardsProps {
  data: KPIData[];
}

const KPICards = ({ data }: KPICardsProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-400" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-400";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {data.map((kpi, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {kpi.title}
            </CardTitle>
            {getChangeIcon(kpi.percentChange)}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatNumber(kpi.currentValue)}
            </div>
            <div className={`text-xs ${getChangeColor(kpi.percentChange)}`}>
              {kpi.percentChange > 0 ? '+' : ''}{kpi.percentChange.toFixed(1)}% к предыдущему периоду
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Предыдущий: {formatNumber(kpi.previousValue)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KPICards;
