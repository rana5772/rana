import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Heading from "../components/Heading";
import { MdDateRange } from "react-icons/md";

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
      <div className="py-24 text-center text-lg">
        Loading blog...
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="py-24 text-center">
        <p className="text-red-500 mb-4">
          {error || "Blog not found"}
        </p>

        <button
          onClick={() => navigate("/blogs/page/1")}
          className="gradient-bg text-white px-6 py-2 rounded-lg"
        >
          Back to Blogs
        </button>
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

        {/* <button onClick={() => navigate(-1)} className="mb-8 text-blue-600 hover:underline">← Back</button> */}

        <div className="mt-8">


          <Heading mt={false} underline={false} heading={blog.title} />

          <div className="flex justify-center items-center gap-5">
            <div className="flex justify-center items-center gap-1">
              <MdDateRange />

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
            <p className="text-gray-800 leading-8 text-lg whitespace-pre-line">
              {blog.content}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetailsPage;