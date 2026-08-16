import React, { useEffect, useState } from "react";
import { CreditCard, DollarSign, ArrowUpRight, ArrowDownRight, Search, Filter } from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const Earnings = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    adminDataService.getTransactions().then(setTransactions);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400 glow-text-cyan">
            FINANCIAL TRANSACTIONS & RECHARGES
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Pro Subscriptions, AI Credit Top-Ups, Wardrobe Purchases, Payment Gateways & Refunds
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            Month Recharge Vol: $124,500
          </div>
        </div>
      </div>

      <div className="p-5 rounded-2xl glass-panel space-y-4">
        <h2 className="text-sm font-bold text-slate-200">Recent Payment Ledger</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 text-slate-400 uppercase font-mono">
              <tr>
                <th className="p-3">Txn ID</th>
                <th className="p-3">User</th>
                <th className="p-3">Item / Service</th>
                <th className="p-3">Gateway</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {transactions.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-800/30">
                  <td className="p-3 font-mono font-bold text-amber-400">{txn.id}</td>
                  <td className="p-3 font-medium text-slate-100">{txn.user}</td>
                  <td className="p-3 text-slate-300">{txn.type}</td>
                  <td className="p-3 font-mono text-slate-400">{txn.gateway}</td>
                  <td className="p-3">
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-mono rounded-full ${
                        txn.status === "Success"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="p-3 text-right font-mono font-extrabold text-slate-100">{txn.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
