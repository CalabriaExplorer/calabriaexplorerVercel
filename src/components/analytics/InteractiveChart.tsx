
import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface ChartDataPoint {
  date: string;
  value: number;
  percentChange: number | null;
  formattedDate: string;
}

interface InteractiveChartProps {
  data: ChartDataPoint[];
  title: string;
  subtitle?: string;
}

const InteractiveChart = ({ data, title, subtitle }: InteractiveChartProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium">{data.formattedDate}</p>
          <p className="text-blue-600">
            <span className="font-medium">Значение:</span> {new Intl.NumberFormat('ru-RU').format(data.value)}
          </p>
          {data.percentChange !== null && (
            <p className={data.percentChange >= 0 ? "text-green-600" : "text-red-600"}>
              <span className="font-medium">Изменение:</span> {data.percentChange > 0 ? '+' : ''}{data.percentChange}%
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right"
                tick={{ fontSize: 12 }}
                domain={['dataMin - 5', 'dataMax + 5']}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                yAxisId="left"
                dataKey="value" 
                fill="#3b82f6" 
                name="Абсолютные значения"
                radius={[2, 2, 0, 0]}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="percentChange" 
                stroke="#ef4444"
                strokeWidth={2}
                name="Изменение (%)"
                dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                connectNulls={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveChart;
