import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                         */

function MBCard({
  slug,
  section,
  title,
  image,
  tag,
  date,
  articlecontent
}) {
  return /* @__PURE__ */ jsx("div", { className: "card mb-card", children: /* @__PURE__ */ jsxs("a", { href: `/article/${slug}`, className: "link", children: [
    /* @__PURE__ */ jsx("div", { className: "ratio-7-5", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
    tag != "" && /* @__PURE__ */ jsxs("h2", { className: `tag tag-major-mbcard tag-${section.toLowerCase()}`, children: [
      " ",
      tag.toUpperCase(),
      " "
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "mbcard-title", children: /* @__PURE__ */ jsx("span", { className: `wipe ${articlecontent ? "mbwipe" : ""}`, children: title }) }),
    /* @__PURE__ */ jsxs("span", { className: "date", children: [
      " ",
      date,
      " "
    ] })
  ] }) });
}

export { MBCard as M };
