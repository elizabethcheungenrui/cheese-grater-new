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
  "title": "About Us",
  "description": "The Cheese Grater is UCL's student paper for campus news, investigations, and satire and the Best Student Publication in London (SPAs 2025)."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode("div", {
      class: "text",
      children: [createVNode("h1", {
        class: "about-heading",
        children: createVNode("i", {
          children: "“The Cheese Grater is a diamond in a sea of shit”"
        })
      }), createVNode("div", {
        class: "author-box",
        children: [createVNode("img", {
          class: "author-image",
          src: "https://images.cheesegratermagazine.org/author_thumbnails/gordon_thomson.jpg",
          alt: "Gordon Thomson"
        }), createVNode("div", {
          class: "author-text",
          children: [createVNode("span", {
            class: "author",
            children: "Gordon Thomson"
          }), createVNode("span", {
            class: "role",
            children: createVNode(_components.p, {
              children: ["Former Editor of ", createVNode("i", {
                children: "Time Out London"
              })]
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " is UCL’s student paper for campus news, investigations, and satire and the ", createVNode(_components.strong, {
        children: "Best Student Publication in the UK and Ireland"
      }), " (", createVNode(_components.a, {
        href: "https://www.spajournalism.com/spa-announces-winners-of-the-2026-national-awards/",
        children: "SPAs 2026"
      }), ")."]
    }), "\n", createVNode(_components.p, {
      children: "We’ve been annoying people across campus since 2004, producing award-winning journalism, illuminating important issues at the university, and holding the establishment to account."
    }), "\n", createVNode(_components.p, {
      children: ["We print three times a year and whenever else we feel like it because we’re cool and easy-going like that. During term time, we run a fortnightly newsletter, ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://us17.campaign-archive.com/home/?u=65bd5c7a770205040fd2e9e8a&id=9679db51c3",
          children: "The Digestive"
        })
      }), ", packed with the biggest campus headlines, our biting humour pieces, and fresh new graphics. Every Saturday at noon, we’re on Rare FM for our weekly radio segment, ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/podcast",
          children: "Grater Insight"
        })
      }), ". As “The Cheese Grater Magazine Society” at Students’ Union UCL, we also have a cool younger sister – our feminist zine ", createVNode(_components.strong, {
        children: createVNode(_components.em, {
          children: "Women’s Wrongs"
        })
      }), " – and a problem child, our sketch group, ", createVNode(_components.strong, {
        children: "the Graters"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " has twice been named the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/article/2025-01-16-the-cheese-grater-named-best-publication-in-london/",
          children: "Best Publication in London"
        })
      }), ", most recently in 2025, when we were also named Best Digital and highly commended for Best Print Design. We’ve also won the title of UCL’s Best Publication 10 times since 2004, most recently in 2024."]
    }), "\n", createVNode(_components.p, {
      children: ["We are proof that you can make it out of Ifor Evans Hall, where, in 2004, Classics student René Lavanchy established ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " to offer an alternative to the Union mouthpiece, ", createVNode(_components.em, {
        children: "Pi Magazine"
      }), ". Today, we’re proud to be UCL’s largest publication by circulation and are far more relevant, successful, and funny than all our predecessors."]
    }), "\n", createVNode(_components.p, {
      children: ["We are deeply committed to public-interest journalism, supporting student democracy, standing up for students’ interests without fear or favour, supporting marginalised communities at UCL, and also having a bit of laugh every now and then. If you like what you hear, ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/get-involved",
          children: "join our crew!"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: ["We hold ourselves to the highest standards under the ", createVNode(_components.a, {
          href: "https://www.ipso.co.uk/editors-code-of-practice/",
          children: "IPSO Editor’s Code of Practice"
        }), "."]
      })
    }), "\n", createVNode("section", {
      className: "whoweare-section",
      children: [createVNode("h2", {
        children: "Senior Editorial"
      }), createVNode("div", {
        className: "whoweare-editors",
        children: createVNode("div", {
          children: [createVNode("h3", {
            children: "Editors-in-Chief"
          }), createVNode("p", {
            children: "Malvika Murkumbi & Rebekah Wright"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:editor@cheesegratermagazine.org",
              children: "editor@cheesegratermagazine.org"
            })
          })]
        })
      })]
    }), "\n", createVNode("section", {
      className: "whoweare-section",
      children: [createVNode("h2", {
        children: "Section Editors"
      }), createVNode("div", {
        className: "whoweare-editors",
        children: [createVNode("div", {
          children: [createVNode("h3", {
            children: "News and Investigations Editors"
          }), createVNode("p", {
            children: "James Balloqui & Go Kitajima"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:investigations@cheesegratermagazine.org",
              children: "investigations@cheesegratermagazine.org"
            })
          })]
        }), createVNode("div", {
          children: [createVNode("h3", {
            children: "Humour and Satire Editors"
          }), createVNode("p", {
            children: "Go Kitajima & Holly Turner"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:humour@cheesegratermagazine.org",
              children: "humour@cheesegratermagazine.org"
            })
          })]
        }), createVNode("div", {
          children: [createVNode("h3", {
            children: "Graphics Editor"
          }), createVNode("p", {
            children: "Kotryna Taujanskaite"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:humour@cheesegratermagazine.org",
              children: "humour@cheesegratermagazine.org"
            })
          })]
        }), createVNode("div", {
          children: [createVNode("h3", {
            children: "Online Editor"
          }), createVNode("p", {
            children: "Elizabeth Cheung"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:elizabeth.cheung.25@ucl.ac.uk",
              children: "elizabeth.cheung.25@ucl.ac.uk"
            })
          })]
        })]
      })]
    }), "\n", createVNode("section", {
      className: "whoweare-section",
      children: [createVNode("h2", {
        children: "The Graters and Women’s Wrongs Zine"
      }), createVNode("div", {
        className: "whoweare-editors",
        children: [createVNode("div", {
          children: [createVNode("h3", {
            children: "Sketch Directors"
          }), createVNode("p", {
            children: "Robin Elfsberg & Carla Rodrigues"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:show@cheesegratermagazine.org",
              children: "show@cheesegratermagazine.org"
            })
          })]
        }), createVNode("div", {
          children: [createVNode("h3", {
            children: "Zine Editors"
          }), createVNode("p", {
            children: "Coryn Gyimah & Rinikka Kapoor"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:zine@cheesegratermagazine.org",
              children: "zine@cheesegratermagazine.org"
            })
          })]
        })]
      })]
    }), "\n", createVNode("section", {
      className: "whoweare-section",
      children: [createVNode("h2", {
        children: "Society Officers"
      }), createVNode("div", {
        className: "whoweare-editors",
        children: [createVNode("div", {
          children: [createVNode("h3", {
            children: "President"
          }), createVNode("p", {
            children: "Izzie Moull"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:president@cheesegratermagazine.org",
              children: "president@cheesegratermagazine.org"
            })
          })]
        }), createVNode("div", {
          children: [createVNode("h3", {
            children: "Treasurer"
          }), createVNode("p", {
            children: "Robert Delaney"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:robert.delaney.22@ucl.ac.uk",
              children: "robert.delaney.22@ucl.ac.uk"
            })
          })]
        }), createVNode("div", {
          children: [createVNode("h3", {
            children: "Welfare Officer"
          }), createVNode("p", {
            children: "Callum Gregor"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:callum.gregor.23@ucl.ac.uk",
              children: "callum.gregor.23@ucl.ac.uk"
            })
          })]
        }), createVNode("div", {
          children: [createVNode("h3", {
            children: "Social Secretary"
          }), createVNode("p", {
            children: "Sophia Marmion"
          }), createVNode("p", {
            children: createVNode(_components.a, {
              href: "mailto:sophia.marmion.24@ucl.ac.uk",
              children: "sophia.marmion.24@ucl.ac.uk"
            })
          })]
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

const url = "/about";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/about.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/about.mdx";
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
