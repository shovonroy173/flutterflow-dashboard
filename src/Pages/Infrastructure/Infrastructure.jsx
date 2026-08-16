import React, { useEffect, useState } from "react";
import { Server, HardDrive, Cpu, DollarSign, Activity } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Infrastructure = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    adminDataService.getInfrastructureCosts().then(setData);
  }, []);

  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400 glow-text-purple">
            INFRASTRUCTURE & CLOUD COST MONITORING
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            AWS A100 GPU Clusters, Google Cloud GKE, Cloudflare CDN & Neural Database Nodes
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
            Monthly Burn Rate: {data.currentBurnRate} / {data.monthlyBudget}
          </span>
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel space-y-4">
        <h2 className="text-sm font-bold text-slate-200">Cloud Infrastructure Cost & Capacity Breakdown</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400 uppercase font-mono">
              <tr>
                <th className="p-3">Service / Cluster</th>
                <th className="p-3">Load / Capacity</th>
                <th className="p-3 text-right">Monthly Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {data.cloudProviders.map((cp, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30">
                  <td className="p-3 font-bold text-cyan-300 flex items-center gap-2">
                    <Server className="w-4 h-4 text-purple-400" />
                    {cp.service}
                  </td>
                  <td className="p-3 text-slate-200">{cp.usage}</td>
                  <td className="p-3 text-right font-extrabold text-rose-400">{cp.costUSD}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
