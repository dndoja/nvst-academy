import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import Navbar from "../../components/Navbar";
import {Link} from "gatsby";
import logo from "../../img/logo.svg";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
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
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
