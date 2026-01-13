import { useParams, Link } from 'react-router-dom';
import blogPosts from '../../data/blogpost.json';

const BlogPost = () => {
  const { id } = useParams();

  // blogPosts is a flat array
  const post = Array.isArray(blogPosts)
    ? blogPosts.find((post) => post.id === id)
    : null;

  // Debugging logs
  console.log('Blog Post ID:', id);
  console.log('Blog Posts:', blogPosts);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <h2 className="text-2xl font-bold text-gray-900">Blog Post Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Hero Section with Blog Image */}
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <h1 className="px-4 text-4xl font-extrabold text-center text-white sm:px-8 lg:px-16">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl px-4 py-12 mx-auto sm:px-8 lg:px-16">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/ZetScore_Icon.png"
              alt="ZetScore Logo"
              className="w-auto h-16"
            />
          </div>

          {/* Author, Date, and Reading Time */}
          <div className="mb-6 text-center">
            <p className="text-sm text-gray-600">By {post.author}</p>
            <div className="w-24 mx-auto my-4 border-t border-gray-300"></div>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>{post.readingTime}</span>
              <span>|</span>
              <span>{post.date}</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="space-y-10">
            {/* Overview */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Overview
              </h2>
              <p className="leading-relaxed text-gray-700">{post.overview}</p>
            </div>

            {/* Key Benefits */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Key Benefits
              </h2>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {post.keyBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {/* Challenges We Solve */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Challenges We Solve
              </h2>
              <p className="leading-relaxed text-gray-700">{post.challengesSolved}</p>
            </div>
          </div>

          {/* Back to Articles Link */}
          <div className="mt-8">
            <Link
              to="/articles"
              className="inline-flex items-center font-semibold text-primary hover:text-secondary focus:outline-none"
            >
              Back to Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;