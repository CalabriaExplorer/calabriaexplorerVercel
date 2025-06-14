
import React, { useState, useEffect } from "react";

// --- Мелкие утилиты ---
const METRIKA_STORAGE_KEY = "yandex_metrika_settings";
const API_URL = "https://api-metrika.yandex.net/stat/v1/data";

// Дата за последние 7 дней
const getDateRange = () => {
  const to = new Date();
  const from = new Date();
  from.setDate(from.getDate() - 7);
  return {
    from: from.toISOString().slice(0, 10),
    to: to.toISOString().slice(0, 10),
  };
};

const formatNumber = (num: number | string) =>
  new Intl.NumberFormat("ru-RU").format(Number(num));

// --- Метрики: Визиты, пользователи, просмотры ---
function useCoreStats(counterId: string, token: string) {
  const [data, setData] = useState<{ visits: number; pageviews: number; users: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!counterId || !token) return;
    setLoading(true);
    setError(null);

    const { from, to } = getDateRange();
    const url = `${API_URL}?metrics=ym:s:visits,ym:s:pageviews,ym:s:users&id=${counterId}&date1=${from}&date2=${to}`;

    fetch(url, { headers: { Authorization: `OAuth ${token}` } })
      .then(r => {
        if (!r.ok) throw new Error("Ошибка загрузки основных метрик");
        return r.json();
      })
      .then(json => {
        const metrics = json.data && json.data.length > 0 && json.data[0].metrics
          ? json.data[0].metrics : [0, 0, 0];
        setData({
          visits: metrics[0] || 0,
          pageviews: metrics[1] || 0,
          users: metrics[2] || 0,
        });
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [counterId, token]);

  return { data, loading, error };
}

// --- ТОП страницы ---
function useTopPages(counterId: string, token: string) {
  const [data, setData] = useState<Array<{ url: string; visits: number }> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!counterId || !token) return;
    setLoading(true);
    setError(null);
    const { from, to } = getDateRange();
    const url = `${API_URL}?dimensions=ym:pv:URL&metrics=ym:s:visits&id=${counterId}&date1=${from}&date2=${to}&limit=10&sort=-ym:s:visits`;

    fetch(url, { headers: { Authorization: `OAuth ${token}` } })
      .then(r => {
        if (!r.ok) throw new Error("Ошибка загрузки топ страниц");
        return r.json();
      })
      .then(json => {
        const pages =
          json.data?.map((row: any) => ({
            url: row.dimensions[0]?.name || "—",
            visits: row.metrics[0] || 0,
          })) || [];
        setData(pages);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [counterId, token]);
  return { data, loading, error };
}

// --- Поисковые системы (SEO) ---
function useSearchEngines(counterId: string, token: string) {
  const [data, setData] = useState<Array<{ engine: string; visits: number; users: number }> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!counterId || !token) return;
    setLoading(true);
    setError(null);

    const { from, to } = getDateRange();
    // Сгруппировано по поисковым системам с фильтром на источник = поисковые системы
    const url = `${API_URL}?dimensions=ym:s:searchEngineName&metrics=ym:s:visits,ym:s:users&filters=ym:s:trafficSourceName=='Переходы из поисковых систем'&id=${counterId}&date1=${from}&date2=${to}&limit=10&sort=-ym:s:visits`;

    fetch(url, { headers: { Authorization: `OAuth ${token}` } })
      .then(r => {
        if (!r.ok) throw new Error("Ошибка загрузки поисковых систем");
        return r.json();
      })
      .then(json => {
        const engines =
          json.data?.map((row: any) => ({
            engine: row.dimensions[0]?.name || "—",
            visits: row.metrics[0] || 0,
            users: row.metrics[1] || 0,
          })) || [];
        setData(engines);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [counterId, token]);
  return { data, loading, error };
}

// --- География (страны/город) ---
function useGeoStats(counterId: string, token: string) {
  const [data, setData] = useState<Array<{ geo: string; visits: number }> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!counterId || !token) return;
    setLoading(true);
    setError(null);
    const { from, to } = getDateRange();
    // Группируем по стране (можно поменять на ym:s:regionName)
    const url = `${API_URL}?dimensions=ym:s:regionCountryName&metrics=ym:s:visits&id=${counterId}&date1=${from}&date2=${to}&limit=10&sort=-ym:s:visits`;

    fetch(url, { headers: { Authorization: `OAuth ${token}` } })
      .then(r => {
        if (!r.ok) throw new Error("Ошибка загрузки географии");
        return r.json();
      })
      .then(json => {
        const regions =
          json.data?.map((row: any) => ({
            geo: row.dimensions[0]?.name || "—",
            visits: row.metrics[0] || 0,
          })) || [];
        setData(regions);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [counterId, token]);
  return { data, loading, error };
}

// --- Источники трафика ---
function useTrafficSources(counterId: string, token: string) {
  const [data, setData] = useState<Array<{ source: string; visits: number }> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!counterId || !token) return;
    setLoading(true);
    setError(null);
    const { from, to } = getDateRange();
    const url = `${API_URL}?dimensions=ym:s:trafficSourceName&metrics=ym:s:visits&id=${counterId}&date1=${from}&date2=${to}&limit=10&sort=-ym:s:visits`;

    fetch(url, { headers: { Authorization: `OAuth ${token}` } })
      .then(r => {
        if (!r.ok) throw new Error("Ошибка загрузки источников трафика");
        return r.json();
      })
      .then(json => {
        const sources =
          json.data?.map((row: any) => ({
            source: row.dimensions[0]?.name || "—",
            visits: row.metrics[0] || 0,
          })) || [];
        setData(sources);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [counterId, token]);
  return { data, loading, error };
}

const Analytics = () => {
  const [token, setToken] = useState("");
  const [counterId, setCounterId] = useState("");
  const [saving, setSaving] = useState(false);

  // Достаем токен и id из localStorage
  useEffect(() => {
    const saved = localStorage.getItem(METRIKA_STORAGE_KEY);
    if (saved) {
      try {
        const obj = JSON.parse(saved) as { token: string; counterId: string };
        setToken(obj.token);
        setCounterId(obj.counterId);
      } catch {}
    }
  }, []);

  // Форма
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    localStorage.setItem(
      METRIKA_STORAGE_KEY,
      JSON.stringify({ token, counterId })
    );
    setSaving(false);
    window.location.reload(); // Обновим, чтобы сразу все секции запустились чисто
  };

  // Подключаем hooks если указаны параметры
  const coreStats = useCoreStats(counterId, token);
  const topPages = useTopPages(counterId, token);
  const searchEngines = useSearchEngines(counterId, token);
  const geoStats = useGeoStats(counterId, token);
  const trafficSources = useTrafficSources(counterId, token);

  // Устанавливаем <meta name="robots" ...> (noindex для поисковиков)
  useEffect(() => {
    let tag = document.querySelector("meta[name='robots']");
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute("name", "robots");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", "noindex, nofollow");
    return () => {
      tag?.parentNode?.removeChild(tag);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Яндекс Метрика — Дашборд</h1>
      <form
        onSubmit={handleSave}
        className="bg-white rounded shadow p-4 mb-6 flex flex-col gap-4"
      >
        <div>
          <label className="block font-semibold mb-1">
            OAuth токен Яндекс Метрики
          </label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="y0_..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
          <span className="text-xs text-gray-500">
            Получите токен на{" "}
            <a
              className="underline"
              href="https://oauth.yandex.ru/authorize?response_type=token&client_id=f03b37738cae451f8eeb9be6ada6227d"
              target="_blank"
              rel="noopener noreferrer"
            >
              oauth.yandex.ru
            </a>
          </span>
        </div>
        <div>
          <label className="block font-semibold mb-1">ID счётчика</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            placeholder="например, 12345678"
            value={counterId}
            onChange={(e) => setCounterId(e.target.value)}
            required
          />
        </div>
        <button
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          {saving ? "Сохранение..." : "Сохранить и загрузить"}
        </button>
      </form>

      {/* Основные метрики */}
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Основные показатели (7 дней)</h2>
        {coreStats.loading && <div>Загрузка...</div>}
        {coreStats.error && <div className="text-red-600">{coreStats.error}</div>}
        {coreStats.data && (
          <div className="flex gap-6 flex-wrap">
            <div className="bg-gray-100 rounded p-4 min-w-[130px]">
              <div className="text-gray-700">Визиты</div>
              <div className="font-bold text-2xl">{formatNumber(coreStats.data.visits)}</div>
            </div>
            <div className="bg-gray-100 rounded p-4 min-w-[130px]">
              <div className="text-gray-700">Просмотры</div>
              <div className="font-bold text-2xl">{formatNumber(coreStats.data.pageviews)}</div>
            </div>
            <div className="bg-gray-100 rounded p-4 min-w-[130px]">
              <div className="text-gray-700">Пользователи</div>
              <div className="font-bold text-2xl">{formatNumber(coreStats.data.users)}</div>
            </div>
          </div>
        )}
      </section>

      {/* ТОП страницы */}
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Топ страниц</h2>
        {topPages.loading && <div>Загрузка...</div>}
        {topPages.error && <div className="text-red-600">{topPages.error}</div>}
        {topPages.data && (
          <table className="w-full border-collapse text-sm">
            <thead><tr><th className="text-left">URL</th><th className="text-right">Визиты</th></tr></thead>
            <tbody>
              {topPages.data.map((row, i) => (
                <tr key={i}>
                  <td className="p-2">{row.url}</td>
                  <td className="p-2 text-right">{formatNumber(row.visits)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Поисковые системы */}
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Переходы из поисковых систем</h2>
        {searchEngines.loading && <div>Загрузка...</div>}
        {searchEngines.error && <div className="text-red-600">{searchEngines.error}</div>}
        {searchEngines.data && (
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="text-left">Система</th>
                <th className="text-right">Визиты</th>
                <th className="text-right">Пользователи</th>
              </tr>
            </thead>
            <tbody>
              {searchEngines.data.map((row, i) => (
                <tr key={i}>
                  <td className="p-2">{row.engine}</td>
                  <td className="p-2 text-right">{formatNumber(row.visits)}</td>
                  <td className="p-2 text-right">{formatNumber(row.users)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* География */}
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">География посетителей</h2>
        {geoStats.loading && <div>Загрузка...</div>}
        {geoStats.error && <div className="text-red-600">{geoStats.error}</div>}
        {geoStats.data && (
          <table className="w-full border-collapse text-sm">
            <thead><tr><th className="text-left">Страна</th><th className="text-right">Визиты</th></tr></thead>
            <tbody>
              {geoStats.data.map((row, i) => (
                <tr key={i}>
                  <td className="p-2">{row.geo}</td>
                  <td className="p-2 text-right">{formatNumber(row.visits)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Источники трафика */}
      <section className="mb-8">
        <h2 className="font-bold text-lg mb-2">Источники трафика</h2>
        {trafficSources.loading && <div>Загрузка...</div>}
        {trafficSources.error && <div className="text-red-600">{trafficSources.error}</div>}
        {trafficSources.data && (
          <table className="w-full border-collapse text-sm">
            <thead><tr><th className="text-left">Источник</th><th className="text-right">Визиты</th></tr></thead>
            <tbody>
              {trafficSources.data.map((row, i) => (
                <tr key={i}>
                  <td className="p-2">{row.source}</td>
                  <td className="p-2 text-right">{formatNumber(row.visits)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <div className="mt-7 text-xs text-gray-400">
        Все данные берутся через API Яндекс Метрики (бесплатно). Токен и ID хранятся только у вас в браузере. Для расширенного сбора и других срезов напишите разработчику.<br />
        Дата: последние 7 дней. Для собственного периода — напишите мне.
      </div>
    </div>
  );
};

export default Analytics;
