import { motion } from 'framer-motion';

export default function Project() {
  const daftarProyek = [
    {
      nama: "SnapTT Downloader",
      tipe: "Pengembangan Web",
      cerita: "Aplikasi pengunduh video TikTok tanpa watermark yang responsif. Mengutamakan kecepatan akses dan kemudahan antarmuka pengguna.",
      alat: ["Next.js", "Tailwind CSS", "API Integration"],
      warna: "from-blue-600/20"
    },
    {
      nama: "WhatsApp Bot System",
      tipe: "Otomasi & Bot",
      cerita: "Sistem asisten otomatis untuk efisiensi komunikasi, dibangun menggunakan library Baileys untuk mendukung fitur Multi-Device.",
      alat: ["Node.js", "Express", "Baileys API"],
      warna: "from-green-600/20"
    },
    {
      nama: "Progamming Tools",
      tipe: "Pengembangan Web",
      cerita: "Kumpulan utilitas web praktis seperti encoder, formatter, dan hash generator untuk mempercepat alur kerja coding dan bug hunting dalam satu platform.",
      alat: ["next.js", "Api Integration", "Tailwind CSS", "PHP", "Database"],
      warna: "from-crimson/20"
    },
    {
      nama: "Infrastructure Lab",
      tipe: "Manajemen Jaringan",
      cerita: "Konfigurasi manajemen bandwidth dan sistem keamanan jaringan lokal menggunakan MikroTik untuk optimasi akses data.",
      alat: ["MikroTik OS", "Winbox", "Network Security"],
      warna: "from-orange-600/20"
    }
  ];

  return (
    <section id="project" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-crimson font-bold text-sm tracking-[0.4em] uppercase mb-4 tracking-tighter">
          [ 03. Project ]
        </h2>
        <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
          PROJECT <br /> <span className="text-white opacity-20 italic">DIGITAL</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {daftarProyek.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative glass-card p-1 overflow-hidden"
          >
            {/* Dekorasi Cahaya Halus */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${p.warna} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10`} />

            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-black text-crimson tracking-widest uppercase italic">
                  {p.tipe}
                </span>
                <div className="w-10 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-crimson transition-all duration-500"></div>
              </div>

              <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter group-hover:red-glow-text transition-all duration-500">
                {p.nama}
              </h4>
              <p className="text-gray-400 font-medium text-sm leading-relaxed mb-10 flex-grow">
                {p.cerita}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.alat.map((tool) => (
                  <span key={tool} className="text-[9px] font-bold text-gray-500 border border-white/10 px-3 py-1 rounded-md uppercase tracking-tighter">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Catatan Kaki Proyek */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 text-[10px] font-medium uppercase tracking-[0.4em]">
          Eksplorasi lebih lanjut di <a href="https://github.com/botktps" className="text-crimson hover:text-white transition-colors">GitHub Saya</a>
        </p>
      </div>
    </section>
  );
}

