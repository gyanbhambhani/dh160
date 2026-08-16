export type FigureSpec = {
  src: string;
  width: number;
  height: number;
  number: number;
  alt: string;
  caption: string;
};

export const figures = {
  score: {
    src: "/figures/fig1_score_distribution.png",
    width: 1200,
    height: 675,
    number: 1,
    alt: "Log-scale histogram of post scores for 47,500 working-corpus posts, with dashed quartile cuts near 11, 21, and 54.",
    caption:
      "Score distribution, n = 47,500, log x-axis. Dashed lines mark cuts at 11, 21, and 54. Shows how score sits inside a top-posts file. Does not show typical r/confession activity or why a post landed in a band.",
  },
  anonymity: {
    src: "/figures/fig2_anonymity_gradient.png",
    width: 1350,
    height: 720,
    number: 2,
    alt: "Grouped bars of four disclosure measures across throwaway, deleted, single-post, and persistent accounts, each measure scaled to its own maximum.",
    caption:
      "Disclosure along the anonymity gradient. Median words, feeling-word rate, never-told share, and severe-transgression share, each scaled to its own max. Shows four measures moving together. Does not show that the classifier found every throwaway.",
  },
  disclosureReward: {
    src: "/figures/fig3_disclosure_vs_reward.png",
    width: 1200,
    height: 675,
    number: 3,
    alt: "Dual-axis line chart: median words fall from throwaway to persistent accounts while median score stays flat near 20.",
    caption:
      "Disclosure versus reward. Median words fall along the gradient; median score does not. Shows the two series coming apart. Does not show that longer posts deserve more upvotes.",
  },
  categories: {
    src: "/figures/fig4_category_counts.png",
    width: 1200,
    height: 675,
    number: 4,
    alt: "Horizontal bar chart of six transgression categories, with the other bucket highlighted in gold at about 25,000 posts.",
    caption:
      "Category counts after keyword tagging. Gold marks other, 52.6 percent of the working corpus. Shows how much the scheme failed to name. Does not show that those posts are one kind of confession.",
  },
  editArtifact: {
    src: "/figures/fig5_edit_artifact.png",
    width: 975,
    height: 630,
    number: 5,
    alt: "Bar chart of the share of posts containing edit or thank you, rising from 4.8 percent in the bottom score quartile to 14.8 percent in the top.",
    caption:
      "Share of posts containing edit or thank you, by score quartile: 4.8, 5.7, 7.9, 14.8 percent. Shows a term that tracks score. Does not show that those words caused the score. They are authors returning to posts that already succeeded.",
  },
  topics: {
    src: "/figures/fig6_topic_table.png",
    width: 1785,
    height: 959,
    number: 6,
    alt: "Table of twelve NMF topics with top terms, post counts, median score, and percent high-engagement, with the guilt topic highlighted.",
    caption:
      "Twelve NMF topics, sorted by share of posts at or above 175 upvotes. The highlighted row is the guilt topic, at 6.5 percent high-engagement against 14.5 percent for money and work. Shows clusters of words that I named. Does not show that those names are the only honest ones.",
  },
  feeling: {
    src: "/figures/fig7_feeling_by_quartile.png",
    width: 1200,
    height: 720,
    number: 7,
    alt: "Line chart of feeling words per 1,000 words from bottom to top score quartile, one line per transgression category, all five ending lower than they start.",
    caption:
      "Feeling-word rate per 1,000 words across within-category score quartiles. Every named category ends lower in q4 than it started in q1. Shows a slope, not a cause.",
  },
  terms: {
    src: "/figures/fig8_distinctive_terms.png",
    width: 1500,
    height: 1800,
    number: 8,
    alt: "Grid of distinctive TF-IDF terms: rewarded quartiles show concrete event words, unrewarded quartiles show interior-state words, one row per category.",
    caption:
      "Terms that distinguish the top score quartile from the bottom, inside each named category, after edit and thank you were removed. Rewarded posts lean toward event words; unrewarded posts lean toward interior-state words. Bar length is rank, not magnitude.",
  },
} as const satisfies Record<string, FigureSpec>;
