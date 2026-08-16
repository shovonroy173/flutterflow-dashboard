import React, { useEffect, useState } from "react";
import { Bot, Sparkles, Mic, Sliders, Shirt, Activity } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Avatars = () => {
  const [avatars, setAvatars] = useState(null);

  useEffect(() => {
    adminDataService.getAvatars().then(setAvatars);
  }, []);

  if (!avatars) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 glow-text-purple">
            3D NEURAL AI AVATARS & SPEECH SYNTHESIS
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Avatar Model Calibration for Irfan & Saziya, Wardrobe Packs, Lip-Sync Latency & Emotion Gestures
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Irfan Card */}
        <div className="p-6 rounded-2xl glass-panel space-y-4 relative overflow-hidden border border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-cyan-300">{avatars.irfan.name}</h3>
                <span className="text-xs text-slate-400 font-mono">{avatars.irfan.version}</span>
              </div>
            </div>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
              {avatars.irfan.status}
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between">
              <span className="text-slate-500">Voice Synthesis Engine:</span>
              <span className="text-slate-200 font-bold">{avatars.irfan.voiceModel}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between">
              <span className="text-slate-500">Lip-Sync Precision:</span>
              <span className="text-cyan-400 font-bold">{avatars.irfan.lipSyncPrecision}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between">
              <span className="text-slate-500">Active Wardrobe Pack:</span>
              <span className="text-slate-200 font-bold">{avatars.irfan.activeWardrobe}</span>
            </div>
          </div>

          <button className="w-full py-2.5 text-xs font-bold rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30">
            Open 3D Mesh & Wardrobe Studio
          </button>
        </div>

        {/* Saziya Card */}
        <div className="p-6 rounded-2xl glass-panel space-y-4 relative overflow-hidden border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/40">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-purple-300">{avatars.saziya.name}</h3>
                <span className="text-xs text-slate-400 font-mono">{avatars.saziya.version}</span>
              </div>
            </div>
            <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-400 font-mono border border-emerald-500/30">
              {avatars.saziya.status}
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between">
              <span className="text-slate-500">Voice Synthesis Engine:</span>
              <span className="text-slate-200 font-bold">{avatars.saziya.voiceModel}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between">
              <span className="text-slate-500">Lip-Sync Precision:</span>
              <span className="text-purple-300 font-bold">{avatars.saziya.lipSyncPrecision}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between">
              <span className="text-slate-500">Active Wardrobe Pack:</span>
              <span className="text-slate-200 font-bold">{avatars.saziya.activeWardrobe}</span>
            </div>
          </div>

          <button className="w-full py-2.5 text-xs font-bold rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30">
            Open 3D Mesh & Wardrobe Studio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatars;
