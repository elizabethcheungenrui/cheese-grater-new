import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as createAstro } from './astro/server_CunD4GDZ.mjs';
import 'piccolore';
/* empty css                          */
import 'clsx';

const $$HeaderDesktop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header header-desktop"> <div class="logo"> <!--<h3 class="the">THE</h3>--> <a href="/" class="logo-link"> <img src="https://images.cheesegratermagazine.org/logos/cg_web_logo_cropped.png" width="650px"> <!--<h3 class="cheese-grater">
        <span class="cheese">CHEESE </span>
        <span class="grater">
          GR<span class="grater-icon"></span>TER
        </span>
      </h3>--> </a> <span class="best">SPA BEST PUBLICATION IN THE UK AND IRELAND 2026</span> </div> <nav class="menu-bar" aria-label="Primary Navigation"> <a href="/" class="menu-item">Home</a> <a href="/news" class="menu-item news">News</a> <a href="/humour" class="menu-item humour">Humour</a> <a href="/voices" class="menu-item voices">Voices</a> <a href="/podcast" class="menu-item podcast">Podcast</a> <a href="https://womenswrongs.cheesegratermagazine.org" target="_blank" class="menu-item">
Women's Wrongs
</a> <button class="menu-item menu-more" aria-controls="more-menu" onclick="document.body.classList.toggle('more-open')">
More
</button> <a href="/past-issues" class="menu-item print-edition"> Print Edition </a> <a href="https://us17.campaign-archive.com/home/?u=65bd5c7a770205040fd2e9e8a&id=9679db51c3" target="_blank" class="menu-item print-edition">
The Digestive
</a> ${renderComponent($$result, "HeaderSearch", null, { "client:only": "react", "isMobile": false, "client:component-hydration": "only", "client:component-path": "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/header-footer/HeaderSearch", "client:component-export": "default" })} </nav> </header> <div id="more-menu" class="more-menu"> <div class="menu-inner"> <div class="more-submenu"> <h3>About Us!</h3> <a href="/about" class="more-menu-text">Who We Are</a> <a href="/get-involved" class="more-menu-text">Get Involved!</a> <a href="/awards" class="more-menu-text">Awards and Accolades</a> <a href="/past-editors" class="more-menu-text">Past Editors</a> <a href="/life-members" class="more-menu-text">Honorary Life Members</a> </div> <div class="more-submenu"> <h3>Contact</h3> <a href="/contact" class="more-menu-text">Contact Us</a> <a href="/tips" class="more-menu-text">Anonymous Form</a> </div> <div class="more-submenu"> <h3>Member Resources</h3> <a href="/resources" class="more-menu-text">Training and Style Guide</a> <a href="/welfare" class="more-menu-text">Help and Welfare</a> </div> <div class="more-submenu"> <button class="more-close" onclick="document.body.classList.remove('more-open')" aria-label="Close menu"> <h3 class="x">&#x2718;</h3> </button> </div> </div> <a href="/archive" class="more-menu-text"> <span class="time-machine">The Time Machine</span> </a> </div>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/header-footer/HeaderDesktop.astro", void 0);

const $$HeaderMobile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header-mobile"> <div class="logo"> <!--<span class="the">THE</span>--> <a href="/" class="logo-link"> <img src="https://images.cheesegratermagazine.org/logos/cg_web_logo_cropped.png" width="150px"> <!--<span class="cheese-grater">
        <span class="cheese">CHEESE </span>
        <span class="grater">
          GR<span class="grater-icon"></span>TER
        </span>
      </span>--> </a> </div> <button class="menu-toggle" aria-controls="mobile-menu" onclick="document.body.classList.toggle('menu-open')"> <p>☰</p> </button> </header> <nav id="mobile-menu" class="mobile-menu"> <div class="mobile-menu-inner"> <a href="/">Home</a> <a href="/news">News</a> <a href="/humour">Humour</a> <a href="/voices">Voices</a> <a href="/podcast">Podcast</a> <a href="https://womenswrongs.cheesegratermagazine.org" target="_blank">
Women’s Wrongs
</a> <a href="/past-issues" class="yellow">Print Edition</a> <a href="https://us17.campaign-archive.com/home/?u=65bd5c7a770205040fd2e9e8a&id=9679db51c3" target="_blank" class="yellow">
The Digestive
</a> </div> <details> <summary>About Us</summary> <div class="details"> <a href="/about">Who We Are</a> <a href="/get-involved">Get Involved</a> <a href="/awards">Awards</a> <a href="/past-editors">Past Editors</a> <a href="/life-members">Honorary Life Members</a> </div> </details> <details> <summary>Contact</summary> <div class="details"> <a href="/contact">Contact Us</a> <a href="/tips">Anonymous Form</a> </div> </details> <details> <summary>Member Resources</summary> <div class="details"> <a href="/resources">Training & Style</a> <a href="/welfare">Help & Welfare</a> </div> </details> ${renderComponent($$result, "HeaderSearch", null, { "client:only": "react", "isMobile": true, "client:component-hydration": "only", "client:component-path": "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/header-footer/HeaderSearch", "client:component-export": "default" })} <a class="time-machine" href="/archive">The Time Machine</a> </nav>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/header-footer/HeaderMobile.astro", void 0);

const $$Astro = createAstro("https://cheesegratermagazine.org");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <section class="contact"> <!-- LEFT COLUMN --> <section class="column"> <h3 class="header">Our Standards</h3> <p class="ipso"> <em>The Cheese Grater</em> holds itself to the highest standards set out in
        the IPSO Editor's Code of Practice. If you spot a mistake, let us know at
<a href="mailto:editor@cheesegratermagazine.org">
editor@cheesegratermagazine.org
</a>. If you wish to make a complaint, you can do so
<a href="https://studentsunionucl.org/webform/student-media-complaint" target="_blank" rel="noopener noreferrer">
here
</a>.
</p> </section> <!-- RIGHT COLUMN --> <section class="column"> <h3 class="header">Mailing Address</h3> <address>
The Cheese Grater Magazine Society<br>
C/O Students' Union UCL<br>
2/F Bloomsbury Theatre<br>
15 Gordon St<br>
London WC1H 0AH<br>
We accept fan mail, just no clothing of the used variety.
</address> </section> </section> <section class="copyright"> <p class="copyright-text">
© 2004–${(/* @__PURE__ */ new Date()).getFullYear()} The Cheese Grater Magazine, Students’ Union
      UCL
</p> <section class="lizzie"> <p class="lizzie-text">
Website made in Astro by Elizabeth Cheung
</p> </section> </section> </footer>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/header-footer/Footer.astro", void 0);

export { $$HeaderDesktop as $, $$HeaderMobile as a, $$Footer as b };
