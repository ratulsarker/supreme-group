import type { CSSProperties } from "react";

// Export value in USD, from the Supreme Stitch company profile.
const data = [
  { year: 2015, value: 12_232_400 },
  { year: 2016, value: 13_794_133 },
  { year: 2017, value: 19_080_661 },
  { year: 2018, value: 23_774_721 },
  { year: 2019, value: 25_834_584 },
  { year: 2020, value: 14_259_630 },
  { year: 2021, value: 29_781_221 },
  { year: 2022, value: 51_342_139 },
  { year: 2023, value: 60_138_029 },
  { year: 2024, value: 65_275_350 },
];

// Label only the points that carry the story: the start, the 2020 dip, the latest.
const labelled = new Set([2015, 2020, 2024]);

const MAX = 70_000_000;
const ticks = [0, 20_000_000, 40_000_000, 60_000_000];

const usd = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M` : `$${n}`;

const full = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function ExportChart() {
  return (
    <figure className="xc">
      <figcaption className="xc-head">
        <p className="section-eyebrow">Export Growth</p>
        <h2 className="section-h2-dark">Export value, 2015 to 2024</h2>
        <p className="xc-sub">
          Annual export value in US dollars. A dip in 2020 during the global
          slowdown was reversed within a year, followed by rapid growth to 2024.
        </p>
      </figcaption>

      <div className="xc-plot" role="img"
        aria-label="Bar chart of Supreme Stitch annual export value from 12.2 million dollars in 2015 to 65.3 million dollars in 2024, with a dip to 14.3 million in 2020.">
        {/* recessive gridlines */}
        <div className="xc-grid" aria-hidden="true">
          {[...ticks].reverse().map((t) => (
            <div key={t} className="xc-gridline">
              <span>{t === 0 ? "0" : usd(t)}</span>
            </div>
          ))}
        </div>

        <div className="xc-bars">
          {data.map((d) => {
            const h = (d.value / MAX) * 100;
            return (
              <div key={d.year} className="xc-col">
                <div className="xc-bar-wrap">
                  {labelled.has(d.year) && (
                    <span className="xc-value" style={{ bottom: `calc(${h}% + 8px)` } as CSSProperties}>
                      {usd(d.value)}
                    </span>
                  )}
                  <div className="xc-bar" style={{ height: `${h}%` } as CSSProperties}>
                    <span className="xc-tip">
                      {d.year}: {full(d.value)}
                    </span>
                  </div>
                </div>
                <span className="xc-year">{d.year}</span>
              </div>
            );
          })}
        </div>
      </div>

      <details className="xc-table">
        <summary>View as table</summary>
        <table>
          <caption className="sr-only">Supreme Stitch annual export value in US dollars</caption>
          <thead>
            <tr><th scope="col">Year</th><th scope="col">Export value (USD)</th></tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.year}>
                <th scope="row">{d.year}</th>
                <td>{full(d.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
