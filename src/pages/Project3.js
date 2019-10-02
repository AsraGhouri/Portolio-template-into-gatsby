import React from 'react';

class Project3 extends React.Component{
    render(){
        return(
            <main>		
            {/* Preloader */}
            <div className="preloader-wrap">
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
            </div>
            {/*/Preloader */}    
            <div className="cd-index cd-main-content">
              {/* Page Content */}
              <div id="page-content" className="light-content">
                {/* Header */}
                <header className="classic-menu">
                  <div id="header-container">
                    {/* Logo */}
                    <div id="logo" className="hide-ball">
                      <a className="ajax-link" data-type="page-transition" href="index-2.html">
                      <img className="black-logo" src={require("../../public/static/images/logo.png")} alt="ClaPat Logo" />
                        <img className="white-logo" src={require("../../public/static/images/logo-white.png")} alt="ClaPat Logo" />
                      </a>
                    </div>
                    {/*/Logo */}             
                    {/* Navigation */}
                    <nav> 
                      <div className="nav-height">
                        <div className="outer">
                          <div className="inner">           
                            <ul data-breakpoint={1025} className="flexnav">
                              <li className="link menu-timeline"><a className="ajax-link" data-type="page-transition" href="index.html"><span data-hover="Works">Works</span></a></li>                           
                              <li className="link menu-timeline"><a className="ajax-link" data-type="page-transition" href="about.html"><span data-hover="About">About</span></a></li>                        
                              <li className="link menu-timeline"><a className="ajax-link" data-type="page-transition" href="contact.html"><span data-hover="Contact">Contact</span></a></li>
                            </ul>            
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
                    <div id="hero" className="has-image">
                      <div id="hero-styles" className="parallax-onscroll">
                        <div id="hero-caption" className="text-align-center">
                          <div className="inner">
                            <div className="hero-subtitle">Video</div>    
                            <div className="hero-title">
                              <span>E</span>
                              <span>L</span>
                              <span>I</span>
                              <span>E</span>
                              <span> </span>
                              <span>S</span>
                              <span>A</span>
                              <span>A</span>
                              <span>B</span>	
                            </div>                                
                          </div>
                        </div>                                            
                      </div>
                    </div>
                    <div id="hero-bg-wrapper">
                      <div id="hero-image-parallax">
                        <div id="hero-bg-image" style={{backgroundImage: 'url(images/03hero.jpg)'}}>
                          <div className="hero-video-wrapper">
                            <video loop muted className="bgvid">
                              <source src="http://mathematic.tv/wp-content/uploads/2017/05/ELIE_SAAB_40s_LOOP-preview.mp4" type="video/mp4" />
                              <source src="http://mathematic.tv/wp-content/uploads/2017/05/ELIE_SAAB_40s_LOOP-preview.webm" type="video/webm" />
                            </video>
                          </div>	
                        </div>
                      </div>
                    </div>                         
                    {/*/Hero Section */}   
                    {/* Main Content */}
                    <div id="main-content">
                      <div id="main-page-content">
                        {/* Row */}
                        <div className="vc_row row_padding_all">
                          <div className="one_third has-animation">
                            <h2 className="has-mask">Le Parfum Fragrance</h2>
                          </div>
                          <div className="two_third last">
                            <p className="has-animation" data-delay={100}>Perfume types reflect the concentration of aromatic compounds in a solvent, which in fine fragrance is typically ethanol or a mix of water and ethanol. Various sources differ considerably in the definitions of perfume types.</p>
                            <a className="has-animation link" data-delay={140} href="http://mathematic.tv/works/" target="_blank"><span>Made by Mathematic</span></a>
                          </div>
                        </div>
                        {/*/Row */}
                        {/* Row */}
                        <div className="vc_row full row_padding_bottom">
                          {/* Video Player */}
                          <div className="video-wrapper has-animation">                   
                            <div className="video-cover" data-src="images/projects/video-cover.jpg" />
                            <video className="bgvid" controls loop preload="auto">
                              <source src="https://mathematic.gosimian.com/assets/videos/ELIE_SAAB_40s_02_10_2015_SON_V4_APR422.mp4" type="video/mp4" />
                            </video>
                            <div className="control">
                              <div className="btmControl">                        
                                <div className="progress-bar">
                                  <div className="progress">
                                    <span className="bufferBar" />
                                    <span className="timeBar" />
                                  </div>
                                </div>
                                <div className="video-btns">
                                  <div className="sound sound2 btn" title="Mute/Unmute sound">
                                    <i className="fa fa-volume-up" aria-hidden="true" />
                                    <i className="fa fa-volume-off" aria-hidden="true" />
                                  </div>
                                  <div className="btnFS btn" title="Switch to full screen">
                                    <i className="fa fa-expand" aria-hidden="true" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>                    
                          {/*/Video Player */}
                        </div>
                        {/*/Row */}
                        {/* Row */}
                        <div className="vc_row small text-align-center">     
                          <h3 className="has-mask">Reviews about the movie</h3>
                          <hr />
                          <div className="text-carousel has-animation">
                            <div className="text-carousel-item">
                              <p>"These guys are amazing. I really like this theme and the customer support is just amazing. <br className="destroy" />Thank you for all of your support."</p>                                    		<div className="user-review">Sultan0254 - Themeforest</div>
                            </div>
                            <div className="text-carousel-item">
                              <p>"The design is beautiful, elegant and minimal. The customer service was amazing, asked for a <br className="destroy" />404 page and they provided me one free of charge. "</p>
                              <div className="user-review">Rmbettencourt - Themeforest</div>              
                            </div>
                            <div className="text-carousel-item"> 
                              <p>"Maestro is one of my favorite theme and I bought quite a few from ThemeForest"</p>
                              <div className="user-review">Oratorio - Themeforest</div>                     
                            </div>               
                          </div>
                          <hr />
                        </div>
                        {/*/Row */}
                      </div>
                      {/*/Main Page Content */} 
                      {/* Project Navigation */} 
                      <div id="project-nav">
                        <div className="next-project-wrap">
                          <div className="next-project-image">
                            <div className="next-project-image-bg" style={{backgroundImage: 'url(images/04hero.jpg)'}}>
                            </div>
                          </div>
                          <div className="next-project-title">
                            <div className="inner">
                              <div className="main-subtitle has-animation" data-delay={100}>
                                <div className="subtitle-info">Next Project</div>
                                <div className="subtitle-name">Design</div>
                              </div>
                              <a className="main-title has-animation next-ajax-link-project hide-ball" data-delay={150} data-type="page-transition" href="project04.html">
                                <span>L</span>
                                <span>A</span>
                                <span>D</span>
                                <span>Y</span>
                                <span> </span>
                                <span>I</span>
                                <span>N</span>
                                <span> </span>
                                <span>R</span>
                                <span>E</span>
                                <span>D</span>
                              </a>             
                            </div>                   
                          </div>
                        </div>
                      </div>      
                      {/*/Project Navigation */}                                        	
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
        );
    }
}

export default Project3;