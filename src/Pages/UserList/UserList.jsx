import React, { useEffect, useState } from "react";
import {
  Users,
  Search,
  Filter,
  ShieldCheck,
  ShieldAlert,
  UserX,
  UserCheck,
  MoreVertical,
  RefreshCw,
  Eye,
} from "lucide-react";
import { adminDataService } from "../../services/adminDataService";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminDataService.getUsers().then((res) => {
      setUsers(res);
      setLoading(false);
    });
  }, []);

  const handleAction = (id, action) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          if (action === "suspend") return { ...u, status: "Suspended" };
          if (action === "block") return { ...u, status: "Blocked" };
          if (action === "verify") return { ...u, status: "Verified" };
        }
        return u;
      })
    );
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-2xl glass-panel">
        <div>
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 glow-text-cyan">
            USER MANAGEMENT & VERIFICATION
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Identity Verification, Risk Score Profiling, Account Status Controls & Fraud Detection
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mt-4 md:mt-0 flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute w-4 h-4 text-cyan-400 left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search ID, name, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-9 pr-4 text-xs rounded-xl glass-input placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="p-5 rounded-2xl glass-panel overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="border-b border-slate-800 text-slate-400 uppercase font-mono tracking-wider">
            <tr>
              <th className="p-3">User Profile</th>
              <th className="p-3">Account Status</th>
              <th className="p-3">Fraud Risk</th>
              <th className="p-3">Tier</th>
              <th className="p-3">Device / OS</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-3 flex items-center gap-3">
                  <img src={user.avatarUrl} alt="" className="w-9 h-9 rounded-xl object-cover ring-2 ring-cyan-500/20" />
                  <div>
                    <p className="font-bold text-slate-100">{user.name}</p>
                    <p className="text-[10px] text-slate-500 font-mono">{user.email} • {user.id}</p>
                  </div>
                </td>

                <td className="p-3">
                  <span
                    className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-full ${
                      user.status === "Verified"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                        : user.status === "Suspended"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                        : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`font-mono text-xs ${
                      user.riskScore.includes("High") || user.riskScore.includes("Critical")
                        ? "text-rose-400 font-bold"
                        : "text-slate-400"
                    }`}
                  >
                    {user.riskScore}
                  </span>
                </td>

                <td className="p-3 font-semibold text-cyan-300">{user.accountType}</td>
                <td className="p-3 text-slate-400 font-mono text-[11px]">{user.device}</td>

                <td className="p-3 text-right space-x-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30"
                    title="View Profile"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {user.status !== "Verified" && (
                    <button
                      onClick={() => handleAction(user.id, "verify")}
                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/30"
                      title="Verify User"
                    >
                      <UserCheck className="w-4 h-4" />
                    </button>
                  )}
                  {user.status !== "Blocked" && (
                    <button
                      onClick={() => handleAction(user.id, "block")}
                      className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 border border-rose-500/30"
                      title="Block User"
                    >
                      <UserX className="w-4 h-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Profile Detail Drawer Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="w-full max-w-lg p-6 rounded-2xl glass-panel text-slate-100 relative space-y-4">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <img src={selectedUser.avatarUrl} alt="" className="w-12 h-12 rounded-xl object-cover ring-2 ring-cyan-500/40" />
                <div>
                  <h3 className="font-bold text-lg text-cyan-300">{selectedUser.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{selectedUser.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedUser(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block">User ID</span>
                <span className="font-bold text-slate-200">{selectedUser.id}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block">Risk Score</span>
                <span className="font-bold text-rose-400">{selectedUser.riskScore}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block">Languages</span>
                <span className="font-bold text-cyan-300">{selectedUser.language}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-500 block">Reports Against</span>
                <span className="font-bold text-amber-400">{selectedUser.reportsCount} Complaints</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
              <button onClick={() => setSelectedUser(null)} className="px-4 py-2 text-xs rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
