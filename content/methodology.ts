import { figures, type FigureSpec } from "./figures";

export type Method = {
  name: string;
  body: string;
  note?: string;
  figure?: FigureSpec;
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
      "This study uses confession_submissions-top.csv: 50,000 top-scoring submissions to r/confession, 26 January 2011 through 31 December 2023. Each record carries id, score, selftext, created_utc, author, subreddit, and title. There are 40,132 unique authors; 5,261 of those accounts are already [deleted]. The usual Reddit-cleaning step drops bodies marked [deleted] or [removed]. This file has none, so I did not run it. After dropping posts under 30 words (2,344) and over 2,000 words (156), the working corpus is 47,500. Median length is 185 words; median score is 21; the maximum is 69,407. I keep first-person pronouns and negations that most stopword lists discard, because here they carry the rhetorical weight. The scrape also includes confession_comments-top.csv, 200,000 top comments. I leave that file in the appendix and do not analyze it, because the question is about how a confession is written and rewarded, not about the thread that follows.",
      "These are top posts. The file does not describe typical confession activity. It describes what the community already chose to promote. r/confession has no verdict mechanism, so upvoting is nearly the only judgment it makes, and a top-post corpus is a record of rewarded confession. I first treated that as a sampling bug. It is closer to the object of study. The question changed from what confession looks like to what a rewarded confession looks like.",
    ],
    figure: figures.score,
  },

  ethics: {
    heading: "Ethics",
    paragraphs: [
      "Posts are public and pseudonymous, and posters address the community deliberately. They are also accounts of real wrongdoing, often written in distress. I report aggregate patterns, paraphrase sparingly, and do not reproduce usernames. A few times I went back and read individual posts in full, not to extract anything, but to keep the distant view honest.",
    ],
  },

  approach: {
    heading: "Approach",
    intro:
      "I stayed close to techniques I could defend, and I started from the questions rather than from a method looking for a use. The pipeline runs at two speeds: a distant pass over 47,500 posts, and a close pass over a hand-read sample that the distant pass points me toward.",
    methods: [
      {
        name: "Score distribution",
        body: "I split posts into score quartiles so that high-scoring is defined against this corpus. The cuts fall at 11, 21, and 54 upvotes.",
        note: "High-scoring means nothing until you can say high relative to what.",
      },
      {
        name: "Anonymity tiers",
        body: "Reddit does not label anonymity. The author column almost does. I assign each post to one of four tiers: throwaway-named accounts (the name announces disposability: throwaway, burner, anon, alt2), deleted accounts, authors who appear once, and authors who return under the same name. Deleted is muddier than throwaway \u2014 deletion can follow regret. 74.5 percent of posts in the raw file come from authors who appear once, and some of those are just lapsed accounts. The regex misses ordinary-looking throwaways, which biases toward finding no effect. If a gradient still shows up, it is despite the classifier.",
        note: "The tiers are an instrument I built. Their order is an argument: throwaway, deleted, single-post, persistent.",
      },
      {
        name: "Transgression tagging",
        body: "I assign each post to infidelity, family harm, workplace, petty deception, criminal, or other, using keyword seeds. The highest-matching list wins; ties break alphabetically. Other is what is left when nothing hits. It holds 52.6 percent of the working corpus. I am not retuning the seeds to hide that. Every post in that bucket is a confession I told the analysis not to see.",
        note: "The boundaries leak. A theft from family is both family harm and a criminal act. I kept the scheme coarse so that failure stayed visible.",
        figure: figures.categories,
      },
      {
        name: "TF-IDF comparison",
        body: "Using scikit-learn's TfidfVectorizer over unigrams and bigrams, min_df 20, I compare the terms that distinguish high-scoring from low-scoring posts inside each named category, so infidelity posts are not just beating workplace posts on vocabulary. Quartiles are cut within category. Edit and thank you go into the stopword list after I caught them by reading.",
        note: "TF-IDF surfaces words that distinguish one set of documents from another. Whether those differences mean anything is a decision I still have to make by reading.",
      },
      {
        name: "Topic modeling",
        body: "I fit NMF at k = 12 with nndsvd and random_state=42 so the table is deterministic. The labels are my names for word clusters.",
        note: "Topic modeling does not produce topics. Another reader could name the same clusters differently.",
      },
      {
        name: "From distant to close reading",
        body: "Part D of the notebook writes close_reading_sample.csv: 173 posts across all 12 NMF topics, nearest each centroid, stratified across the four anonymity tiers, plus the highest- and lowest-scoring post in the topic. The hand-coding columns start empty: disclosure_position_pct, mitigating_context_before, explicit_self_judgment, self_judgment_position, and notes. I fill those by reading. The models decide what I read. Reading decides what the patterns mean.",
        note: "Sequence is invisible to both models. When a confessor discloses is recoverable only by reading.",
      },
    ] satisfies Method[],
  },

  expected: {
    heading: "What I expected to find",
    intro:
      "These are expectations, not results. The Findings page tracks each one against the figure meant to test it.",
    items: [
      "Deeper anonymity would buy more disclosure and a higher score.",
      "Remorse vocabulary would weight toward the upper score bands.",
      "Topics would separate by domain on vocabulary and collapse morally distinct situations that share surface words.",
      "Disclosure timing would be the decisive variable, and both models would miss it.",
    ],
  },

  neutrality: {
    heading: "The methods are not neutral",
    paragraphs: [
      "None of these choices is neutral. The stopword list, the number of topics, the seed words, and the anonymity regex each decide what the analysis is permitted to notice. I treat them as instruments in Ihde's sense, and I read them against Henrickson and Mero\u00f1o-Pe\u00f1uela's finding that tighter specification produces intensified neutrality. The more precisely I say what to extract, the flatter the result is likely to be.",
      "The Critical Reflection works this out. In a sentence: TF-IDF erases sequence, topic modeling flattens morally distinct situations, the tagger hid half the corpus, and the file already carries the community's judgment. Those limits are the finding, not a caveat attached to it.",
    ],
  },

} as const;
