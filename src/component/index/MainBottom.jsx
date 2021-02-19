import { useTranslation } from "react-i18next";
function MainBottom() {
  const { t, i18n } = useTranslation();
  return (
    <article class="teaser-image">
      <div class="gt-grid">
        <div class="gt-col-12">
          <h2>{t("messages.footerBottom")}</h2>
          <p />
          <a href="/appointment" class="button button-white">
            {t("button.letstalk")}
          </a>
        </div>
      </div>
    </article>
  );
}

export default MainBottom;
