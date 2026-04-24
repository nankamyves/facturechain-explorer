import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
      </div>

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
            {t("hero.badge")}
          </span>
        </motion.div>

        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ color: "white" }}
        >
          {t("hero.title_1")} <span className="text-gradient">{t("hero.title_highlight")}</span> {t("hero.title_2")}
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl"
          style={{ color: "hsl(210 20% 80%)" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="#solution" className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
            {t("hero.cta_primary")}
          </a>
        </motion.div>
      </div>

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
