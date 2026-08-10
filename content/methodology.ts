export const methodology = {
  meta: {
    title: "Methodology",
    description:
      "An ordered pipeline: corpus construction, cleaning, scoring bands, tagging, TF-IDF, topic modeling, and close reading.",
  },
  title: "Methodology",
  eyebrow: "Methodology",
  intro:
    "Presented as a numbered sequence, since this genuinely is an ordered pipeline.",
  steps: [
    {
      title: "Corpus",
      body: "50,000 top posts, January 2011 through December 2023. Fields: id, score, selftext, created_utc, author, subreddit, title.",
    },
    {
      title: "Cleaning",
      body: "Remove deleted and removed bodies, strip markdown and URLs, drop posts under 30 words, lowercase, lemmatize. Keep first-person pronouns and negations, which most stopword lists would discard and which carry the rhetorical weight in this corpus.",
    },
    {
      title: "Scoring bands",
      body: "Split into score quartiles so \u201chigh-scoring\u201d is defined against this corpus rather than an outside benchmark. Report band boundaries on the page.",
    },
    {
      title: "Transgression tagging",
      body: "Assign each post to a category (infidelity, family harm, workplace dishonesty, petty deception, criminal acts, other) using keyword seeding and manual review of a sample. Report inter-rater notes and disagreement rate for the hand-checked subset.",
    },
    {
      title: "TF-IDF",
      body: "scikit-learn TfidfVectorizer, unigrams and bigrams, min_df tuned to corpus size. Compare top distinguishing terms across score bands and across categories.",
    },
    {
      title: "Topic modeling",
      body: "LDA and NMF, k swept across a range, coherence reported for each. Select k with justification rather than default.",
    },
    {
      title: "Distant to close",
      body: "For every topic, pull the ten posts closest to the topic centroid plus the highest and lowest scoring post in that topic. Read all of them by hand against a fixed schedule: where the disclosure sentence falls as a percentage of post length, whether mitigating context precedes it, whether an explicit self-judgment appears, and where.",
    },
    {
      title: "Write-up",
      body: "Every quantitative claim on the Findings page links back to the specific figure or table it came from.",
    },
  ],
  distantToClose: {
    heading: "Moving from distant to close reading",
    body: "The pipeline is deliberately two-speed. The distant pass (steps 5 and 6) treats all 50,000 posts at once, letting TF-IDF and topic modeling surface vocabulary and recurring confession types no human could read for directly. The close pass (step 7) then narrows to a hand-sized set \u2014 the posts nearest each topic centroid plus the extreme-scoring posts \u2014 and reads them line by line for the thing the models cannot register: where the disclosure falls, what softens it, what is held back. Distant reading decides what to read closely; close reading decides what the distant patterns actually mean.",
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
  reflection: {
    heading: "Reflecting on the methods",
    body: "TF-IDF and topic modeling are instruments in Ihde's sense: they amplify some relations and are blind to others. The Critical Reflection page is where I assess what these methods let me see and what they quietly remove \u2014 TF-IDF making emotional register legible at the word level while erasing sequence, topic modeling making archetypes visible while flattening morally distinct situations, and a corpus of top posts already carrying the community's judgment inside it. That page argues these limitations are the finding rather than a caveat attached to it.",
  },
  notDoing: {
    heading: "What I am not doing",
    body: "No sentiment scoring, no comment-thread analysis, no user-level tracking across posts.",
  },
} as const;
