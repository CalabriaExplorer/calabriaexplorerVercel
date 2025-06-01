
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export interface FilterOptions {
  periodType: 'day' | 'week' | 'month' | 'year';
  dateRange: 'custom' | 'last7' | 'last30' | 'currentMonth' | 'currentYear';
  startDate?: Date;
  endDate?: Date;
}

interface PeriodFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onApply: () => void;
}

const PeriodFilters = ({ filters, onFiltersChange, onApply }: PeriodFiltersProps) => {
  const handlePeriodTypeChange = (value: string) => {
    onFiltersChange({
      ...filters,
      periodType: value as FilterOptions['periodType']
    });
  };

  const handleDateRangeChange = (value: string) => {
    const newFilters = {
      ...filters,
      dateRange: value as FilterOptions['dateRange']
    };

    // Set predefined date ranges
    const now = new Date();
    if (value === 'last7') {
      newFilters.endDate = now;
      newFilters.startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    } else if (value === 'last30') {
      newFilters.endDate = now;
      newFilters.startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    } else if (value === 'currentMonth') {
      newFilters.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      newFilters.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    } else if (value === 'currentYear') {
      newFilters.startDate = new Date(now.getFullYear(), 0, 1);
      newFilters.endDate = new Date(now.getFullYear(), 11, 31);
    }

    onFiltersChange(newFilters);
  };

  const handleDateChange = (type: 'start' | 'end', date?: Date) => {
    onFiltersChange({
      ...filters,
      [type === 'start' ? 'startDate' : 'endDate']: date
    });
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Period Type */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Группировка</Label>
            <RadioGroup
              value={filters.periodType}
              onValueChange={handlePeriodTypeChange}
              className="flex flex-wrap gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="day" id="day" />
                <Label htmlFor="day" className="text-sm">Дни</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="week" id="week" />
                <Label htmlFor="week" className="text-sm">Недели</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="month" id="month" />
                <Label htmlFor="month" className="text-sm">Месяцы</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="year" id="year" />
                <Label htmlFor="year" className="text-sm">Годы</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Date Range Preset */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Период</Label>
            <Select value={filters.dateRange} onValueChange={handleDateRangeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите период" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7">Последние 7 дней</SelectItem>
                <SelectItem value="last30">Последние 30 дней</SelectItem>
                <SelectItem value="currentMonth">Текущий месяц</SelectItem>
                <SelectItem value="currentYear">Текущий год</SelectItem>
                <SelectItem value="custom">Произвольный</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Custom Date Range */}
          {filters.dateRange === 'custom' && (
            <>
              <div>
                <Label className="text-sm font-medium mb-2 block">Начальная дата</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !filters.startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.startDate ? format(filters.startDate, "dd.MM.yyyy") : "Выберите дату"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={filters.startDate}
                      onSelect={(date) => handleDateChange('start', date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-sm font-medium mb-2 block">Конечная дата</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !filters.endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.endDate ? format(filters.endDate, "dd.MM.yyyy") : "Выберите дату"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={filters.endDate}
                      onSelect={(date) => handleDateChange('end', date)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </>
          )}

          {/* Apply Button */}
          <div className="md:col-start-4">
            <Button onClick={onApply} className="w-full">
              Применить
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PeriodFilters;
