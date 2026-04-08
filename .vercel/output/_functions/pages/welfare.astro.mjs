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
  "title": "Help & Welfare",
  "description": "This page provides information about support services available to students at UCL and an anonymous submission form for any welfare concerns you may have at The Cheese Grater Magazine Society."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "student-support--wellbeing-services",
    "text": "Student Support & Wellbeing Services"
  }, {
    "depth": 3,
    "slug": "students-union-advice-service",
    "text": "Students’ Union Advice Service"
  }, {
    "depth": 3,
    "slug": "welfare-contact-form",
    "text": "Welfare Contact Form"
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
      children: "This page provides information about support services available to students at UCL and an anonymous submission form for any welfare concerns you may have at The Cheese Grater Magazine Society."
    }), "\n", createVNode(_components.h3, {
      id: "student-support--wellbeing-services",
      children: "Student Support & Wellbeing Services"
    }), "\n", createVNode(_components.p, {
      children: ["The SSW team of expert wellbeing, disability, and mental health staff provide a safe, confidential, and non-judgemental space, in which you can discuss any issues that may be affecting your ability to study. All of their support services are free of charge and open to UCL students of all levels.\n", createVNode(_components.a, {
        href: "https://www.ucl.ac.uk/students/support-and-wellbeing-services",
        children: "Visit SSW"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "students-union-advice-service",
      children: "Students’ Union Advice Service"
    }), "\n", createVNode(_components.p, {
      children: ["The Union Advice Service is a team of experienced caseworkers ready to support you with any difficulties that might occur during your time at UCL, specialising in academic issues, housing, employment, and money advice. Sessions are confidential and will not be reported to your department or any other university staff unless at your request. Students can make an appointment or attend a drop-in session for free, confidential, and independent advice and support.\n", createVNode(_components.a, {
        href: "https://studentsunionucl.org/advice-and-support/find-help/advice-service",
        children: "Visit the Advice Service"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "welfare-contact-form",
      children: "Welfare Contact Form"
    }), "\n", createVNode(_components.p, {
      children: ["This is an anonymous submission point for if you have any welfare concerns pertaining to an event, incident or individual/group of individuals that you would like to report without revealing your identity, please use the form below. Any information shared via this form will be kept confidential apart from the parties involved, and entries made on this form will only be directly accessible to the President and Welfare Officer of The Cheese Grater Magazine Society. However, if you are comfortable, please leave your email so we can contact you to help resolve your concern. If you would prefer to contact us directly, please email our Welfare Officer Callum Gregor at ", createVNode(_components.a, {
        href: "mailto:callum.gregor.23@ucl.ac.uk",
        children: "callum.gregor.23@ucl.ac.uk"
      }), " or President Izzie Moull at ", createVNode(_components.a, {
        href: "mailto:president@cheesegratermagazine.org",
        children: "president@cheesegratermagazine.org"
      }), ".\n", createVNode(_components.a, {
        href: "https://docs.google.com/forms/d/e/1FAIpQLScqVFnk3amP7IZwiiSGvgNf-msf7Ukt5Gi3cMySLXVBtxCKdQ/viewform",
        children: "Contact us anonymously"
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

const url = "/welfare";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/welfare.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/welfare.mdx";
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
