import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sparkles, KeyRound, ArrowLeft, CheckCircle2 } from "lucide-react";

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5);
  }, []);

  const handleChange = (index, value) => {
    if (value && !/^\d+$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(0, 1);
    setCode(newCode);
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = (e) => {
    e.preventDefault();
    alert("New 5-digit verification token dispatched!");
  };

  const handleVerify = (e) => {
    e.preventDefault();
    navigate("/new-password");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#07090E] p-4 relative overflow-hidden text-slate-100">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md p-8 rounded-3xl glass-panel relative z-10 space-y-6 border border-cyan-500/20 shadow-[0_0_35px_rgba(0,240,255,0.12)] text-center">
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 shadow-[0_0_20px_rgba(0,240,255,0.4)] mb-2">
            <KeyRound className="w-7 h-7 text-black" />
          </div>
          <h1 className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 glow-text-cyan">
            VERIFY SECURITY TOKEN
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Enter the 5-digit security passcode dispatched to your email
          </p>
        </div>

        {/* 5-Digit Inputs */}
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-center gap-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={code[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-14 text-xl font-extrabold font-mono text-center text-cyan-300 rounded-xl glass-input border border-cyan-500/30 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                maxLength={1}
                inputMode="numeric"
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">Didn't receive token?</span>
            <button
              onClick={handleResend}
              type="button"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              Resend Code
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>VERIFY & PROCEED</span>
          </button>
        </form>

        <div className="pt-2 border-t border-slate-800 text-center">
          <Link
            to="/sign-in"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Authorization Console</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
