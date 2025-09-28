'use client';

import { contentData, searchCategories } from '@/lib/data';
import { getPublishedSongs } from '@/lib/services/songsService';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import searchIcon from '../public/search-icon.svg';
import '../styles/CustomStyle.css';
import ContentSliderModal from './ContentSliderModal';
import SongCard from './SongCard/SongCard';
import { Song } from './SongCard/types';

interface IHeroProps {
  isSearchOpen: boolean;
}

const Hero = ({ isSearchOpen }: IHeroProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAjabNews, setShowAjabNews] = useState(false);

  const filteredResults = contentData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getResultsByCategory = (category: string) => {
    if (category === 'all') return filteredResults;
    return filteredResults.filter((item) => item.category === category);
  };

  useEffect(() => {
    setShowAjabNews(true);
  }, []);

  //get published songs
  const {
    data: publishedSongs,
    error,
    isLoading,
  } = useSWR('published-songs', getPublishedSongs, { revalidateOnFocus: false });

  const shuffledSongs = publishedSongs?.songs?.sort(() => 0.5 - Math.random());
  const visibleSongs = shuffledSongs?.slice(0, 5);

  return (
    <section className="relative min-h-screen full-background-home-page">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-26 hero-container">
        {/* Floating Search (absolute, overlaps cards) */}
        {isSearchOpen && (
          <div className="absolute top-35 left-1/2 -translate-x-1/2 w-[750px] max-w-full z-50">
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
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className={`w-full pl-16 pr-6 py-4 serch-input-font bg-white shadow-lg border border-gray-200 focus:outline-none 
                  ${isSearchFocused && searchQuery ? 'rounded-custom-onsearch' : 'rounded-custom'}`}
                autoFocus
              />
            </div>

            {/* Search Results Dropdown */}
            {isSearchFocused && searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white serch-result-conatiner max-h-150 overflow-y-auto shadow-lg z-50">
                {searchCategories.map((category) => {
                  const results = getResultsByCategory(category.key);
                  if (results.length === 0) return null;

                  return (
                    <div key={category.key} className="border-gray-custom p-3">
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
        )}

        {/* Content cards (stay in place, not affected by search) */}
        {!isLoading && (
          <div className="columns-1 md:columns-2 lg:columns-1 gap-6 pb-20 pt-8">
            {visibleSongs.map((song: Song) => {
              const hasMedia = song.youtubeVideoId || song.thumbnailURL;
              return (
                <div
                  key={song.id}
                  className={`break-inside-avoid mb-6 product-card py-0.5 ${
                    !hasMedia ? 'no-media-padding' : ''
                  }`}
                >
                  <SongCard {...song} />
                </div>
              );
            })}
          </div>
        )}

        {/* Ajab News Modal */}
        <ContentSliderModal
          items={contentData}
          isOpen={showAjabNews}
          onClose={() => setShowAjabNews(false)}
        />
      </div>
    </section>
  );
};

export default Hero;
