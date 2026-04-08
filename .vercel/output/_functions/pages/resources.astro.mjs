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
  "title": "Resources Hub",
  "description": "This page provides guidance and resources for editors, writers, and Society members."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "editor-training-programme",
    "text": "Editor Training Programme"
  }, {
    "depth": 3,
    "slug": "cover-sheet-and-templates",
    "text": "Cover Sheet and Templates"
  }, {
    "depth": 3,
    "slug": "style-guide",
    "text": "Style Guide"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "This page provides guidance and resources for editors, writers, and Society members."
    }), "\n", createVNode(_components.h3, {
      id: "editor-training-programme",
      children: "Editor Training Programme"
    }), "\n", createVNode(_components.p, {
      children: "Presentation slides from our editor training programme."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://drive.google.com/drive/folders/1Jqscv5xGLHTFH_iVZhu-FMd25no7GcpG?usp=drive_link",
        children: "Click here"
      })
    }), "\n", createVNode(_components.h3, {
      id: "cover-sheet-and-templates",
      children: "Cover Sheet and Templates"
    }), "\n", createVNode(_components.p, {
      children: "All article drafts should include our official cover sheet so we can keep track of progress. Writers are strongly encouraged to follow our news template and review our right of reply guidance. Please make a copy of this in Google Drive and write your story on Google Docs."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://docs.google.com/document/d/1_1Iayunjkc8lNHpADzA3EIOZ4k9pnHEZkFcq2Bk3YEw/edit?tab=t.0",
        children: "Copy to Drive"
      })
    }), "\n", createVNode(_components.h3, {
      id: "style-guide",
      children: "Style Guide"
    }), "\n", createVNode(_components.p, {
      children: "The Cheese Grater takes very seriously its responsibility to maintain high editorial standards. Part of this responsibility is to make sure that we know how to spell and punctuate correctly and write in a consistent manner. It is the task of both writers and subeditors to ensure that all articles produced by The Cheese Grater adhere to this guide. Exceptions include Humour and Satire, which may take some artistic liberties, Voices and Letters, where writers may enjoy greater stylistic freedoms, and Women’s Wrongs, where this guide does not apply."
    }), "\n", createVNode(_components.p, {
      children: "This guide will take previous editions of the style guide as a starting point and refer to external guides where appropriate. It will also set a standard for the structure of articles and provide guidance on picture sourcing."
    }), "\n", createVNode("iframe", {
      src: "https://images.cheesegratermagazine.org/misc/Cheese-Grater-Style-Guide-Nov-2024.pdf",
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

const url = "/resources";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/resources.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/resources.mdx";
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
