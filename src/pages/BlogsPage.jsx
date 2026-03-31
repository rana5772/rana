import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import axios from "axios";
import GlassBox from "../components/GlassBox";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

/**
 * NEW: Image Component with Skeleton Loading
 */
const BlogImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative h-60 w-full bg-gray-200 overflow-hidden">
      {/* Skeleton Shimmer */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite linear",
          }}
        >
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}</style>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`h-full w-full object-cover object-center transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onError={(e) => {
          e.target.src = "/images/demo.jpg";
          setIsLoaded(true);
        }}
      />
    </div>
  );
};

const BlogsPage = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "all",
    "design",
    "marketing",
    "business",
    "technology",
    "ai automation",
    "general",
  ];

  const categoryColors = {
    design: "bg-pink-100 text-pink-700 border-pink-200",
    marketing: "bg-orange-100 text-orange-700 border-orange-200",
    business: "bg-emerald-100 text-emerald-700 border-emerald-200",
    technology: "bg-blue-100 text-blue-700 border-blue-200",
    "ai automation": "bg-purple-100 text-purple-700 border-purple-200",
    general: "bg-gray-100 text-gray-700 border-gray-200",
    default: "bg-blue-500 text-white",
  };

  const getCategoryStyles = (cat) =>
    categoryColors[cat?.toLowerCase()] || categoryColors.default;

  const getBlogImage = (category, index) => {
    let folder = "General";
    const cat = category?.toLowerCase();
    if (cat === "ai automation" || cat === "ai") {
      folder = "AI";
    } else if (cat) {
      folder = cat.charAt(0).toUpperCase() + cat.slice(1);
    }
    const imageNumber = (index % 5) + 1;
    return `/Blog-Images/${folder}/${imageNumber}.jpg`;
  };

  const currentPage = parseInt(pageNumber) || 1;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://blogs.rana.net.in/api/blogs/get-all?page=${currentPage}&limit=6`;
        if (selectedCategory && selectedCategory !== "all") {
          url += `&category=${encodeURIComponent(selectedCategory)}`;
        }
        const { data } = await axios.get(url);
        setBlogs(data.blogs || []);
        setTotalPages(data.totalPages || 1);
        if (data.totalPages > 0 && currentPage > data.totalPages) {
          navigate(`/blogs/page/1`);
        }
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [currentPage, navigate, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate("/blogs/page/1");
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    navigate(`/blogs/page/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>{"Blogs - Page " + currentPage + " | rana.net.in"}</title>
      </Helmet>

      <Heading heading="Read our Blogs" />
      <GlassBox text="Latest tech News." />

      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover our latest insights, stories, and updates to help you stay
          informed and inspired.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2.5 text-sm uppercase font-medium rounded-full transition-all duration-200 ${
              selectedCategory === cat ||
              (cat === "all" && selectedCategory === "")
                ? "gradient-bg text-white shadow-[0px_4px_0px_0px_rgba(0,0,0,0.3)]"
                : "bg-white text-gray-800 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-[2px]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse"
            >
              {/* Image Skeleton */}
              <div className="h-60 w-full bg-gray-300" />

              {/* Content Skeleton */}
              <div className="p-6">
                <div className="h-4 w-24 bg-gray-300 rounded mb-3" />
                <div className="h-6 w-full bg-gray-300 rounded mb-2" />
                <div className="h-6 w-5/6 bg-gray-300 rounded mb-4" />

                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-gray-300 rounded" />
                  <div className="h-4 w-4/5 bg-gray-300 rounded" />
                  <div className="h-4 w-3/5 bg-gray-300 rounded" />
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="h-4 w-20 bg-gray-300 rounded" />
                  <div className="h-4 w-16 bg-gray-300 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="text-center py-10">
          <p className="text-xl text-rose-500 mb-4">{error} :(</p>
          <button
            onClick={() => navigate("/blogs/page/1")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Back to Page 1
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.length > 0 ? (
              blogs.map((post, index) => (
                <article
                  key={post._id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Updated Image section using the sub-component */}
                  <BlogImage
                    src={getBlogImage(post.category, index)}
                    alt={post.title}
                  />

                  <div className="p-6 flex-1 flex flex-col">
                    <span
                      className={`text-[12px] px-2.5 py-0.5 rounded-full border uppercase font-medium tracking-widest w-fit ${getCategoryStyles(post.category)}`}
                    >
                      {post.category}
                    </span>
                    <h3 className="text-xl hover:text-blue-500 cursor-pointer font-semibold mt-3 mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3 flex-1">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                      <span>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <button className="text-blue-600 p-1">Read More</button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No blogs found.
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-black/20 bg-white disabled:opacity-30 hover:bg-gray-50 transition"
              >
                <GrFormPrevious className="inline" /> Prev
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-sm border-black/20 transition ${
                    currentPage === index + 1
                      ? "gradient-bg text-white"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-black/20 bg-white disabled:opacity-30 hover:bg-gray-50 transition"
              >
                Next <GrFormNext className="inline" />
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BlogsPage;
