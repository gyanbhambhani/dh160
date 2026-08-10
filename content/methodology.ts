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
  notDoing: {
    heading: "What I am not doing",
    body: "No sentiment scoring, no comment-thread analysis, no user-level tracking across posts.",
  },
} as const;
