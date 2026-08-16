import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#07090E] p-4 relative overflow-hidden text-slate-100">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md p-8 rounded-3xl glass-panel relative z-10 space-y-6 border border-cyan-500/20 shadow-[0_0_35px_rgba(0,240,255,0.12)]">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,240,255,0.4)] mb-2">
            <Sparkles className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 glow-text-cyan">
            AETHER AI
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Master Control Center • Restricted Authentication Enclave
          </p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-mono mb-1.5">Root Email Address</label>
            <div className="relative">
              <Mail className="absolute w-4 h-4 text-cyan-400 left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@aether.ai"
                className="w-full py-3 pl-10 pr-4 rounded-xl glass-input placeholder:text-slate-500 font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-mono mb-1.5">Security Password</label>
            <div className="relative">
              <Lock className="absolute w-4 h-4 text-cyan-400 left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full py-3 pl-10 pr-10 rounded-xl glass-input placeholder:text-slate-500 font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-cyan-500 focus:ring-cyan-500/20"
              />
              <span className="text-slate-400 text-[11px] font-mono">Persist Session</span>
            </label>

            <Link
              to="/forgate-password"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline transition-all"
            >
              Reset Credentials?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-2 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="font-mono">Decrypting & Authenticating...</span>
            ) : (
              <>
                <span>AUTHORIZE ACCESS</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Security Badge */}
        <div className="pt-2 border-t border-slate-800 text-center">
          <p className="text-[10px] text-slate-500 font-mono flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            256-Bit Neural Encrypted Connection
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
