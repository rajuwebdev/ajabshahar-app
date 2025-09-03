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
        <div className="relative h-60 w-full vide-custom-width">
          {item.video ? (
            item.video.includes("youtube.com") ? (
              <iframe
                src={item.video.replace("watch?v=", "embed/")}
                title={item.title}
                className="h-full w-full rounded-t-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={item.video}
                controls
                className="h-full w-full object-cover rounded-t-lg"
                poster={item.image}
              >
                Your browser does not support the video tag.
              </video>
            )
          ) : item.image ? (
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover rounded-t-lg"
            />
          ) : null}
        </div>
      )}

      <div className="p-5 card-shape-top pt-1 pb-0">
        <div className="mb-2">
          <h3 className="card-heading font-semibold mb-1">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="text-sm  italic mb-2 semi-heading">
              {item.subtitle}
            </p>
          )}
          {item.author && (
            <p className="text-xs semi-heading-2 font-medium text-gray-500 uppercase tracking-wide mb-3 semi-heading-2">
              {item.author}
            </p>
          )}
        </div>

        <p className="card-text leading-relaxed mb-4 border-top-pink">
          {item.description}
        </p>

        <div className="flex items-center justify-end">
          <Link
            href={`/${item.category}/${item.id}`}
            className="text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors z-20"
          >
            {item.category === "poems" ? "EXPLORE POEM" : "EXPLORE NOW"}
          </Link>
        </div>
      </div>
    </div>
  );
}
