import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AlertTriangle, BarChart3, History, Zap } from "lucide-react";

const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"];
const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const consumption = [42, 58, 35, 72, 48, 63];
const billed = [45, 78, 38, 95, 52, 88];
const maxVal = 100;

const DashboardSection = () => {
  const { t, i18n } = useTranslation();
  const labels = i18n.language === "en" ? monthsEn : months;
  const yearLabel = i18n.language === "en" ? "2026" : "2026";

  const history = [
    { date: `${labels[5]} ${yearLabel}`, real: "63 kWh", billed: "88 kWh", flag: true },
    { date: `${labels[4]} ${yearLabel}`, real: "48 kWh", billed: "52 kWh", flag: false },
    { date: `${labels[3]} ${yearLabel}`, real: "72 kWh", billed: "95 kWh", flag: true },
  ];

  return (
    <section className="py-24 bg-muted/50" id="dashboard">
      <div className="container px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t("dashboard.eyebrow")}</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">{t("dashboard.title")}</h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg">{t("dashboard.subtitle")}</p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl rounded-2xl bg-card border border-border shadow-card-hover overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 border-b border-border px-6 py-4">
            <Zap className="h-5 w-5 text-secondary" />
            <span className="font-semibold text-foreground">{t("dashboard.topbar")}</span>
            <span className="ml-auto text-xs text-muted-foreground">{t("dashboard.subscriber")}</span>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" /> {t("dashboard.chart_title")}
              </h3>
              <div className="flex items-end gap-3 h-44">
                {labels.map((m, i) => (
                  <div key={m} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex gap-1 items-end h-36">
                      <motion.div
                        className="flex-1 rounded-t-md bg-primary/80"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(consumption[i] / maxVal) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * i }}
                      />
                      <motion.div
                        className="flex-1 rounded-t-md bg-destructive/60"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${(billed[i] / maxVal) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * i + 0.05 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{m}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-primary/80" /> {t("dashboard.legend_real")}</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-destructive/60" /> {t("dashboard.legend_billed")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-destructive/10 text-destructive px-5 py-3 text-sm font-semibold transition-colors hover:bg-destructive/20">
                <AlertTriangle className="h-4 w-4" /> {t("dashboard.report")}
              </button>
              <div className="flex-1 rounded-lg border border-border p-4">
                <h4 className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5 mb-3">
                  <History className="h-3.5 w-3.5" /> {t("dashboard.history")}
                </h4>
                <ul className="space-y-2 text-sm">
                  {history.map((row, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.12 }}
                    >
                      <span className="text-foreground font-medium">{row.date}</span>
                      <span className="text-muted-foreground">{row.real} → {row.billed}</span>
                      {row.flag && (
                        <span className="text-xs font-semibold text-destructive">{t("dashboard.gap")}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
