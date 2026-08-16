export const framework = {
  meta: {
    title: "Theoretical Framework",
    description:
      "Confession as a genre, the hermeneutic contract, and technological mediation as the frame for reading r/confession.",
  },
  title: "Theoretical Framework",
  eyebrow: "The hermeneutic contract",
  subsections: [
    {
      heading: "Confession without an institution",
      body: [
        "Confession has always been a structured speech act with a listener attached. The church supplies a priest, the court supplies a judge, the clinic supplies a therapist. Foucault's history of sexuality treats that demand to speak as an institutional technology: confession produces a subject by requiring an account of the self. Each of those settings defines in advance who is listening and what response the confessor can expect. r/confession removes all of it. The listener is a crowd of strangers, and the response is optional. What remains is whatever structure the confessor supplies without being asked to, which is why the subreddit is a useful place to see the shape of the genre with the scaffolding taken away.",
      ],
    },
    {
      heading: "The hermeneutic contract",
      body: [
        "Leah Henrickson and Albert Meroño-Peñuela describe meaning-making as resting on what they call a hermeneutic contract, a figurative meeting place between author and reader that the reader ultimately determines. Their survey of hermeneutic positions makes a point that matters for this project: every stance they review, from Schleiermacher's search for authorial intention through Wimsatt and Beardsley's intentional fallacy to the reception theorists who hand authority to the reader, assumes some relationship between an author and a reader. The disagreement is about who holds power inside that relationship rather than whether it exists.",
        "r/confession stresses that assumption in a specific way. The author is a throwaway account, and readers extend the contract anyway, constructing an author out of a username and a few hundred words. Henrickson and Meroño-Peñuela observe that readers resurrect a perceived author even in computer-generated text, where there is no human author to find. Anonymous confession is a milder version of the same phenomenon: readers reach for an author who is deliberately withholding themselves, and they do it readily enough that the subreddit works at all.",
      ],
    },
    {
      heading: "Beyond-intention meaning",
      body: [
        "Their proposed correction to intention-centered hermeneutics is a concept they call beyond-intention meaning, an approach that recognizes that readers discern meaning past what the author intended while still valuing authorial intention. That double move is what this project needs. A confessor plainly intends something, usually absolution or at least being heard. Readers do something else with the post, and the upvote is the only trace of it I can measure. Studying what gets rewarded means studying reader-side meaning without discarding the fact that someone wrote the thing on purpose.",
      ],
    },
    {
      heading: "Instruments amplify and reduce",
      body: [
        "Don Ihde's account of technological mediation holds that instruments never offer transparent access to their objects. They amplify some relations and reduce others, and the reduction is not a defect to be engineered away. TF-IDF and topic modeling are instruments in exactly this sense. Moretti's distant reading is the warrant for looking at 47,500 posts at once; Ramsay's algorithmic criticism is the reminder that the output is already an interpretation, not a window onto the corpus.",
        "Henrickson and Meroño-Peñuela add a sharper version of the same warning from the computational side. In their later work on prompt engineering, they find that as prompts become more specific and more optimized for factual accuracy, output drifts toward intensified neutrality and loses hermeneutic depth. Specification buys precision and spends something else. My pipeline is a long chain of specifications: a stopword list, a minimum document frequency, six category definitions, a number of topics, four anonymity tiers. Each one is a choice about what the analysis is permitted to notice, and the reflection page returns to what those choices cost.",
      ],
    },
  ],
} as const;
