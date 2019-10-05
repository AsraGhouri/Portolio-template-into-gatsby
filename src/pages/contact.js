import React from 'react'
import  Link  from "gatsby-link"
class Contact extends React.Component {
  componentDidMount(){
    window.addEventListener('load',PageLoad(), FirstLoad(), Portfolio(),
    Sliders(),
    Showcase(),
    ShowcaseCarousel(),
    LargeShowcaseCarousel(),
    AjaxLoad(),
    BackToTop(),
    JustifiedGrid(),
    Lightbox(),
    ContactForm(),
    PlayVideo(),
    ContactMap());
  }
  render() {
    return (
      <div>
        <main style={{    width: '100%'}}>
          <div className="cd-index cd-main-content">
            {/* Page Content */}
            <div id="page-content">
              {/* Header */}
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
                        <img src={require('./images/map.jpg')}/>
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
                  </div>
                  {/*/Main Content */}
                </div>
                {/*/Main */}
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