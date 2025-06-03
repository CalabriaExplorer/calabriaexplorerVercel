
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Globe, Search } from 'lucide-react';

interface ReferralSourceData {
  source: string;
  visits: number;
  percentage: number;
  change: number;
  type: 'search' | 'social' | 'direct' | 'referral';
}

interface ReferralSourcesTableProps {
  data: ReferralSourceData[];
  onExport: () => void;
}

const ReferralSourcesTable = ({ data, onExport }: ReferralSourcesTableProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  const getSourceIcon = (type: string) => {
    switch (type) {
      case 'search':
        return <Search className="h-4 w-4 text-blue-600" />;
      case 'social':
      case 'referral':
        return <Globe className="h-4 w-4 text-green-600" />;
      default:
        return <Globe className="h-4 w-4 text-gray-600" />;
    }
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-400";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Источники трафика</CardTitle>
        <Button variant="outline" size="sm" onClick={onExport} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Экспорт CSV
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((source, index) => (
            <div key={source.source} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
              <div className="flex items-center gap-3">
                {getSourceIcon(source.type)}
                <div>
                  <p className="font-medium text-sm">{source.source}</p>
                  <p className="text-xs text-gray-500 capitalize">{source.type}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{formatNumber(source.visits)}</span>
                  <span className="text-xs text-gray-500">{source.percentage}%</span>
                </div>
                <div className="text-xs">
                  <span className={getChangeColor(source.change)}>
                    {source.change > 0 ? '+' : ''}{source.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralSourcesTable;
