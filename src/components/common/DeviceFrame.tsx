import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Smartphone, Monitor, Wifi, Battery, Sparkles } from 'lucide-react';

interface DeviceFrameProps {
  children: React.ReactNode;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ children }) => {
  const { isMobileViewMode, toggleMobileViewMode } = useShop();

  if (!isMobileViewMode) {
    return (
      <div className="min-h-screen bg-[#FFEBF2] text-slate-900 flex flex-col">
        {/* Desktop Top Helper Bar */}
        <div className="bg-white border-b border-[#FFD1DE] px-4 py-2 flex items-center justify-between text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span className="font-bold text-slate-900">1Fi SDE Assignment Demo</span>
            <span className="hidden sm:inline text-pink-300">|</span>
            <span className="hidden sm:inline font-semibold text-pink-900">1Fi Marketplace (Signature Pink Theme)</span>
          </div>
          <button
            onClick={toggleMobileViewMode}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 text-xs font-semibold transition"
          >
            <Smartphone className="w-3.5 h-3.5 text-pink-600" />
            <span>Switch to Mobile Mockup</span>
          </button>
        </div>

        <div className="flex-1 w-full">{children}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-900 flex flex-col items-center justify-center p-0 sm:p-4 md:p-6 bg-gradient-to-br from-[#FFDDE8] via-[#FFEBF2] to-[#FFD1DE]">
      {/* Top Controls on Desktop */}
      <div className="hidden sm:flex items-center justify-between w-full max-w-md mb-3 px-2 text-xs text-slate-600">
        <div className="flex items-center gap-1.5 font-bold text-pink-950">
          <Sparkles className="w-4 h-4 text-pink-600" />
          <span>1Fi Mobile Experience</span>
        </div>
        <button
          onClick={toggleMobileViewMode}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-pink-50 text-slate-700 hover:text-pink-700 border border-[#FFD1DE] shadow-sm font-semibold transition"
        >
          <Monitor className="w-3.5 h-3.5 text-pink-600" />
          <span>Desktop View</span>
        </button>
      </div>

      {/* Phone Mockup Frame */}
      <div className="w-full sm:max-w-[420px] sm:h-[880px] bg-[#FFEBF2] sm:rounded-[44px] sm:border-[8px] sm:border-slate-800 shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)] flex flex-col overflow-hidden relative">
        {/* Dynamic Island / Status Bar (on mobile frame) */}
        <div className="hidden sm:flex items-center justify-between px-6 pt-3 pb-1 bg-white text-[11px] font-bold text-slate-800 select-none z-40 border-b border-[#FFD1DE]">
          <span>9:41</span>
          <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-pink-400/50" />
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="w-3 h-3 text-slate-700" />
            <Battery className="w-3.5 h-3.5 text-slate-800" />
          </div>
        </div>

        {/* Inner Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col bg-[#FFEBF2]">
          {children}
        </div>
      </div>
    </div>
  );
};
