import React from "react";

import News from "@/components/news/News";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

import FullBackground from "@/components/fullBackground";

export default function NewsPage() {
  return (
    <FullBackground>
      <div className="min-h-screen">
        <Header />
        <div className="news-inner-container">
          <main className="relative z-10">
            <div className="mx-auto z-11">
              <h1 className="flex justify-center">
                <Image
                  src="/ajab-news-logo.svg"
                  alt="Logo"
                  width={300}
                  height={100}
                />
              </h1>
              <div className="news-border"></div>
              <News />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </FullBackground>
  );
}
