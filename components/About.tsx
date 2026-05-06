import { motion } from 'framer-motion';

export default function About() {
  const keahlian = [
    { kategori: "Pengembangan Web", daftar: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
    { kategori: "Sistem Belakang", daftar: ["Node.js", "Laravel", "PostgreSQL", "Express"] },
    { kategori: "Infrastruktur", daftar: ["MikroTik", "Cisco", "Linux Server", "Keamanan Jaringan"] },
    { kategori: "Lainnya", daftar: ["Bot WhatsApp", "Git", "Figma", "Analisis Bug"] },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-20 max-w-7xl mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        
        {/* KOLOM KIRI: CERITA SINGKAT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-crimson font-bold text-sm tracking-[0.4em] uppercase mb-4 tracking-tighter">
              [ 02. Tentang Saya ]
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              DEDIKASI PADA <br /> <span className="text-white opacity-20 italic underline decoration-crimson underline-offset-8">TEKNOLOGI</span>
            </h3>
          </div>

          <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
            <p>
              Saya adalah seorang pembelajar aktif yang memiliki ketertarikan mendalam pada ekosistem digital. Saat ini, saya sedang menempuh pendidikan di <span className="text-white font-bold">SMKN 2 Banjarbaru</span> dengan fokus pada jurusan <span className="text-crimson font-bold">Teknik Jaringan Komputer dan Telekomunikasi (TJKT)</span>.
            </p>
            <p>
              Bagi saya, teknologi bukan sekadar tentang perangkat keras, melainkan bagaimana kita bisa menghubungkan ide dengan realitas melalui kode yang aman dan efisien. Saya menggabungkan pemahaman mendalam tentang infrastruktur jaringan dengan keahlian dalam membangun aplikasi web modern.
            </p>
            <p>
              Fokus utama saya adalah memberikan solusi yang tidak hanya fungsional secara teknis, tetapi juga memberikan pengalaman yang memuaskan bagi pengguna akhir.
            </p>
          </div>

          {/* BOX PENDIDIKAN */}
          <div className="p-8 glass-card border-crimson/10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl font-black italic uppercase tracking-tighter">Pendidikan</div>
             <h4 className="text-white font-bold mb-2">SMKN 2 Banjarbaru</h4>
             <p className="text-xs text-gray-500 uppercase tracking-widest font-medium italic font-mono">Kelas XI - TJKT (Teknik Jaringan Komputer & Telekomunikasi)</p>
          </div>
        </motion.div>

        {/* KOLOM KANAN: KEAHLIAN TEKNIS */}
        <div className="space-y-8">
          <h2 className="text-[10px] text-gray-600 font-black tracking-[0.5em] mb-10 uppercase text-right italic">
            Keahlian_Utama
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {keahlian.map((item, i) => (
              <motion.div 
                key={item.kategori}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-crimson/30 transition-all group"
              >
                <h4 className="text-crimson text-[10px] font-black uppercase tracking-[0.3em] mb-4 group-hover:red-glow-text">
                  {item.kategori}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.daftar.map(skill => (
                    <span key={skill} className="text-[11px] font-medium text-gray-400 group-hover:text-white transition-colors">
                      • {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CATATAN AKHIR SKILLS */}
          <div className="mt-10 p-6 border-t border-white/5 font-mono">
            <div className="flex items-center gap-4">
              <span className="text-crimson text-xl font-black italic animate-pulse tracking-tighter uppercase">Fokus_</span>
              <p className="text-[9px] text-gray-600 leading-relaxed uppercase tracking-widest">
                Terus berkembang. Saat ini fokus pada <span className="text-white">Arsitektur Cloud</span> dan <span className="text-white">Keamanan Siber</span>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

