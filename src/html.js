import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Download the best Creative Portfolio HTML Template in 2018" />
          <meta name="author" content="ClaPat Studio" />
          <meta charset="UTF-8" />
          <link rel="icon" type="image/ico" href="favicon.ico" />
          <link href="static/style.css" rel="stylesheet" />
          <link href="static/css/font-awesome.min.css" rel="stylesheet" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}  class="hidden hidden-ball smooth-scroll">
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="static/js/jquery.min.js"></script>
          <script src="static/plugins/ScrollMagic.min.js"></script>
          <script src="static/plugins/debug.addIndicators.min.js"></script>
          <script src="static/plugins/animation.gsap.min.js" ></script>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpK1sWi3J3EbUOkF_K4-UHzi285HyFX5M&amp;sensor=false"></script>
          <script src="static/js/plugins.js"></script>
          <script src="static/js/scripts.js"></script>
        </body>
      </html>
    )
  }
}
