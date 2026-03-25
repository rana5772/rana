import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import axios from "axios";
import GlassBox from "../components/GlassBox";
import { ThreeDots } from "react-loader-spinner";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

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

  // 1. Define the color mapping
  const categoryColors = {
    design: "bg-pink-100 text-pink-700 border-pink-200",
    marketing: "bg-orange-100 text-orange-700 border-orange-200",
    business: "bg-emerald-100 text-emerald-700 border-emerald-200",
    technology: "bg-blue-100 text-blue-700 border-blue-200",
    "ai automation": "bg-purple-100 text-purple-700 border-purple-200",
    general: "bg-gray-100 text-gray-700 border-gray-200",
    default: "bg-blue-500 text-white", // Fallback
  };

  // 2. Helper function to get classes
  const getCategoryStyles = (cat) => {
    return categoryColors[cat?.toLowerCase()] || categoryColors.default;
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
        <meta
          name="description"
          content={"Read our latest tech insights on page " + currentPage}
        />
        <link
          rel="canonical"
          href={"https://rana.net.in/blogs/page/" + currentPage}
        />
      </Helmet>

      <Heading heading="Read our Blogs" />
      <GlassBox text="Latest tech News." />

      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover our latest insights, stories, and updates to help you stay
          informed and inspired.
        </p>
      </div>

      {/* Category Filter Row */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`
        px-6 py-2.5 text-sm uppercase font-medium rounded-full
        transition-all duration-200
        ${
          selectedCategory === cat || (cat === "all" && selectedCategory === "")
            ? "gradient-bg text-white shadow-[0px_4px_0px_0px_rgba(0,0,0,0.3)]"
            : "bg-white text-gray-800 shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-[2px]"
        }
      `}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center h-60">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#3b82f6"
            visible={true}
          />
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
              blogs.map((post) => (
                <article
                  key={post._id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div
                    id="picture"
                    className="bg-gray-300 h-60 w-full overflow-hidden"
                  >
                    <img
                      src={post.image}
                      alt={post.title || "Post image"}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    {/* 3. Updated dynamic category label */}
                    <span
                      className={`text-[12px] px-2.5 py-0.5 rounded-full border uppercase font-medium tracking-widest w-fit ${getCategoryStyles(
                        post.category,
                      )}`}
                    >
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold new-font mt-3 mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed line-clamp-3 flex-1">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                      <span>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500">
                No blogs found in this category.
              </div>
            )}
          </div>

          {/* Pagination UI */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-black/20 bg-white disabled:opacity-30 hover:bg-gray-50 transition"
              >
                <GrFormPrevious className="inline" /> Prev
              </button>

              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 m-0 rounded-sm border-black/20 transition ${
                      currentPage === pageNum
                        ? "gradient-bg text-white"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 ml-2 rounded-lg border border-black/20 bg-white disabled:opacity-30 hover:bg-gray-50 transition"
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
