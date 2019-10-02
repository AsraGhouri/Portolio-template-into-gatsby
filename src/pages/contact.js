import React from 'react'
import  Link  from "gatsby-link"
class Contact extends React.Component {
  componentDidMount(){
    window.addEventListener('load', PageLoad(), FirstLoad(), ContactForm());
  }
  render() {
    return (
      <div>
        <main style={{    width: '100%'}}>
          {/* Preloader */}
          {/* <div className="preloader-wrap">
            <div className="outer">
              <div className="inner">
                <div className="percentage" id="precent" />
                <div className="trackbar">
                  <div className="loadbar" />
                </div>
                <div className="headphones" />
                <div className="headphones-text">Turn up the volume for the<br />best experience</div>
              </div>
            </div>
          </div> */}
          {/*/Preloader */}
          <div className="cd-index cd-main-content">
            {/* Page Content */}
            <div id="page-content">
              {/* Header */}
              <header className="classic-menu">
                <div id="header-container">
                  {/* Logo */}
                  <div id="logo" className="hide-ball">
                    <a className="ajax-link" data-type="page-transition" href="index-2.html">
                      <img className="black-logo" src="images/logo.png" alt="ClaPat Logo" />
                      <img className="white-logo" src="images/logo-white.png" alt="ClaPat Logo" />
                    </a>
                  </div>
                  {/*/Logo */}
                  {/* Navigation */}
                  <nav>
                    <div className="nav-height">
                      <div className="outer">
                        <div className="inner">
                          {/* <ul data-breakpoint={1025} className="flexnav">
                          <li className="link menu-timeline"><Link  to="/home" className="ajax-link" data-type="page-transition"><span data-hover="Works">Works</span></Link></li>
                          <li className="link menu-timeline"><Link to="/about" className="ajax-link" data-type="page-transition" ><span data-hover="About">About</span></Link></li>
                          <li className="link menu-timeline"><Link to="/contact" className="ajax-link" data-type="page-transition" ><span data-hover="Contact">Contact</span></Link></li>
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </nav>
                  {/*/Navigation */}
                  {/* Menu Burger */}
                  <div id="burger-wrapper" className="parallax-wrap">
                    <div id="menu-burger" className="parallax-element">
                      <span />
                      <span />
                    </div>
                  </div>
                  {/*/Menu Burger */}
                </div>
              </header>
              {/*/Header */}
              {/* Content Scroll */}
              <div id="content-scroll">
                {/* Main */}
                <div id="main">
                  {/* Hero Section */}
                  <div id="hero" className>
                    <div id="hero-styles" className="parallax-onscroll">
                      <div id="hero-caption">
                        <div className="inner text-align-center">
                          <div className="hero-subtitle">Get in touch</div>
                          <div className="hero-title">
                            <span>C</span>
                            <span>O</span>
                            <span>N</span>
                            <span>T</span>
                            <span>A</span>
                            <span>C</span>
                            <span>T</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Hero Section */}
                  {/* Main Content */}
                  <div id="main-content">
                    {/* Main Page Content */}
                    <div id="main-page-content">
                      {/* Row */}
                      <div className="vc_row row_padding_all full">
                        <div id="map_canvas" />
                      </div>
                      {/*/Row */}
                      {/* Row */}
                      <div className="vc_row small text-align-center">
                        <h2 className="has-mask" data-delay={10}>Let's Talk</h2>
                        {/* Contact Formular */}
                        <div id="contact-formular">
                          <div id="message" />
                          <form method="post" action="http://clapat.ro/themes/satelite/contact.php" name="contactform" id="contactform">
                            <div className="name-box has-animation" data-delay={100}>
                              <input name="name" type="text" id="name" size={30} defaultValue placeholder="What's Your Name" /><label className="input_label" />
                            </div>
                            <div className="email-box has-animation" data-delay={150}>
                              <input name="email" type="text" id="email" size={30} defaultValue placeholder="Your Email" /><label className="input_label" />
                            </div>
                            <div className="message-box has-animation" data-delay={100}>
                              <textarea name="comments" cols={40} rows={4} id="comments" placeholder="Tell Us About Your Project" defaultValue={""} /><label className="input_label slow" />
                            </div>
                            <div className="button-box has-animation" data-delay={100}>
                              <div className="clapat-button-wrap parallax-wrap hide-ball">
                                <div className="clapat-button parallax-element">
                                  <div className="button-border outline rounded parallax-element-second"><input type="submit" className="send_message" id="submit" defaultValue="Submit" /></div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/*/Contact Formular */}
                      </div>
                      {/*/Row */}
                      {/* Row */}
                      <div className="vc_row text-align-center row_padding_top small">
                        <div className="one_third has-animation" data-delay={100}>
                          <div className="clapat-icon">
                            <i className="fa fa-paper-plane fa-2x" aria-hidden="true" />
                          </div>
                          <h6><a href="mailto:office@satelite.com" className="link"><span>office@satelite.com</span></a></h6>
                          <p>Email</p>
                        </div>
                        <div className="one_third has-animation" data-delay={200}>
                          <div className="clapat-icon">
                            <i className="fa fa-map-marker fa-2x" aria-hidden="true" />
                          </div>
                          <h6>35 M St, New York, 105, USA</h6>
                          <p>Address</p>
                        </div>
                        <div className=" one_third last has-animation" data-delay={300}>
                          <div className="clapat-icon">
                            <i className="fa fa-phone fa-2x" aria-hidden="true" />
                          </div>
                          <h6>0040 (7763) 574-8901</h6>
                          <p>Phone</p>
                        </div>
                        <hr /><hr />
                      </div>
                      {/*/Row */}
                    </div>
                    {/*/Main Page Content */}
                    {/* Page Navigation */}
                    <div id="page-nav">
                      <div className="next-page-wrap">
                        <div className="next-page-title">
                          <div className="inner text-align-center">
                            <div className="page-subtitle has-animation" data-delay={100}>
                              <div className="subtitle-info">See More Works</div>
                              <div className="subtitle-name">Our best works</div>
                            </div>
                            <a className="page-title has-animation hide-ball next-ajax-link-page" data-type="page-transition" href="index.html" data-delay={150}>
                              <span>P</span>
                              <span>O</span>
                              <span>R</span>
                              <span>T</span>
                              <span>F</span>
                              <span>O</span>
                              <span>L</span>
                              <span>I</span>
                              <span>O</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/Page Navigation */}
                  </div>
                  {/*/Main Content */}
                </div>
                {/*/Main */}
                {/* Footer */}
                <footer className="hidden">
                  <div id="footer-container">
                    <div className="button-wrap left">
                      <div className="icon-wrap parallax-wrap">
                        <div className="button-icon parallax-element">
                          <div className="bars">
                            <div className="bar" /><div className="bar" /><div className="bar" /><div className="bar" /><div className="bar" />
                          </div>
                        </div>
                      </div>
                      <div className="button-text"><span data-on="Sound On" data-off="Sound Off">Sound On</span></div>
                    </div>
                    <div className="socials-wrap">
                      <div className="socials-icon"><i className="fa fa-share-alt" aria-hidden="true" /></div>
                      <div className="socials-text">Follow Us</div>
                      <ul className="socials">
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.dribbble.com/clapat" target="_blank">Db</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.twitter.com/clapatdesign" target="_blank">Tw</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.behance.com/clapat" target="_blank">Be</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.facebook.com/clapat.ro" target="_blank">Fb</a></span></li>
                        <li><span className="parallax-wrap"><a className="parallax-element" href="https://www.instagram.com/clapat.themes/">In</a></span></li>
                      </ul>
                    </div>
                  </div>
                </footer>
                {/*/Footer */}
              </div>
              {/*/Content Scroll */}
            </div>
            {/*/Page Content */}
          </div>
        </main>
      </div>
    );
  }
}
export default Contact;