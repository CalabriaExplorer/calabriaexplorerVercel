import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import PeriodFilters, { FilterOptions } from '@/components/analytics/PeriodFilters';
import KPICards, { KPIData } from '@/components/analytics/KPICards';
import InteractiveChart, { ChartDataPoint } from '@/components/analytics/InteractiveChart';
import DataTable from '@/components/analytics/DataTable';
import PageStatsTable from '@/components/analytics/PageStatsTable';
import ReferralSourcesTable from '@/components/analytics/ReferralSourcesTable';
import GeographicStats from '@/components/analytics/GeographicStats';
import TimeOnPageStats from '@/components/analytics/TimeOnPageStats';
import { toast } from '@/hooks/use-toast';
import { format, subDays } from 'date-fns';

const Analytics = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    periodType: 'day',
    dateRange: 'last30',
    startDate: subDays(new Date(), 30),
    endDate: new Date()
  });

  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [kpiData, setKpiData] = useState<KPIData[]>([]);
  const [pageStats, setPageStats] = useState<any[]>([]);
  const [referralSources, setReferralSources] = useState<any[]>([]);
  const [countryData, setCountryData] = useState<any[]>([]);
  const [cityData, setCityData] = useState<any[]>([]);
  const [timeOnPageData, setTimeOnPageData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Pages to track
  const trackedPages = [
    { path: '/', name: 'Главная страница' },
    { path: '/tours', name: 'Экскурсии' },
    { path: '/melissa', name: 'Экскурсия Мелисса' },
    { path: '/umbriatico', name: 'Экскурсия Умбриатико' },
    { path: '/ten-steps', name: '10 шагов' },
    { path: '/senatore-vini', name: 'Винодельня Сенаторе' },
    { path: '/stat', name: 'Статистика' }
  ];

  // Mock data generator for page visits
  const generateMockPageStats = (): any[] => {
    return trackedPages.map(page => {
      const visits = Math.floor(Math.random() * 1000) + 50;
      const prevVisits = Math.floor(visits * (0.8 + Math.random() * 0.4));
      const change = prevVisits > 0 ? ((visits - prevVisits) / prevVisits) * 100 : 0;
      
      return {
        page: page.name,
        path: page.path,
        visits,
        prevVisits,
        change: Number(change.toFixed(1)),
        percentage: Number(((visits / 5000) * 100).toFixed(1)) // из общего числа посетителей
      };
    }).sort((a, b) => b.visits - a.visits);
  };

  // Mock data generator for chart
  const generateMockData = (filters: FilterOptions): ChartDataPoint[] => {
    const data: ChartDataPoint[] = [];
    const startDate = filters.startDate || subDays(new Date(), 30);
    const endDate = filters.endDate || new Date();
    
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    for (let i = 0; i <= daysDiff; i++) {
      const currentDate = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      const baseValue = 1000 + Math.sin(i * 0.2) * 200;
      const randomVariation = (Math.random() - 0.5) * 300;
      const value = Math.max(0, Math.round(baseValue + randomVariation));
      
      let percentChange: number | null = null;
      if (i > 0) {
        const prevValue = data[i - 1].value;
        percentChange = prevValue > 0 ? ((value - prevValue) / prevValue) * 100 : 0;
      }

      data.push({
        date: format(currentDate, 'dd.MM'),
        value,
        percentChange,
        formattedDate: format(currentDate, 'dd MMMM yyyy')
      });
    }

    return data;
  };

  const generateKPIData = (chartData: ChartDataPoint[]): KPIData[] => {
    if (chartData.length === 0) return [];

    const currentValue = chartData[chartData.length - 1]?.value || 0;
    const previousValue = chartData[chartData.length - 2]?.value || 0;
    const percentChange = previousValue > 0 ? ((currentValue - previousValue) / previousValue) * 100 : 0;

    const totalValue = chartData.reduce((sum, item) => sum + item.value, 0);
    const avgValue = totalValue / chartData.length;

    return [
      {
        title: 'Посетители сегодня',
        currentValue,
        percentChange,
        previousValue
      },
      {
        title: 'Среднее за период',
        currentValue: Math.round(avgValue),
        percentChange: Math.random() * 20 - 10,
        previousValue: Math.round(avgValue * 0.9)
      },
      {
        title: 'Всего за период',
        currentValue: totalValue,
        percentChange: Math.random() * 15 - 5,
        previousValue: Math.round(totalValue * 0.95)
      },
      {
        title: 'Максимум за период',
        currentValue: Math.max(...chartData.map(d => d.value)),
        percentChange: Math.random() * 25 - 10,
        previousValue: Math.max(...chartData.map(d => d.value)) - 50
      }
    ];
  };

  // Mock data generator for referral sources
  const generateMockReferralSources = (): any[] => {
    const sources = [
      { source: 'Google', type: 'search' },
      { source: 'Yandex', type: 'search' },
      { source: 'Facebook', type: 'social' },
      { source: 'Instagram', type: 'social' },
      { source: 'Прямые переходы', type: 'direct' },
      { source: 'booking.com', type: 'referral' },
      { source: 'tripadvisor.com', type: 'referral' },
      { source: 'airbnb.com', type: 'referral' }
    ];

    return sources.map(source => {
      const visits = Math.floor(Math.random() * 500) + 20;
      const change = Math.floor(Math.random() * 40) - 20;
      const percentage = Number(((visits / 2000) * 100).toFixed(1));
      
      return {
        ...source,
        visits,
        change,
        percentage
      };
    }).sort((a, b) => b.visits - a.visits);
  };

  // Mock data generator for geographic stats
  const generateMockGeographicData = () => {
    const countries = [
      { country: 'Россия', flag: '🇷🇺' },
      { country: 'Италия', flag: '🇮🇹' },
      { country: 'Германия', flag: '🇩🇪' },
      { country: 'Франция', flag: '🇫🇷' },
      { country: 'США', flag: '🇺🇸' },
      { country: 'Великобритания', flag: '🇬🇧' },
      { country: 'Испания', flag: '🇪🇸' },
      { country: 'Украина', flag: '🇺🇦' }
    ];

    const cities = [
      { city: 'Москва', country: 'Россия' },
      { city: 'Рим', country: 'Италия' },
      { city: 'Милан', country: 'Италия' },
      { city: 'Берлин', country: 'Германия' },
      { city: 'Париж', country: 'Франция' },
      { city: 'Лондон', country: 'Великобритания' },
      { city: 'Нью-Йорк', country: 'США' },
      { city: 'Санкт-Петербург', country: 'Россия' }
    ];

    const countryStats = countries.map(country => {
      const visits = Math.floor(Math.random() * 800) + 50;
      const percentage = Number(((visits / 3000) * 100).toFixed(1));
      return { ...country, visits, percentage };
    }).sort((a, b) => b.visits - a.visits);

    const cityStats = cities.map(city => {
      const visits = Math.floor(Math.random() * 400) + 30;
      const percentage = Number(((visits / 1500) * 100).toFixed(1));
      return { ...city, visits, percentage };
    }).sort((a, b) => b.visits - a.visits);

    return { countryStats, cityStats };
  };

  // Mock data generator for time on page
  const generateMockTimeOnPageData = (): any[] => {
    return trackedPages.map(page => {
      const totalSeconds = Math.floor(Math.random() * 300) + 30; // 30-330 seconds
      const avgTimeMinutes = Math.floor(totalSeconds / 60);
      const avgTimeSeconds = totalSeconds % 60;
      const bounceRate = Math.floor(Math.random() * 70) + 10; // 10-80%
      const visits = Math.floor(Math.random() * 1000) + 50;
      
      return {
        page: page.name,
        path: page.path,
        avgTimeMinutes,
        avgTimeSeconds,
        bounceRate,
        visits
      };
    }).sort((a, b) => (b.avgTimeMinutes * 60 + b.avgTimeSeconds) - (a.avgTimeMinutes * 60 + a.avgTimeSeconds));
  };

  const loadData = async () => {
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newChartData = generateMockData(filters);
      const newKpiData = generateKPIData(newChartData);
      const newPageStats = generateMockPageStats();
      const newReferralSources = generateMockReferralSources();
      const { countryStats, cityStats } = generateMockGeographicData();
      const newTimeOnPageData = generateMockTimeOnPageData();
      
      setChartData(newChartData);
      setKpiData(newKpiData);
      setPageStats(newPageStats);
      setReferralSources(newReferralSources);
      setCountryData(countryStats);
      setCityData(cityStats);
      setTimeOnPageData(newTimeOnPageData);
      
      toast({
        title: "Данные обновлены",
        description: "Статистика успешно загружена"
      });
    } catch (error) {
      toast({
        title: "Ошибка загрузки",
        description: "Не удалось загрузить данные статистики",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    const csvContent = [
      ['Дата', 'Значение', 'Изменение (%)'].join(','),
      ...chartData.map(row => [
        row.formattedDate,
        row.value,
        row.percentChange?.toFixed(1) || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `analytics_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast({
      title: "Экспорт завершен",
      description: "Данные сохранены в CSV файл"
    });
  };

  const handleExportPageStats = () => {
    const csvContent = [
      ['Страница', 'Посещения', 'Предыдущий период', 'Изменение (%)', 'Доля (%)'].join(','),
      ...pageStats.map(row => [
        row.page,
        row.visits,
        row.prevVisits,
        row.change,
        row.percentage
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `page_stats_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast({
      title: "Экспорт завершен",
      description: "Статистика страниц сохранена в CSV файл"
    });
  };

  const handleExportReferralSources = () => {
    const csvContent = [
      ['Источник', 'Тип', 'Посещения', 'Изменение (%)', 'Доля (%)'].join(','),
      ...referralSources.map(row => [
        row.source,
        row.type,
        row.visits,
        row.change,
        row.percentage
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `referral_sources_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast({
      title: "Экспорт завершен",
      description: "Источники трафика сохранены в CSV файл"
    });
  };

  const handleExportGeographicData = () => {
    const csvContent = [
      ['Страна/Город', 'Посещения', 'Доля (%)'].join(','),
      ...countryData.map(row => [row.country, row.visits, row.percentage].join(',')),
      ...cityData.map(row => [`${row.city}, ${row.country}`, row.visits, row.percentage].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `geographic_data_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast({
      title: "Экспорт завершен",
      description: "Географические данные сохранены в CSV файл"
    });
  };

  const handleExportTimeOnPage = () => {
    const csvContent = [
      ['Страница', 'Время (секунды)', 'Показатель отказов (%)', 'Посещения'].join(','),
      ...timeOnPageData.map(row => [
        row.page,
        row.avgTimeMinutes * 60 + row.avgTimeSeconds,
        row.bounceRate,
        row.visits
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `time_on_page_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast({
      title: "Экспорт завершен",
      description: "Время на странице сохранено в CSV файл"
    });
  };

  const getPeriodTitle = () => {
    if (!filters.startDate || !filters.endDate) return 'Статистика';
    
    const start = format(filters.startDate, 'dd.MM.yyyy');
    const end = format(filters.endDate, 'dd.MM.yyyy');
    
    return `Статистика посещений: ${start} - ${end}`;
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout title="Аналитика" description="Интерактивный дашборд статистики">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Аналитика</h1>
          <p className="text-gray-600">Интерактивный дашборд статистики посещений</p>
        </div>

        <PeriodFilters
          filters={filters}
          onFiltersChange={setFilters}
          onApply={loadData}
        />

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            <KPICards data={kpiData} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <InteractiveChart
                data={chartData}
                title={getPeriodTitle()}
                subtitle={`Группировка по: ${
                  filters.periodType === 'day' ? 'дням' :
                  filters.periodType === 'week' ? 'неделям' :
                  filters.periodType === 'month' ? 'месяцам' : 'годам'
                }`}
              />
              
              <PageStatsTable
                data={pageStats}
                onExport={handleExportPageStats}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <ReferralSourcesTable
                data={referralSources}
                onExport={handleExportReferralSources}
              />
              
              <TimeOnPageStats
                data={timeOnPageData}
                onExport={handleExportTimeOnPage}
              />
            </div>

            <div className="mb-6">
              <GeographicStats
                countryData={countryData}
                cityData={cityData}
                onExport={handleExportGeographicData}
              />
            </div>

            <DataTable
              data={chartData}
              onExport={handleExportCSV}
            />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Analytics;
