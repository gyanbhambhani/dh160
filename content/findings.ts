import { figures, type FigureSpec } from "./figures";

export type FindingsSection = {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  figure?: FigureSpec;
  table?: {
    caption: string;
    headers: string[];
    rows: string[][];
  };
};

export const findings = {
  meta: {
    title: "Findings and Analysis",
    description:
      "Anonymity buys disclosure. The community rewards narration, not remorse. The two do not meet.",
  },
  title: "Findings and Analysis",
  eyebrow: "Findings",
  sections: [
    {
      heading: "What survived filtering",
      paragraphs: [
        "The raw file holds 50,000 posts. Removing those under 30 words dropped 2,344; capping at 2,000 dropped 156; 47,500 remain. Quartile cuts fall at 11, 21, and 54 upvotes. High and low below mean high and low for r/confession top posts, not for Reddit.",
      ],
    },
    {
      eyebrow: "A question the author column opened",
      heading: "Anonymity buys disclosure. It does not buy a score.",
      paragraphs: [
        "I did not plan this measurement. The author column supports a four-tier gradient: throwaway-named accounts, deleted accounts, one-time posters, and authors who return under the same name. Against that gradient I measured four things anonymity should buy if it buys anything: median length, feeling-word rate, whether the poster says they have never told anyone, and whether the post names a severe transgression.",
        "A throwaway-named poster writes about 52 percent longer, is about 83 percent more likely to say they have never told anyone, and is about 52 percent more likely to be confessing something severe, compared with a persistent account. Feeling-word rate moves the same way. I-rate is the awkward one: deleted accounts use I slightly more than throwaways. The other four measures are monotonic.",
      ],
      figure: figures.anonymity,
    },
    {
      heading: "The two series come apart",
      paragraphs: [
        "Median score across the four tiers is flat. Spearman correlation between anonymity rank and score is significant, negative, and essentially zero (rho about \u22120.012). Kruskal-Wallis on length is enormous (H = 595.3) because n = 47,500 makes almost any difference look like a finding. I am not hanging the argument on a p-value. What is hard to get by chance is four disclosure measures moving together beside a reward series that does not.",
        "Anonymity predicts how much you disclose. It does not predict whether you get rewarded for it. That result lands before any TF-IDF run.",
      ],
      figure: figures.disclosureReward,
    },
    {
      eyebrow: "Expectation 1",
      heading: "The prediction was wrong, and the inversion is the finding",
      paragraphs: [
        "I expected remorse vocabulary to weight toward high-scoring posts. The opposite is true. Top-quartile posts are distinguished by event vocabulary: went, told, home, night, car, kids. Bottom-quartile posts are distinguished by interior-state vocabulary: feel, feel like, don't know, hate, guilty, remorse. The q1-to-q4 drop in feeling-word rate holds in every named category.",
      ],
      figure: figures.terms,
    },
    {
      heading: "The gradient is a slope, not a domain effect",
      paragraphs: [
        "Infidelity ticks slightly in the middle quartiles before dropping; the claim is the q1-to-q4 fall, not a perfectly smooth line. Length does not explain it. Median words across within-category quartiles run about 194, 192, 190, 204, so the top quartile is slightly longer while using fewer feeling words. Stratifying inside category rules out the domain confound: the same slope appears within each.",
        "r/confession rewards narration and quietly ignores self-judgment. A community with no verdict mechanism still has a preference, and the preference runs against the confessor who does the judging out loud. Stating your guilt reads as asking for something. Telling the story leaves the reader with somewhere to go.",
      ],
      figure: figures.feeling,
      table: {
        caption:
          "Feeling words per 1,000 words, by within-category score quartile. q4 is below q1 in every row.",
        headers: ["Category", "q1", "q2", "q3", "q4"],
        rows: [
          ["Infidelity", "7.70", "7.34", "7.27", "5.46"],
          ["Petty deception", "6.35", "6.29", "5.84", "4.98"],
          ["Family harm", "6.25", "5.81", "5.31", "4.65"],
          ["Criminal", "6.23", "5.23", "5.30", "4.25"],
          ["Workplace", "6.21", "5.84", "5.51", "4.20"],
        ],
      },
    },
    {
      heading: "An artifact that looks exactly like a finding",
      paragraphs: [
        "Edit and thank you ranked among the strongest top-quartile terms in all five categories. They appear in 14.8 percent of top-quartile posts against 4.8 percent of the bottom. These are authors returning to posts that already succeeded. The pipeline was reading a consequence of high score as a cause of it. No amount of tuning catches this: the terms behave like a real signal. Reading caught it. Results above are from the rerun with both terms removed. The feeling-word gradient is unaffected because it is measured independently of TF-IDF.",
      ],
      figure: figures.editArtifact,
    },
    {
      eyebrow: "Expectation 2",
      heading: "Topics cluster by domain, and some of them are noise",
      paragraphs: [
        "Twelve NMF topics. Contraction topics (don, didn, ve, im) spent capacity on preprocessing residue. Markdown leftovers sat in the vocabulary even when they did not get their own row. Part of the model's output was describing my pipeline.",
        "Among the substantive topics, vocabulary separates domains and collapses morally distinct situations that share surface words. Stealing from a parent and a parent's death land near each other on family and money terms alone. The topic whose top terms are feel, bad, guilty, remorse has 6.5 percent high-engagement posts, against 14.5 percent for money and work. The model found the confessions that talk most about guilt. Those are the ones the community reads past.",
      ],
      figure: figures.topics,
    },
    {
      eyebrow: "Expectation 3",
      heading: "Disclosure timing stays out of reach",
      paragraphs: [
        "Both methods treat a post as an unordered set of words, so where the disclosure lands is invisible to both. I pulled a close-reading sample from each topic \u2014 centroid posts stratified by anonymity tier, plus score extremes \u2014 and sat with them. In the posts I read, long posts defer the disclosure and short posts lead with it. That is a qualitative observation from the sample, not a counted result across 47,500 rows. No parameter change would let the models see it.",
      ],
    },
    {
      heading: "The two results together",
      paragraphs: [
        "Put the anonymity gradient beside the feeling-word gradient and they describe a community that extracts disclosure and then declines to reward the disclosing. The most anonymous, most self-exposing posts are not the ones that get upvoted. Narration is. Stated guilt is not. The missing verdict does not mean the community has no preference. It means the preference has to be read out of what it quietly promotes.",
      ],
    },
  ] satisfies FindingsSection[],
} as const;
