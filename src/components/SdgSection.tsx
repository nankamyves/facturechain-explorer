import { motion } from "framer-motion";
import { Zap, Building2, Scale } from "lucide-react";

const sdgs = [
  {
    number: 7,
    title: "Énergie propre et d'un coût abordable",
    description:
      "Garantir une facturation juste pour rendre l'électricité réellement abordable aux foyers camerounais.",
    icon: Zap,
    color: "hsl(48 95% 55%)",
    accent: "bg-yellow-500/10 text-yellow-600",
  },
  {
    number: 11,
    title: "Villes et communautés durables",
    description:
      "Renforcer la confiance entre opérateurs et citoyens pour bâtir des communautés urbaines résilientes.",
    icon: Building2,
    color: "hsl(35 90% 55%)",
    accent: "bg-orange-500/10 text-orange-600",
  },
  {
    number: 16,
    title: "Paix, justice et institutions efficaces",
    description:
      "Apporter transparence et redevabilité grâce à un registre blockchain incontestable et vérifiable.",
    icon: Scale,
    color: "hsl(215 75% 45%)",
    accent: "bg-primary/10 text-primary",
  },
];

const SdgSection = () => (
  <section className="py-24 bg-muted/50" id="odd">
    <div className="container px-4">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
          Notre Impact
        </span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl text-foreground">
          Aligné sur les Objectifs de Développement Durable
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          FactureChain contribue activement à trois ODD des Nations Unies en transformant la
          relation entre les abonnés et leur fournisseur d'électricité.
        </p>
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
            {/* SDG Logo block */}
            <div
              className="flex items-center justify-between rounded-xl p-5 text-white shadow-lg"
              style={{ backgroundColor: sdg.color }}
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-90">ODD</div>
                <div className="text-5xl font-extrabold leading-none">{sdg.number}</div>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <sdg.icon className="h-9 w-9" strokeWidth={2.2} />
              </div>
            </div>

            <h3 className="mt-6 text-lg font-bold text-foreground">{sdg.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sdg.description}</p>

            <span
              className={`mt-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${sdg.accent}`}
            >
              Contribution directe
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SdgSection;
