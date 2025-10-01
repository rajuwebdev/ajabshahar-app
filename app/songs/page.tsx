'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Songs from '@/components/Songs';
import FullBackground from '@/components/fullBackground';

export default function NewsPage() {
  return (
    <>
      <FullBackground>
        <div className="min-h-screen">
          <Header />
          <div className="news-inner-container">
            <main className="relative z-10">
              <div className="mx-auto z-11">
                <Songs />
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </FullBackground>
    </>
  );
}
