"use client";

import { useState } from "react";
import { Search, X, BookOpen, Music, User, Heart } from "lucide-react";

// Define types
interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  author?: string;
  subtitle?: string;
}

interface SearchCategory {
  key: string;
  name: string;
  icon: React.ReactNode;
}

// Mock data
const contentData: ContentItem[] = [
  {
    id: "1",
    title: "Gulshan-e-Armaan",
    description:
      "The story highlights the guidance that Shahi may at spoke of, to evolve his utopian vision of a world in which the human spirit was not driven by fear, mistrust, oppression and exploitation.111",
    category: "poetry",
    author: "Kaar Project",
  },
  {
    id: "2",
    title: "Haman Hai Isho",
    description:
      "The story highlights the guidance — no - directed (the forecasted Garden) that Shahi may at spoke of.",
    category: "music",
    author: "Mystic Sounds",
  },
  {
    id: "3",
    title: "Had Anhad I Lost My Heart To Niams Glance",
    description:
      "The story highlights the guidance — no - directed (the forecasted Garden) that Shahi might spoke of.",
    category: "literature",
    author: "Sufi Poets",
  },
];

const searchCategories: SearchCategory[] = [
  { key: "all", name: "All Results", icon: <Search size={14} /> },
  { key: "poetry", name: "Poetry", icon: <BookOpen size={14} /> },
  { key: "music", name: "Music", icon: <Music size={14} /> },
  { key: "authors", name: "Authors", icon: <User size={14} /> },
];

export default function SearchInterface() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResults = contentData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getResultsByCategory = (category: string) => {
    if (category === "all") return filteredResults;
    return filteredResults.filter((item) => item.category === category);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchFocused(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">
            Gulshan-e-Armaan
          </h1>
          <p className="text-indigo-600">by KAAR PROJECT</p>
        </header>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Discover Spiritual Content
            </h2>
            <p className="text-gray-600 text-center max-w-lg">
              Explore poetry, music, and literature that inspires the soul and
              enlightens the mind.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={24}
              />
              <input
                type="text"
                placeholder="Search for poetry, music, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full pl-14 pr-12 py-4 text-lg bg-gray-50 rounded-full shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {isSearchFocused && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-xl shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-20">
                <div className="p-4 border-b border-gray-100 flex space-x-2 overflow-x-auto">
                  {searchCategories.map((category) => (
                    <button
                      key={category.key}
                      onClick={() => setActiveCategory(category.key)}
                      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                        activeCategory === category.key
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </button>
                  ))}
                </div>

                {getResultsByCategory(activeCategory).length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-gray-500">
                      No results found for "{searchQuery}"
                    </p>
                  </div>
                ) : (
                  <div className="p-4">
                    {getResultsByCategory(activeCategory).map((item) => (
                      <div
                        key={item.id}
                        className="p-4 hover:bg-indigo-50 rounded-lg cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <h4 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.author}
                        </p>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    {item.category === "poetry" && (
                      <BookOpen className="text-indigo-600" size={20} />
                    )}
                    {item.category === "music" && (
                      <Music className="text-indigo-600" size={20} />
                    )}
                    {item.category === "literature" && (
                      <Heart className="text-indigo-600" size={20} />
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-indigo-600">{item.author}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
