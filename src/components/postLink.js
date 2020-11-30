import React from "react"
import { Link } from "gatsby"
import ImageBlog from "./imageBlog"

import "./postLink.scss"

const PostLink = ({ post }) => {
  return (
    <div className="post-link-container">
      <Link to={"/" + post.frontmatter.slug}>
        <div className="post-preview-container">
          <ImageBlog
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title}
            className="post-preview-img"
          />
          <small>
            <strong>{post.frontmatter.date}</strong>
          </small>
          <h3 className="post-preview-title">{post.frontmatter.title}</h3>
          <p>{post.frontmatter.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default PostLink
