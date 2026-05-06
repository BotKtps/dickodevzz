import { motion } from 'framer-motion';

interface HeroProps {
  totalProjects: number;
}

export default function Hero({ totalProjects }: HeroProps) {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  // Ubah ini
const itemVars: any = { 
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } 
  }
};


  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-32 pb-20 relative">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/3 -right-20 w-[300px] h-[300px] bg-crimson/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="grid lg:grid-cols-12 gap-16 items-center"
      >
        {/* KOLOM KIRI: TEKS UTAMA */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* BADGE STATUS */}
          <motion.div variants={itemVars} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-crimson/30 bg-crimson/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson shadow-[0_0_8px_#ff0000]"></span>
            </span>
            <span className="text-[10px] font-black text-crimson tracking-[0.25em] uppercase">
              Terbuka untuk Kerjasama & Proyek Web
            </span>
          </motion.div>

          {/* JUDUL UTAMA */}
          <motion.div variants={itemVars}>
            <h2 className="text-gray-500 font-medium text-lg md:text-xl mb-4 italic">
              Halo, Saya Dicko Alvino Aditiya
            </h2>
          <h1 className="text-[12vw] md:text-[8rem] font-black tracking-tighter leading-[0.85] uppercase">
  DICKO <br /> 
  <span className="text-crimson red-glow-text italic">DEVELOPER</span>
</h1>
          
          </motion.div>

          {/* DESKRIPSI MANUSIAWI */}
          <motion.p variants={itemVars} className="max-w-2xl text-gray-400 text-sm md:text-lg leading-relaxed">
            Saya adalah seorang pengembang yang berdedikasi untuk menciptakan solusi digital yang aman, 
            cepat, dan berkelas. Dengan latar belakang teknik jaringan, saya memastikan setiap karya 
            yang saya buat tidak hanya indah dipandang, tetapi juga kokoh secara sistem.
          </motion.p>

          {/* TOMBOL AKSI */}
          <motion.div variants={itemVars} className="flex flex-wrap gap-6 pt-6">
            <a href="#contact" className="px-10 py-4 bg-crimson text-white text-[11px] font-black tracking-[0.3em] uppercase rounded-xl hover:bg-white hover:text-black transition-all duration-500 shadow-glow-red">
              Hubungi Saya
            </a>
            <a href="#project" className="px-10 py-4 border border-white/10 text-white text-[11px] font-black tracking-[0.3em] uppercase rounded-xl hover:bg-white/5 transition-all">
              Lihat Karya
            </a>
          </motion.div>
        </div>

        {/* KOLOM KANAN: STATISTIK */}
        <motion.div variants={itemVars} className="lg:col-span-4 space-y-6">
          <StatCard number={totalProjects} label="Proyek Selesai" suffix="+" />
          <StatCard number={50} label="Bug Ditemukan" suffix="+" />
          <StatCard number={12} label="Alat Dikembangkan" suffix="" />
          <StatCard number={2} label="Tahun Pengalaman" suffix="+" />
        </motion.div>

      </motion.div>
    </section>
  );
}

function StatCard({ number, label, suffix }: { number: number, label: string, suffix: string }) {
  return (
    <motion.div 
      whileHover={{ x: 10, borderColor: 'rgba(255,0,0,0.4)' }}
      className="p-8 glass-card border-white/5 group transition-all"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-black text-white group-hover:text-crimson transition-colors duration-500">
          {number}
        </span>
        <span className="text-2xl font-black text-crimson opacity-50">{suffix}</span>
      </div>
      <div className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mt-2 leading-tight">
        {label}
      </div>
    </motion.div>
  );
}

