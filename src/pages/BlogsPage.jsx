import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Technology",
    categoryColor: "primary-bg",
    title: "The Future of Web Development in 2026",
    excerpt:
      "Explore the emerging trends and technologies that are shaping the future of web development this year.",
    date: "June 15, 2026",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    category: "Business",
    categoryColor: "bg-green-500",
    title: "5 Strategies for Growing Your Online Business",
    excerpt:
      "Learn proven strategies to scale your online business and reach new customers effectively.",
    date: "June 10, 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    category: "Design",
    categoryColor: "bg-purple-500",
    title: "UX Design Principles for Better Conversions",
    excerpt:
      "How applying fundamental UX principles can significantly improve your website's conversion rates.",
    date: "June 5, 2026",
    image:
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    category: "Marketing",
    categoryColor: "bg-orange-500",
    title: "Mastering Social Media Algorithms",
    excerpt:
      "A deep dive into how modern algorithms prioritize content and how you can stay ahead of the curve.",
    date: "June 20, 2026",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    category: "Productivity",
    categoryColor: "bg-red-500",
    title: "The Science of Deep Work",
    excerpt:
      "Practical tips for eliminating distractions and achieving a state of flow in a noisy digital world.",
    date: "June 18, 2026",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    category: "Lifestyle",
    categoryColor: "bg-teal-500",
    title: "Balancing Remote Work and Wellness",
    excerpt:
      "How to maintain physical and mental health while navigating the challenges of a home-office environment.",
    date: "June 12, 2026",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1470&q=80",
  },
];

const BlogsPage = () => {
  return (
    <>
      <Helmet>
        <title>Blogs | rana.net.in</title>
        <meta
          name="description"
          content="Read insights, tips, and articles from rana.net.in on web development, design, business growth, and more."
        />
        <link rel="canonical" href="https://rana.net.in/blogs" />
      </Helmet>

      <Heading heading="Read our Blogs" />

      {/* <div className="flex justify-center">
        <p className="glass-dark text-center px-4 py-1 mb-5 shadow-2xl">
          Latest tech News
        </p>
      </div>

      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Discover our latest insights, stories, and updates to help you stay
          informed and inspired.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <span
                className={`${post.categoryColor} text-white text-xs font- px-3 py-1 rounded-full uppercase tracking-wider`}
              >
                {post.category}
              </span>

              <h3 className="text-xl font-semibold new-font mt-3 mb-2 leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                <span>{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg shadow-blue-200"
        >
          View All Articles
        </a>
      </div> */}
    </>
  );
};

export default BlogsPage;
