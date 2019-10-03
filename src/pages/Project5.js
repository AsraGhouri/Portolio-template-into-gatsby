import React from 'react';

class Project5 extends React.Component{
  componentDidMount(){
    window.addEventListener('load', PageLoad(), FirstLoad(), Portfolio(),
  );
  }
    render(){
        return(
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
              <div id="page-content" >
                {/* Header */}
                {/*/Header */}        
                {/* Content Scroll */}
                <div id="content-scroll">
                  {/* Main */}
                  <div id="main">
                    {/* Hero Section */}
                    <div id="hero" className="has-image" style={{opacity : '2'}}>
                      <div id="hero-styles" className="parallax-onscroll">
                        <div id="hero-caption">
                          <div className="inner">
                            <div className="hero-subtitle">Design</div>    
                            <div className="hero-title">
                              <span>I</span>
                              <span>N</span>
                              <span>F</span>
                              <span>O</span>
                              <span> </span>
                              <span>B</span>
                              <span>U</span>
                              <span>G</span>
                              <span>S</span>	
                            </div>                                
                          </div>
                        </div>                                            
                      </div>
                    </div>
                    <div id="hero-bg-wrapper">
                      <div id="hero-image-parallax">
                        <div id="hero-bg-image" className="info-bugs" />
                      </div>
                    </div>                         
                    {/*/Hero Section */}   
                    {/* Main Content */}
                    <div id="main-content">
                      <div id="main-page-content">
                        {/* Row */}
                        <div className="vc_row row_padding_top text-align-center small">
                          <hr />
                          <h2 className="has-mask">Insects also probably have the largest biomass of the terrestrial animals. At any time, it is estimated that there are some 10 quintillion.</h2>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row full row_padding_top row_padding_bottom">
                          <figure className="has-animation has-parallax">
                            <img src={require("../../public/static/images/projects/ib01.jpg")} alt="Image Title" />               
                            <figcaption>Image Caption</figcaption>
                          </figure>
                        </div>
                        {/*/Row */}
                        {/* Row */}
                        <div className="vc_row small">
                          <div className="one_half">
                            <h2 className="has-mask">Selected Shots</h2>
                          </div>
                          <div className="one_half last">
                            <p className="has-animation" data-delay={10}>My favourite places on earth are the wild waterways where the forest opens its arms and a silver curve of river folds the traveller into its embrace.</p>
                            <a href="https://www.behance.net/gallery/52775051/MECHANICAL-BUGS" target="_blank" className="link has-animation" data-delay={100}><span>Read More</span></a>
                          </div>
                        </div>
                        {/*/Row */}
                        {/* Row */} 
                        <div className="vc_row row_padding_top">
                          <figure className="has-animation">
                            <a href="images/projects/ib02.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib02.jpg")} alt="Image Title" /></a>               
                            <figcaption>Image Caption</figcaption>
                          </figure>
                          <hr /><hr />
                          <div className="one_half">
                            <figure className="has-animation">
                              <a href="images/projects/ib03.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib03.jpg")} alt="Image Title" /></a>                
                              <figcaption>Image Caption</figcaption>
                            </figure>
                          </div>
                          <div className="one_half last">
                            <figure className="has-animation">
                              <a href="images/projects/ib04.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib04.jpg")} alt="Image Title" /></a>               
                              <figcaption>Image Caption</figcaption>
                            </figure>
                          </div>
                          <hr />
                          <figure className="has-animation">
                            <a href="images/projects/ib01.jpg" className="image-link"><img src={require("../../public/static/images/projects/ib01.jpg")} alt="Image Title" /></a>                
                            <figcaption>Image Caption</figcaption>
                          </figure>
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
    
        );
    }
}

export default Project5;