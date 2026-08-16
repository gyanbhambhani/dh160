export type Source = {
  authors: string;
  year: string;
  title: string;
  italicTitle?: string;
  publication?: string;
  detail?: string;
  href?: string;
  placeholder?: boolean;
};

export const sources = {
  meta: {
    title: "Sources",
    description: "Readings, tools, and data behind the project.",
  },
  title: "Sources",
  eyebrow: "Works cited",
  items: [
    {
      authors: "Blei, David M., et al.",
      year: "2003",
      title: "\u201cLatent Dirichlet Allocation.\u201d",
      italicTitle: "Journal of Machine Learning Research",
      detail: "vol. 3, 2003, pp. 993\u20131022.",
      href: "https://www.jmlr.org/papers/v3/blei03a.html",
    },
    {
      authors: "Foucault, Michel.",
      year: "1978",
      title: "",
      italicTitle: "The History of Sexuality, Volume 1: An Introduction.",
      detail: "Translated by Robert Hurley, Pantheon Books, 1978.",
    },
    {
      authors: "Henrickson, Leah, and Albert Mero\u00f1o-Pe\u00f1uela.",
      year: "2022",
      title: "\u201cThe Hermeneutics of Computer-Generated Texts.\u201d",
      italicTitle: "Configurations",
      detail: "vol. 30, no. 2, 2022, pp. 115\u201339.",
      href: "https://muse.jhu.edu/article/853606",
    },
    {
      authors: "Henrickson, Leah, and Albert Mero\u00f1o-Pe\u00f1uela.",
      year: "2023",
      title:
        "\u201cPrompting Meaning: A Hermeneutic Approach to Optimising Prompt Engineering with ChatGPT.\u201d",
      italicTitle: "AI & Society",
      detail: "2023.",
      href: "https://link.springer.com/article/10.1007/s00146-023-01752-8",
    },
    {
      authors: "Ihde, Don.",
      year: "1990",
      title: "",
      italicTitle: "Technology and the Lifeworld: From Garden to Earth.",
      detail: "Indiana University Press, 1990.",
    },
    {
      authors: "Moretti, Franco.",
      year: "2013",
      title: "",
      italicTitle: "Distant Reading.",
      detail: "Verso, 2013.",
    },
    {
      authors: "Pedregosa, Fabian, et al.",
      year: "2011",
      title: "\u201cScikit-learn: Machine Learning in Python.\u201d",
      italicTitle: "Journal of Machine Learning Research",
      detail: "vol. 12, 2011, pp. 2825\u201330.",
      href: "https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html",
    },
    {
      authors: "Ramsay, Stephen.",
      year: "2011",
      title: "",
      italicTitle: "Reading Machines: Toward an Algorithmic Criticism.",
      detail: "University of Illinois Press, 2011.",
    },
    {
      authors: "Dataset.",
      year: "",
      title:
        "50,000 top-scoring submissions to r/confession, January 2011 through December 2023.",
      detail:
        "Public Reddit submissions dump. Working corpus after filtering: 47,500 posts.",
      placeholder: true,
    },
  ] satisfies Source[],
} as const;
