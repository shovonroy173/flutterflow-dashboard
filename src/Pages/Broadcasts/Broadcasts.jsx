import React, { useEffect, useState } from "react";
import { Radio, Send, Clock, Users, CheckCircle2 } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Broadcasts = () => {
  const [broadcasts, setBroadcasts] = useState([]);
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("All Active Users (Global)");

  useEffect(() => {
    adminDataService.getBroadcasts().then(setBroadcasts);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!title) return;
    const newB = {
      id: `BRD-${Math.floor(100 + Math.random() * 900)}`,
      title,
      target,
      status: "Scheduled",
      time: "Immediate Dispatch",
      reach: "148,920",
    };
    setBroadcasts([newB, ...broadcasts]);
    setTitle("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 glow-text-cyan">
            GLOBAL BROADCAST & PUSH SYSTEM
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            System Announcements, Feature Drops, Targeted Mobile Push Notifications & Maintenance Alerts
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Broadcast Creation Interface */}
        <div className="p-5 rounded-2xl glass-panel space-y-4">
          <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Send className="w-4 h-4 text-cyan-400" />
            <span>Create New Broadcast</span>
          </h2>

          <form onSubmit={handleSend} className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Announcement Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Aether AI engine upgrade complete"
                className="w-full p-2.5 rounded-xl glass-input"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Target Segment</label>
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full p-2.5 rounded-xl glass-input bg-[#0b0f19] text-slate-200"
              >
                <option>All Active Users (Global)</option>
                <option>Pro & VIP Subscribers</option>
                <option>Free Tier Accounts</option>
                <option>iOS Devices Only</option>
                <option>Android Devices Only</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black hover:opacity-90 transition-opacity"
            >
              Dispatch Push Notification
            </button>
          </form>
        </div>

        {/* Transmission Log */}
        <div className="lg:col-span-2 p-5 rounded-2xl glass-panel space-y-4">
          <h2 className="text-sm font-bold text-slate-200">Transmission History & Scheduled Queue</h2>

          <div className="space-y-3">
            {broadcasts.map((b) => (
              <div key={b.id} className="p-4 rounded-xl glass-card flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400">{b.id}</span>
                  <h4 className="font-bold text-sm text-slate-100">{b.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Target: {b.target} • Estimated Reach: {b.reach}</p>
                </div>
                <div className="text-right font-mono">
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {b.status}
                  </span>
                  <p className="text-[10px] text-slate-500 mt-1">{b.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcasts;
