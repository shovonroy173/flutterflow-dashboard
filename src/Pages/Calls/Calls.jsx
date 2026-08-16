import React, { useEffect, useState } from "react";
import { PhoneCall, Video, Activity, Zap, Mic, Globe, SignalHigh } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Calls = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    adminDataService.getCalls().then(setCalls);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 glow-text-cyan">
            REALTIME CALL & STREAM MONITORING
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Holographic Video Calls, Spatial Audio Telemetry, Live Translation Overlays & Quality Metrics
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
          <SignalHigh className="w-4 h-4 animate-pulse" />
          <span>Active Peer Mesh: 1,428 Nodes</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {calls.map((call) => (
          <div key={call.id} className="p-5 rounded-2xl glass-card space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-purple-400">{call.id}</span>
              <span
                className={`px-2.5 py-0.5 text-[10px] rounded-full font-mono ${
                  call.status === "In Progress"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse"
                    : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                }`}
              >
                {call.status}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-200">{call.host} → {call.peer}</h3>
                <p className="text-xs text-slate-400">{call.type}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block">Duration</span>
                <span className="font-bold text-cyan-300">{call.duration}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block">STT Latency</span>
                <span className="font-bold text-purple-300">{call.sttLatency}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
              <span className="text-slate-500 block">Connection Health:</span>
              <span className="text-slate-200 font-bold">{call.quality}</span>
            </div>

            <button className="w-full py-2 text-xs font-semibold rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-500/20">
              Open Telemetry Inspector
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calls;
