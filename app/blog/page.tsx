import React from 'react'

const BlogPage = () => {
  return (
    <main>
      {/* heading */}
      <h1>Blog Page</h1>
      {/* Tags */}
      <div>
        <span>Tag1</span>
        <span>Tag2</span>
        <span>Tag3</span>
      </div>
      {/* Posts */}
      <div>
        <article>
          <h2>Post Title</h2>
          <p>Post content</p>
        </article>
        <article>
          <h2>Post Title</h2>
          <p>Post content</p>
        </article>
        <article>
          <h2>Post Title</h2>
          <p>Post content</p>
        </article>
      </div>
    </main>
  )
}

export default BlogPage