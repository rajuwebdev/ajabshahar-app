"use client";

import { useState, useEffect } from "react";
import { contentData, searchCategories } from "@/lib/data";
import ContentCard from "./ContentCard";
import "../styles/CustomStyle.css";
import Image from "next/image";
import searchIcon from "../public/search-icon.svg";
import ContentSliderModal from "./ContentSliderModal";

interface HeroProps {
  isSearchOpen: boolean;
}

export default function Hero({ isSearchOpen }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAjabNews, setShowAjabNews] = useState(false); // 🔹 add modal state

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

  // 🔹 Auto-open modal on first load and refresh
  useEffect(() => {
    setShowAjabNews(true);
  }, []);

  return (
    <section className="relative min-h-screen full-background-home-page">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br "></div>
      </div>

      <div className="relative z-10  px-4 sm:px-6 lg:px-8 pt-26 hero-container">
        {isSearchOpen && (
          <div className="flex">
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
                  className={`w-full pl-16 pr-6 py-4 serch-input-font bg-white shadow-lg border border-gray-200 focus:outline-none 
                    ${
                      isSearchFocused && searchQuery
                        ? "rounded-custom-onsearch"
                        : "rounded-custom"
                    }`}
                  autoFocus
                />
              </div>

              {/* Search Results Dropdown */}
              {isSearchFocused && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white  serch-result-conatiner max-h-150 overflow-y-auto  z-[100]">
                  {searchCategories.map((category) => {
                    const results = getResultsByCategory(category.key);
                    if (results.length === 0) return null;

                    return (
                      <div key={category.key} className="border-gray-custom">
                        <h3 className="search-result-heading uppercase mb-3">
                          {category.name} ({results.length})
                        </h3>
                        {results.slice(0, 3).map((item) => (
                          <div key={item.id} className="py-2 cursor-pointer">
                            <p className="search-result-semi-heading mt-1">
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

        {/* Content cards */}
        <div>
          <div
            className={`columns-1 md:columns-2 lg:columns-1 gap-6 pb-20 ${
              !isSearchOpen ? "pt-8" : ""
            }`}
          >
            {contentData.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid mb-6 product-card py-0.5"
              >
                <ContentCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Ajab News Modal */}
        <ContentSliderModal
          items={contentData}
          isOpen={showAjabNews}
          onClose={() => setShowAjabNews(false)}
        />
      </div>
    </section>
  );
}
