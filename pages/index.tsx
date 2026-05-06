import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';

export default function Home() {
  const [jumlahProjek, setJumlahProjek] = useState(15);

  useEffect(() => {
    const saved = localStorage.getItem('dicko_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      setJumlahProjek(parsed.totalProject || 15);
    }
  }, []);

  return (
    <div className="min-h-screen relative bg-dark overflow-x-hidden">
      <Head>
        <title>DICKO DEVZ | Fullstack Developer & TJKT</title>
        <meta name="description" content="Portfolio Dicko Alvino Aditiya - Fullstack Developer SMKN 2 Banjarbaru" />
      </Head>

      <div className="scanline"></div>

      <Navbar />

      {/* Gunakan flex-col dan items-center untuk menengahkan semua section */}
      <main className="flex flex-col items-center w-full">
        
        {/* Kontainer Hero - Pastikan lebar penuh dan konten di tengah */}
        <section className="w-full flex justify-center">
          <Hero totalProjects={jumlahProjek} />
        </section>
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
        
        <section className="w-full flex justify-center">
          <About />
        </section>
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
        
        <section className="w-full flex justify-center">
          <Project />
        </section>
        
        <section className="w-full flex justify-center">
          <Contact />
        </section>
      </main>

      <footer className="py-20 bg-[#030303] border-t border-white/5 w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="text-3xl font-black italic tracking-tighter mb-4 select-none">
            DICKO<span className="text-crimson">.DEVZ</span>
          </div>
          <p className="text-[10px] text-gray-700 tracking-[0.8em] font-bold uppercase mb-10">
            Membangun Masa Depan Melalui Kode
          </p>
          <div className="text-[8px] text-gray-800 uppercase tracking-widest space-y-2">
            <p>© 2026 Dicko Alvino Aditiya - Hak Cipta Dilindungi</p>
            <p>Dikembangkan Dengan Next.js & Semangat TJKT SMKN 2 Banjarbaru</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
        
        <About />
        
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
        
        <Project />
        
        <Contact />
      </main>

      <footer className="py-20 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-3xl font-black italic tracking-tighter mb-4 select-none">
            DICKO<span className="text-crimson">.DEVZ</span>
          </div>
          <p className="text-[10px] text-gray-700 tracking-[0.8em] font-bold uppercase mb-10 text-center">
            Membangun Masa Depan Melalui Kode
          </p>
          <div className="text-[8px] text-gray-800 text-center uppercase tracking-widest space-y-2">
            <p>© 2026 Dicko Alvino Aditiya - Hak Cipta Dilindungi</p>
            <p>Dikembangkan Dengan Next.js & Semangat TJKT SMKN 2 Banjarbaru</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

