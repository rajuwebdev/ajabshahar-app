"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./SearchResults.css";

// Main data array for search results
const searchData = {
  query: "farid",
  totalResults: 20,
  filters: ["ALL", "SONGS", "POEMS", "REFLECTIONS", "OTHER"],
  activeFilter: "ALL",
  results: [
    {
      id: 1,
      type: "SONGS",
      title: "Had Anhad",
      subtitle: "I Lost My Heart To Nizam's Glance",
      description:
        "The story highlights the gulshan-e-na-afreeda (the Uncreated Garden) that Shah Inayat spoke of, to evoke his utopian vision of a world in which the human spirit was not driven by fear, mistrust, oppression and exploitation, but rather was guided by a non-egoic spirit of connection and love.",
      image: "/TN-About-Basavalingaiah-Hiremath.jpg",
      category: "Music",
    },
    {
      id: 2,
      type: "POEMS",
      title: "Gulshan-e-Armaan",
      subtitle: "by KABIR PROJECT",
      description:
        "The story highlights the gulshan-e-na-afreeda (the Uncreated Garden) that Shah Inayat spoke of, to evoke his utopian vision of a world in which the human spirit was not driven by fear, mistrust, oppression and exploitation, but rather was guided by a non-egoic spirit of connection and love.",
      image: "/TN-About-Basavalingaiah-Hiremath.jpg",
      category: "Poetry",
    },
    {
      id: 3,
      type: "POEMS",
      title: "Haman Hai Isha",
      description:
        "The story highlights the gulshan-e-na-afreeda (the Uncreated Garden) that Shah Inayat spoke of, to evoke his utopian vision of a world in which the human spirit was not driven by fear, mistrust, oppression and exploitation, but rather was guided by a non-egoic spirit of connection and love.",
      image: "/TN-About-Basavalingaiah-Hiremath.jpg",
      category: "Poetry",
    },
    {
      id: 4,
      type: "OTHER",
      title: "Mystic Poetry Collection",
      subtitle: "Farid's Legacy",
      description:
        "A collection of mystical poems and reflections from the Sufi tradition, featuring the works of Farid and other spiritual poets.",
      image: "/TN-About-Basavalingaiah-Hiremath.jpg",
      category: "Collection",
    },
  ],
  counts: {
    ALL: 6,
    SONGS: 1,
    POEMS: 3,
    REFLECTIONS: 0,
    OTHER: 1,
  },
};

// Footer data
const footerData = {
  about:
    "Ajab Shahar is a wondrous city of songs, poems and conversations from Bhakti, Sufi and Baul oral traditions from India and beyond.",
  support:
    "If you have found joy and value here, consider supporting this work.",
  newsletter: {
    title: "Stay Connected",
    description: "Hear from us quarterly with news, inspirations and more...",
    email: "ajabshahar@gmail.com",
  },
  links: {
    social: ["Youtube", "Instagram"],
    navigation: [
      "SONGS",
      "POEMS",
      "REFLECTIONS",
      "PEOPLE",
      "FILMS",
      "RADIO",
      "GLOSSARY",
      "AJAB NEWS",
    ],
  },
  credit:
    "Website Design Smartt Chanchani | Created by the Kabir Project at Shabad Diner Foundation",
};

export default function SearchResults() {
  const [activeFilter, setActiveFilter] = useState(searchData.activeFilter);

  // Filter results based on active filter
  const filteredResults =
    activeFilter === "ALL"
      ? searchData.results
      : searchData.results.filter((item) => item.type === activeFilter);

  return (
    <div className="mt-8">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        {/* Search Header */}
        <div className="text-center mb-2">
          <h1 className="text-2xl md:text-3xl font-light black-custom-color mb-0 mt-0">
            You searched for '{searchData.query}', {searchData.totalResults}{" "}
            results found
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 border-t pt-3 pb-4">
          {searchData.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={` border-0 button-font  cursor-pointer transition-colors ${
                activeFilter === filter
                  ? "text-pink text-white"
                  : "bg-white  border search-btn"
              }`}
            >
              {filter} (
              {searchData.counts[filter as keyof typeof searchData.counts]})
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="space-y-8">
          {filteredResults.map((item, index) => (
            <div key={item.id} className="bg-white">
              {/* Result Item */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-56 h-32 bg-gray-200 thumbnail-image overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h2 className="search-result-heading mb-2">
                    {item.title}

                    {item.subtitle && (
                      <span className="mb-3 italic">{item.subtitle}</span>
                    )}
                  </h2>

                  {/* Subtitle */}

                  {/* Description */}
                  <p className="search-result-text mb-4">{item.description}</p>
                </div>
              </div>

              {/* Divider */}
              {index < filteredResults.length - 1 && (
                <div className="border-dotted-seprator"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
