import React, { useEffect, useState } from "react";
import {
  Users,
  PhoneCall,
  MessageSquare,
  Cpu,
  DollarSign,
  TrendingUp,
  Activity,
  ShieldCheck,
  Zap,
  Clock,
  RefreshCw,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { adminDataService } from "../../services/adminDataService";

const Dashboard = () => {
  const [kpis, setKpis] = useState(null);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([adminDataService.getKpis(), adminDataService.getChartTrends()]).then(
      ([kpiRes, trendRes]) => {
        setKpis(kpiRes);
        setTrends(trendRes);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-cyan-400">
        <RefreshCw className="w-8 h-8 animate-spin" />
        <span className="ml-3 font-mono text-sm">Initializing Master Command Center...</span>
      </div>
    );
  }

  const kpiCards = [
    { title: "Total Users", val: kpis.totalUsers, sub: "+12.4% this month", icon: <Users className="w-5 h-5 text-cyan-400" />, glow: "border-cyan-500/30" },
    { title: "Active Users", val: kpis.activeUsers, sub: "DAU / MAU ratio 68%", icon: <Activity className="w-5 h-5 text-emerald-400" />, glow: "border-emerald-500/30" },
    { title: "Active Calls Live", val: kpis.activeCalls, sub: "Voice & Video streams", icon: <PhoneCall className="w-5 h-5 text-purple-400 animate-pulse" />, glow: "border-purple-500/30" },
    { title: "AI Requests Today", val: kpis.aiRequestsToday, sub: "Avg latency 114ms", icon: <Cpu className="w-5 h-5 text-blue-400" />, glow: "border-blue-500/30" },
    { title: "Monthly Revenue", val: kpis.revenueTotal, sub: "+18.2% vs last month", icon: <DollarSign className="w-5 h-5 text-amber-400" />, glow: "border-amber-500/30" },
    { title: "Monthly AI Cost", val: kpis.aiCostMonth, sub: "Within budget ($35k cap)", icon: <Zap className="w-5 h-5 text-rose-400" />, glow: "border-rose-500/30" },
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 glow-text-cyan">
            AETHER COMMAND CENTER
          </h1>
          <p className="mt-1 text-xs text-slate-400 font-mono">
            Real-time Telemetry, AI Engine Status, Global Traffic & Financial Infrastructure
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            LIVE FEED CONNECTED
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpiCards.map((card, i) => (
          <div key={i} className={`p-4 rounded-2xl glass-card border ${card.glow}`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">{card.title}</span>
              <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">{card.icon}</div>
            </div>
            <h3 className="mt-3 text-xl font-extrabold text-slate-100">{card.val}</h3>
            <p className="mt-1 text-[11px] text-slate-400 font-mono">{card.sub}</p>
          </div>
        ))}
      </div>

      {/* Interactive Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Calls & Revenue Velocity */}
        <div className="p-5 rounded-2xl glass-panel">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-slate-200">Active Call Traffic & Revenue Velocity</h2>
              <p className="text-xs text-slate-400 font-mono">Simulated 24h stream data</p>
            </div>
            <TrendingUp className="w-5 h-5 text-cyan-400" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trends}>
                <defs>
                  <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ffff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00ffff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "#0b0f19", borderColor: "#00ffff" }} />
                <Area type="monotone" dataKey="activeCalls" stroke="#00ffff" fillOpacity={1} fill="url(#colorCalls)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Processing Latency (ms) */}
        <div className="p-5 rounded-2xl glass-panel">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-slate-200">AI Speech & Translation Latency (ms)</h2>
              <p className="text-xs text-slate-400 font-mono">Target: &lt; 200ms</p>
            </div>
            <Cpu className="w-5 h-5 text-purple-400" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: "#0b0f19", borderColor: "#a855f7" }} />
                <Bar dataKey="aiLatencyMs" fill="#a855f7" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Realtime Event Log */}
      <div className="p-5 rounded-2xl glass-panel">
        <h2 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyan-400" />
          <span>Realtime System Event Log</span>
        </h2>
        <div className="space-y-2 font-mono text-xs">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-slate-300">
            <span className="text-emerald-400">[00:19:42] STT Provider Whisper v3 auto-scaled to +4 GPU instances</span>
            <span className="text-slate-500">Latency: 95ms</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-slate-300">
            <span className="text-cyan-400">[00:18:10] User USR-9921 initialized Holographic Call with Realtime Translation</span>
            <span className="text-slate-500">Room: #HOLO-891</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
