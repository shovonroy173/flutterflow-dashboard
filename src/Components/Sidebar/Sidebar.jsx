import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  MessageSquareCode,
  PhoneCall,
  Cpu,
  CreditCard,
  Radio,
  Settings,
  ShieldAlert,
  Bot,
  Scale,
  LineChart,
  Repeat,
  Server,
  LogOut,
  Sparkles,
} from "lucide-react";

const Sidebar = ({ closeDrawer }) => {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", path: "/" },
    { icon: <Users className="w-5 h-5" />, label: "Users", path: "/users", badge: "148k" },
    { icon: <MessageSquareCode className="w-5 h-5" />, label: "Conversations", path: "/conversations" },
    { icon: <PhoneCall className="w-5 h-5" />, label: "Calls", path: "/calls", badge: "LIVE" },
    { icon: <Cpu className="w-5 h-5" />, label: "AI & Translation", path: "/ai-translation" },
    { icon: <CreditCard className="w-5 h-5" />, label: "Payments", path: "/payments" },
    { icon: <Radio className="w-5 h-5" />, label: "Broadcasts", path: "/broadcasts" },
    { icon: <Settings className="w-5 h-5" />, label: "App Settings", path: "/settings" },
    { icon: <ShieldAlert className="w-5 h-5" />, label: "Security Center", path: "/security", badge: "3 Alert" },
    { icon: <Bot className="w-5 h-5" />, label: "3D Avatars", path: "/avatars" },
    { icon: <Scale className="w-5 h-5" />, label: "Disputes", path: "/disputes" },
    { icon: <LineChart className="w-5 h-5" />, label: "Analytics", path: "/analytics" },
    { icon: <Repeat className="w-5 h-5" />, label: "Retention", path: "/retention" },
    { icon: <Server className="w-5 h-5" />, label: "Infrastructure", path: "/infrastructure" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0B0F19]/90 backdrop-blur-xl border-r border-cyan-500/10 text-slate-200">
      {/* Brand Header */}
      <div className="flex items-center gap-3 p-5 border-b border-cyan-500/10">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          <Sparkles className="w-6 h-6 text-black" />
        </div>
        <div>
          <h1 className="text-lg font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 glow-text-cyan">
            AETHER AI
          </h1>
          <p className="text-[10px] text-cyan-400/70 font-mono tracking-widest uppercase">
            Master Control v4.2
          </p>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(item.path));

          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={closeDrawer}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-500/40 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 hover:border hover:border-slate-700/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`transition-colors duration-200 ${
                    isActive ? "text-cyan-400 glow-text-cyan" : "text-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-full ${
                    item.badge === "LIVE"
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 animate-pulse"
                      : item.badge.includes("Alert")
                      ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-cyan-500/10 bg-[#07090E]/60">
        <Link
          to="/sign-in"
          className="flex items-center justify-center w-full gap-2 px-4 py-2.5 text-xs font-semibold text-rose-400 border rounded-xl bg-rose-500/10 border-rose-500/20 hover:bg-rose-500/20 transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>Exit System Session</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
