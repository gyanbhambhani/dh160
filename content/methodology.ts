export type Method = {
  name: string;
  body: string;
  note?: string;
};

export const methodology = {
  meta: {
    title: "Methodology",
    description:
      "Corpus construction, ethics, and the distant-to-close pipeline for reading rewarded confession on r/confession.",
  },
  title: "Methodology",
  eyebrow: "Methodology",

  corpus: {
    heading: "Corpus",
    paragraphs: [
      "This study uses 50,000 top-scoring submissions to r/confession, spanning January 2011 through December 2023. Each record carries a post ID, score, body text, timestamp, author, and title. After removing deleted and removed bodies, stripping markdown and URLs, dropping posts under 30 words, lowercasing, and lemmatizing, the working corpus is the set of posts long enough to develop a narrative shape. Median post length is 185 words, with a long tail past a thousand; median score is 21, and the maximum sits above 69,000. I keep first-person pronouns and negations that most stopword lists would discard, because in this corpus they carry the rhetorical weight.",
      "One property of this sample matters more than any other: these are top posts, ranked by upvotes. A top-post corpus does not describe typical confession activity on the subreddit. It describes what the community already chose to promote. For a study trying to characterize everyday posting, that would be a fatal limitation. For my question it is closer to a feature. r/confession has no verdict mechanism, so upvoting is one of the only judgments the community makes at all, and a corpus of top posts is therefore a record of rewarded confession rather than confession in general.",
      "My first instinct was to treat the dataset as neutral raw material. It was only in thinking about how it had been assembled that I realized every corpus is already a selection. Rather than pretend otherwise, I let that fact reshape the question: instead of asking what confession looks like, I ask what a rewarded confession looks like, and what that reward quietly reveals. Sometimes the data should shape the question rather than the other way around.",
    ],
  },

  ethics: {
    heading: "Ethics",
    paragraphs: [
      "Posts on r/confession are public and pseudonymous, and posters address the community deliberately. Even so, these are accounts of real wrongdoing by real people, often written in distress. I report aggregate patterns, quote sparingly, and do not reproduce usernames. Any post text that appears on the Findings page is paraphrased and anonymized.",
      "Working across tens of thousands of posts makes it easy to forget that every row is a person describing something they have not told anyone else. A few times during the project I went back and read individual posts in full, not to extract anything, but to keep the distant view honest.",
    ],
  },

  approach: {
    heading: "Approach",
    intro:
      "None of the methods below were chosen because they are the most sophisticated available. I looked at others, but I deliberately stayed close to techniques I could understand thoroughly, and I started from the questions I wanted to answer rather than from a technique looking for a use. The pipeline runs at two speeds: a distant pass over all 50,000 posts, and a close pass over a small, hand-read sample that the distant pass points me toward.",
    methods: [
      {
        name: "Word frequencies and score distribution",
        body: "Before anything else I establish the basic shape of the corpus: how long posts run, how score is distributed, and where the quartile boundaries fall. I split posts into score quartiles so that \u201chigh-scoring\u201d is defined against this corpus rather than an outside benchmark, and I report the band boundaries on the Findings page.",
        note: "This step is unglamorous, but it is what keeps later claims honest. \u201cHigh-scoring\u201d means nothing until you can say high relative to what.",
      },
      {
        name: "Transgression tagging",
        body: "I assign each post to a category \u2014 infidelity, family harm, workplace dishonesty, petty deception, criminal acts, or other \u2014 using keyword seeding followed by manual review of a sample, and I report the disagreement rate for the hand-checked subset.",
        note: "The categories are mine, and the boundaries between them leak: a theft from family is both family harm and a criminal act. I kept the scheme deliberately coarse so the disagreement rate stayed interpretable.",
      },
      {
        name: "TF-IDF comparison",
        body: "Using scikit-learn's TfidfVectorizer over unigrams and bigrams, with min_df tuned to corpus size, I compare the terms that most distinguish high-scoring confessions from low-scoring ones, and across transgression categories. This is my main quantitative evidence about which registers the community rewards.",
        note: "When I first learned TF-IDF I assumed it surfaced \u201cimportant\u201d words. It does not. It surfaces words that distinguish one set of documents from another, and whether those differences mean anything is something I still have to decide by returning to the actual posts.",
      },
      {
        name: "Topic modeling",
        body: "I fit both LDA and NMF, sweep the number of topics k across a range, and report coherence for each rather than accepting a default. I then cross-tabulate each topic's prevalence against score band and category.",
        note: "The most useful thing I learned here is that topic modeling does not produce topics. It produces clusters of words, and the labels \u2014 \u201cinfidelity,\u201d \u201cmoney,\u201d \u201cfamily secret\u201d \u2014 are my interpretations. Another reader could name the same clusters differently.",
      },
      {
        name: "From distant to close reading",
        body: "For every topic I pull the ten posts nearest the topic centroid, plus the highest- and lowest-scoring post in that topic, and I read them by hand against a fixed schedule: where the disclosure sentence falls as a percentage of post length, whether mitigating context precedes it, and whether an explicit self-judgment appears and where. This is the handoff \u2014 the models decide what I read closely, and close reading decides what the patterns actually mean.",
        note: "Sequence is the one thing neither model can see. Both treat a post as a bag of words, so the single most rhetorically loaded decision a confessor makes \u2014 when to disclose \u2014 is invisible to them and recoverable only by reading.",
      },
    ] satisfies Method[],
  },

  expected: {
    heading: "What I expect to find",
    intro:
      "These are stated as expectations rather than results. The Findings and Analysis page tracks each one against the specific figure meant to test it.",
    items: [
      "Remorse and ongoing-consequence vocabulary (\u201cstill,\u201d \u201cnever told,\u201d \u201chaunts,\u201d \u201cyears later\u201d) will weight toward the upper score bands, while flatly unapologetic framings sit lower.",
      "Topic models will separate confessions by domain (infidelity versus workplace) on vocabulary before they capture moral structure, collapsing genuinely different situations that share surface words like family, money, and secret.",
      "Disclosure timing will be the decisive variable: long posts defer the disclosure sentence, short posts lead with it, and that deferral pattern stays invisible to both models.",
    ],
  },

  neutrality: {
    heading: "The methods are not neutral",
    paragraphs: [
      "None of these choices is neutral. My stopword list decides which words are allowed to matter. The number of topics decides how fine-grained the map of confession types can be. My seed words for tagging encode my own prior sense of what each transgression looks like. Each of these is an interpretation wearing the costume of a setting.",
      "I treat the methods as instruments in Ihde's sense: they amplify some relations and are blind to others. What they let me see and what they quietly remove \u2014 TF-IDF's erasure of sequence, topic modeling's flattening of morally distinct situations, and a top-posts corpus that already carries the community's judgment inside it \u2014 is the subject of the Critical Reflection page, which argues those limits are the finding rather than a caveat attached to it.",
    ],
  },

  aiNote: {
    heading: "Code and AI process",
    body: "I wrote the analysis in Python. I used an AI assistant to help scaffold and debug the notebooks, but the descriptive findings and the interpretation are my own. I checked each generated step against course notebooks and small hand-verified samples, and the full workflow \u2014 prompts, rejected outputs, and verification \u2014 is documented alongside the project code.",
  },
} as const;
