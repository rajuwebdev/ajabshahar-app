"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import ajabNewsLogo from "../public/ajab-news-logo.svg";
import PrevIcon from "../public/left-arrow.svg";
import NextIcon from "../public/right-arrow.svg";

import type { ContentItem } from "@/lib/data";
import ContentCard from "./ContentCard";
import "../styles/ModalStyle.css";

interface ContentSliderModalProps {
  items: ContentItem[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function ContentSliderModal({
  items,
  isOpen,
  onClose,
  initialIndex = 0,
}: ContentSliderModalProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
      <div className="relative bg-white rounded-2xl max-w-[660px] w-full overflow-hidden flex flex-col items-center">
        {/* Header */}
        <div className="flex items-center justify-between w-full px-4 py-3 ">
          <div>
            <Image
              src={ajabNewsLogo}
              alt="Ajab News"
              width={150}
              height={150}
            />
          </div>
          <button
            onClick={onClose}
            className="text-pink-600 hover:text-pink-700 text-xl font-bold cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Swiper wrapper */}
        <div className="relative w-full flex justify-center">
          {/* Prev Button */}
          <button
            ref={prevRef}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-20"
          >
            <Image src={PrevIcon} alt="Prev" width={16} height={16} />
          </button>

          {/* Next Button */}
          <button
            ref={nextRef}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-20"
          >
            <Image src={NextIcon} alt="Next" width={16} height={16} />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setTimeout(() => {
                if (swiperRef.current?.navigation) {
                  swiperRef.current.navigation.init();
                  swiperRef.current.navigation.update();
                }
              });
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            initialSlide={initialIndex}
            className="w-full flex justify-center"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center">
                <div className="max-w-[440px] w-full mx-auto modal-container">
                  <ContentCard
                    item={item}
                    className="rounded-none shadow-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
