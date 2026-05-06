import { motion } from 'framer-motion';

export default function Contact() {
  const kontakSertifikasi = [
    { label: "Surat Elektronik", value: "help@dickodevz.id", tautan: "mailto:help@dickodevz.id" },
    { label: "Pesan WhatsApp", value: "+62 821-5891-0417", tautan: "https://wa.me/6282158910417" },
    { label: "Koleksi Kode (GitHub)", value: "github.com/BotKtps", tautan: "https://github.com/BotKtps" }
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* KOLOM KIRI: AJAKAN KERJASAMA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-crimson font-bold text-sm tracking-[0.4em] uppercase mb-4 tracking-tighter">
              [ 04. Hubungi Saya ]
            </h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              MARI MULAI <br /> <span className="text-crimson italic red-glow-text">KOLABORASI_</span>
            </h3>
          </div>

          <div className="space-y-6">
            {kontakSertifikasi.map((info, i) => (
              <a 
                key={i} 
                href={info.tautan} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block p-8 glass-card border-white/5 hover:border-crimson/50 transition-all duration-500"
              >
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em] mb-2">{info.label}</p>
                <p className="text-xl md:text-2xl font-bold text-white group-hover:text-crimson transition-colors tracking-tighter font-mono">
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* KOLOM KANAN: LOKASI & STATUS */}
        <div className="flex flex-col justify-end">
          <div className="p-10 glass-card border-crimson/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-crimson opacity-10 font-black text-6xl italic uppercase select-none">BORNEO</div>
            
            <div className="space-y-8 relative z-10">
              <h4 className="text-xl font-black text-white uppercase tracking-tighter">Lokasi & Keberadaan</h4>
              <p className="text-gray-400 font-medium text-sm leading-relaxed">
                Saat ini saya berbasis di <span className="text-white font-bold italic">Banjarbaru, Kalimantan Selatan</span>. Meskipun begitu, saya sangat terbuka untuk bekerja secara jarak jauh (Remote) dengan mitra dari mana saja.
              </p>
              
              <div className="pt-10 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-600">Zona Waktu:</span>
                  <span className="text-white">WITA (GMT+8)</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-gray-600">Status Respon:</span>
                  <span className="text-green-500 animate-pulse">Sangat Cepat</span>
                </div>
              </div>

              <button className="w-full py-5 bg-crimson text-white font-black text-[11px] uppercase tracking-[0.4em] rounded-2xl hover:bg-white hover:text-black transition-all duration-500 shadow-glow-red-strong">
                Kirim Pesan Sekarang
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

