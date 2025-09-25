"use client";

import React from "react";
import Image from "next/image";
import "./News.css";

export default function NewsCard() {
  const item = {
    title: "Had Anhad",
    subtitle: "I Lost My Heart To Nizam's Glance",
    description:
      "Had Anhad I Lost My Heart To Nizam’s Glance spoke of, to evoke his utopian vision of a world in which the human spirit was not driven by fear, mistrust, oppression and exploitation, but rather was guided by a non-egoic spirit of connection and love.",
    image: "/TN-About-Basavalingaiah-Hiremath.jpg",
  };

  return (
    <div className="mx-auto mt-8 bg-white">
      <div className="mt-7 border-dotted-seprator"></div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-56 h-32 md:h-40 bg-gray-200 overflow-hidden rounded-md">
          <Image
            src={item.image}
            alt={item.title}
            width={224}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="news-card-heading mb-2">
            {item.title}
            {item.subtitle && (
              <span className="text-lg italic mb-2 ml-1">{item.subtitle}</span>
            )}
          </h2>

          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
