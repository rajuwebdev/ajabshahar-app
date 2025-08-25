"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { contentData, searchCategories } from "@/lib/data";
import ContentCard from "./ContentCard";
import TexturedBackground from "./TexturedBackground";
import "../styles/CustomStyle.css";
import Image from "next/image";
import searchIcon from "../public/search-icon.svg";
interface HeroProps {
  isSearchOpen: boolean;
}
interface searchIcon {
  searchIcon: string;
}

export default function Hero({ isSearchOpen }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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

  return (
    <section className="relative min-h-screen ">
      {/* <div className="min-h-screen relative"> */}
      <TexturedBackground />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br "></div>
      </div>
      <div className="relative z-10  px-4 sm:px-6 lg:px-8 pt-26 hero-container">
        {isSearchOpen && (
          <div className="flex justify-center mb-1">
            <div className="relative w-[750px] max-w-full">
              <div className="relative">
                <Image
                  src={searchIcon}
                  alt="Search Icon"
                  width={26}
                  height={26}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() =>
                    setTimeout(() => setIsSearchFocused(false), 200)
                  }
                  className="w-full pl-16 pr-6 py-4 text-lg bg-white rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                  autoFocus
                />
              </div>

              {/* Search Results Dropdown */}
              {isSearchFocused && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-20">
                  {searchCategories.map((category) => {
                    const results = getResultsByCategory(category.key);
                    if (results.length === 0) return null;

                    return (
                      <div
                        key={category.key}
                        className="p-4 border-b border-gray-100 last:border-b-0"
                      >
                        <h3 className="text-xs font-semibold text-pink-500 uppercase mb-3">
                          {category.name} ({results.length})
                        </h3>
                        {results.slice(0, 3).map((item) => (
                          <div
                            key={item.id}
                            className="py-2 hover:bg-gray-50 rounded px-2 cursor-pointer"
                          >
                            <h4 className="text-sm font-medium text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {item.subtitle || item.author}
                            </p>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        <div>
          <div
            className={`columns-1 md:columns-2 lg:columns-1 gap-6 pb-20  ${
              !isSearchOpen ? "pt-8" : ""
            }`}
          >
            {contentData.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-6   product-card py-0.5"
              >
                <ContentCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
