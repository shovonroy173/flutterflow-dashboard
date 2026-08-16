import React from "react";
import { Repeat, TrendingUp, Users } from "lucide-react";

const cohorts = [
  { cohort: "2026-W30", size: "12,400", d1: "88%", d7: "76%", d30: "68%", d90: "54%" },
  { cohort: "2026-W31", size: "14,100", d1: "90%", d7: "78%", d30: "70%", d90: "56%" },
  { cohort: "2026-W32", size: "15,800", d1: "91%", d7: "81%", d30: "72%", d90: "58%" },
];

const Retention = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 glow-text-cyan">
            USER RETENTION & COHORT MATRIX
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            D1 / D7 / D30 / D90 Retention Rates, User Churn Velocity & Cohort Stickiness
          </p>
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel space-y-4">
        <h2 className="text-sm font-bold text-slate-200">Weekly Cohort Retention Breakdown</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400 uppercase font-mono">
              <tr>
                <th className="p-3">Cohort Week</th>
                <th className="p-3">New Users</th>
                <th className="p-3">Day 1</th>
                <th className="p-3">Day 7</th>
                <th className="p-3">Day 30</th>
                <th className="p-3 text-right">Day 90</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {cohorts.map((c, i) => (
                <tr key={i} className="hover:bg-slate-800/30 font-mono">
                  <td className="p-3 font-bold text-cyan-300">{c.cohort}</td>
                  <td className="p-3 text-slate-100">{c.size}</td>
                  <td className="p-3 text-emerald-400">{c.d1}</td>
                  <td className="p-3 text-emerald-400">{c.d7}</td>
                  <td className="p-3 text-emerald-400 font-bold">{c.d30}</td>
                  <td className="p-3 text-right text-cyan-300 font-bold">{c.d90}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Retention;
