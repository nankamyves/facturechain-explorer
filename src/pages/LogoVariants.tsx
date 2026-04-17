import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import LogoMonogram from "@/components/logo-variants/LogoMonogram";
import LogoShield from "@/components/logo-variants/LogoShield";
import LogoChainFC from "@/components/logo-variants/LogoChainFC";
import LogoMeter from "@/components/logo-variants/LogoMeter";
import LogoBoltLedger from "@/components/logo-variants/LogoBoltLedger";

const variants = [
  { name: "Actuel — Document + Chaîne", Comp: Logo, key: "current" },
  { name: "1. Monogramme F⛓", Comp: LogoMonogram, key: "monogram" },
  { name: "2. Bouclier (sécurité + énergie)", Comp: LogoShield, key: "shield" },
  { name: "3. Maillons purs FC", Comp: LogoChainFC, key: "chain" },
  { name: "4. Compteur blockchain (ENEO)", Comp: LogoMeter, key: "meter" },
  { name: "5. Éclair + Ledger (3 blocs)", Comp: LogoBoltLedger, key: "ledger" },
];

const Card = ({ name, Comp, dark = false }: { name: string; Comp: React.ComponentType<{ className?: string }>; dark?: boolean }) => (
  <div className={`rounded-2xl border p-6 space-y-6 ${dark ? "bg-[hsl(215_30%_8%)] border-white/10 text-white" : "bg-card border-border text-foreground"}`}>
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold">{name}</h3>
      <span className={`text-xs px-2 py-0.5 rounded-full ${dark ? "bg-white/10" : "bg-muted"}`}>{dark ? "Dark" : "Light"}</span>
    </div>

    {/* Hero size */}
    <div className="flex items-center justify-center py-6">
      <Comp className="h-24 w-24" />
    </div>

    {/* Navbar context */}
    <div className={`flex items-center gap-2 rounded-lg px-3 py-2 ${dark ? "bg-white/5" : "bg-muted/60"}`}>
      <Comp className="h-7 w-7" />
      <span className="font-bold">FactureChain</span>
    </div>

    {/* Sizes scale */}
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Comp className="h-4 w-4" />
        <span className="text-[10px] opacity-60">16</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Comp className="h-6 w-6" />
        <span className="text-[10px] opacity-60">24</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Comp className="h-10 w-10" />
        <span className="text-[10px] opacity-60">40</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Comp className="h-16 w-16" />
        <span className="text-[10px] opacity-60">64</span>
      </div>
    </div>
  </div>
);

const LogoVariants = () => {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container px-4 max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Variantes de logo FactureChain</h1>
            <p className="text-muted-foreground mt-2">Compare chaque variante en light/dark, en navbar et à différentes tailles.</p>
          </div>
          <Link to="/" className="text-sm font-medium text-primary hover:underline">← Retour</Link>
        </div>

        <div className="space-y-10">
          {variants.map((v) => (
            <section key={v.key}>
              <h2 className="text-lg font-bold text-foreground mb-4">{v.name}</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card name={v.name} Comp={v.Comp} />
                <Card name={v.name} Comp={v.Comp} dark />
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-accent/40 p-6 text-sm text-foreground">
          Indique-moi le numéro de la variante retenue (ex. « variante 3 ») et je l'applique partout (navbar, footer, favicon) puis je supprime cette page.
        </div>
      </div>
    </main>
  );
};

export default LogoVariants;
