import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import axios from "axios";
import Heading from "../components/Heading";
import GlassBox from "../components/GlassBox";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";

const categories = [
  "all",
  "design",
  "marketing",
  "business",
  "technology",
  "ai automation",
  "general",
];

const BlogsPage = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const currentPage = parseInt(pageNumber) || 1;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const catParam =
          selectedCategory !== "all"
            ? `&category=${encodeURIComponent(selectedCategory)}`
            : "";
        const { data } = await axios.get(
          `https://blogs.rana.net.in/api/blogs/get-all?page=${currentPage}&limit=6${catParam}`,
        );
        setBlogs(data.blogs || []);
        setTotalPages(data.totalPages || 1);
        if (data.totalPages > 0 && currentPage > data.totalPages)
          navigate(`/blogs/page/1`, { replace: true });
      } catch {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [currentPage, selectedCategory, navigate]);

  // Fix: Only navigate if NOT on page 1. This prevents the "scroll-to-top" jump.
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (currentPage !== 1) navigate("/blogs/page/1");
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    navigate(`/blogs/page/${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>{`Blogs - Page ${currentPage} | rana.net.in`}</title>
      </Helmet>
      <Heading heading="Read our Blogs" />
      <GlassBox text="Latest tech News." />

      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover our latest insights, stories, and updates to help you stay
          informed and inspired.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2.5 text-sm uppercase font-medium rounded-full transition-all ${
              selectedCategory === cat
                ? "gradient-bg text-white shadow-lg"
                : "bg-white text-gray-800 shadow-sm hover:translate-y-[1px]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          [...Array(6)].map((_, i) => <BlogSkeleton key={i} />)
        ) : error ? (
          <div className="col-span-full text-center py-10 text-rose-500">
            {error}
          </div>
        ) : (
          blogs.map((post, index) => (
            <BlogCard key={post._id} post={post} index={index} />
          ))
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-30"
          >
            <GrFormPrevious className="inline" /> Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-sm border ${currentPage === i + 1 ? "gradient-bg text-white" : "bg-white"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-30"
          >
            Next <GrFormNext className="inline" />
          </button>
        </div>
      )}
    </>
  );
};

export default BlogsPage;
