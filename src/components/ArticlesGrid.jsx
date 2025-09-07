const articles = [
  {
    id: 1,
    title: "Understanding Salary Structure",
    excerpt:
      "Learn how CTC, gross salary, and net salary differ — and why it matters for your take-home pay.",
    link: "#",
  },
  {
    id: 2,
    title: "Basics of Income Tax in India",
    excerpt:
      "We explain the latest tax slabs, deductions, and exemptions in simple terms.",
    link: "#",
  },
  {
    id: 3,
    title: "Smart Ways to Save Tax",
    excerpt:
      "From Section 80C to health insurance, discover practical strategies to reduce taxable income.",
    link: "#",
  },
];

export default function ArticlesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Financial Insights
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((a) => (
          <div
            key={a.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
          >
            <h3 className="text-lg font-semibold text-indigo-700">{a.title}</h3>
            <p className="mt-2 text-gray-600 text-sm flex-grow">{a.excerpt}</p>
            <a
              href={a.link}
              className="mt-4 inline-block text-sm text-indigo-600 hover:underline"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
