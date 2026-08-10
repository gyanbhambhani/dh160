export const findings = {
  meta: {
    title: "Findings and Analysis",
    description:
      "Three expectations about rewarded confession, each awaiting its figure. Analysis in progress.",
  },
  title: "Findings and Analysis",
  eyebrow: "Findings",
  banner: "ANALYSIS IN PROGRESS · UPDATED [DATE]",
  expectations: [
    {
      label: "Expectation 1",
      heading: "Remorse vocabulary tracks with score.",
      body: "Terms in the register of ongoing consequence (\u201cstill,\u201d \u201cnever told,\u201d \u201chaunts,\u201d \u201cyears later\u201d) should weight toward the upper score bands, while defiant or flatly unapologetic framings should sit lower.",
      figureCaption: "Figure slot: TF-IDF term comparison across score quartiles.",
    },
    {
      label: "Expectation 2",
      heading: "Topics will cluster by domain before they cluster by structure.",
      body: "Topic models are likely to separate infidelity from workplace confessions on vocabulary alone while collapsing genuinely different moral situations that happen to share surface words such as family, money, and secret.",
      figureCaption: "Figure slot: topic-term table with coherence scores.",
    },
    {
      label: "Expectation 3",
      heading: "Disclosure timing is the real variable.",
      body: "Long posts should defer the disclosure sentence, short posts should lead with it, and the deferral pattern should be invisible to both models.",
      figureCaption:
        "Figure slot: histogram of disclosure position as a percentage of post length, hand-coded sample.",
    },
  ],
  closeReading: "[CLOSE READING: 3 ANNOTATED POSTS, PARAPHRASED AND ANONYMIZED]",
} as const;
