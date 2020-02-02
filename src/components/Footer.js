import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
          <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
              <Link to="/" className="navbar-item">
                  Home
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                  Form Examples
              </Link>

              <Link className="navbar-item" to="/blog">
                  Latest Stories
              </Link>
              <Link className="navbar-item" to="/contact">
                  Contact
              </Link>
          </div>

        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em', marginBottom:'3rem' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
