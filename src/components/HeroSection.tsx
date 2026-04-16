import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            🔗 Propulsé par la Blockchain
          </span>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ color: "white" }}
        >
          Reprenez le contrôle de votre{" "}
          <span className="text-gradient">facture d'électricité</span>{" "}
          avec FactureChain
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl"
          style={{ color: "hsl(210 20% 80%)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Un historique immuable et transparent de votre consommation, garanti par la blockchain.
          Contestez les surfacturations avec des preuves vérifiables.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#solution"
            className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Découvrir la solution
          </a>
          <a
            href="#dashboard"
            className="rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Voir une démo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-primary-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
