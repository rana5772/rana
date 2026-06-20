import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Heading from "../components/Heading";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Loader from "../sections/Home/Loader";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const categoryColors = {
  design: "bg-pink-100 text-pink-700 border-pink-200",
  marketing: "bg-orange-100 text-orange-700 border-orange-200",
  business: "bg-emerald-100 text-emerald-700 border-emerald-200",
  technology: "bg-blue-100 text-blue-700 border-blue-200",
  "ai automation": "bg-purple-100 text-purple-700 border-purple-200",
  general: "bg-gray-100 text-gray-700 border-gray-200",
  default: "bg-blue-500 text-white",
};

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await axios.get(
          `https://blogs.rana.net.in/api/blogs/title/${slug}`
        );

        setBlog(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div>
        <Loader opacity={30} />
      </div>
    );
  }

  // error
  if (error || !blog) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <p className="text-3xl font-medium text-primary mb-2">
            404
          </p>

          <Heading mt={false} underline={false} heading="Blog Not Found" />


          <p className="text-gray-800 mb-8">
            The blog post you're looking for doesn't exist, may have been
            removed, or the URL is incorrect.
          </p>

          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate("/blogs/page/1")}
              className="w-auto px-8 py-3 rounded-full flex justify-center items-center gap-3 hover:scale-105 gradient-bg text-white transition-all shadow-lg"
            >
              <FaArrowLeft />
              Back to Blogs
            </button>
          </div>

        </div>
      </div>
    );
  }

  const cat = blog.category?.toLowerCase();

  const folder =
    cat === "ai automation" || cat === "ai"
      ? "AI"
      : cat
        ? cat.charAt(0).toUpperCase() + cat.slice(1)
        : "General";


  const imageNumber =
    (parseInt(blog._id.slice(-6), 16) % 50) + 1;

  const imageSrc = `/Blog-Images/${folder}/${imageNumber}.jpg`;

  return (
    <>
      <Helmet>
        <title>{blog.title} | rana.net.in</title>

        <meta
          name="description"
          content={blog.content}
        />

        <link
          rel="canonical"
          href={`https://rana.net.in/blog/${blog.slug}`}
        />
      </Helmet>

      <article className="max-w-4xl mx-auto py-10">

        <div className="mt-8">

          <Heading mt={false} underline={false} heading={blog.title} />

          <div className="flex justify-center items-center gap-5">

            <div className="flex justify">
              <button
                onClick={() => navigate(-1)}
                aria-label="Go back"
                className="text-blue-600 hover:underline">
                <FaArrowCircleLeft className="text-3xl text-black" />
              </button>
            </div>

            <div className="flex border-b justify-center items-center gap-1">
              {/* <MdDateRange /> */}

              <div>
                {new Date(blog.createdAt).toLocaleDateString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  },
                )}
              </div>
            </div>

            <div
              className={`text-[12px] px-3 py-1 rounded-full border uppercase font-medium ${categoryColors[cat] || categoryColors.default
                }`}
            >
              {blog.category}
            </div>
          </div>

          <div className="overflow-hidden my-5 rounded-md shadow-lg">
            <img
              src={imageSrc}
              alt={blog.title}
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                e.target.src = "/images/demo.jpg";
              }}
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.content}
            </ReactMarkdown>
          </div>

        </div>
      </article>

      <div className="flex justify-center items-center">
        <button
          onClick={() => navigate(-1)}
          className="w-auto px-8 py-3 rounded-full flex justify-center items-center gap-3 hover:scale-105 gradient-bg text-white transition-all shadow-lg"
        >
          <FaArrowLeft />
          Back to Blogs
        </button>
      </div>

    </>
  );
};

export default BlogDetailsPage;