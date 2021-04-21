import logoPath from "./../assets/media/getac-logo.svg";
import React, { useState } from "react";
import i18n from "../i18n";
import history from "../history";

function Header() {
  const [curlang, setLang] = useState(i18n.language);

  const handleSelectChange = (e) => {
    let newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setLang(newLang);
    history.push(`/${newLang}`);
  };

  return (
    <header class="header">
      <div class="gt-grid">
        <a href={`/${curlang}`} class="logo">
          <img src={logoPath} width="97" height="29" alt="Getac Logo" />
        </a>

        <nav class="navigation">
          <a href="#product-updates">Product Updates</a>
          <a href="#whitepaper">Download Whitepaper</a>
          <a href="#getac">Why Getac</a>
        </nav>

        <div class="meta-navigation">
          <a href="#" class="contact">
            Contact
          </a>

          <a href="#" class="external">
            Visit our website
          </a>

          <form action="#" class="language-switch">
            <label>
              <select
                class="language-switch-select"
                onChange={handleSelectChange}
                value={curlang}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </label>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
