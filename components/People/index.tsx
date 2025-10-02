'use client';

import Loader from '@/components/Loader';
import usePeople from '@/hooks/use-people';
import { BASE_URL } from '@/lib/utils/constant';
import Image from 'next/image';
import { useState } from 'react';
import { PEOPLE_FILTER, PEOPLE_INTRO } from './constants';
import './People.css';
import { PersonProfile } from './type';

const People = () => {
  const [activeFilter, setActiveFilter] = useState(PEOPLE_FILTER[0]);
  const { people = [], isLoading } = usePeople({ activeFilter: activeFilter });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-8">
          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 pb-8">
            {/* Search Header */}
            <div className="text-center songs-about">{PEOPLE_INTRO}</div>

            {/* People Count */}
            <div className="text-left mb-2">
              <h1 className="text-2xl md:text-3xl font-light black-custom-color mb-0 mt-0">
                {people?.length || 0} people
              </h1>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-start gap-4 mb-10 border-t pt-3 pb-4">
              <span className="text-pink font-bold text-white">Filters |</span>
              {PEOPLE_FILTER.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`border-0 button-font cursor-pointer uppercase transition-colors ${
                    activeFilter === filter ? 'text-pink text-white' : 'bg-white border search-btn'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Results */}
            <div className="space-y-8">
              {people.length
                ? people.map((item: PersonProfile, index) => (
                    <div key={item.id} className="bg-white">
                      {/* Result Item */}
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <div className="w-56 h-32 bg-gray-200 thumbnail-image overflow-hidden">
                            {item?.thumbnailURL && (
                              <Image
                                src={`${BASE_URL}${item?.thumbnailURL}`}
                                alt={item?.metaTitle || item?.firstName}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Optional Title/Subtitle block (commented out) */}
                          <h2 className="search-result-page-heading mb-2">
                            <span>
                              {[item.firstName, item.middleName, item.lastName]
                                .filter(Boolean)
                                .join(' ')}
                              {', '}
                            </span>

                            {item?.roles?.length && (
                              <span className="mb-3 italic uppercase">
                                {item.roles
                                  .filter(
                                    (role) => typeof role === 'string' && !role.startsWith('_')
                                  )
                                  .join(' ')}
                              </span>
                            )}
                          </h2>
                          {/* Description */}
                          <p
                            className="search-result-text mb-4 line-clamp-3 text-base"
                            dangerouslySetInnerHTML={{
                              __html: item?.profile || '',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                : 'No Results to show!'}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default People;
