import type { Article } from "@/types"
import HighlightedText from "./highlighted-text"

interface SearchResultsProps {
  articles: Article[]
  searchTerm: string
}

export default function SearchResults({ articles, searchTerm }: SearchResultsProps) {
  if (articles.length === 0) {
    return <p>No results found for &quot;{searchTerm}&quot;</p>
  }

  return (
    <div className="space-y-8">
      {articles.map((article) => (
        <article key={article.id} className="pb-6 border-b border-gray-200">
          <h2 className="text-xl font-bold mb-1">
            <HighlightedText text={article.title} highlight={searchTerm} />
          </h2>
          <p className="text-gray-500 text-sm mb-2">{article.date}</p>
          <p className="text-gray-700">
            <HighlightedText text={article.content.substring(0, 200) + "..."} highlight={searchTerm} />
          </p>
        </article>
      ))}
    </div>
  )
}
