export const home = {
  meta: {
    title: "The Architecture of Anonymous Confession",
    description:
      "A close and distant reading of 50,000 posts from r/confession, a community that judges no one.",
  },
  hero: {
    label: "r/confession · 50,000 posts · 2011–2023",
    quote: "Nobody has to decide anything. That is what makes it interesting.",
  },
  essay: [
    "r/confession is a community where people describe things they have done and have not told anyone. Infidelity, theft from family, workplace dishonesty, small cruelties, occasionally crimes. What makes it unusual as an object of study is what it lacks. There is no verdict mechanism. Communities like r/AmITheAsshole are built around a judgment structure that returns a labeled ruling on the poster. r/confession returns nothing. Readers can upvote, comment, or scroll past, and the community is never obligated to say whether the confessor is forgiven.",
    "That absence is the center of this project. When no external system is set up to judge you, the judging has to happen somewhere else, and my argument is that it happens inside the post itself. Confessors build context before they disclose. They apologize in advance, or they pointedly refuse to. They choose which detail to hold until the final line. None of that is required by the platform, which is why it reveals something about how people narrate their own wrongdoing to an audience that owes them nothing.",
  ],
  sections: [
    {
      heading: "Research question",
      body: [
        "Do confessions on r/confession share a recognizable rhetorical structure, does that structure change depending on the type of transgression being confessed, and does the community quietly reward certain strategies through upvotes even in the absence of a formal verdict system?",
      ],
    },
    {
      heading: "The corpus",
      body: [
        "Fifty thousand top-ranked posts spanning January 2011 through December 2023, with post ID, score, body text, timestamp, author, and title. Median post length is 185 words, with a long tail running past a thousand. Median score is 21, and the maximum sits above 69,000. The spread matters: there is enough length for narrative structure to develop, and enough variance in reception to ask what gets rewarded.",
      ],
    },
    {
      heading: "How the analysis moves",
      body: [
        "The project runs in two passes. The distant pass uses TF-IDF to isolate the vocabulary that separates high-scoring confessions from low-scoring ones, then topic modeling to surface recurring confession types across the full corpus. The close pass takes the posts sitting nearest the center of each topic and reads them line by line, attending to the one thing the models are structurally unable to see, which is sequence. Where the disclosure falls in the post. What is placed before it to soften the landing. What is withheld until the end.",
      ],
    },
    {
      heading: "A constraint stated up front",
      body: [
        "This is a dataset of top posts, which means the community's preferences are already baked into the corpus before any model runs. Whatever patterns I find describe rewarded confession rather than confession in general. The Critical Reflection page treats this as a finding about the instrument rather than a footnote about the data.",
      ],
    },
  ],
  cards: [
    {
      href: "/framework",
      label: "Theoretical Framework",
      desc: "the hermeneutic contract, and why an instrument is never a window.",
    },
    {
      href: "/methodology",
      label: "Methodology",
      desc: "corpus construction, TF-IDF, topic modeling, and the close-reading protocol.",
    },
    {
      href: "/findings",
      label: "Findings and Analysis",
      desc: "what the distant pass surfaced, and what close reading did with it.",
    },
    {
      href: "/reflection",
      label: "Critical Reflection",
      desc: "what these methods let me see, and what they quietly removed.",
    },
    {
      href: "/sources",
      label: "Sources",
      desc: "readings, tools, and data.",
    },
  ],
} as const;
