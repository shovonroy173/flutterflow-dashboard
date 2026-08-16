import React, { useEffect, useState } from "react";
import { Scale, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Disputes = () => {
  const [disputes, setDisputes] = useState([]);

  useEffect(() => {
    adminDataService.getDisputes().then(setDisputes);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 glow-text-purple">
            USER DISPUTE & COMPLAINT RESOLUTION
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Transaction Disputes, Account Suspension Appeals & Translation Latency Claims
          </p>
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel space-y-4">
        <h2 className="text-sm font-bold text-slate-200">Active Dispute Queue</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400 uppercase font-mono">
              <tr>
                <th className="p-3">Case ID</th>
                <th className="p-3">User</th>
                <th className="p-3">Category</th>
                <th className="p-3">Priority</th>
                <th className="p-3">Status</th>
                <th className="p-3">Assignee</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {disputes.map((d) => (
                <tr key={d.id} className="hover:bg-slate-800/30">
                  <td className="p-3 font-mono font-bold text-amber-400">{d.id}</td>
                  <td className="p-3 font-medium text-slate-100">{d.user}</td>
                  <td className="p-3 text-slate-300">{d.category}</td>
                  <td className="p-3 font-mono font-bold text-rose-400">{d.priority}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      {d.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{d.assignee}</td>
                  <td className="p-3 text-right">
                    <button className="px-3 py-1 text-xs rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20">
                      Resolve Case
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Disputes;
