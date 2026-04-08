import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                         */

function formatDate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate();
  const year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month = monthNames[date.getMonth()];
  return `${day} ${month} ${year}`;
}
function truncateWords(text, max) {
  if (!text) return "";
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const clean = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  return clean + "...";
}

function CCard({
  slug,
  section,
  title,
  image,
  tag,
  date,
  category
}) {
  return /* @__PURE__ */ jsx("div", { className: "card c-card", children: /* @__PURE__ */ jsxs("a", { href: `/article/${slug}/#`, className: "link", children: [
    /* @__PURE__ */ jsx("div", { className: "ratio-7-5", children: /* @__PURE__ */ jsx("img", { src: image || void 0, alt: title, loading: "lazy" }) }),
    /* @__PURE__ */ jsxs("h2", { className: `tag tag-minor tag-${section.toLowerCase()}`, children: [
      " ",
      tag.toUpperCase(),
      " "
    ] }),
    /* @__PURE__ */ jsx("h3", { className: `h3-${category}`, children: /* @__PURE__ */ jsx("span", { children: title }) }),
    /* @__PURE__ */ jsxs("span", { className: `date c-card-date ${category}`, children: [
      " ",
      date,
      " "
    ] })
  ] }) });
}

export { CCard as C, formatDate as f, truncateWords as t };
