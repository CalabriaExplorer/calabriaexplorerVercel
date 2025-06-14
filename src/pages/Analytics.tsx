
import React, { useState, useEffect } from "react";

const METRIKA_STORAGE_KEY = "yandex_metrika_settings";
const API_URL =
  "https://api-metrika.yandex.net/stat/v1/data"; // примерный endpoint

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

type MetrikaData = {
  visits: number;
  pageviews: number;
  users: number;
};

const fetchMetrikaData = async (
  counterId: string,
  token: string
): Promise<MetrikaData> => {
  const { from, to } = getDateRange();
  const url = `https://api-metrika.yandex.net/stat/v1/data?metrics=ym:s:visits,ym:s:pageviews,ym:s:users&date1=${from}&date2=${to}&id=${counterId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `OAuth ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка API Яндекс Метрики");
  }

  const json = await response.json();

  // Данные обычно во втором вложенном массиве data[0].metrics[]
  const metrics =
    json.data && json.data.length > 0 && json.data[0].metrics
      ? json.data[0].metrics
      : [0, 0, 0];

  return {
    visits: metrics[0] || 0,
    pageviews: metrics[1] || 0,
    users: metrics[2] || 0,
  };
};

const Analytics = () => {
  const [token, setToken] = useState("");
  const [counterId, setCounterId] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stat, setStat] = useState<MetrikaData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // При загрузке достаем токен/ID из localStorage
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

  // Если всё есть — грузим статистику
  useEffect(() => {
    if (token && counterId) {
      setLoading(true);
      setError(null);
      fetchMetrikaData(counterId, token)
        .then(setStat)
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }
  }, [token, counterId]);

  // Форма сохранения токена и id счётчика
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    localStorage.setItem(
      METRIKA_STORAGE_KEY,
      JSON.stringify({ token, counterId })
    );
    setSaving(false);
    setError(null);
    setStat(null);
    // вручную триггерим загрузку
    setLoading(true);
    fetchMetrikaData(counterId, token)
      .then(setStat)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Яндекс Метрика — Статистика</h1>

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

      {loading && <div>Загрузка данных Яндекс Метрики...</div>}
      {error && <div className="text-red-600 font-semibold mb-3">{error}</div>}

      {stat && (
        <div className="bg-gray-100 rounded p-4 flex flex-col gap-2">
          <div>
            <span className="font-semibold">Визиты:</span>{" "}
            <span className="font-mono">{stat.visits}</span>
          </div>
          <div>
            <span className="font-semibold">Просмотры страниц:</span>{" "}
            <span className="font-mono">{stat.pageviews}</span>
          </div>
          <div>
            <span className="font-semibold">Уникальные посетители:</span>{" "}
            <span className="font-mono">{stat.users}</span>
          </div>
        </div>
      )}
      <div className="mt-7 text-xs text-gray-400">
        Прямое подключение через Яндекс API. Токен и ID хранятся только у вас в браузере.
      </div>
    </div>
  );
};

export default Analytics;
