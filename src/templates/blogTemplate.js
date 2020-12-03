import React from "react"
import { graphql } from "gatsby"
import ImageBlog from "../components/imageBlog"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

import "./blogTemplate.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = mdx
  return (
    <>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <div className="blog-post-container">
        <ImageBlog
          src={frontmatter.thumbnail}
          alt={frontmatter.title}
          className="blog-template-image"
        />
        <div className="blog-post">
          <small><strong>{frontmatter.date}</strong></small>
          <h1 className='blog-post-title'>{frontmatter.title}</h1>

          <MDXRenderer className="blog-post-content">{mdx.body}</MDXRenderer>
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        thumbnail
      }
    }
  }
`
