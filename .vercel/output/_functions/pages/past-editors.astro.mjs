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
  "title": "Past Editors",
  "description": "Each of our past editors have done something to change the publication and influence student life at UCL. Here, we write each other’s obituaries in commemoration of those who were annoying on campus before we were."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "nick-miao-and-robert-delaney",
    "text": "Nick Miao and Robert Delaney"
  }, {
    "depth": 3,
    "slug": "robert-delaney-and-maddison-brown",
    "text": "Robert Delaney and Maddison Brown"
  }, {
    "depth": 3,
    "slug": "samir-ismael-and-nandini-agarwal",
    "text": "Samir Ismael and Nandini Agarwal"
  }, {
    "depth": 3,
    "slug": "rusheen-bansal-and-alfie-pannell",
    "text": "Rusheen Bansal and Alfie Pannell"
  }, {
    "depth": 3,
    "slug": "sophia-robinson",
    "text": "Sophia Robinson"
  }, {
    "depth": 3,
    "slug": "suzy-kingston-and-weronika-strzyzynska",
    "text": "Suzy Kingston and Weronika Strzyzynska"
  }, {
    "depth": 3,
    "slug": "ollie-dunn-and-peter-fitzsimons",
    "text": "Ollie Dunn and Peter FitzSimons"
  }, {
    "depth": 3,
    "slug": "jason-murugesu-and-jack-redfern",
    "text": "Jason Murugesu and Jack Redfern"
  }, {
    "depth": 3,
    "slug": "ollie-phelan",
    "text": "Ollie Phelan"
  }, {
    "depth": 3,
    "slug": "bo-franklin",
    "text": "Bo Franklin"
  }, {
    "depth": 3,
    "slug": "charlie-hayton",
    "text": "Charlie Hayton"
  }, {
    "depth": 3,
    "slug": "hannah-sketchley",
    "text": "Hannah Sketchley"
  }, {
    "depth": 3,
    "slug": "will-rowland",
    "text": "Will Rowland"
  }, {
    "depth": 3,
    "slug": "chon-böll",
    "text": "Chon Böll"
  }, {
    "depth": 3,
    "slug": "thom-rhoades",
    "text": "Thom Rhoades"
  }, {
    "depth": 3,
    "slug": "az-mckenna",
    "text": "A.Z. McKenna"
  }, {
    "depth": 3,
    "slug": "jenni-hulse",
    "text": "Jenni Hulse"
  }, {
    "depth": 3,
    "slug": "hannah-hudson",
    "text": "Hannah Hudson"
  }, {
    "depth": 3,
    "slug": "mark-ravinet",
    "text": "Mark Ravinet"
  }, {
    "depth": 3,
    "slug": "rené-lavanchy",
    "text": "René Lavanchy"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Hall of fame? Graveyard of the former greats? Each of our past editors have done something to change the publication and influence student life at UCL. Here, we write each other’s obituaries in commemoration of those who were annoying on campus before we were."
      }), " ", createVNode("br", {}), "Also see: ", createVNode(_components.a, {
        href: "/article/2014-01-01-ten-years-of-sick-filth",
        children: createVNode(_components.strong, {
          children: "TEN YEARS OF SICK FILTH"
        })
      }), " – A tribute to our editors from the first ten years of our magazine’s publication."]
    }), "\n", createVNode(_components.h3, {
      id: "nick-miao-and-robert-delaney",
      children: "Nick Miao and Robert Delaney"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2024–August 2025"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Nick and Rob (for a second time) were always the natural choice to lead this publication as it enters its 20s, both falling into the printing press shortly after birth and being ominously christened with matching names which mean “to steal something”. Rob and Nick led the publication to new heights of glory, winning the SPA’s Best Publication in London 2025 and publishing FIVE issues. They can also be credited for the creation of “The Digestive” and our brand new podcast/radio show “Grater Insights”. Despite being absolutely snubbed by the SPA nationals (when will justice be served?) and the artsUCL awards (this is because they cannot give us all the awards every year and it had to be another sibling’s turn of the Xbox, if you will), ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " is left at a new zenith. Rob and Nick have given us one of our most successful years ever."]
    }), "\n", createVNode(_components.h3, {
      id: "robert-delaney-and-maddison-brown",
      children: "Robert Delaney and Maddison Brown"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2023–August 2024"
      })
    }), "\n", createVNode(_components.p, {
      children: "Rob and Mads inherited a broken magazine from the previous administration, who left a note saying “there is no money”. They leave behind a legacy of a refreshed Cheese Grater, which, while still broke as hell, nonetheless won Best Publication at the Arts Awards simply by doing slightly better than Pi. The bar was a tripping hazard in hell, and they surpassed it with flying colours."
    }), "\n", createVNode(_components.h3, {
      id: "samir-ismael-and-nandini-agarwal",
      children: "Samir Ismael and Nandini Agarwal"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2022–August 2023"
      })
    }), "\n", createVNode(_components.p, {
      children: "Sam and Nandini formed a formidable duo when they were the co-editor-in-chiefs of this great magazine. Under their editorship, they oversaw victories at both the SPAs in Glasgow and the UCL Arts Awards back in Bloomsbury. Whilst we published less than usual, Nandini and Sam oversaw some great journalism and we wish them well on their future ventures!"
    }), "\n", createVNode(_components.h3, {
      id: "rusheen-bansal-and-alfie-pannell",
      children: "Rusheen Bansal and Alfie Pannell"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2021–August 2022"
      })
    }), "\n", createVNode(_components.p, {
      children: "We hated every minute of it."
    }), "\n", createVNode(_components.h3, {
      id: "sophia-robinson",
      children: "Sophia Robinson"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2020–August 2021"
      })
    }), "\n", createVNode(_components.p, {
      children: "The chaos caused by a pesky pandemic necessitated the reintroduction of a dictatorship, but fortunately Sophia Robinson was the perfect candidate. While she claims to have ‘barely survived’ her time as the first Cheese Grater editor to have led the magazine during a global disaster, Sophia expertly edited her way through Zoom Year — despite having a markedly difficult relationship with Adobe Acrobat. She has since gone on to become an accountant, making us all very proud indeed."
    }), "\n", createVNode(_components.h3, {
      id: "suzy-kingston-and-weronika-strzyzynska",
      children: "Suzy Kingston and Weronika Strzyzynska"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2019–August 2020"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Suzy and Weronika continued the ", createVNode(_components.em, {
        children: "CG"
      }), " legacy, overseeing smash-hit investigative journalism and somewhat less smash-hit digs at ‘Gash’, the next big thing in sexual liberation. Actually, those were pretty smash-hit too, but irritatingly no one knows what ‘Gash’ is – especially as a cursory Google search no longer delivers photos of UCL students holding garden implements in their underwear. Anyway – Suzy and Weronika made another excellent editing duo, and they narrowly escaped the clutches of the big ‘Rona."]
    }), "\n", createVNode(_components.h3, {
      id: "ollie-dunn-and-peter-fitzsimons",
      children: "Ollie Dunn and Peter FitzSimons"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2018–August 2019"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Collective leadership proved popular, and ", createVNode(_components.em, {
        children: "CG"
      }), " took coalition government in full stride with the election of Ollie Dunn and Peter FitzSimons. While the person writing this paragraph had limited interaction with either editor (on account of the website being edited once every 3-4 years), Ollie and Peter seem to have done a decent job because the magazine is, as ever, thriving. I imagine they were both Wildly Extroverted, since the ", createVNode(_components.em, {
        children: "CG"
      }), " 15th Birthday Party looks like a right old laugh – going by the Facebook photos, that is."]
    }), "\n", createVNode(_components.h3, {
      id: "jason-murugesu-and-jack-redfern",
      children: "Jason Murugesu and Jack Redfern"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2017–August 2018"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The bloody purges and violence of collectivisation in 2016–2017 led ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " to adopt a form of collective leadership, to prevent the magazine from succumbing again to a cult of personality. Two clear leaders emerged from the power struggle. Jason Murugesu and Jack Redfern pursued a policy of détente with the magazine’s old nemeses at SUCKLE (fmrly UCLU), but found a new foe in the Men’s Rugby club. The cold war with the team never turned hot (luckily, since they’re bigger than us), and ", createVNode(_components.em, {
        children: "CG"
      }), " ended the year as winners of best print publication at the Union’s Arts Colours awards."]
    }), "\n", createVNode(_components.h3, {
      id: "ollie-phelan",
      children: "Ollie Phelan"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2016–August 2017"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Famed for his cotton jumpers, Ollie Phelan was the editor who brought ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " to the digital age… about 20 years too late. Yes: this was the year the new website, coordinated and led by President Will Orton, made a similar-sized splash as Facebook did in Harvard circa 2004. Phelan, known for his savage cuts, prioritised stories that weren’t self-indulgent and ones which could be read by even those students who didn’t personally know the moustachioed Scandinavian David Dahlborn. Phelan brought the magazine into the era of actually being read by real people: thousands of them! Long may that last."]
    }), "\n", createVNode(_components.h3, {
      id: "bo-franklin",
      children: "Bo Franklin"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2015–August 2016"
      })
    }), "\n", createVNode(_components.p, {
      children: ["For the first time in the history of ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), ", Bo was chosen through a televised competition, loosely based on the Crystal Maze format and broadcast to millions on BBC One. Franklin, a previous Investigations Editor, beat thousands of hopefuls from across the country in rounds such as high-pressure sub-editing and quick-fire Photoshop. By the way, does anyone actually read these blurbs of text, or am I (the website maker) just wasting an entire Wednesday afternoon transcribing a useless page from the old website to the new one? Please let me know my efforts weren’t in vain. If you see this, text me on Whatsapp (if you know me personally) or use the email all the way down below and I’ll treat you to a pint next time ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " meets at the Institute, on the condition that you don’t tell anyone else about this. Finally, he took down then editor Charlie Hayton in a head-to-head pun battle, which left Hayton writhing on the studio floor begging for mercy."]
    }), "\n", createVNode(_components.h3, {
      id: "charlie-hayton",
      children: "Charlie Hayton"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2014–August 2015"
      })
    }), "\n", createVNode(_components.p, {
      children: ["On the 21st of May 1994, a child was born whose life has shaped the course of the past decade more than any stinking politician, poxy celebrity, or vainglorious artist. Millions adore him, young’uns around the world dream of achieving the heights he has reached. Despite the international scrutiny placed upon him in his teenage years, many argue that it is only now that he has achieved true prominence, and the fame he has always deserved. That man is, of course, British Olympic diver and star of ITV’s Splash!, Tom Daley. Also born on that day was some twat called Charlie Hayton, who has ever since struggled to get out of Daley’s immense but shapely shadow, a goal he seems unlikely to ever attain. Having been inexplicably elected to the editorship of ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), ", Hayton seemed intent on driving the publication into the ground, a task with which he was ably assisted by his provincial sub-editors, Magic Patguire and Ollie Phelan. Thankfully everything was basically fine, bar a brief incident which forced Hayton to hide under a table at the UCLU Arts Ball. When asked to describe him, most of Hayton’s acquaintances utter foul swears under their breath and launch into torturous comparisons to depraved Roman Emperors or inbred Habsburg Kings. Hayton prefers to think of himself as “basically just a really nice guy”."]
    }), "\n", createVNode(_components.h3, {
      id: "hannah-sketchley",
      children: "Hannah Sketchley"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2013–August 2014"
      })
    }), "\n", createVNode(_components.p, {
      children: "Having returned from political exile in Berlin, Hannah Sketchley ascended to the helm of the Good Ship Cheese Grater. Previously playing First-Lieutenant as Investigations Editor two years before, she dealt with attempts of censorship from the Union and the re-surfacing of past Krakens. She also broke stories about former Provost Malcolm Grant’s lavish and questionable spending on expenses, which attracted a shot across the bows from his lawyers. As she steered the magazine through its tenth anniversary year, she left a trail of incisive investigation, frustrated lawyers and cutting humour in her wake. She was joined at the poop-deck by Charlie “Charlie the Dog” Hayton and Bo Franklin, who filled the boots of Humour and Investigations Editors respectively. Both delivered broadsides of printed excellence as they navigated the tempestuous seas of student journalism. Looking down from the crows nest with love and grace was the Grater’s first stand-alone president Beatrice Kelly. Incidentally, though indulging heavily in nautical metaphor, Sketchley hates boats and in fact prefers looking at big dogs on Hampstead Heath. She now works at the NUS."
    }), "\n", createVNode(_components.h3, {
      id: "will-rowland",
      children: "Will Rowland"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2012–August 2013"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Will Rowland oversaw ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " from his underground lair in Fitzrovia, and from the dark depths came both inspirational leadership as well some of the most brilliant humour articles to have ever graced its pages. Throughout his editorship, he was aided by assistant editors who could quite definitely be described as ‘enthusiastic’, and Will sometimes struggled to rein in their excitement. However, he still managed to produce a stellar run of the magazine, despite several committee members upping their sticks and leaving empty posts behind them. The magazine was graced by UCL providing plenty of muck to rake, with exposées appearing in almost every issue. He co-wrote and performed in the Graters show “Crab Salad”, which followed a run in the UCLU Garage Theatre with stunning success at the Edinburgh Festival Fringe, where constant adversity was overcome by his calm leadership. The show was a mature and witty comic play, described by the sole reviewer who turned up as “inspired”, “genius”, and “fast-paced and funny, well worth going to see”. But who was the man behind the art? It was Will Rowland."]
    }), "\n", createVNode(_components.h3, {
      id: "chon-böll",
      children: "Chon Böll"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2011–August 2012"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Chin Bolt hurtled into ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " resulting in a year of high-octane development and improvement. His year at the wheel began with a record print run of the first issue with a racy and much-needed magazine redesign, putting it in pole position. Chrevor then chicaned into controversy, being forced to defend a censorship threat, a case that he skilfully resolved before taking a sharp turn with the magazine’s integrity and chassis still intact. Chames took a short pit-stop and founded the UCL Graters, the comedy performance side of the society, directing and co-writing Graters’ full-throttle month-long run in Edinburgh to five-star reviews, medium-sized audiences and one woman who asked, “Is it over yet?” Graters were the proud recipients of the UCLU Best Garage Theatre Production 2012, a feat that Balls celebrated by shaving his head and spraying copious amounts of Mumm on two waiting models. Belt is currently spending some time with children."]
    }), "\n", createVNode(_components.h3, {
      id: "thom-rhoades",
      children: "Thom Rhoades"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2010–August 2011"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Thom Rhoades was initially worried when he took over that his lack of investigative experience would limit what stories ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " could produce during his year in charge. Thankfully his tenure coincided with a big load of government cuts to higher education which presented ample headline opportunities. As if it couldn’t get any better, then came a string of protests by UCL’s very own Eastern Bloc that were begging for a good journalist to dish some dirt on them! In Thom’s year as editor, Times Higher Education liked ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), "’s work so much that it took our findings, made an article out of them, and then threw a pithy credit into the closing sentence. After initial plans to convert to Law at the end of his degree (encouraged by the magazine for want of a defence attorney willing to work pro bono), Thom has put such plans on hold and is currently touring with the band Citizens."]
    }), "\n", createVNode(_components.h3, {
      id: "az-mckenna",
      children: "A.Z. McKenna"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2009–August 2010"
      })
    }), "\n", createVNode(_components.p, {
      children: ["A.Z. McKenna’s leadership of ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " resulted in crippling staffing issues and legal threats which continue to this day. Thankfully, McKenna possessed both the knowing wit and proactive flat mate necessary to ensure the magazine continued its successful run. “Knowing wit” here refers to a chilling ability to disguise puerile toilet humour with references to Kingsley Amis. Being the first editor not to win a Union Arts Award will always be remembered as the one black mark on his time at the helm – he did however achieve the biggest print run of any previous editor for a single issue. Notable investigative scoops included leaks on the merger of the Modern Languages department and the infamous “UCL Pants Bomber” saga. Since graduating he has scratched backs and greased palms to get himself a job at The Georgian (one of the few publications with a smaller readership than this godforsaken rag) before retreating back into academia to pursue a Master’s in History at Cambridge."]
    }), "\n", createVNode(_components.h3, {
      id: "jenni-hulse",
      children: "Jenni Hulse"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2008–August 2009"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Jenni felt the full force of UCL Union’s wrath in her first term in charge of ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), ", when Sabbatical Officer Charlie Clinton censored her exposé of one of its former employees. Inspired by Tony Benn’s 1987 Speaker’s Corner reading of “Spycatcher” – which was banned by Mrs Thatcher – she decided to hijack a Union poetry night in order to declaim the banned piece. Certain reports said she even made it rhyme so as not to upset UCL’s literati who had come to hear anxiety-ridden student poems about masturbation, lukewarm tea and bicycle rides in Regent’s Park. Despite Clinton’s continued spinelessness, the ever-gracious Hulse refused to stoop as low as one unnamed aspirant to the editorship wanted her to, rejecting the suggestion that the magazine should publish pictures of Clinton’s recently deceased pet dog. Instead, she pressed on with investigations into the UCL Academy, the college’s use and abuse of Post Graduate Teaching Assistants, and the limits of its ethical investment policy."]
    }), "\n", createVNode(_components.h3, {
      id: "hannah-hudson",
      children: "Hannah Hudson"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "January–August 2008"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Elected to the Grater’s helm midway through the academic year, under Hannah’s editorship ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " investigated UCL’s asbestos problem, the failings of Pi Magazine and the money wasted by the Union’s Sabbatical Officers. Hannah also produced a special report on the UCL Union AGM after the event garnered headlines in the national press, as well as a UCL Union investigative bonanza. Meanwhile, on the humour front, she and Assistant Editor Harry Stopes produced an eclectic array of articles including a futuristic Cheese Grater parody (cyborg jokes ad nauseam). After graduating, she headed for the world of real journalism and has since studied for a Journalism MA at City University. Since graduating, she has disappeared off to become editor-in-chief of an expat magazine in Northern China, as well as contributing to a range of publications, including News of the World, Time Out London, BBC Focus, and Love It!"]
    }), "\n", createVNode(_components.h3, {
      id: "mark-ravinet",
      children: "Mark Ravinet"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2006–December 2007"
      })
    }), "\n", createVNode(_components.p, {
      children: "Some men are born into greatness; Mark Ravinet had it thrust upon him as a perpetually embarrassed second-year Geography student. Sadly for him, “greatness” in this context was the editorship of a tatty, badly photocopied magazine filled with investigative journalism read by two people and the kind of nasty satirical humour that etched disappointment across the face of his mother. It wasn’t all bad though: there was ample opportunity to topple the egos of self-important student politicians around the Union, dig the dirt on some stunningly ill-conceived electoral fraud and expose a student newspaper franchise as little more than the wet dream of a wannabe Murdoch. His enduring legacy has been a string of embarrassing Google hits for those who really deserved it. At the time of writing, he is rapidly approaching the end of a PhD and attempting to improve his own employment prospects through search engine optimisation to remove any association with all that nasty humour. This must’ve worked, as Mark is now a serious evolutionary biologist at the University of Oslo."
    }), "\n", createVNode(_components.h3, {
      id: "rené-lavanchy",
      children: "René Lavanchy"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "September 2004–August 2006"
      })
    }), "\n", createVNode(_components.p, {
      children: ["René Lavanchy founded ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " in February 2004 in his first year of studying Classics at UCL, roping in hallmates Nick Cowen and Richard Bridger as treasurer and assistant editor – Bridger would later go on to persuade Provost Malcolm Grant to shave his moustache off. Editing the magazine from its first issue in March 2004 to a special edition in July 2006, René set the tone of knowing humour mixed with no-holds-barred investigations. Initially friendly relations with Pi Magazine chilled after about the third time ", createVNode(_components.em, {
        children: "The Cheese Grater"
      }), " attacked its rival; he also burnt bridges with the Provost, the Dean of Students, and various sabbatical officers. Under his editorship, the magazine won its first UCL Union Arts Award and a Guardian Student Media Award for Best Small Budget Publication. This earned the boozy editor the chance, though not the right, to plant a wet kiss on Lauren Laverne."]
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

const url = "/past-editors";
const file = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/past-editors.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/eli/Desktop/CheeseGrater/cheese-grater-new/src/pages/past-editors.mdx";
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
