"use client"

import { useState, useMemo } from "react"
import SearchInput from "./search-input"
import SearchResults from "./search-results"
import type { Article } from "@/types"

interface SearchContainerProps {
  articles: Article[]
}

export default function SearchContainer({ articles }: SearchContainerProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) return []

    const term = searchTerm.toLowerCase()
    return articles.filter(
      (article) => article.title.toLowerCase().includes(term) || article.content.toLowerCase().includes(term),
    )
  }, [articles, searchTerm])

  const handleClearSearch = () => {
    setSearchTerm("")
  }

  return (
    <div>
      <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onClear={handleClearSearch} />

      {searchTerm && (
        <div className="mt-4">
          <p className="text-gray-700 mb-4">
            {filteredArticles.length} {filteredArticles.length === 1 ? "post" : "posts"} were found.
          </p>
          <SearchResults articles={filteredArticles} searchTerm={searchTerm} />
        </div>
      )}
    </div>
  )
}
