export const reflection = {
  meta: {
    title: "Critical Reflection",
    description:
      "How TF-IDF, topic modeling, and an anonymity classifier shape what can be seen in r/confession, and why the limits are the finding.",
  },
  title: "Critical Reflection",
  eyebrow: "What the instruments removed",
  sections: [
    {
      heading: "The finding is a property of the instrument",
      paragraphs: [
        "Ihde's claim is that instruments amplify some relations and reduce others. This project produced a clean demonstration. TF-IDF gave me the feeling-word gradient, the strongest result here, by treating every post as a bag of words, which is also why it could not tell me when a confessor discloses. The same reduction produced the finding and the blind spot.",
        "Topic modeling surfaced recurring confession types across 47,500 posts, which no amount of reading could have done, by grouping on shared vocabulary, which is why theft from a dying parent and grief over a dying parent ended up adjacent. What I called topics were clusters of words that I named. Another reader could label them differently, and the labels would carry a different argument.",
        "The anonymity classifier is an instrument too. It made a gradient visible by deciding who counts as hidden. The regex misses ordinary-looking throwaways, which biases toward finding no effect, and deleted accounts mix regret-after with concealment-before. Even a leaky classifier still produced four disclosure measures moving together, and a score series that did not.",
      ],
    },
    {
      heading: "Specification and neutrality",
      paragraphs: [
        "Henrickson and Mero\u00f1o-Pe\u00f1uela's finding about prompt specificity applies to a pipeline as much as to a prompt. My category tagger consists of six keyword lists that encode my prior sense of what a transgression looks like. It put 52.6 percent of the corpus into other: a specification can be precise and still fail to describe its object. The tighter I specify what to extract, the more the output describes my scheme back to me. The contraction topics are the extreme case \u2014 an accurate description of the corpus, and a description of nothing anyone confessed.",
      ],
    },
    {
      heading: "The corpus already contains the judgment",
      paragraphs: [
        "The dataset is top posts. The community's preferences were baked in before any model ran, so everything above describes rewarded confession rather than confession in general. I began by treating that as a limitation I had to disclose. It is closer to the object of study. Upvoting is nearly the only judgment this community makes, and a top-post corpus is a record of that judgment in operation.",
        "That reframing is where the hermeneutic circle became literal. I started with a question about what confessions look like. The shape of the data forced the question to change, and the changed question made the data legible. The author column opened a second question I had not planned. The instrument and the question kept redefining each other, which is what the circle describes.",
      ],
    },
    {
      heading: "What I would do next",
      paragraphs: [
        "Rebuild the category tagger, since 52.6 percent in other undercuts the stratification I am leaning on. Hand-code disclosure position at scale, which no available method automates and which is the variable I now believe matters most. And find a full unfiltered scrape to sit beside this one, so rewarded confession can be compared against the ordinary kind.",
      ],
    },
  ],
} as const;
