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
  "title": "Honorary Life Members",
  "description": "Winner, winner, chicken dinner, baby. The Cheese Grater is proud to have won the most awards of any UCL publication."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["Honorary Life Membership to ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " requires two or more years of outstanding contribution to the publication, going above and beyond one’s position and consistently embodying its ethos and beliefs. The publication could not have achieved what it has without the efforts of these amazing people (sorted by the second letter of their last names):"]
    }), "\n", createVNode("div", {
      className: "more-styling-text honorary-columns",
      children: [createVNode("ul", {
        children: [createVNode("li", {
          children: "P. K. Maguire"
        }), createVNode("li", {
          children: "Alex ‘Daish’ Daish"
        }), createVNode("li", {
          children: "Sasha Baker"
        }), createVNode("li", {
          children: "Disha Takle"
        }), createVNode("li", {
          children: "Rosie Halsall"
        }), createVNode("li", {
          children: "Peter Daniels"
        }), createVNode("li", {
          children: "Anna Maria Papaoikonomou"
        }), createVNode("li", {
          children: "Tara Sarangi"
        }), createVNode("li", {
          children: "Lily Park"
        }), createVNode("li", {
          children: "Hugh Bassett"
        }), createVNode("li", {
          children: "Alejandro Castillo-Powell"
        }), createVNode("li", {
          children: "Anna Saunders"
        }), createVNode("li", {
          children: "René Lavanchy"
        }), createVNode("li", {
          children: "Rob Davidson"
        }), createVNode("li", {
          children: "Christina Ravinet"
        }), createVNode("li", {
          children: "Mark Ravinet"
        }), createVNode("li", {
          children: "Charlie Hayton"
        }), createVNode("li", {
          children: "A. Z. McKenna"
        }), createVNode("li", {
          children: "Oscar Webb"
        }), createVNode("li", {
          children: "Jack Redfern"
        })]
      }), createVNode("ul", {
        children: [createVNode("li", {
          children: "Rob Delaney"
        }), createVNode("li", {
          children: "John Bell"
        }), createVNode("li", {
          children: "Beatrice Kelly"
        }), createVNode("li", {
          children: "Iona Jenkins"
        }), createVNode("li", {
          children: "Marina Merryweather"
        }), createVNode("li", {
          children: "Ollie Phelan"
        }), createVNode("li", {
          children: "Jasmine Chinasamy"
        }), createVNode("li", {
          children: "Thom Rhoades"
        }), createVNode("li", {
          children: "Alex Diamond"
        }), createVNode("li", {
          children: "Nick Miao"
        }), createVNode("li", {
          children: "Adam Gillett"
        }), createVNode("li", {
          children: "Peter FitzSimons"
        }), createVNode("li", {
          children: "Hannah Sketchley"
        }), createVNode("li", {
          children: "Kate ‘Scary Boots’ Oliver"
        }), createVNode("li", {
          children: "Colette Allen"
        }), createVNode("li", {
          children: "Tim Smith"
        }), createVNode("li", {
          children: "Zhenya Robinson"
        }), createVNode("li", {
          children: "Michael Johnson"
        }), createVNode("li", {
          children: "James Donaldson-Briggs"
        }), createVNode("li", {
          children: "George Potts"
        })]
      }), createVNode("ul", {
        children: [createVNode("li", {
          children: "Izzie Moull"
        }), createVNode("li", {
          children: "Will Rowland"
        }), createVNode("li", {
          children: "Gareth Spencer"
        }), createVNode("li", {
          children: "Bo Franklin"
        }), createVNode("li", {
          children: "Rebekah Wright"
        }), createVNode("li", {
          children: "Will Orton"
        }), createVNode("li", {
          children: "Sebastian Stacey"
        }), createVNode("li", {
          children: "Sam Steddy"
        }), createVNode("li", {
          children: "Huw Steer"
        }), createVNode("li", {
          children: "Harry Stopes"
        }), createVNode("li", {
          children: "Hannah Hudson"
        }), createVNode("li", {
          children: "Jenni Hulse"
        }), createVNode("li", {
          children: "Ross Humphreys"
        }), createVNode("li", {
          children: "Ollie Dunn"
        }), createVNode("li", {
          children: "Ben Munster"
        }), createVNode("li", {
          children: "Malvika Murkumbi"
        }), createVNode("li", {
          children: "Jess Murray"
        }), createVNode("li", {
          children: "Jason Murugesu"
        })]
      })]
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

const url = "/life-members";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/life-members.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/life-members.mdx";
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
