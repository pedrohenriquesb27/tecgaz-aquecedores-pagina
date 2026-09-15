import { motion } from "framer-motion";
import { Sparkles, Wrench, Award } from "lucide-react";

interface OrbitalHeaterHeroProps {
  imageSrc: string;
}

export const brandList = [
  "Rinnai",
  "Rheem",
  "Komeco",
  "Lorenzetti",
  "Rowa",
  "Aquakent",
  "Inova",
];

export function OrbitalHeaterHero({ imageSrc }: OrbitalHeaterHeroProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-[660px] items-center justify-center py-8 lg:py-4 perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-amber-500/15 to-transparent rounded-full blur-3xl opacity-80 pointer-events-none" />

      <div className="relative w-full aspect-square max-w-[560px] flex items-center justify-center preserve-3d">
        <motion.div
          className="absolute -inset-2 sm:-inset-8 rounded-full border-2 border-primary/35 orbital-ring-glow pointer-events-none"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(70deg) rotateY(-12deg)" }}
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-primary shadow-lg shadow-primary animate-pulse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-md shadow-amber-400" />
        </motion.div>

        <motion.div
          className="absolute inset-6 sm:inset-2 rounded-full border border-dashed border-primary/25 pointer-events-none"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(64deg) rotateY(16deg)" }}
          animate={{ rotateZ: [360, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/3 left-0 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-lg shadow-sky-400/80" />
          <div className="absolute bottom-1/3 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/80" />
        </motion.div>

        <motion.div
          className="absolute inset-14 sm:inset-10 rounded-full border-2 border-primary/40 pointer-events-none shadow-[0_0_40px_rgba(225,29,72,0.3)]"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(75deg) rotateY(-6deg)" }}
          animate={{ rotateZ: [0, -360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute inset-0 pointer-events-none z-30">
          {brandList.map((brand, i) => {
            const angle = (i * 360) / brandList.length;
            const radius = 185;

            return (
              <motion.div
                key={brand}
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 26,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div
                  className="pointer-events-auto transition-transform hover:scale-125"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-2 rounded-full border border-primary/40 bg-card/90 px-4 py-2 text-xs font-bold text-foreground shadow-2xl backdrop-blur-xl hover:border-primary hover:bg-card"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Award className="h-3.5 w-3.5 fill-primary text-primary" />
                    </span>
                    <span className="tracking-wide text-foreground">{brand}</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
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
            alt="Aquecedores a gás das melhores marcas orbitando em Guarulhos"
            width={800}
            height={800}
            className="w-full object-contain filter drop-shadow-[0_20px_35px_rgba(225,29,72,0.38)] select-none"
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Sparkles className="h-10 w-10 text-primary opacity-60 animate-ping" />
          </div>
        </motion.div>

        <motion.div
          className="absolute -bottom-2 right-2 sm:right-6 z-40 max-w-[220px] rounded-xl border border-primary/40 bg-background/85 p-3.5 shadow-2xl backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-foreground">
            <Wrench className="h-4 w-4 text-primary" />
            <span>Marcas Autorizadas</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
            Peças originais, instalação certificada e manutenção imediata em Guarulhos.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
