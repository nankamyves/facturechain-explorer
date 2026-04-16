import { motion } from "framer-motion";
import { BookOpen, SearchCheck, ShieldCheck, Send } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Registre Transparent",
    description: "Suivez votre consommation enregistrée sur un registre immuable et vérifiable par tous.",
  },
  {
    icon: SearchCheck,
    title: "Détection d'Anomalies",
    description: "Identifiez automatiquement les écarts entre la consommation réelle et le montant facturé.",
  },
  {
    icon: ShieldCheck,
    title: "Preuve Légale",
    description: "La blockchain empêche toute modification des données par l'opérateur. Vos preuves sont incontestables.",
  },
  {
    icon: Send,
    title: "Réclamation Tracée",
    description: "Soumettez et suivez publiquement le statut de votre réclamation en toute transparence.",
  },
];

const SolutionSection = () => (
  <section className="py-24" id="solution">
    <div className="container px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          La Solution
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">
          FactureChain en action
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-lg">
          Quatre piliers technologiques pour protéger les consommateurs camerounais.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="group rounded-2xl bg-card border border-border p-7 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 cursor-default"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-hero-gradient text-primary-foreground transition-transform duration-300 group-hover:scale-110">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
