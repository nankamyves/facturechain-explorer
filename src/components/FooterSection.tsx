import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const FooterSection = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Logo className="h-7 w-7" />
              <span className="text-lg font-bold text-foreground">FactureChain</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">{t("footer.links_title")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#solution" className="hover:text-primary transition-colors">{t("nav.solution")}</a></li>
              <li><a href="#probleme" className="hover:text-primary transition-colors">{t("nav.problem")}</a></li>
              <li><a href="#blockchain" className="hover:text-primary transition-colors">{t("nav.blockchain")}</a></li>
              <li><a href="#dashboard" className="hover:text-primary transition-colors">{t("nav.dashboard")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">{t("footer.users_title")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.user1")}</li>
              <li>{t("footer.user2")}</li>
              <li>{t("footer.user3")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>{t("footer.rights")}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-secondary font-medium">
            {t("footer.badge")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
