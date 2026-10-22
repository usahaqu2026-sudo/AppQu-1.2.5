import React from 'react';
import {
  Users,
  Contact,
  Store,
  MapPin,
  ShieldAlert,
  MessageSquare,
  ShieldCheck,
  FileCode,
  Settings,
  UserCheck,
} from 'lucide-react';

interface AppQuBottomNavProps {
  activeModule: 'paguyuban' | 'warga' | 'usaha' | 'area' | 'siaga' | 'arsitektur' | 'chat' | 'setting';
  onSelectModule: (module: 'paguyuban' | 'warga' | 'usaha' | 'area' | 'siaga' | 'arsitektur' | 'chat' | 'setting') => void;
  onOpenHierarchy: () => void;
  onOpenRoleModal: () => void;
  unreadChatCount?: number;
  pendingApprovalsCount?: number;
  activeEmergencyCount?: number;
  witnessCount?: number;
}

export const AppQuBottomNav: React.FC<AppQuBottomNavProps> = ({
  activeModule,
  onSelectModule,
  onOpenHierarchy,
  onOpenRoleModal,
  unreadChatCount = 0,
  pendingApprovalsCount = 0,
  activeEmergencyCount = 0,
  witnessCount = 2,
}) => {
  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(15);
      } catch {}
    }
  };

  return (
    <nav
      className="w-full bg-stone-900/98 backdrop-blur-md border-t border-stone-800/90 text-stone-400 px-0.5 pt-1.5 flex items-center justify-between shrink-0 z-30 shadow-2xl select-none sticky bottom-0 transition-all"
      style={{
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.35rem)',
        minHeight: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      {/* 1. Paguyuban (Kas & Agenda Sosial RT) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('paguyuban');
        }}
        title="PaguyubanQu (Sosial & Kas RT)"
        aria-label="Paguyuban"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'paguyuban'
            ? 'text-emerald-400 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'paguyuban' && (
          <span className="absolute -top-1 w-4 h-1 bg-emerald-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <Users className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'paguyuban' ? 'scale-110 text-emerald-400' : ''}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            pendingApprovalsCount > 0
              ? 'bg-amber-500 text-stone-950'
              : activeModule === 'paguyuban'
              ? 'bg-emerald-500 text-stone-950'
              : 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
          }`}
        >
          {pendingApprovalsCount > 0 ? `${pendingApprovalsCount} KAS` : 'KAS'}
        </span>
      </button>

      {/* 2. Warga (Buku Induk Kependudukan) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('warga');
        }}
        title="WargaQu (Buku Induk Kependudukan)"
        aria-label="Warga"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'warga'
            ? 'text-sky-400 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'warga' && (
          <span className="absolute -top-1 w-4 h-1 bg-sky-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <Contact className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'warga' ? 'scale-110 text-sky-400' : ''}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            activeModule === 'warga'
              ? 'bg-sky-400 text-stone-950'
              : 'bg-sky-950 text-sky-300 border border-sky-700/60'
          }`}
        >
          WARGA
        </span>
      </button>

      {/* 3. Usaha (Lapak UMKM & POS Kasir) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('usaha');
        }}
        title="UsahaQu (Lapak UMKM & Switch POS)"
        aria-label="Usaha"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'usaha'
            ? 'text-amber-400 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'usaha' && (
          <span className="absolute -top-1 w-4 h-1 bg-amber-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <Store className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'usaha' ? 'scale-110 text-amber-400' : ''}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            activeModule === 'usaha'
              ? 'bg-amber-400 text-stone-950'
              : 'bg-amber-950 text-amber-300 border border-amber-700/60'
          }`}
        >
          UMKM
        </span>
      </button>

      {/* 4. Area (Peta & Zonasi Lapak RT) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('area');
        }}
        title="AreaQu (Peta Wilayah & Zonasi Lapak)"
        aria-label="Area"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'area'
            ? 'text-teal-400 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'area' && (
          <span className="absolute -top-1 w-4 h-1 bg-teal-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <MapPin className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'area' ? 'scale-110 text-teal-400' : ''}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            activeModule === 'area'
              ? 'bg-teal-400 text-stone-950'
              : 'bg-teal-950 text-teal-300 border border-teal-700/60'
          }`}
        >
          PETA
        </span>
      </button>

      {/* 5. Siaga (Tombol Darurat SOS & Keamanan) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('siaga');
        }}
        title="SiagaQu (Tombol Darurat SOS & Ronda)"
        aria-label="Siaga"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'siaga'
            ? 'text-red-400 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'siaga' && (
          <span className="absolute -top-1 w-4 h-1 bg-red-500 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <ShieldAlert className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'siaga' ? 'scale-110 text-red-500 animate-pulse' : 'text-red-400'}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            activeModule === 'siaga' || activeEmergencyCount > 0
              ? 'bg-red-600 text-white animate-pulse'
              : 'bg-red-950 text-red-300 border border-red-700/60'
          }`}
        >
          SOS
        </span>
      </button>

      {/* 6. Chat (Percakapan Warga & Komunikasi) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('chat');
        }}
        title="ChatQu (Percakapan & Notifikasi Warga)"
        aria-label="Chat"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'chat'
            ? 'text-emerald-400 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'chat' && (
          <span className="absolute -top-1 w-4 h-1 bg-emerald-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <MessageSquare className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'chat' ? 'scale-110 text-emerald-400' : ''}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            unreadChatCount > 0
              ? 'bg-emerald-500 text-stone-950 font-black'
              : activeModule === 'chat'
              ? 'bg-emerald-400 text-stone-950'
              : 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
          }`}
        >
          {unreadChatCount > 0 ? `${unreadChatCount} CHAT` : 'CHAT'}
        </span>
      </button>

      {/* 7. Validasi (Saksi Tetangga & Chain of Trust Tier 1-2) */}
      <button
        onClick={() => {
          triggerHaptic();
          onOpenHierarchy();
        }}
        title="Validasi Berantai (Tier 1 & Tier 2 Saja)"
        aria-label="Validasi"
        className="relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 text-stone-400 hover:text-stone-200 hover:bg-stone-800/30"
      >
        <div className="relative flex items-center justify-center">
          <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-purple-400" />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            witnessCount >= 2
              ? 'bg-purple-950 text-purple-300 border border-purple-700/60'
              : 'bg-amber-500 text-stone-950 animate-pulse'
          }`}
        >
          {witnessCount >= 2 ? '2 SAKSI' : '0/2 SAKSI'}
        </span>
      </button>

      {/* 8. Arsitektur (Skema Sistem & Database) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('arsitektur');
        }}
        title="Dokumen Arsitektur & Skema Database"
        aria-label="Arsitektur"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'arsitektur'
            ? 'text-indigo-400 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'arsitektur' && (
          <span className="absolute -top-1 w-4 h-1 bg-indigo-400 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <FileCode className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'arsitektur' ? 'scale-110 text-indigo-400' : ''}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            activeModule === 'arsitektur'
              ? 'bg-indigo-400 text-stone-950'
              : 'bg-indigo-950 text-indigo-300 border border-indigo-700/60'
          }`}
        >
          SKEMA
        </span>
      </button>

      {/* 9. Setting (Pengaturan Profil, Printer & Auto-Update) */}
      <button
        onClick={() => {
          triggerHaptic();
          onSelectModule('setting');
        }}
        title="Pengaturan Aplikasi, Printer & Auto-Update"
        aria-label="Pengaturan"
        className={`relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 ${
          activeModule === 'setting'
            ? 'text-stone-200 font-bold bg-stone-800/90 shadow-xs'
            : 'text-stone-400 hover:text-stone-200'
        }`}
      >
        {activeModule === 'setting' && (
          <span className="absolute -top-1 w-4 h-1 bg-stone-300 rounded-full" />
        )}
        <div className="relative flex items-center justify-center">
          <Settings className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${activeModule === 'setting' ? 'scale-110 text-stone-200' : ''}`} />
        </div>
        <span
          className={`text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap ${
            activeModule === 'setting'
              ? 'bg-stone-300 text-stone-950 font-black'
              : 'bg-stone-800 text-stone-300 border border-stone-700/60'
          }`}
        >
          OPSI
        </span>
      </button>

      {/* 10. Role (Pilih Role Interaktif RBAC) */}
      <button
        onClick={() => {
          triggerHaptic();
          onOpenRoleModal();
        }}
        title="Pilih Peran Interaktif (Tier 1 & Tier 2)"
        aria-label="Pilih Role"
        className="relative flex-1 flex flex-col items-center justify-center h-full py-1 px-0.5 rounded-xl transition-all active:scale-95 cursor-pointer min-w-0 text-stone-400 hover:text-stone-200 hover:bg-stone-800/30"
      >
        <div className="relative flex items-center justify-center">
          <UserCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-teal-300" />
        </div>
        <span className="text-[6.5px] xs:text-[7px] font-black uppercase tracking-tight px-1 py-0.5 rounded-full ring-1 ring-stone-900 leading-none mt-1 shadow-2xs whitespace-nowrap bg-teal-950 text-teal-300 border border-teal-700/60">
          ROLE
        </span>
      </button>
    </nav>
  );
};
