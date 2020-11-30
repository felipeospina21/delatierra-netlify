import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/postLink"
import SEO from "../components/seo"
import WhatsappBtn from "../components/Layout/WhatsappBtn"

const BlogPageTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <div>
      <SEO title="Blog" />
      <WhatsappBtn />
      <h1>Recetas y tips</h1>
      <div>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            thumbnail
            description
          }
        }
      }
    }
  }
`
