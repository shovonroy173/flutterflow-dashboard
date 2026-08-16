import React, { useEffect, useState } from "react";
import { ShieldAlert, Lock, AlertOctagon, Terminal, ShieldCheck, Eye, Ban } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Security = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    adminDataService.getSecurityAlerts().then(setAlerts);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 glow-text-purple">
            SECURITY OPERATIONS & THREAT MONITORING
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Automated WAF Rules, Fraud Pattern Alerts, Geographic Anomaly Detection & Incident Mitigations
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
          <ShieldAlert className="w-4 h-4 animate-pulse" />
          <span>Active Threat Level: MODERATE</span>
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel space-y-4">
        <h2 className="text-sm font-bold text-slate-200">Realtime Threat Feed</h2>

        <div className="space-y-3">
          {alerts.map((a) => (
            <div key={a.id} className="p-4 rounded-xl glass-card flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-xl ${
                    a.severity === "CRITICAL"
                      ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                  }`}
                >
                  <AlertOctagon className="w-5 h-5" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-rose-400">{a.id}</span>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                      {a.severity}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-100 mt-1">{a.title}</h3>
                  <p className="text-xs text-slate-400 font-mono">Target: {a.target} • Origin IP: {a.ip}</p>
                </div>
              </div>

              <div className="text-right font-mono">
                <span className="px-2.5 py-1 text-[11px] rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {a.status}
                </span>
                <p className="text-[10px] text-slate-500 mt-1">{a.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
