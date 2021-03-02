import path from "../assets/icons/headphones.svg";
function TradShow() {
  return (
    <>
      <div id="tradshow">
        <iframe
          src="https://i.simmer.io/@BillShih/getac-utility"
          frameborder="0"
        />
      </div>
      <div id="vs-footer">
        <footer class="c-footer">
          <div class="gt-grid">
            <nav>
              <button class="c-footer__link-button">How it works</button>
              <a href="https://www.getac.com/eu/impressum/" target="_blank">
                Imprint
              </a>
              <a
                href="https://www.getac.com/eu/privacy-policy/"
                target="_blank"
              >
                Privacy Policy
              </a>
              <a href="https://www.getac.com/eu/cookie-policy/" target="_blank">
                Cookie Policy
              </a>
              <a href="https://www.getac.com/eu/terms-of-use/" target="_blank">
                Terms of Use
              </a>
            </nav>
            <a
              href="https://defence-tradeshow.getac.com/appointment/"
              target="_blank"
              id="appointment"
              class="c-footer__button-link"
            >
              <img src={path} alt="headphones" />
              Request a Virtual Meeting
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default TradShow;
