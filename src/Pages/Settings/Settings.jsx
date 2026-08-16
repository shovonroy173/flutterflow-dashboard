import React, { useState } from "react";
import { Settings, Shield, Sliders, ToggleLeft, ToggleRight, Save, Globe } from "lucide-react";

const SettingsPage = () => {
  const [maintenance, setMaintenance] = useState(false);
  const [holographicCalls, setHolographicCalls] = useState(true);
  const [realtimeSTT, setRealtimeSTT] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 glow-text-cyan">
            APPLICATION SYSTEM CONFIGURATION
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            System Feature Flags, Neural Language Matrix, AI API Enclaves & Security Parameters
          </p>
        </div>

        <button
          onClick={handleSave}
          className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30"
        >
          <Save className="w-4 h-4" />
          {saved ? "Configuration Committed!" : "Save System Config"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature Flags */}
        <div className="p-5 rounded-2xl glass-panel space-y-4">
          <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            <span>Global Feature Flags</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div>
                <p className="font-bold text-slate-100">Maintenance Mode</p>
                <p className="text-[11px] text-slate-400">Lock non-admin mobile sessions</p>
              </div>
              <button onClick={() => setMaintenance(!maintenance)}>
                {maintenance ? <ToggleRight className="w-8 h-8 text-rose-400" /> : <ToggleLeft className="w-8 h-8 text-slate-600" />}
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div>
                <p className="font-bold text-slate-100">Holographic 3D Calls</p>
                <p className="text-[11px] text-slate-400">Enable Spatial WebGL mesh rendering</p>
              </div>
              <button onClick={() => setHolographicCalls(!holographicCalls)}>
                {holographicCalls ? <ToggleRight className="w-8 h-8 text-cyan-400" /> : <ToggleLeft className="w-8 h-8 text-slate-600" />}
              </button>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <div>
                <p className="font-bold text-slate-100">Realtime STT Streaming</p>
                <p className="text-[11px] text-slate-400">Low-latency Whisper v3 processing</p>
              </div>
              <button onClick={() => setRealtimeSTT(!realtimeSTT)}>
                {realtimeSTT ? <ToggleRight className="w-8 h-8 text-cyan-400" /> : <ToggleLeft className="w-8 h-8 text-slate-600" />}
              </button>
            </div>
          </div>
        </div>

        {/* Supported Languages Matrix */}
        <div className="p-5 rounded-2xl glass-panel space-y-4">
          <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Globe className="w-4 h-4 text-purple-400" />
            <span>Supported Languages Matrix (38 Engines)</span>
          </h2>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {["English (US/UK)", "Japanese (Nihongo)", "Mandarin (Simplified)", "Spanish (EU/LatAm)", "German (Deutsch)", "French (Français)", "Russian (Русский)", "Arabic (العربية)"].map((lang, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300">
                ✓ {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
