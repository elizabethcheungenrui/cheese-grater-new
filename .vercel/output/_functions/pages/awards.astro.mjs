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
  "title": "Awards and Accolades",
  "description": "Winner, winner, chicken dinner, baby. The Cheese Grater is proud to have won the most awards of any UCL publication."
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Winner, winner, chicken dinner, baby."
      }), " ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " is proud to have won the most awards of any UCL publication. Our journalists are some of the best in London, and we continue to be recognised locally, regionally, and nationally. Here’s some of what we’ve won in the past."]
    }), "\n", createVNode("div", {
      className: "awards-table",
      children: createVNode("table", {
        children: [createVNode("thead", {
          children: createVNode("tr", {
            children: [createVNode("th", {
              children: "Award"
            }), createVNode("th", {
              children: "Year"
            }), createVNode("th", {
              children: "Category"
            }), createVNode("th", {
              children: "Nominee"
            }), createVNode("th", {
              children: "Result"
            })]
          })
        }), createVNode("tbody", {
          children: [createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 28,
              children: createVNode(_components.p, {
                children: "Student Publication Association (National Awards)"
              })
            }), createVNode("td", {
              scope: "col",
              rowSpan: 13,
              children: createVNode(_components.p, {
                children: "2026"
              })
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Overall Digital Media"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Website"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: "Billy Dowling-Reid Award for Outstanding Commitment"
            }), createVNode("td", {
              children: "Nick Miao"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Elizabeth Cheung"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: "Best Reporter"
            }), createVNode("td", {
              children: "Nick Miao"
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Go Kitajima"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Sports Reporter"
            }), createVNode("td", {
              children: "Robert Delaney"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Newcomer"
            }), createVNode("td", {
              children: "Comet Musgrove"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: "Best News Story"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Nick Miao for ", createVNode("a", {
                  href: "/article/2025-04-29-ucl-ukrainian-society-suspended-after-buying-a-drone-to-fight-putin",
                  children: "UCL Ukrainian Society suspended after buying a drone to fight Putin"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Go Kitajima for ", createVNode("a", {
                  href: "/article/2025-09-29-over-1300-incoming-ucl-students-left-without-accommodation-as-applications-refused-days-before-welcome-week",
                  children: "Over 1,300 incoming UCL students left without accommodation after last-minute application rejections"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: "Best Creative Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Josh Palmer for ", createVNode("a", {
                  href: "/article/2025-11-04-ucl-anthropology-to-offer-brainrot-studies-module-in-bid-to-stay-relevant",
                  children: "UCL Anthropology to offer ‘Brainrot Studies’ module in bid to stay relevant"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Elgin Edison for ", createVNode("a", {
                  href: "/article/2025-03-10-michael-spence-inside-the-mind",
                  children: "Michael Spence, inside the mind"
                })]
              })
            }), createVNode("td", {
              children: "Highly Commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 9,
              children: createVNode(_components.p, {
                children: "2025"
              })
            }), createVNode("td", {
              children: "Best Specialist Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "Women’s Wrongs"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Website"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Reporter"
            }), createVNode("td", {
              children: "Lucy Reade, Robert Delaney, and Nick Miao"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Newcomer"
            }), createVNode("td", {
              children: "Go Kitajima"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Investigation"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Malvika Murkumbi for ", createVNode("a", {
                  href: "/article/2025-01-20-ucl-support-tool-did-more-harm-than-good-report-finds/",
                  children: "UCL support tool did more harm than good, report finds"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best News Story"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Andrea Bidnic for ", createVNode("a", {
                  href: "/article/2024-11-11-no-jobs-for-graduates-if-union-bans-oil-and-gas-sponsorships-engineers-warn/",
                  children: "No jobs for graduates if Union bans oil and gas sponsorships, engineers warn"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Comment Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Andrea Bidnic for ", createVNode("a", {
                  href: "/article/2024-10-03-what-is-it-with-the-provost-and-disagreeing-well/",
                  children: "What is it with the Provost and ‘Disagreeing Well’?"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Comment Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Andrea Bidnic for ", createVNode("a", {
                  href: "/article/2024-10-24-jewish-society-wake-up/",
                  children: "Jewish Society, wake up!"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Creative Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Jasmine Yiu for ", createVNode("a", {
                  href: "/article/2024-10-31-phantom-flatmate/",
                  children: "Dear phantom flatmate"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: createVNode(_components.p, {
                children: "2024"
              })
            }), createVNode("td", {
              children: "Best Creative Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Ben Scanlan for ", createVNode("a", {
                  href: "/article/2024-01-10-keir-starmer-a-day-in-the-life/",
                  children: "Keir Starmer… A Day in the Life"
                })]
              })
            }), createVNode("td", {
              children: "Highly commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Newcomer"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "Women’s Wrongs"
              })
            }), createVNode("td", {
              children: "Highly commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 3,
              children: createVNode(_components.p, {
                children: "2023"
              })
            }), createVNode("td", {
              children: "Best Media Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Neil Majithia and Elettra Plati for ", createVNode("a", {
                  href: "/article/2022-11-18-chun-buckets-everywhere-how-initiation-ceremonies-ruin-the-freshers-experience/",
                  children: "Chun Buckets Everywhere: How initiation ceremonies ruin the freshers experience"
                })]
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Creative Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Mathilde Turner for ", createVNode("a", {
                  href: "/article/2023-01-18-naked-yoga-a-belligerent-ode-to-the-pussy/",
                  children: "Naked Yoga: A Belligerent Ode to the Pussy"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Billy Dowling-Reid Award for Outstanding Commitment"
            }), createVNode("td", {
              children: "Nandini Agarwal"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2019"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Highly Commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 11,
              children: createVNode(_components.p, {
                children: "Student Publication Association (London Regional Awards)"
              })
            }), createVNode("td", {
              scope: "col",
              rowSpan: 4,
              children: createVNode(_components.p, {
                children: "2026"
              })
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Highly Commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Design"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Journalist"
            }), createVNode("td", {
              children: "Lola Davies"
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Article"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Nick Miao for ", createVNode("a", {
                  href: "/article/2025-04-29-ucl-ukrainian-society-suspended-after-buying-a-drone-to-fight-putin",
                  children: "UCL Ukrainian Society suspended after buying a drone to fight Putin"
                })]
              })
            }), createVNode("td", {
              children: "Highly Commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 5,
              children: createVNode(_components.p, {
                children: "2025"
              })
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Digital"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Design (Print)"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Highly Commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Journalist"
            }), createVNode("td", {
              children: "Malvika Murkumbi"
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Article"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Andrea Bidnic for ", createVNode("a", {
                  href: "/article/2024-05-28-a-culture-of-overwork-and-abuse-years-after-the-first-complaints-the-mistreatment-of-post-graduate-teacher-assistants-continues/",
                  children: "A ‘culture of overwork and abuse’: Years after the first complaints, the mistreatment of PGTAs continues"
                })]
              })
            }), createVNode("td", {
              children: "Highly Commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2024"
            }), createVNode("td", {
              children: "Best Journalist"
            }), createVNode("td", {
              children: "Rebekah Wright"
            }), createVNode("td", {
              children: "Highly Commended"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2022"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 20,
              children: createVNode(_components.p, {
                children: "Students’ Union UCL Arts Awards"
              })
            }), createVNode("td", {
              scope: "col",
              rowSpan: 5,
              children: createVNode(_components.p, {
                children: "2025"
              })
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "Women’s Wrongs"
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Written Media Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Malvika Murkumbi for ", createVNode("a", {
                  href: "/article/2025-01-20-ucl-support-tool-did-more-harm-than-good-report-finds",
                  children: "UCL support tool did more harm than good, report finds"
                })]
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Video Media Piece"
            }), createVNode("td", {
              children: "Nick Miao for UCL paid for 80% of Union Gym refurbishment"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Outstanding Contribution to the Media"
            }), createVNode("td", {
              children: "Andrea Bidnic, Lily Park and Robert Delaney"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Media Personality of the Year"
            }), createVNode("td", {
              children: "Andrea Bidnic, Lucy Reade, Nick Miao, and Robert Delaney"
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: createVNode(_components.p, {
                children: "2024"
              })
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Media Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Mads Brown for ", createVNode("a", {
                  href: "/article/2024-01-19-terf-out-transphobia-the-ioe-and-academic-freedom/",
                  children: "TERF out Transphobia: The IOE and “Academic Freedom”"
                })]
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: createVNode(_components.p, {
                children: "2023"
              })
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "Women’s Wrongs"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Best Media Piece"
            }), createVNode("td", {
              children: createVNode(_components.p, {
                children: ["Neil Majithia and Elettra Plati for ", createVNode("a", {
                  href: "/article/2022-11-18-chun-buckets-everywhere-how-initiation-ceremonies-ruin-the-freshers-experience/",
                  children: "Chun Buckets Everywhere: How initiation ceremonies ruin the freshers experience"
                })]
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2018"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2016"
            }), createVNode("td", {
              children: "Most Improved Society"
            }), createVNode("td", {
              children: "The Cheese Grater Magazine Society"
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: createVNode(_components.p, {
                children: "2014"
              })
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "Diversity and Incluion"
            }), createVNode("td", {
              children: "The Cheese Grater Magazine Society"
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2012"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2011"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2010"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2009"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2008"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2007"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2006"
            }), createVNode("td", {
              children: "Best Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              scope: "col",
              rowSpan: 2,
              children: createVNode(_components.p, {
                children: "Guardian Student Media Awards"
              })
            }), createVNode("td", {
              children: "2007"
            }), createVNode("td", {
              children: "Best Magazine"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Nominated"
            })]
          }), createVNode("tr", {
            children: [createVNode("td", {
              children: "2006"
            }), createVNode("td", {
              children: "Best Small Budget Publication"
            }), createVNode("td", {
              children: createVNode("i", {
                children: "The Cheese Grater"
              })
            }), createVNode("td", {
              children: "Won"
            })]
          })]
        })]
      })
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

const url = "/awards";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/awards.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/awards.mdx";
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
