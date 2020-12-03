import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/postLink"
import SEO from "../components/seo"
import WhatsappBtn from "../components/Layout/WhatsappBtn"

import "../components/postLink.scss"

const BlogPageTemplate = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <div>
      <SEO title="Blog" />
      <WhatsappBtn />
      <h1 className="blog-page-title">Recetas y tips</h1>
      <div className="post-link-wrapper">
        {edges.map(edge => (
          <PostLink key={edge.node.id} post={edge.node} />
        ))}
      </div>
    </div>
  )
}

export default BlogPageTemplate

export const BlogPageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
