"use client";

import React, { useState } from "react";
import Image from "next/image";

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
      image: "/images/had-anhad.jpg",
      category: "Music",
      date: "2024-01-15",
    },
    {
      id: 2,
      type: "POEMS",
      title: "Gulshan-e-Armaan",
      subtitle: "by KABIR PROJECT",
      description:
        "The story highlights the gulshan-e-na-afreeda (the Uncreated Garden) that Shah Inayat spoke of, to evoke his utopian vision of a world in which the human spirit was not driven by fear, mistrust, oppression and exploitation, but rather was guided by a non-egoic spirit of connection and love.",
      image: "/images/gulshan-armaan.jpg",
      category: "Poetry",
      date: "2024-01-10",
    },
    {
      id: 3,
      type: "POEMS",
      title: "Haman Hai Isha",
      description:
        "The story highlights the gulshan-e-na-afreeda (the Uncreated Garden) that Shah Inayat spoke of, to evoke his utopian vision of a world in which the human spirit was not driven by fear, mistrust, oppression and exploitation, but rather was guided by a non-egoic spirit of connection and love.",
      image: "/images/haman-isha.jpg",
      category: "Poetry",
      date: "2024-01-05",
    },
    {
      id: 4,
      type: "OTHER",
      title: "Mystic Poetry Collection",
      subtitle: "Farid's Legacy",
      description:
        "A collection of mystical poems and reflections from the Sufi tradition, featuring the works of Farid and other spiritual poets.",
      image: "/images/mystic-poetry.jpg",
      category: "Collection",
      date: "2024-01-01",
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
    <div className="mt-10">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-light text-gray-700 mb-4">
            You searched for{" "}
            <span className="font-semibold">'{searchData.query}'</span>,{" "}
            {searchData.totalResults} results found
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 border-b pb-4">
          {searchData.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border"
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
            <div key={item.id} className="bg-white rounded-lg  p-6">
              {/* Result Item */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
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
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-3">
                    {item.type}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h2>

                  {/* Subtitle */}
                  {item.subtitle && (
                    <h3 className="text-lg text-gray-600 mb-3 italic">
                      {item.subtitle}
                    </h3>
                  )}

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {index < filteredResults.length - 1 && (
                <hr className="mt-6 border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
