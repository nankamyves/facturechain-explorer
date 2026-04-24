import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Blocks, Cpu, Database, Lock, Network, Coins, Landmark, ArrowRight, Search, Calculator, GitCompareArrows, Hash, Clock, User, Zap, Link2 } from "lucide-react";

const BlockchainSection = () => {
  const { t } = useTranslation();

  const detectionSteps = [
    { icon: Search, title: t("blockchain.detection_step1_t"), desc: t("blockchain.detection_step1_d") },
    { icon: Calculator, title: t("blockchain.detection_step2_t"), desc: t("blockchain.detection_step2_d") },
    { icon: GitCompareArrows, title: t("blockchain.detection_step3_t"), desc: t("blockchain.detection_step3_d") },
  ];

  const typeReasons = [
    { icon: Lock, title: t("blockchain.type_reason1_t"), desc: t("blockchain.type_reason1_d") },
    { icon: Zap, title: t("blockchain.type_reason2_t"), desc: t("blockchain.type_reason2_d") },
    { icon: Coins, title: t("blockchain.type_reason3_t"), desc: t("blockchain.type_reason3_d") },
    { icon: Landmark, title: t("blockchain.type_reason4_t"), desc: t("blockchain.type_reason4_d") },
  ];

  const blockData = [
    { icon: User, label: t("blockchain.data_d1") },
    { icon: Zap, label: t("blockchain.data_d2") },
    { icon: Clock, label: t("blockchain.data_d3") },
    { icon: Hash, label: t("blockchain.data_d4") },
    { icon: Link2, label: t("blockchain.data_d5") },
  ];

  const fiveLimits = [
    { p: t("blockchain.why_p1"), s: t("blockchain.why_s1") },
    { p: t("blockchain.why_p2"), s: t("blockchain.why_s2") },
    { p: t("blockchain.why_p3"), s: t("blockchain.why_s3") },
    { p: t("blockchain.why_p4"), s: t("blockchain.why_s4") },
    { p: t("blockchain.why_p5"), s: t("blockchain.why_s5") },
  ];

  return (
    <section className="py-24" id="blockchain">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">{t("blockchain.eyebrow")}</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">{t("blockchain.title")}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">{t("blockchain.subtitle")}</p>
        </motion.div>

        {/* What is blockchain */}
        <motion.div
          className="mx-auto max-w-4xl rounded-2xl bg-card border border-border p-8 shadow-card mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-hero-gradient text-primary-foreground">
              <Blocks className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">{t("blockchain.what_title")}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{t("blockchain.what_desc")}</p>
            </div>
          </div>

          {/* Visual block chain */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  className="flex h-16 w-20 sm:h-20 sm:w-24 flex-col items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <Hash className="h-4 w-4" />
                  <span className="mt-1 text-[10px] font-mono">Block #{i + 1}</span>
                </motion.div>
                {i < 3 && <Link2 className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Anomaly Detection */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <Cpu className="h-6 w-6 text-secondary" />
              {t("blockchain.detection_title")}
            </h3>
            <p className="mt-2 text-muted-foreground">{t("blockchain.detection_desc")}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
            {detectionSteps.map((s, i) => (
              <motion.div
                key={i}
                className="relative rounded-2xl bg-card border border-border p-6 shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                  {i + 1}
                </div>
                <s.icon className="h-6 w-6 text-secondary mb-3" />
                <h4 className="font-bold text-foreground">{s.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Type of blockchain + Data stored */}
        <div className="grid gap-6 lg:grid-cols-5 mb-16">
          <motion.div
            className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 shadow-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Network className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{t("blockchain.type_title")}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t("blockchain.type_desc")}</p>

            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              {typeReasons.map((r, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <r.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">{r.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 rounded-2xl bg-hero-gradient text-primary-foreground p-8 shadow-card-hover relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Database className="h-6 w-6" />
              <h3 className="text-lg font-bold">{t("blockchain.data_title")}</h3>
            </div>
            <ul className="space-y-3">
              {blockData.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <d.icon className="h-4 w-4 opacity-80" />
                  <span>{d.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 5 limits → 5 answers */}
        <motion.div
          className="rounded-2xl bg-card border border-border shadow-card overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 sm:p-8 border-b border-border">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t("blockchain.why_title")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("blockchain.why_subtitle")}</p>
          </div>

          <div className="divide-y divide-border">
            <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-4 px-6 sm:px-8 py-3 bg-muted/40 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>{t("blockchain.why_p_h")}</span>
              <span />
              <span>{t("blockchain.why_s_h")}</span>
            </div>
            {fiveLimits.map((row, i) => (
              <motion.div
                key={i}
                className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 sm:gap-4 px-6 sm:px-8 py-5 items-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs font-bold">
                    L{i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground">{row.p}</p>
                </div>
                <ArrowRight className="hidden sm:block h-5 w-5 text-primary shrink-0" />
                <p className="text-sm font-medium text-foreground sm:pl-0 pl-9">{row.s}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlockchainSection;