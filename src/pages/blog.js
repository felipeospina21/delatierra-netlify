import React from "react";
import { graphql } from "gatsby";
import Image from '../components/image';
import PostLink from '../components/PostLink';


import SEO from "../components/seo";
import WhatsappBtn from "../components/Layout/WhatsappBtn";

const BlogPageTemplate = ({ data: { allMarkdownRemark: { edges } } }) => {
	// const { markdownRemark } = data;
	// const { frontmatter, html } = markdownRemark;
	return (
		<>
			<SEO title='Blog' />
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<h1>Blog Posts</h1>
			{edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
		</>
	);
};

export default BlogPageTemplate;

export const BlogPageQuery = graphql`
	query {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
		
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
					}
		
				}
			}
		}
	}
`;