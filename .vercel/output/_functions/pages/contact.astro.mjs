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
  "title": "Contact Us",
  "description": "Got a story? Get in touch with our journalists via our socials, email (listed on the “Who We Are” page), or using our anonymous webform."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "pitches",
    "text": "Pitches"
  }, {
    "depth": 3,
    "slug": "editorial-complaints",
    "text": "Editorial Complaints"
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
      children: ["Got a story? Get in touch with our journalists via our ", createVNode(_components.a, {
        href: "https://instagram.com/uclcheesegrater",
        children: "socials"
      }), ", email (listed on the ", createVNode(_components.a, {
        href: "/about",
        children: "Who We Are"
      }), " page), or using our anonymous webform."]
    }), "\n", createVNode(_components.h3, {
      id: "pitches",
      children: "Pitches"
    }), "\n", createVNode(_components.p, {
      children: ["If you have an idea for the publication we would love to hear from you! As a membership publication, we can only accept pitches for news and satire stories from members of the Society. You can get your year-long membership ", createVNode(_components.a, {
        href: "https://studentsunionucl.org/clubs-societies/cheese-grater-magazine",
        children: "here"
      }), " for the low, low price of just £8."]
    }), "\n", createVNode(_components.p, {
      children: ["The good news is that you do not need a membership to pitch opinion pieces for ", createVNode(_components.a, {
        href: "/voices",
        children: "Voices & Letters"
      }), ", a forum of lively debate open to all UCL students, staff, and alumni! Voices pitches must still relate to the student experience at UCL and express a genuinely held view. Letters to the Editors work in the same way, except they should be no longer than 150 words and should contain your name and address — we will only publish your first name and your London borough. Send your views to ", createVNode(_components.a, {
        href: "mailto:editor@cheesegratermagazine.org",
        children: "editor@cheesegratermagazine.org"
      }), " or, even better, come along to one our weekly meetings (details are always on our Instagram). We’re a friendly bunch, promise!"]
    }), "\n", createVNode(_components.h3, {
      id: "editorial-complaints",
      children: "Editorial Complaints"
    }), "\n", createVNode(_components.p, {
      children: ["The Cheese Grater is a publication of Students’ Union UCL. We take our reporting very seriously and do genuinely hold ourselves to the highest editorial standards outlined in the ", createVNode(_components.a, {
        href: "https://www.ipso.co.uk/editors-code-of-practice/",
        children: "IPSO Editor’s Code of Practice"
      }), ". If you spot a factual error in our reporting, get in touch with our editors at ", createVNode(_components.a, {
        href: "mailto:editor@cheesegratermagazine.org",
        children: "editor@cheesegratermagazine.org"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["If you wish to make a complaint, you can do so ", createVNode(_components.a, {
        href: "https://studentsunionucl.org/webform/student-media-complaint",
        children: "here"
      }), "."]
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

const url = "/contact";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/contact.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/contact.mdx";
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
