import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import {isRegistered} from "../cookie";
import {Redirect} from "@reach/router";
import logo from "../img/logo.svg";
import Navbar from "../components/Navbar";
import BlogRoll from "../components/BlogRoll";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

      console.log(this.props)
    return (
        !isRegistered() ? <Redirect to={'/contact'} noThrow/> :
            <Layout>
              <div>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                      backgroundImage: `url('/img/${tag}.jpg')`,
                    }}
                >
                  <div className={"navigation-container-floating"}>
                    <Link to="/" className="" title="Logo" style={{width:'100px'}}>
                      <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                    </Link>
                    <Navbar/>
                  </div>
                  <div/>
                </div>
              </div>
              <section className="section">
                <div className="container">
                  <div className="content">
                    <BlogRoll data={this.props}/>
                  </div>
                </div>
              </section>
            </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
`
