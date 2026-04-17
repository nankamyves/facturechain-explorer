import { Zap } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container px-4">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-5 w-5 text-secondary" />
            <span className="text-lg font-bold text-foreground">FactureChain</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            La transparence énergétique par la blockchain. Contribuer aux ODD 7 (Énergie propre), ODD 11 (Villes durables) et ODD 16 (Institutions efficaces).
          </p>
        </div>

        {/* Liens */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Liens utiles</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#solution" className="hover:text-primary transition-colors">La Solution</a></li>
            <li><a href="#probleme" className="hover:text-primary transition-colors">Le Problème</a></li>
            <li><a href="#dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
          </ul>
        </div>

        {/* Utilisateurs */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">Pour qui ?</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Abonnés ENEO</li>
            <li>Associations de consommateurs</li>
            <li>PME & Entreprises</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 FactureChain. Tous droits réservés.</span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-secondary font-medium">
          🏆 Miabe Hackathon 2026 — Darollo Technologies Corporation
        </span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
