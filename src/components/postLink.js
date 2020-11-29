import React from "react"
import { Link } from "gatsby"
import Image from './image'


import "./postLink.scss"

const PostLink = ({ post }) => (
  <div>
    <Image src={post.frontmatter.image}/>
    <Link to={"/" + post.frontmatter.slug}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink
