import logo from "./../assets/media/getac-logo.svg";
import React, { useState } from "react";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

function Header() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [currentLang, setCurrentLang] = useState("en");

  function handleSelectChange(e) {
    console.log(e)
    setCurrentLang(e.target.value);
    changeLanguage(currentLang);
  }

  return (
    <header class="header">
      <div class="gt-grid">
        <a href="/getac-event" class="logo">
          <img src={logo} width="97" height="29" alt="Getac Logo" />
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
                value={currentLang}
                onChange={handleSelectChange}
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
