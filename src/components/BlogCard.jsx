import React, { useState } from "react";

const categoryColors = {
  design: "bg-pink-100 text-pink-700 border-pink-200",
  marketing: "bg-orange-100 text-orange-700 border-orange-200",
  business: "bg-emerald-100 text-emerald-700 border-emerald-200",
  technology: "bg-blue-100 text-blue-700 border-blue-200",
  "ai automation": "bg-purple-100 text-purple-700 border-purple-200",
  general: "bg-gray-100 text-gray-700 border-gray-200",
  default: "bg-blue-500 text-white",
};

const BlogCard = ({ post, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Image Path Logic
  const cat = post.category?.toLowerCase();
  const folder =
    cat === "ai automation" || cat === "ai"
      ? "AI"
      : cat
        ? cat.charAt(0).toUpperCase() + cat.slice(1)
        : "General";
  const imgSrc = `/Blog-Images/${folder}/${(index % 5) + 1}.jpg`;

  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative h-60 w-full bg-gray-200 overflow-hidden">
        {!isLoaded && (
          <div
            className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 1.5s infinite linear",
            }}
          >
            <style>{`@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }`}</style>
          </div>
        )}
        <img
          src={imgSrc}
          alt={post.title}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            e.target.src = "/images/demo.jpg";
            setIsLoaded(true);
          }}
          className={`h-full w-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span
          className={`text-[12px] px-2.5 py-0.5 rounded-full border uppercase font-medium w-fit ${categoryColors[cat] || categoryColors.default}`}
        >
          {post.category}
        </span>
        <h3 className="text-xl hover:text-blue-500 cursor-pointer font-semibold mt-3 mb-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-5 line-clamp-3 flex-1">{post.content}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
          <span>
            {new Date(post.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
          <button className="text-blue-600 p-1">Read More</button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
