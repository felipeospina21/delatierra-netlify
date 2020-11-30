import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "./postLink.scss"

const PostLink = ({ post }) => {
  // let post = data.markdownRemark
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <div className="post-link-container">
      <Link to={"/" + post.frontmatter.slug}>
        <div className="post-preview-container">
          <img
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

// export const query = graphql`
//   query PostQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 800) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
