import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Mail, ArrowLeft, Send, ShieldAlert } from "lucide-react";

const ForgatePassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/verify-code");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#07090E] p-4 relative overflow-hidden text-slate-100">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md p-8 rounded-3xl glass-panel relative z-10 space-y-6 border border-cyan-500/20 shadow-[0_0_35px_rgba(0,240,255,0.12)]">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] mb-2">
            <Sparkles className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 glow-text-purple">
            CREDENTIAL RECOVERY
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Enter your registered root email to generate a 5-digit verification token
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-mono mb-1.5">Registered Email</label>
            <div className="relative">
              <Mail className="absolute w-4 h-4 text-purple-400 left-3 top-1/2 -translate-y-1/2" />
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-2 text-xs font-bold rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="font-mono">Generating Recovery Token...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>DISPATCH VERIFICATION CODE</span>
              </>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="pt-2 border-t border-slate-800 text-center">
          <Link
            to="/sign-in"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Authorization Console</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgatePassword;
