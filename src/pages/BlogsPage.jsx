import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import axios from "axios";
import Heading from "../components/Heading";
import GlassBox from "../components/GlassBox";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  "all",
  "design",
  "marketing",
  "business",
  "technology",
  "ai automation",
  "general",
];

const sortOptions = [
  { value: "latest", label: "Sort by : Latest" },
  { value: "oldest", label: "Sort by : Oldest" },
];

const BlogsPage = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const currentPage = parseInt(pageNumber) || 1;

  const selectedCategory =
    searchParams.get("category") || "all";

  const selectedSort = searchParams.get("sort") || "latest";

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);

      try {
        const catParam =
          selectedCategory !== "all"
            ? `&category=${encodeURIComponent(selectedCategory)}`
            : "";

        const sortParam = `&sort=${encodeURIComponent(selectedSort)}`;

        const { data } = await axios.get(
          `https://blogs.rana.net.in/api/blogs/get-all?page=${currentPage}&limit=6${catParam}${sortParam}`
        );

        setBlogs(data.blogs || []);
        setTotalPages(data.totalPages || 1);

        if (
          data.totalPages > 0 &&
          currentPage > data.totalPages
        ) {
          const query = buildQuery({
            category: selectedCategory,
            sort: selectedSort,
          });

          navigate(`/blogs/page/1${query}`, {
            replace: true,
          });
        }
      } catch {
        setError("Failed to load blogs :(");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, selectedCategory, selectedSort, navigate]);

  // Builds a query string from category/sort, omitting defaults ("all" / "latest")
  const buildQuery = ({ category, sort }) => {
    const params = new URLSearchParams();

    if (category && category !== "all") {
      params.set("category", category);
    }
    if (sort && sort !== "latest") {
      params.set("sort", sort);
    }

    const qs = params.toString();
    return qs ? `?${qs}` : "";
  };

  const handleCategoryChange = (cat) => {
    const query = buildQuery({ category: cat, sort: selectedSort });
    navigate(`/blogs/page/1${query}`);
  };

  const handleSortChange = (sort) => {
    const query = buildQuery({ category: selectedCategory, sort });
    navigate(`/blogs/page/1${query}`);
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;

    const query = buildQuery({
      category: selectedCategory,
      sort: selectedSort,
    });

    navigate(`/blogs/page/${page}${query}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Helmet key={`${currentPage}-${selectedCategory}-${selectedSort}`}>
        <title>
          {selectedCategory === "all"
            ? `Blogs - Page ${currentPage} | rana.net.in`
            : `Blogs - ${selectedCategory} - Page ${currentPage} | rana.net.in`}
        </title>
      </Helmet>

      <Heading heading="Read our Blogs" />
      <GlassBox text="Latest tech News." />

      <div className="text-center">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover our latest insights, stories, and updates to
          help you stay informed to the latest technological evolving world around us.
        </p>
      </div>

      {/* date sort */}

      <div className="flex justify-center items-center mt-10 mb-5">
        <div className="relative inline-block">
          <select
            value={selectedSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border cursor-pointer px-4 py-2 pr-10 appearance-none rounded-md focus:outline-none focus:ring-0"
            aria-label="Sort blogs"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <FaChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-2.5 text-sm uppercase font-medium rounded-full transition-all ${selectedCategory === cat
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
          [...Array(6)].map((_, i) => (
            <BlogSkeleton key={i} />
          ))
        ) : error ? (
          <div className="col-span-full uppercase text-[18px] text-center py-10 text-rose-500">
            {error}
          </div>
        ) : blogs.length === 0 ? (
          <div className="col-span-full uppercase text-[18px] text-center py-10 text-gray-500">
            No blogs found
          </div>
        ) : (
          blogs.map((post, index) => (
            <BlogCard
              key={post._id}
              post={post}
              index={index}
            />
          ))
        )}
      </div>

      {!loading && totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
          <button
            disabled={currentPage === 1}
            onClick={() =>
              handlePageChange(currentPage - 1)
            }
            className="px-4 py-2 border rounded-lg disabled:opacity-30"
          >
            <GrFormPrevious className="inline" /> Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-sm border ${currentPage === i + 1
                ? "gradient-bg text-white"
                : "bg-white"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              handlePageChange(currentPage + 1)
            }
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