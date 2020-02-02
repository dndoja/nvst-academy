import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import {Link} from "gatsby";
import logo from "../../img/logo.svg";
import Navbar from "../../components/Navbar";
import {register} from "../../cookie";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .then(() => register())
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
          <div className={"navigation-container-floating"}>
              <Link to="/" className="" title="Logo" style={{width:'100px'}}>
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </Link>
              <Navbar/>
          </div>
        <section className="section">
          <div className="fullscreen-container">
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
              <p className={"title-primary"} style={{marginBottom:'5vh', textAlign:'center'}}>Get your free courses!</p>
            <div className="content is-centered">
              <form
                name="contact"
                method="post"
                action="/blog"
                className={"form-container"}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'phoneNumber'}>
                    Phone number
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      name={'phoneNumber'}
                      onChange={this.handleChange}
                      id={'phoneNumber'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field" style={{marginTop:'3rem'}}>
                  <button className={"button is-primary"} type="submit">
                      Register
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
