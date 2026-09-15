import { motion } from "framer-motion";
import { Flame, ShieldCheck, Gauge, Sparkles, Wrench, Thermometer } from "lucide-react";

interface OrbitalHeaterHeroProps {
  imageSrc: string;
}

export function OrbitalHeaterHero({ imageSrc }: OrbitalHeaterHeroProps) {
  const satellites = [
    { icon: Flame, label: "Aquecimento Rápido", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30", delay: 0 },
    { icon: ShieldCheck, label: "Laudo ABNT", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30", delay: 1.5 },
    { icon: Gauge, label: "Pressurização", color: "text-sky-400", bg: "bg-sky-500/10 border-sky-500/30", delay: 3 },
    { icon: Thermometer, label: "Temperatura Precisa", color: "text-red-400", bg: "bg-red-500/10 border-red-500/30", delay: 4.5 },
  ];

  return (
    <div className="relative mx-auto flex w-full max-w-[640px] items-center justify-center py-6 lg:py-0 perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-amber-500/10 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="relative w-full aspect-square max-w-[540px] flex items-center justify-center preserve-3d">
        <motion.div
          className="absolute inset-2 sm:-inset-4 rounded-full border border-primary/30 orbital-ring-glow pointer-events-none"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(72deg) rotateY(-14deg)" }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/80 animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-md shadow-amber-400/80" />
        </motion.div>

        <motion.div
          className="absolute -inset-8 sm:-inset-14 rounded-full border border-dashed border-primary/20 pointer-events-none"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(65deg) rotateY(18deg)" }}
          animate={{ rotateZ: [360, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/4 left-0 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/60" />
          <div className="absolute bottom-1/4 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60" />
        </motion.div>

        <motion.div
          className="absolute inset-12 sm:inset-8 rounded-full border-2 border-primary/40 pointer-events-none shadow-[0_0_30px_rgba(225,29,72,0.25)]"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(76deg) rotateY(-8deg)" }}
          animate={{ rotateZ: [0, -360] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {satellites.map((sat, i) => (
            <motion.div
              key={sat.label}
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear", delay: sat.delay }}
            >
              <div
                className={`flex items-center gap-2 rounded-full border backdrop-blur-md px-3.5 py-1.5 shadow-xl text-xs font-semibold ${sat.bg} pointer-events-auto transition-transform hover:scale-110`}
                style={{
                  transform: `translateY(-160px) rotate(-${i * 90}deg)`,
                }}
              >
                <sat.icon className={`h-4 w-4 ${sat.color}`} />
                <span className="text-foreground tracking-tight hidden sm:inline">{sat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative z-20 w-full max-w-[420px] flex justify-center items-center"
          animate={{
            y: [-12, 12, -12],
            rotateZ: [-1, 1, -1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={imageSrc}
            alt="Aquecedores a gás TecGaz de última geração em Guarulhos"
            width={800}
            height={800}
            className="w-full object-contain filter drop-shadow-[0_20px_35px_rgba(225,29,72,0.35)] select-none"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Sparkles className="h-10 w-10 text-primary opacity-60 animate-ping" />
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-2 right-2 sm:right-6 z-30 max-w-[210px] rounded-xl border border-primary/30 bg-background/80 p-3.5 shadow-2xl backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-foreground">
            <Wrench className="h-4 w-4 text-primary" />
            <span>Peças Originais</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Instalação e conserto rápido com garantia técnica em Guarulhos.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
