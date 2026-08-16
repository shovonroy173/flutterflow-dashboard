import React, { useEffect, useState } from "react";
import { Cpu, Languages, Mic, Zap, AlertTriangle, DollarSign, Activity } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const AiTranslation = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    adminDataService.getAiMetrics().then(setMetrics);
  }, []);

  if (!metrics) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 glow-text-cyan">
            AI ENGINE & TRANSLATION TELEMETRY
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            LLM Tokens, Speech-to-Text Processing, Neural Translation Providers, Latency & Provider Costs
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
            Active Tokens: 2.08 Billion
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl glass-card border border-blue-500/20">
          <span className="text-xs text-slate-400">Total Prompt Tokens</span>
          <h3 className="text-2xl font-extrabold text-slate-100 mt-1">{metrics.totalPromptTokens}</h3>
        </div>
        <div className="p-4 rounded-2xl glass-card border border-purple-500/20">
          <span className="text-xs text-slate-400">Completion Tokens</span>
          <h3 className="text-2xl font-extrabold text-purple-300 mt-1">{metrics.totalCompletionTokens}</h3>
        </div>
        <div className="p-4 rounded-2xl glass-card border border-emerald-500/20">
          <span className="text-xs text-slate-400">Audio Processed</span>
          <h3 className="text-2xl font-extrabold text-emerald-300 mt-1">{metrics.audioMinutesProcessed}</h3>
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel space-y-4">
        <h2 className="text-sm font-bold text-slate-200">AI & Neural Translation Providers Breakdown</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400 uppercase font-mono">
              <tr>
                <th className="p-3">Provider / Engine</th>
                <th className="p-3">Requests (Today)</th>
                <th className="p-3">Avg Latency</th>
                <th className="p-3">Error Rate</th>
                <th className="p-3 text-right">Est. Monthly Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {metrics.providers.map((p, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30">
                  <td className="p-3 font-bold text-cyan-300 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    {p.name}
                  </td>
                  <td className="p-3 font-mono">{p.requests}</td>
                  <td className="p-3 font-mono text-purple-300">{p.latencyMs}</td>
                  <td className="p-3 font-mono text-emerald-400">{p.errorRate}</td>
                  <td className="p-3 text-right font-mono font-bold text-slate-100">{p.costUSD}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AiTranslation;
