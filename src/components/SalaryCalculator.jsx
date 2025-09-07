import { useState } from "react";

export default function SalaryCalculator(){
  const [ctc, setCtc] = useState("");
  const [hraPct, setHraPct] = useState(20); // example
  const [result, setResult] = useState(null);

  function compute(){
    const c = Number(ctc);
    if (!c || c <= 0) return;
    // simplified assumptions:
    const basic = c * 0.4;
    const hra = basic * hraPct / 100;
    const pf = Math.min(basic * 0.12, 1800);
    const gross = basic + hra;
    // simple tax slab logic (example; explain in UI it's simplified)
    let taxable = c - 150000; // standard deduction approx
    taxable = Math.max(0, taxable);
    let tax = 0;
    if (taxable > 500000) {
      tax = (taxable - 500000) * 0.2 + 12500; // just sample
    } else if (taxable > 250000) {
      tax = (taxable - 250000) * 0.05;
    }
    const takeHome = c - pf - tax;
    setResult({ basic, hra, pf, tax, takeHome });
  }

  return (
    <div id="calculator" className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold">Take-home Calculator (Simple)</h3>
      <div className="mt-4 grid grid-cols-1 gap-3">
        <input value={ctc} onChange={e=>setCtc(e.target.value)} placeholder="Annual CTC (₹)" className="input"/>
        <label className="text-sm">
          HRA % of basic:
          <input type="range" min="10" max="50" value={hraPct} onChange={e=>setHraPct(e.target.value)} />
          <span className="ml-2">{hraPct}%</span>
        </label>
        <button onClick={compute} className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded">Compute</button>
      </div>

      {result && (
        <div className="mt-4 space-y-1 text-sm">
          <div>Basic: ₹{Math.round(result.basic)}</div>
          <div>HRA: ₹{Math.round(result.hra)}</div>
          <div>PF: ₹{Math.round(result.pf)}</div>
          <div>Estimated Tax: ₹{Math.round(result.tax)}</div>
          <div className="font-semibold">Approx Take-home: ₹{Math.round(result.takeHome)}</div>
        </div>
      )}
    </div>
  );
}
