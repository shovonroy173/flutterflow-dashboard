import React, { useEffect, useState } from "react";
import { MessageSquareCode, Flag, ShieldAlert, CheckCircle2, Search, Filter } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Conversations = () => {
  const [conversations, setConversations] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    adminDataService.getConversations().then(setConversations);
  }, []);

  const filtered = conversations.filter((c) => {
    if (filter === "flagged") return c.flagged;
    if (filter === "group") return c.type.includes("Group");
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 glow-text-cyan">
            CONVERSATION MODERATION & SENTIMENT ANALYSIS
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            1-on-1 AI Sessions, Multi-Language Translated Groups, Reported Content & AI Moderation
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <button onClick={() => setFilter("all")} className={`px-3 py-1.5 text-xs rounded-xl ${filter === "all" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-slate-900 text-slate-400"}`}>All</button>
          <button onClick={() => setFilter("flagged")} className={`px-3 py-1.5 text-xs rounded-xl ${filter === "flagged" ? "bg-rose-500/20 text-rose-300 border border-rose-500/40" : "bg-slate-900 text-slate-400"}`}>Flagged</button>
          <button onClick={() => setFilter("group")} className={`px-3 py-1.5 text-xs rounded-xl ${filter === "group" ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" : "bg-slate-900 text-slate-400"}`}>Groups</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((conv) => (
          <div key={conv.id} className="p-5 rounded-2xl glass-card space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-cyan-400">{conv.id}</span>
              <span className={`px-2.5 py-0.5 text-[10px] rounded-full font-mono ${conv.flagged ? "bg-rose-500/20 text-rose-400 border border-rose-500/40" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"}`}>
                {conv.status}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-sm text-slate-200">{conv.type}</h3>
              <p className="text-xs text-slate-400 mt-1">Participants: {conv.participants.join(", ")}</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-1">
              <div className="flex justify-between text-slate-400">
                <span>Message Volume:</span>
                <span className="text-slate-200 font-bold">{conv.messageCount} msgs</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>AI Sentiment:</span>
                <span className={conv.flagged ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>{conv.sentiment}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 text-xs rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20">Inspect Transcript</button>
              {conv.flagged && (
                <button className="px-3 py-2 text-xs rounded-xl bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20">Resolve Flag</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversations;
