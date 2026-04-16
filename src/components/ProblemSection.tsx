import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { AlertTriangle, Clock, Gauge } from "lucide-react";

const stats = [
  {
    icon: AlertTriangle,
    value: 40,
    suffix: "%",
    label: "des abonnés contestent au moins une facture par an",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Gauge,
    value: 800000,
    suffix: "",
    label: "compteurs défaillants reconnus",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Clock,
    value: 18,
    suffix: " mois",
    prefix: "6 à ",
    label: "d'attente moyenne pour la résolution d'un litige",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const ProblemSection = () => (
  <section className="py-24 bg-muted/50" id="probleme">
    <div className="container px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Le Problème
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">
          Les chiffres qui parlent
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg">
          Au Cameroun, la surfacturation électrique est un problème systémique qui affecte des millions de foyers.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
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
              <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </div>
            <p className="mt-3 text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
