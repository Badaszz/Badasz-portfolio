import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { portfolioData } from "../data/portfolio"
import { SectionWrapper, SectionHeading } from "./About"

// Fetch posts from Hashnode's public GraphQL API
async function fetchHashnodePosts(username) {
  const query = `
    query {
      publication(host: "${username}.hashnode.dev") {
        posts(first: 6) {
          edges {
            node {
              title
              brief
              slug
              publishedAt
              coverImage { url }
              readTimeInMinutes
              tags { name }
            }
          }
        }
      }
    }
  `
  const res = await fetch("https://gql.hashnode.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })
  const data = await res.json()
  return data?.data?.publication?.posts?.edges?.map((e) => e.node) ?? []
}

function BlogCard({ post, index }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <motion.a
      href={`${portfolioData.blog.hashnodeUrl}/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-gray-900/40 border border-gray-800 hover:border-green-500/40 rounded-lg overflow-hidden flex flex-col transition-colors duration-300"
    >
      {/* Cover image */}
      {post.coverImage?.url ? (
        <div className="h-40 overflow-hidden">
          <img
            src={post.coverImage.url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-40 bg-gray-800 flex items-center justify-center">
          <span className="text-green-400 font-mono text-3xl opacity-30">{"</>"}</span>
        </div>
      )}

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.name}
                className="text-xs font-mono text-green-400 bg-green-400/5 border border-green-400/20 px-2 py-0.5 rounded"
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-white font-semibold leading-snug group-hover:text-green-400 transition-colors">
          {post.title}
        </h3>

        {/* Brief */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {post.brief}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-xs font-mono text-gray-600">
          <span>{date}</span>
          <span>{post.readTimeInMinutes} min read</span>
        </div>
      </div>
    </motion.a>
  )
}

function BlogSkeleton() {
  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-lg overflow-hidden animate-pulse">
      <div className="h-40 bg-gray-800" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 bg-gray-800 rounded w-1/3" />
        <div className="h-4 bg-gray-800 rounded w-3/4" />
        <div className="h-3 bg-gray-800 rounded w-full" />
        <div className="h-3 bg-gray-800 rounded w-2/3" />
      </div>
    </div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchHashnodePosts(portfolioData.blog.hashnodeUsername)
      .then(setPosts)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SectionWrapper id="blog">
      <SectionHeading label="// thoughts & writeups" title="Blog" />

      {/* Loading skeletons */}
      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => <BlogSkeleton key={i} />)}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="text-center py-16">
          <p className="text-gray-600 font-mono text-sm mb-4">
            Could not load posts. Read them directly on Hashnode.
          </p>
          <a
            href={portfolioData.blog.hashnodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 font-mono text-sm hover:underline"
          >
            {portfolioData.blog.hashnodeUrl} →
          </a>
        </div>
      )}

      {/* Posts grid */}
      {!loading && !error && posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 font-mono text-sm">No posts yet. Coming soon.</p>
        </div>
      )}

      {!loading && posts.length > 0 && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={portfolioData.blog.hashnodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 border border-green-400 text-green-400 font-mono text-sm rounded hover:bg-green-400/10 transition-colors"
            >
              View All Posts →
            </a>
          </div>
        </>
      )}
    </SectionWrapper>
  )
}