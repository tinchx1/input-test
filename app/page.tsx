import SearchContainer from "@/components/search-container"
import { articles } from "@/data/articles"

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">Search</h1>
      <div className="grid md:grid-cols-[1fr_300px] gap-8">
        <SearchContainer articles={articles} />
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="mb-4">
            <h2 className="font-bold">bitsofcode.</h2>
            <p className="text-sm text-gray-600">
              Articles on Frontend Development. All articles are written by
              <span className="font-medium"> Ire Aderinokun</span>, Frontend Developer and User Interface Designer.
            </p>
          </div>
          <div className="mt-4">
            <button className="bg-[#1DA1F2] text-white text-xs py-1 px-3 rounded-md flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3 h-3"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Follow @ireaderiokun
            </button>
            <span className="text-xs ml-2 text-gray-600">19.1K followers</span>
          </div>
        </div>
      </div>
    </main>
  )
}
