import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogPosts from '../../data/blogpost.json';

const Articles = () => {
  // blogPosts is a flat array
  const posts = Array.isArray(blogPosts) ? blogPosts : [];

  // Debugging logs
  console.log('Blog Posts:', blogPosts);

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Hero Section with Gradient Background */}
        <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto bg-custom-green">
          <div className="col-span-10 col-start-2 px-4 py-20 mb-8 text-white sm:px-8 lg:px-16">
            <div className="grid items-center grid-cols-2">
              <div>
                <h1 className="mb-2 text-5xl font-extrabold text-white">
                  Blog
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid items-center grid-cols-12 px-2 py-2 mx-auto">
          <div className="col-span-10 col-start-2 px-4 sm:px-8 lg:px-15">
            {posts.length === 0 ? (
              <div className="text-center text-gray-600">
                <p>No articles available.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md hover:scale-105 custom-shadow-blue hover:custom-shadow-blue-xl"
                  >
                    {/* Blog Post Image */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-52"
                    />

                    <div className="p-6">
                      {/* Category */}
                      <p className="mb-2 text-xs font-semibold text-gray-500 uppercase">
                        {post.category}
                      </p>
                      {/* Title */}
                      <h2 className="mb-3 text-xl font-bold text-gray-900">
                        {post.title}
                      </h2>
                      {/* Description */}
                      <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                        {post.description}
                      </p>
                      {/* Author and Date */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span>{post.date}</span>
                      </div>
                      {/* Read More Link */}
                      <Link
                        to={`/articles/${post.id}`}
                        className="inline-flex items-center font-semibold transition-colors text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Custom Styles for More Visible Blue Drop Shadows */}
            <style>{`
              .custom-shadow-blue {
                box-shadow: 0 6px 12px -3px rgba(59, 130, 246, 0.25), 0 3px 6px -3px rgba(59, 130, 246, 0.2);
              }
              .hover\\:custom-shadow-blue-xl:hover {
                box-shadow: 0 20px 30px -8px rgba(59, 130, 246, 0.4), 0 8px 12px -6px rgba(59, 130, 246, 0.3);
              }
            `}</style>
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;