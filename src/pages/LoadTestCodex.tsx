import SEOHead from "@/components/SEOHead";
import { useLocation } from "react-router-dom";

const loadTestScript = `#!/usr/bin/env node

import { fetch } from 'undici';
import { performance } from 'perf_hooks';

const args = process.argv.slice(2);
const url = args[0];
const durationSec = parseInt(args[1], 10);
const concurrency = parseInt(args[2], 10);
const targetTotal = args[3] ? parseInt(args[3], 10) : null;

if (!url || !durationSec || !concurrency) {
  console.error('Usage: node load-test.mjs <url> <durationSec> <concurrency> [targetTotal]');
  process.exit(1);
}

let completed = 0;
let success = 0;
let failed = 0;
const latencies = [];
const errorReasons = new Map();
let active = 0;
let stop = false;

const makeRequest = async () => {
  const start = performance.now();
  try {
    const res = await fetch(url, { timeout: 30000 });
    const latency = performance.now() - start;
    latencies.push(latency);
    if (res.ok) {
      success++;
    } else {
      failed++;
      const reason = \`HTTP \${res.status}\`;
      errorReasons.set(reason, (errorReasons.get(reason) || 0) + 1);
    }
  } catch (err) {
    failed++;
    const reason = err.code || err.message;
    errorReasons.set(reason, (errorReasons.get(reason) || 0) + 1);
  }
  completed++;
  active--;
  if (!stop && (targetTotal === null || completed < targetTotal)) {
    active++;
    makeRequest();
  }
};

const run = async () => {
  console.log(\`Starting test: \${url} | duration: \${durationSec}s | concurrency: \${concurrency} | targetTotal: \${targetTotal ?? '∞'}\`);
  const startTime = Date.now();
  for (let i = 0; i < concurrency; i++) {
    active++;
    makeRequest();
  }

  const interval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    console.log(\`[\${elapsed.toFixed(1)}s] completed: \${completed} | success: \${success} | fail: \${failed} | active: \${active}\`);
    if (targetTotal !== null && completed >= targetTotal) {
      console.log(\`Target \${targetTotal} requests reached. Stopping.\`);
      stop = true;
      clearInterval(interval);
    }
  }, 1000);

  setTimeout(() => {
    stop = true;
    clearInterval(interval);
    console.log('\\n--- Test finished ---');
    console.log(\`Total requests: \${completed}\`);
    console.log(\`Success: \${success}\`);
    console.log(\`Failed: \${failed}\`);
    if (latencies.length) {
      latencies.sort((a,b) => a - b);
      const p50 = latencies[Math.floor(latencies.length * 0.5)];
      const p95 = latencies[Math.floor(latencies.length * 0.95)];
      const p99 = latencies[Math.floor(latencies.length * 0.99)];
      console.log(\`p50: \${p50.toFixed(2)}ms | p95: \${p95.toFixed(2)}ms | p99: \${p99.toFixed(2)}ms\`);
    }
    console.log('\\nTop error reasons:');
    const sortedErrors = [...errorReasons.entries()].sort((a,b) => b[1] - a[1]);
    for (const [reason, count] of sortedErrors.slice(0, 5)) {
      console.log(\`  \${reason}: \${count}\`);
    }
  }, durationSec * 1000);
};

run().catch(console.error);`;

