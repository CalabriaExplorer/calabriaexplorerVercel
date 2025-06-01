
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { ChartDataPoint } from './InteractiveChart';

interface DataTableProps {
  data: ChartDataPoint[];
  onExport: () => void;
}

const DataTable = ({ data, onExport }: DataTableProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Подробные данные</CardTitle>
        <Button variant="outline" size="sm" onClick={onExport} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Экспорт CSV
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 font-medium">Дата</th>
                <th className="text-right p-2 font-medium">Значение</th>
                <th className="text-right p-2 font-medium">Изменение (%)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2">{row.formattedDate}</td>
                  <td className="p-2 text-right">{formatNumber(row.value)}</td>
                  <td className={`p-2 text-right ${
                    row.percentChange === null 
                      ? 'text-gray-400' 
                      : row.percentChange >= 0 
                        ? 'text-green-600' 
                        : 'text-red-600'
                  }`}>
                    {row.percentChange === null 
                      ? '—' 
                      : `${row.percentChange > 0 ? '+' : ''}${row.percentChange.toFixed(1)}%`
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataTable;
