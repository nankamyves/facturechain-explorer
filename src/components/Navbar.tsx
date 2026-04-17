import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { href: "#probleme", label: t("nav.problem") },
    { href: "#solution", label: t("nav.solution") },
    { href: "#dashboard", label: t("nav.dashboard") },
    { href: "#odd", label: t("nav.sdg") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <Zap className="h-5 w-5 text-secondary" />
          FactureChain
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#solution" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5">
            {t("nav.cta")}
          </a>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="sm:hidden border-t border-border bg-background px-4 py-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