export default function LoadTestCodex() {
  const { pathname } = useLocation();
  const isEn = pathname.startsWith("/en/");

  const title = isEn
    ? "Performance Codex: Load Testing and Site Optimization"
    : "Codex производительности: нагрузочное тестирование и оптимизация сайта";
  const description = isEn
    ? "Load-testing playbook for calabriaexplorer.vercel.app: scripts, 20k concurrency results, error analysis, and optimization recommendations."
    : "Полный кодекс по нагрузочному тестированию сайта calabriaexplorer.vercel.app: скрипты, результаты 20k concurrency, анализ ошибок, рекомендации по оптимизации для высоких нагрузок.";
  const canonical = `https://calabriaexplorer.vercel.app${isEn ? "/en" : "/ru"}/load-test-codex`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        type="article"
        image="https://calabriaexplorer.vercel.app/images/load-test-og.jpg"
        canonical={canonical}
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: title,
          description,
          author: {
            "@type": "Organization",
            name: "Calabria Explorer",
          },
          datePublished: "2026-04-01",
          dateModified: "2026-04-01",
          inLanguage: isEn ? "en" : "ru",
        })}
      />

      <div className="mx-auto my-4 max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
        <header className="bg-[#1e4a4f] p-8 text-white">
          <div className="mb-4 inline-block rounded-[30px] bg-[#e6b17e] px-3 py-1 text-xs font-bold text-[#1e4a4f]">
            {isEn ? "April 2026 • Load Testing" : "Апрель 2026 • Нагрузочное тестирование"}
          </div>
          <h1 className="mb-2 text-3xl font-bold leading-tight">{title}</h1>
          <p>
            {isEn
              ? "Metrics, scripts and strategies to reach 1M requests on calabriaexplorer.vercel.app"
              : "Метрики, скрипты и стратегии для достижения 1M запросов на calabriaexplorer.vercel.app"}
          </p>
        </header>

        <nav className="sticky top-0 z-10 border-b border-[#e9e2d9] bg-[#fefaf5] px-8 py-3">
          <a className="mr-6 font-medium text-[#2c4a4e]" href="#results">Результаты</a>
          <a className="mr-6 font-medium text-[#2c4a4e]" href="#script">Скрипт тестирования</a>
          <a className="mr-6 font-medium text-[#2c4a4e]" href="#analysis">Анализ ошибок</a>
          <a className="mr-6 font-medium text-[#2c4a4e]" href="#optimization">Оптимизация</a>
          <a className="font-medium text-[#2c4a4e]" href="#next">Следующие шаги</a>
        </nav>

        <main className="bg-[#f5f3ef] p-4 md:p-8">
          <article className="rounded-2xl bg-white p-4 md:p-8">
            <p>
              <strong>Calabria Explorer</strong> — двуязычный сайт о Калабрии, построенный на Vercel. Для проверки
              готовности к высоким нагрузкам были проведены экстремальные тесты: 20 000 одновременных пользователей и
              попытка достичь 1 000 000 запросов.
            </p>

            <section id="results">
              <h2 className="mt-6 border-l-[5px] border-[#e6b17e] pl-4 text-3xl text-[#1e4a4f]">1. Результаты нагрузочного тестирования</h2>
              <p className="mt-3">Тесты запускались на <code>http://127.0.0.1:4173</code> (Vite preview) с помощью <code>scripts/load-test.mjs</code>.</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-[#ddd] bg-[#e9e2d9] p-2 text-left">Сценарий</th>
                      <th className="border border-[#ddd] bg-[#e9e2d9] p-2 text-left">Concurrency</th>
                      <th className="border border-[#ddd] bg-[#e9e2d9] p-2 text-left">Всего запросов</th>
                      <th className="border border-[#ddd] bg-[#e9e2d9] p-2 text-left">Успешных</th>
                      <th className="border border-[#ddd] bg-[#e9e2d9] p-2 text-left">Ошибок</th>
                      <th className="border border-[#ddd] bg-[#e9e2d9] p-2 text-left">p95 latency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#ddd] p-2">Краткий прогон</td>
                      <td className="border border-[#ddd] p-2">20 000</td>
                      <td className="border border-[#ddd] p-2">5 090</td>
                      <td className="border border-[#ddd] p-2">4 982</td>
                      <td className="border border-[#ddd] p-2">108 (≈2.1%)</td>
                      <td className="border border-[#ddd] p-2">~18 c</td>
                    </tr>
                    <tr>
                      <td className="border border-[#ddd] p-2">1M target (10 сек)</td>
                      <td className="border border-[#ddd] p-2">2 000</td>
                      <td className="border border-[#ddd] p-2">3 776</td>
                      <td className="border border-[#ddd] p-2">—</td>
                      <td className="border border-[#ddd] p-2">—</td>
                      <td className="border border-[#ddd] p-2">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="script">
              <h2 className="mt-6 border-l-[5px] border-[#e6b17e] pl-4 text-3xl text-[#1e4a4f]">2. Улучшенный скрипт нагрузочного тестирования</h2>
              <pre className="mt-4 overflow-x-auto rounded-2xl bg-[#1e2a2e] p-4 text-sm text-[#e9ecef]">
                {loadTestScript}
              </pre>
            </section>
          </article>
        </main>

        <footer className="bg-[#1e4a4f] p-6 text-center text-sm text-[#cbd5e1]">
          <p>© 2026 Calabria Explorer — кодекс производительности.</p>
        </footer>
      </div>
    </>
  );
}
