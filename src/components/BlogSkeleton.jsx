import React from "react";

const BlogSkeleton = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md animate-pulse">
    <div className="h-60 w-full bg-gray-300" />
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
);

export default BlogSkeleton;
