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
  eyebrow: "Sources",
  items: [
    {
      authors: "Henrickson, L. and Meroño-Peñuela, A.",
      year: "2023",
      title:
        "\u201cPrompting meaning: a hermeneutic approach to optimising prompt engineering with ChatGPT.\u201d",
      italicTitle: "AI & Society",
      href: "https://link.springer.com/article/10.1007/s00146-023-01752-8",
    },
    {
      authors: "Henrickson, L. and Meroño-Peñuela, A.",
      year: "2022",
      title: "\u201cThe Hermeneutics of Computer-Generated Texts.\u201d",
      italicTitle: "Configurations",
      detail: "30(2), 115–139.",
      href: "https://muse.jhu.edu/article/853134",
    },
    {
      authors: "Ihde, D.",
      year: "1990",
      title: "",
      italicTitle: "Technology and the Lifeworld: From Garden to Earth.",
      detail: "Indiana University Press.",
    },
    {
      authors: "Foucault, M.",
      year: "1978",
      title: "",
      italicTitle:
        "The History of Sexuality, Volume 1: An Introduction.",
      detail: "Pantheon.",
    },
    {
      authors: "Blei, D., Ng, A., and Jordan, M.",
      year: "2003",
      title: "\u201cLatent Dirichlet Allocation.\u201d",
      italicTitle: "JMLR",
      detail: "3, 993–1022.",
      href: "https://www.jmlr.org/papers/v3/blei03a.html",
    },
    {
      authors: "Ramsay, S.",
      year: "2011",
      title: "",
      italicTitle: "Reading Machines: Toward an Algorithmic Criticism.",
      detail: "University of Illinois Press.",
    },
    {
      authors: "Moretti, F.",
      year: "2013",
      title: "",
      italicTitle: "Distant Reading.",
      detail: "Verso.",
    },
    {
      authors: "scikit-learn",
      year: "",
      title: "TfidfVectorizer documentation.",
      href: "https://scikit-learn.org/stable/modules/generated/sklearn.feature_extraction.text.TfidfVectorizer.html",
    },
    {
      authors: "Dataset:",
      year: "",
      title: "[DATASET SOURCE AND LINK]",
      detail: "50,000 top posts from r/confession, 2011–2023.",
      placeholder: true,
    },
  ] satisfies Source[],
} as const;
