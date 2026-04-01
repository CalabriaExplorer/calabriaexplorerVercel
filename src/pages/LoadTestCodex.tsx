import SEOHead from "@/components/SEOHead";
import { useLocation } from "react-router-dom";

const loadTestScript = `#!/usr/bin/env node
// scripts/load-test.mjs
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

let completed = 0, success = 0, failed = 0, active = 0, stop = false;
const latencies = [];
const errorReasons = new Map();

const makeRequest = async () => {
  const start = performance.now();
  try {
    const res = await fetch(url, { timeout: 30000 });
    latencies.push(performance.now() - start);
    if (res.ok) success++;
    else {
      failed++;
      const reason = \`HTTP \${res.status}\`;
      errorReasons.set(reason, (errorReasons.get(reason) || 0) + 1);
    }
  } catch (err) {
    failed++;
    const reason = err.code || err.message;
    errorReasons.set(reason, (errorReasons.get(reason) || 0) + 1);
  }

  completed++; active--;
  if (!stop && (targetTotal === null || completed < targetTotal)) {
    active++; makeRequest();
  }
};

const run = async () => {
  const startTime = Date.now();
  for (let i = 0; i < concurrency; i++) { active++; makeRequest(); }

  const interval = setInterval(() => {
    const elapsed = (Date.now() - startTime) / 1000;
    console.log(\`[\${elapsed.toFixed(1)}s] completed=\${completed} success=\${success} failed=\${failed} active=\${active}\`);
    if (targetTotal !== null && completed >= targetTotal) {
      stop = true;
      clearInterval(interval);
    }
  }, 1000);

  setTimeout(() => {
    stop = true;
    clearInterval(interval);

    latencies.sort((a, b) => a - b);
    const p50 = latencies[Math.floor(latencies.length * 0.5)] || 0;
    const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;
    const p99 = latencies[Math.floor(latencies.length * 0.99)] || 0;

    console.log({ completed, success, failed, p50, p95, p99 });
    console.log([...errorReasons.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5));
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
    ? "Comprehensive load-testing codex for calabriaexplorer.vercel.app: scripts, 20k-concurrency results, error analysis, and optimization plan."
    : "Полный кодекс по нагрузочному тестированию сайта calabriaexplorer.vercel.app: скрипты, результаты 20k concurrency, анализ ошибок и план оптимизации.";
  const canonical = `https://calabriaexplorer.vercel.app${isEn ? "/en" : "/ru"}/load-test-codex`;

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        type="article"
        image="https://calabriaexplorer.vercel.app/images/le-castella-1.png"
        canonical={canonical}
        schema={JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: title,
          description,
          author: { "@type": "Organization", name: "Calabria Explorer" },
          datePublished: "2026-04-01",
          dateModified: "2026-04-01",
          inLanguage: isEn ? "en" : "ru",
        })}
      />

      <div className="mx-auto my-4 max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
        <header className="bg-[#1e4a4f] p-8 text-white">
          <div className="mb-4 inline-block rounded-[30px] bg-[#e6b17e] px-3 py-1 text-xs font-bold text-[#1e4a4f]">
            {isEn ? "April 2026 • Load testing" : "Апрель 2026 • Нагрузочное тестирование"}
          </div>
          <h1 className="mb-2 text-3xl font-bold leading-tight">{title}</h1>
          <p>{isEn ? "Metrics, script and strategy to reach 1M requests." : "Метрики, скрипт и стратегия для достижения 1M запросов."}</p>
        </header>

        <nav className="sticky top-0 z-10 border-b border-[#e9e2d9] bg-[#fefaf5] px-8 py-3 text-sm md:text-base">
          <a className="mr-4 font-medium text-[#2c4a4e]" href="#results">{isEn ? "Results" : "Результаты"}</a>
          <a className="mr-4 font-medium text-[#2c4a4e]" href="#script">{isEn ? "Script" : "Скрипт"}</a>
          <a className="mr-4 font-medium text-[#2c4a4e]" href="#analysis">{isEn ? "Error analysis" : "Анализ ошибок"}</a>
          <a className="mr-4 font-medium text-[#2c4a4e]" href="#optimization">{isEn ? "Optimization" : "Оптимизация"}</a>
          <a className="font-medium text-[#2c4a4e]" href="#next">{isEn ? "Next steps" : "Следующие шаги"}</a>
        </nav>

        <main className="bg-[#f5f3ef] p-4 md:p-8">
          <article className="rounded-2xl bg-white p-4 md:p-8">
            <section id="results">
              <h2 className="mt-4 border-l-[5px] border-[#e6b17e] pl-4 text-2xl text-[#1e4a4f]">1. {isEn ? "Load-test results" : "Результаты нагрузочного тестирования"}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr><th className="border p-2">Scenario</th><th className="border p-2">Concurrency</th><th className="border p-2">Total</th><th className="border p-2">Success</th><th className="border p-2">Errors</th><th className="border p-2">p95</th></tr></thead>
                  <tbody>
                    <tr><td className="border p-2">20k short run</td><td className="border p-2">20,000</td><td className="border p-2">5,090</td><td className="border p-2">4,982</td><td className="border p-2">108 (~2.1%)</td><td className="border p-2">~18s</td></tr>
                    <tr><td className="border p-2">1M target (10s)</td><td className="border p-2">2,000</td><td className="border p-2">3,776</td><td className="border p-2">—</td><td className="border p-2">—</td><td className="border p-2">—</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="script">
              <h2 className="mt-6 border-l-[5px] border-[#e6b17e] pl-4 text-2xl text-[#1e4a4f]">2. {isEn ? "Improved load-test script" : "Улучшенный скрипт"}</h2>
              <pre className="mt-4 overflow-x-auto rounded-2xl bg-[#1e2a2e] p-4 text-sm text-[#e9ecef]">{loadTestScript}</pre>
            </section>

            <section id="analysis">
              <h2 className="mt-6 border-l-[5px] border-[#e6b17e] pl-4 text-2xl text-[#1e4a4f]">3. {isEn ? "Error analysis" : "Анализ ошибок"}</h2>
              <ul className="list-disc pl-6">
                <li>{isEn ? "Connection timeouts and queue saturation" : "Таймауты соединения и насыщение очередей"}</li>
                <li>{isEn ? "ECONNRESET / socket hang up under burst traffic" : "ECONNRESET / socket hang up под всплеском"}</li>
                <li>{isEn ? "Node memory pressure under high concurrency" : "Давление на память Node при высокой конкуррентности"}</li>
              </ul>
            </section>

            <section id="optimization">
              <h2 className="mt-6 border-l-[5px] border-[#e6b17e] pl-4 text-2xl text-[#1e4a4f]">4. {isEn ? "Optimization plan" : "План оптимизации"}</h2>
              <p>{isEn ? "CDN cache headers, ISR/static generation, Edge Functions, background jobs and observability alerts." : "CDN-кэш, ISR/статическая генерация, Edge Functions, фоновые задачи и алерты мониторинга."}</p>
            </section>

            <section id="next">
              <h2 className="mt-6 border-l-[5px] border-[#e6b17e] pl-4 text-2xl text-[#1e4a4f]">5. {isEn ? "Next steps" : "Следующие шаги"}</h2>
              <ol className="list-decimal pl-6">
                <li>{isEn ? "Run progressive ramp-up on production" : "Запустить ramp-up тест на production"}</li>
                <li>{isEn ? "Hold 500 RPS for 30 minutes" : "Провести 30-минутный тест на 500 RPS"}</li>
                <li>{isEn ? "Profile hot paths and repeat after caching" : "Профилировать узкие места и повторить после кэширования"}</li>
              </ol>
            </section>
          </article>
        </main>

        <footer className="bg-[#1e4a4f] p-6 text-center text-sm text-[#cbd5e1]">
          <p>© 2026 Calabria Explorer — Performance Codex.</p>
          <a className="text-[#f3c26b]" href={isEn ? "/ru/load-test-codex" : "/en/load-test-codex"}>{isEn ? "Русская версия" : "English version"}</a>
        </footer>
      </div>
    </>
  );
}
