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
  "title": "Get Involved!",
  "description": "Get involved with the Cheese Grater!"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "news--investigations",
    "text": "News & Investigations"
  }, {
    "depth": 3,
    "slug": "humour-satire--graphics",
    "text": "Humour, Satire & Graphics"
  }, {
    "depth": 3,
    "slug": "the-graters",
    "text": "The Graters"
  }, {
    "depth": 3,
    "slug": "womens-wrongs-zine",
    "text": "Women’s Wrongs Zine"
  }, {
    "depth": 3,
    "slug": "voices--letters",
    "text": "Voices & letters"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Love a bit of gossip? Think, “wow, I’m so funny”, on the regular? Spend most of your lectures doing silly doodles? If you answered “yes” to any of those (or even if you didn’t) you should consider joining ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), "!"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " operates under the umbrella of the homonymous ", createVNode(_components.a, {
        href: "https://studentsunionucl.org/clubs-societies/cheese-grater-magazine",
        children: "Cheese Grater Magazine Society"
      }), ", a student society affiliated with our publisher, Students’ Union UCL. Together, we publish ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), ", Women’s Wrongs, and operate a Fringe-worthy sketch comedy group, the Graters. We also run regular meetings, socials, and offer training and guidance to all our journalists."]
    }), "\n", createVNode(_components.h3, {
      id: "news--investigations",
      children: "News & Investigations"
    }), "\n", createVNode(_components.p, {
      children: "The team meets every Monday at 6pm to discuss all the stories we’re investigating. We only publish investigations that have gone through this editorial; if you want your article in the magazine or just want to see what we do, then get yourself down to the meetings."
    }), "\n", createVNode(_components.p, {
      children: ["If you want to spill the tea, break some news, or be the next Edward Snowden, send any tip offs to the investigations editor at ", createVNode(_components.a, {
        href: "investigations@cheesegratermagazine.org",
        children: "investigations@cheesegratermagazine.org"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "humour-satire--graphics",
      children: "Humour, Satire & Graphics"
    }), "\n", createVNode(_components.p, {
      children: ["Meetings are on Tuesdays at 6pm. All submissions are sent to ", createVNode(_components.a, {
        href: "humour@cheesegratermagazine.org",
        children: "humour@cheesegratermagazine.org"
      }), " and then read out anonymously. Then we chat about each article, suggest edits, and workshop new ideas. After that, we go to the pub. Again, we only publish articles that have been submitted in this way. The best way to start writing with us it to come along and get involved. You don’t have to have written/drawn something, just bring your thinking cap and come and have a giggle."]
    }), "\n", createVNode(_components.h3, {
      id: "the-graters",
      children: "The Graters"
    }), "\n", createVNode(_components.p, {
      children: ["Sketch meetings are every Wednesday at 6pm, bring any sketch ideas you’ve got with you or send them to ", createVNode(_components.a, {
        href: "show@cheesegratermagazine.org",
        children: "show@cheesegratermagazine.org"
      }), " and we’ll read through and edit them with the group. We also workshop ideas, perform sketches, and generally talk comedy. Absolutely no experience is required and the best way to get it is to come along and prat around with us."]
    }), "\n", createVNode(_components.h3, {
      id: "womens-wrongs-zine",
      children: "Women’s Wrongs Zine"
    }), "\n", createVNode(_components.p, {
      children: ["Meetings are Thursdays at 6pm. Meetings are highly collaborative but no experience is required. Come along to the meetings to help create content, come up with new ideas and put the zine together. Send any ideas/question to ", createVNode(_components.a, {
        href: "mailto:zine@cheesegratermagazine.org",
        children: "zine@cheesegratermagazine.org"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "voices--letters",
      children: "Voices & letters"
    }), "\n", createVNode(_components.p, {
      children: ["We also operate an opinion column called Voices that is open for all UCL students, even if you haven’t got a membership! If you have an idea or a hot take about something happening on campus or student life in general, send us a short pitch of two paragraphs outlining your argument. Voices articles must be no longer than 1,000 words. For shorter opinion pieces up to 150 words, you can write a letter to our editors. Please direct all Voices pitches and letters to ", createVNode(_components.a, {
        href: "mailto:editor@cheesegratermagazine.org",
        children: "editor@cheesegratermagazine.org"
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

const url = "/get-involved";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/get-involved.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/get-involved.mdx";
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
