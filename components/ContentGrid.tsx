import { contentData } from "@/lib/data"
import ContentCard from "./ContentCard"

export default function ContentGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentData.map((item, index) => (
            <ContentCard
              key={item.id}
              item={item}
              className={`
                ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
                ${index === 2 ? "lg:col-span-2" : ""}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
