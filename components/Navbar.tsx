import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Beranda', href: '#home', code: '01' },
    { name: 'Tentang', href: '#about', code: '02' },
    { name: 'Layanan', href: '#services', code: '03' },
    { name: 'Projek', href: '#project', code: '04' },
    { name: 'Kontak', href: '#contact', code: '05' },
  ];

  return (
    <>
      {/* NAVBAR UTAMA */}
      <nav className={`fixed top-0 w-full z-[100] px-6 md:px-16 py-6 transition-all duration-500 flex justify-between items-center ${scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/5 py-5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-8">
          {/* Menu Toggle */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="flex flex-col gap-2 cursor-pointer group focus:outline-none"
          >
            <div className="w-8 h-[1px] bg-white group-hover:bg-crimson transition-all duration-300"></div>
            <div className="w-5 h-[1px] bg-crimson shadow-[0_0_8px_#ff0000] transition-all duration-300"></div>
          </button>
          
          <div className="text-xl font-black tracking-tighter uppercase select-none">
            DICKO<span className="text-crimson red-glow-text">.DEVZ</span>
          </div>
        </div>

        {/* Indikator Status */}
        <div className="hidden md:flex items-center gap-4 text-[9px] font-bold tracking-[0.4em] text-gray-500 uppercase">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson"></span>
          </span>
          Online & Siap Berkolaborasi
        </div>
      </nav>

      {/* SIDEBAR DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[200]" 
            />
            
            <motion.div 
              initial={{ x: '-100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '-100%' }} 
              transition={{ type: 'spring', damping: 30, stiffness: 150 }}
              className="fixed top-0 left-0 h-full w-full sm:w-[450px] bg-dark z-[201] border-r border-white/5 p-12 flex flex-col"
            >
              <div className="flex justify-between items-center mb-20">
                <span className="text-[10px] font-bold text-gray-600 tracking-widest uppercase italic">Menu Navigasi</span>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-[10px] font-bold text-white border border-white/10 px-5 py-2 hover:border-crimson hover:text-crimson transition-all duration-500"
                >
                  TUTUP
                </button>
              </div>

              {/* Identitas di Sidebar */}
              <div className="mb-20">
                <h3 className="text-4xl font-black text-white leading-[0.8] tracking-tighter uppercase mb-4">
                  DICKO ALVINO<br/><span className="text-crimson italic">ADITIYA</span>
                </h3>
                <p className="text-[9px] text-gray-500 font-bold tracking-[0.4em] uppercase">
                  Pengembang Web & Spesialis Jaringan
                </p>
              </div>

              {/* Menu Utama */}
              <div className="flex-1 space-y-12">
                <section>
                  <p className="text-[10px] text-gray-700 font-black tracking-[0.5em] mb-10 uppercase border-b border-white/5 pb-2">Halaman Utama</p>
                  <ul className="space-y-8">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <a 
                          href={item.href} 
                          onClick={() => setIsOpen(false)} 
                          className="flex items-end gap-6 text-gray-500 hover:text-white transition-all group"
                        >
                          <span className="text-xs font-mono text-crimson/30 group-hover:text-crimson transition-all">{item.code}</span>
                          <span className="text-4xl font-black uppercase tracking-tighter group-hover:pl-4 transition-all duration-500">{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Footer Sidebar */}
              <div className="mt-auto pt-10 border-t border-white/5">
                <div className="text-[8px] text-gray-800 font-mono leading-relaxed uppercase tracking-[0.3em]">
                  Revisi Build: 2026.05<br/>
                  Lokasi: Banjarbaru, Kalsel<br/>
                  © 2026 Dickodevz
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

