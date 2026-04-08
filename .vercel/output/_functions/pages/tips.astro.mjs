import { _ as __astro_tag_component__, b as createVNode, F as Fragment } from '../chunks/astro/server_CunD4GDZ.mjs';
import { $ as $$MoreLayout } from '../chunks/MoreLayout_Pk95vjL9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$MoreLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/MoreLayout.astro",
  "title": "Anonymous Form",
  "description": "If you have something you’d like to share anonymously, fill in the form below. We always protect the identity of our sources."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "If you have something you’d like to share anonymously, fill in the form below. We always protect the identity of our sources."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "DISCLAIMER:"
      }), " Submissions are anonymous to us. They are handled by Google Forms.\nIf you are concerned about traceability, or you feel your submission could put you at risk:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Do not use a university email,"
      }), "\n", createVNode(_components.li, {
        children: "Consider using a personal device and network."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["For spam-prevention reasons, Google Forms does not allow anonymous file uploads. If you wish to submit files, please include a link to them in your response (for example, via a file-sharing service), and ensure we have permission to access them at ", createVNode(_components.a, {
        href: "mailto:investigations@cheesegratermagazine.org",
        children: "investigations@cheesegratermagazine.org"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Please be aware that third-party file-sharing services may collect their own metadata, and you are responsible for choosing how and where to host any files you share."
    }), "\n", createVNode("iframe", {
      src: "https://docs.google.com/forms/d/e/1FAIpQLSefwXjuxn98LUSWywypis_6ObR5ffEAizu6sY-e56IeiodbZg/viewform?pli=1&authuser=0",
      width: "100%",
      height: "500",
      style: {
        border: "none"
      },
      loading: "lazy",
      referrerPolicy: "no-referrer",
      allow: "fullscreen"
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/tips";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/tips.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/tips.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
