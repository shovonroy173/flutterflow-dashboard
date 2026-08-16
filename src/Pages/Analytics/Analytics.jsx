import React from "react";
import { LineChart as LineIcon, TrendingUp, Users, Zap, MessageSquare, PhoneCall } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const analyticsData = [
  { day: "Mon", dau: 38200, mau: 142000, msgs: 410000, calls: 1200 },
  { day: "Tue", dau: 40100, mau: 144000, msgs: 460000, calls: 1350 },
  { day: "Wed", dau: 42310, mau: 148920, msgs: 510000, calls: 1428 },
  { day: "Thu", dau: 41900, mau: 148500, msgs: 490000, calls: 1390 },
  { day: "Fri", dau: 45200, mau: 151000, msgs: 580000, calls: 1680 },
  { day: "Sat", dau: 49800, mau: 156000, msgs: 640000, calls: 1920 },
  { day: "Sun", dau: 47600, mau: 154000, msgs: 610000, calls: 1810 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 glow-text-cyan">
            PLATFORM DEEP ANALYTICS & ENGAGEMENT
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            DAU / WAU / MAU Ratios, Message Volume, Holographic Call Telemetry & Feature Adoption
          </p>
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel space-y-4">
        <h2 className="text-sm font-bold text-slate-200">Daily Active Users (DAU) Velocity</h2>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={analyticsData}>
              <defs>
                <linearGradient id="colorDau" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="day" stroke="#64748b" fontSize={11} />
              <YAxis stroke="#64748b" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: "#0b0f19", borderColor: "#3b82f6" }} />
              <Area type="monotone" dataKey="dau" stroke="#3b82f6" fillOpacity={1} fill="url(#colorDau)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
