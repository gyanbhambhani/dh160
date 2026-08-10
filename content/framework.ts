export const framework = {
  meta: {
    title: "Theoretical Framework",
    description:
      "Confession as a genre, the hermeneutic contract, and technological mediation as the frame for reading r/confession.",
  },
  title: "Theoretical Framework",
  eyebrow: "Framework",
  subsections: [
    {
      heading: "Confession as a genre with rules",
      body: [
        "Confession carries a long history as a structured speech act with an expected listener and an expected response. On r/confession the listener is present and the response is optional, which strips the genre down to whatever the speaker chooses to supply. That makes the subreddit a useful place to see the form of confession without the institutional scaffolding that usually holds it up.",
      ],
    },
    {
      heading: "The hermeneutic contract (Henrickson and Meroño-Peñuela)",
      body: [
        "Henrickson and Meroño-Peñuela describe meaning-making as resting on a hermeneutic contract, a figurative meeting place between author and reader that the reader ultimately determines, shaped by their expectations about authorial agency. Their study of ChatGPT found that as prompts became more specific and more optimized for factual accuracy, outputs drifted toward intensified neutrality and lost hermeneutic depth. Both halves of that apply here. r/confession is anonymous, so readers construct an author out of very little and extend the contract anyway. And their finding about specificity is a warning about my own pipeline: the more precisely I specify what a model should extract, the flatter and more neutral the result is likely to be.",
      ],
    },
    {
      heading: "Instruments mediate (Ihde)",
      body: [
        "Don Ihde's account of technological mediation holds that instruments amplify some relations and reduce others rather than offering transparent access. TF-IDF and topic modeling are instruments in exactly this sense. They are built to make certain things visible and are structurally blind to others, and both effects are choices I am making.",
      ],
    },
  ],
} as const;
