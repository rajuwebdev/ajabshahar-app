import Image from "next/image";
import Link from "next/link";
import type { ContentItem } from "@/lib/data";
import "../styles/CustomStyle.css";

interface ContentCardProps {
  item: ContentItem;
  className?: string;
}

export default function ContentCard({
  item,
  className = "",
}: ContentCardProps) {
  const hasMedia = item.video || item.image;

  return (
    <div
      className={`bg-white rounded-lg shadow-lg  hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {hasMedia && (
        <div className="relative h-48 w-full vide-custom-width">
          {item.video ? (
            <video
              src={item.video}
              controls
              className="h-full object-cover vide-custom-width"
              poster={item.image}
            >
              Your browser does not support the video tag.
            </video>
          ) : item.image ? (
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
      )}

      <div className="p-5 card-shape-top pt-1 pb-0">
        <div className="mb-2">
          <h3 className="text-xl font-semibold text-pink-600 mb-1">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-sm text-gray-600 italic mb-2">{item.subtitle}</p>
          )}
          {item.author && (
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
              {item.author}
            </p>
          )}
        </div>

        <p className="text-sm text-gray-700 leading-relaxed mb-4 border-top-pink">
          {item.description}
        </p>

        <div className="flex items-center justify-end">
          <Link
            href={`/${item.category}/${item.id}`}
            className="text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
          >
            {item.category === "poems" ? "EXPLORE POEM" : "EXPLORE NOW"}
          </Link>
        </div>
      </div>
    </div>
  );
}
