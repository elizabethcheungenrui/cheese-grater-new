import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, a as renderTemplate } from './astro/server_CunD4GDZ.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://cheesegratermagazine.org");
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Title;
  const { sectionUpper } = Astro2.props;
  const sectionTitles = {
    voices: [
      "Voices & Letters",
      `Opinion, reviews, and analysis: tell the rest of UCL what you think. Send us a pitch or a letter at <a href="maito: editor@cheesegratermagzine.org">editor@cheesegratermagazine.org</a> to get started.`
    ],
    news: [
      "News & Investigations",
      `Your most-trusted news source on all things UCL: The Students' Union, campus stories, activism and much more. Got a scoop you think might be newsworthy? Follow our Instagram (<a href="https://www.instagram.com/uclcheesegrater/" target="_blank" rel="noopener noreferrer">@uclcheesegrater</a>) to find out when we meet or email pitches/queries to <a href="mailto:investigations@cheesegratermagazine.org">investigations@cheesegratermagazine.org</a>.`
    ],
    humour: [
      "Humour, Satire & Graphics",
      `The ONLY funny people at UCL. Follow our Instagram (<a href="https://www.instagram.com/uclcheesegrater/"target="_blank" rel="noopener noreferrer">@uclcheesegrater</a>) to find out when we meet or email pitches/drawings/queries to <a href="mailto:humour@cheesegratermagazine.org">humour@cheesegratermagazine.org</a>. Don\u2019t be shy. We need all the help we can get\u2026`
    ],
    podcast: [
      "Podcast: Grater Insight",
      `Take a deep dive beyond the headlines with Grater Insight, our weekly radio slot on Rare FM every Saturday during term time live from 12pm. Listen back to every episode right here, or on our <a href="https://open.spotify.com/show/671H9f9qfFds30m8ju8VIG" target="_blank">Spotify Page</a>.`
    ],
    print: [
      "Print Edition",
      `We print three times a year, and whenever else we feel like it. Explore almost every issue of
     <i>The Cheese Grater</i> since 2004.`
    ],
    graters: [
      "The Graters",
      `UCL\u2019s premier utensil-based sketch comedy group. Want to perform on the coveted Mully\u2019s stage? Or maybe you just really like cheese and want to meet like-minded people? Follow (<a href="https://www.instagram.com/uclcheesegrater/" target="_blank" rel="noopener noreferrer">@uclcheesegrater</a>) and (<a href="https://www.instagram.com/uclgraters/" target="_blank" rel="noopener noreferrer">@uclgraters</a>) on Instagram to keep up to date with the latest meetings and performances.`
    ]
  };
  const section = sectionUpper.toLowerCase();
  const [title, subtitle] = sectionTitles[section] ?? ["Section", ""];
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`title ${section}`, "class")}> <h1 class="heading">${title}</h1> <p class="subheading">${unescapeHTML(subtitle)}</p> </header>`;
}, "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/components/section-list/Title.astro", void 0);

export { $$Title as $ };
