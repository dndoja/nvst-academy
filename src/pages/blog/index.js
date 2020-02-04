import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Navbar from "../../components/Navbar";
import {graphql, Link, StaticQuery} from "gatsby";
import logo from "../../img/logo.svg";
import {isRegistered} from "../../cookie";
import { Redirect } from '@reach/router'
import PropTypes from "prop-types";
class BlogIndexPage extends React.Component {
  render() {
      const data = this.props;
      console.log(data);
      return (
     !isRegistered() ? <Redirect to={'/contact'} noThrow/> :
      <Layout>
          <div>
            <div
              className="full-width-image-container margin-top-0"
              style={{
                backgroundImage: `url('/img/blog-index.jpg')`,
              }}
            >
                <div className={"navigation-container-floating"}>
                    <Link to="/" className="" title="Logo" style={{width:'100px'}}>
                        <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                    </Link>
                    <Navbar/>
                </div>
                <h1 className="title">Latest ghaa
              </h1>
                <div/>
            </div>
          </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll data={data}/>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

BlogIndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: {eq: "blog-post"} } } 
        ) {
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
    `}
        render={(data) => <BlogIndexPage data={data}/>}
    />

    )