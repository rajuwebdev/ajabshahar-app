'use client';

import Loader from '@/components/Loader';
import useSongs from '@/hooks/use-songs';
import { useState } from 'react';
import { Song } from '../Home/SongCard/types';
import { SONGS_FILTER, SONGS_INTRO } from './constants';
import SongCard from './SongCard';
import './Songs.css';

export default function SearchResults() {
  const [activeFilter, setActiveFilter] = useState(SONGS_FILTER[0]);
  const { publishedSongs = [], isLoading, totalSongs } = useSongs({ activeFilter: activeFilter });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-8">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 pb-8">
            {/* Search Header */}
            <div className="text-center songs-about">{SONGS_INTRO}</div>
            <div className="text-left mb-2">
              <h1 className="text-2xl md:text-3xl font-light black-custom-color mb-0 mt-0">
                {totalSongs} songs
              </h1>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-start gap-4 mb-10 border-t pt-3 pb-4">
              <span className="text-pink  font-bold text-white">Filters |</span>
              {SONGS_FILTER.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={` border-0 button-font cursor-pointer uppercase transition-colors ${
                    activeFilter === filter ? 'text-pink text-white' : 'bg-white  border search-btn'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="space-y-8">
              {publishedSongs?.length > 0
                ? publishedSongs.map((song: Song) => {
                    const hasMedia = song.youtubeVideoId || song.thumbnailURL;
                    return (
                      <div
                        key={song.id}
                        className={`bg-white break-inside-avoid mb-6 product-card py-0.5 ${
                          !hasMedia ? 'no-media-padding' : ''
                        }`}
                      >
                        <SongCard {...song} />
                      </div>
                    );
                  })
                : 'No results Found!'}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
