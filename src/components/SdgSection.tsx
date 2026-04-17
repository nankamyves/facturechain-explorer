import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Zap, Building2, Scale } from "lucide-react";

const SdgSection = () => {
  const { t } = useTranslation();
  const sdgs = [
    {
      number: 7,
      title: t("sdg.sdg7_title"),
      description: t("sdg.sdg7_desc"),
      icon: Zap,
      color: "hsl(48 95% 55%)",
      accent: "bg-yellow-500/10 text-yellow-600",
    },
    {
      number: 11,
      title: t("sdg.sdg11_title"),
      description: t("sdg.sdg11_desc"),
      icon: Building2,
      color: "hsl(35 90% 55%)",
      accent: "bg-orange-500/10 text-orange-600",
    },
    {
      number: 16,
      title: t("sdg.sdg16_title"),
      description: t("sdg.sdg16_desc"),
      icon: Scale,
      color: "hsl(215 75% 45%)",
      accent: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-24 bg-muted/50" id="odd">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">{t("sdg.eyebrow")}</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">{t("sdg.title")}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">{t("sdg.subtitle")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {sdgs.map((sdg, i) => (
            <motion.div
              key={sdg.number}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div
                className="flex items-center justify-between rounded-xl p-5 text-white shadow-lg"
                style={{ backgroundColor: sdg.color }}
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-90">{t("sdg.odd")}</div>
                  <div className="text-5xl font-extrabold leading-none">{sdg.number}</div>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <sdg.icon className="h-9 w-9" strokeWidth={2.2} />
                </div>
              </div>

              <h3 className="mt-6 text-lg font-bold text-foreground">{sdg.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sdg.description}</p>

              <span className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${sdg.accent}`}>
                {t("sdg.contribution")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SdgSection;
