import React, { useState } from "react";
import {
  Menu,
  Bell,
  Search,
  Activity,
  Cpu,
  PhoneCall,
  ShieldCheck,
  UserCheck,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ showDrawer }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notificationsList = [
    { id: 1, title: "Brute force attack blocked", time: "5m ago", type: "security" },
    { id: 2, title: "OpenAI API response latency normalized (120ms)", time: "14m ago", type: "ai" },
    { id: 3, title: "New Enterprise VIP client registered", time: "1h ago", type: "user" },
  ];

  return (
    <div className="flex items-center justify-between h-16 px-4 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-cyan-500/10 text-slate-100">
      {/* Left: Mobile Menu Button & Search */}
      <div className="flex items-center gap-4">
        <button
          onClick={showDrawer}
          className="p-2 text-slate-400 rounded-lg lg:hidden hover:text-white hover:bg-slate-800"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Global Search Bar */}
        <div className="relative hidden md:block w-72">
          <Search className="absolute w-4 h-4 text-cyan-400 -translate-y-1/2 left-3 top-1/2" />
          <input
            type="text"
            placeholder="Search users, transactions, IPs, AI logs..."
            className="w-full py-1.5 pl-9 pr-4 text-xs rounded-xl glass-input placeholder:text-slate-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Center: Realtime Telemetry Status Ticker */}
      <div className="hidden xl:flex items-center gap-6 text-xs font-mono">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>AI Engine: 99.98% Operational</span>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
          <span>Active Calls: <strong className="text-cyan-300">1,428</strong></span>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span>Avg Latency: <strong className="text-purple-300">114ms</strong></span>
        </div>
      </div>

      {/* Right: Notifications & Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 z-50 w-80 mt-3 p-3 rounded-2xl glass-panel shadow-2xl border border-cyan-500/30 text-slate-200">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Security & AI Telemetry</span>
                <span className="text-[10px] text-slate-500">Live Stream</span>
              </div>
              <div className="space-y-2">
                {notificationsList.map((n) => (
                  <div key={n.id} className="p-2 text-xs rounded-xl bg-slate-900/80 border border-slate-800">
                    <p className="font-medium text-slate-200">{n.title}</p>
                    <span className="text-[10px] text-slate-500">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Card */}
        <Link to="/settings" className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-800/40 transition-all">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
            alt="Admin"
            className="w-8 h-8 rounded-lg object-cover ring-2 ring-cyan-500/40"
          />
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-slate-200 leading-tight">Master Admin</p>
            <p className="text-[10px] text-cyan-400 font-mono">Root Commander</p>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
