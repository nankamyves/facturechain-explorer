import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedCounter from "./AnimatedCounter";
import { AlertTriangle, Clock, Gauge, Coins, UserX, CheckCircle2, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: AlertTriangle, value: 38, suffix: "%", label: t("problem.stat1"), color: "text-destructive", bg: "bg-destructive/10" },
    { icon: Coins, value: 17181, suffix: t("problem.fcfa"), label: t("problem.stat4"), color: "text-primary", bg: "bg-primary/10" },
    { icon: Clock, value: 565, suffix: t("problem.days"), label: t("problem.stat3"), color: "text-primary", bg: "bg-primary/10" },
    { icon: UserX, value: 62, suffix: "%", label: t("problem.stat5"), color: "text-destructive", bg: "bg-destructive/10" },
    { icon: CheckCircle2, value: 10.7, suffix: "%", label: t("problem.stat6"), color: "text-secondary", bg: "bg-secondary/10" },
    { icon: Gauge, value: 800000, suffix: "", label: t("problem.stat2"), color: "text-secondary", bg: "bg-secondary/10" },
  ];

  return (
    <section className="py-24 bg-muted/50" id="probleme">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("problem.eyebrow")}</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">{t("problem.title")}</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg">{t("problem.subtitle")}</p>
          <span className="mt-5 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            {t("problem.sample_badge")}
          </span>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-card p-8 shadow-card text-center transition-shadow hover:shadow-card-hover"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${stat.bg}`}>
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
              <div className={`text-4xl font-extrabold ${stat.color}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 mx-auto max-w-3xl rounded-2xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8 flex items-start gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
            <TrendingDown className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{t("problem.impact_title")}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t("problem.impact_desc")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
