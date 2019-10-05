import React from 'react'
import Link from 'gatsby-link'

class Main extends React.Component {
  componentDidMount() {
    // Run code
    window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "http:\/\/markovskaia.ru\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.3" } };
    !function (a, b, c) { function d(a, b) { var c = String.fromCharCode; l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0); var d = k.toDataURL(); l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0); var e = k.toDataURL(); return d === e } function e(a) { var b; if (!l || !l.fillText) return !1; switch (l.textBaseline = "top", l.font = "600 32px Arial", a) { case "flag": return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) && (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b); case "emoji": return b = d([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340]), !b }return !1 } function f(a) { var c = b.createElement("script"); c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c) } var g, h, i, j, k = b.createElement("canvas"), l = k.getContext && k.getContext("2d"); for (j = Array("flag", "emoji"), c.supports = { everything: !0, everythingExceptFlag: !0 }, i = 0; i < j.length; i++)c.supports[j[i]] = e(j[i]), c.supports.everything = c.supports.everything && c.supports[j[i]], "flag" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]); c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () { c.DOMReady = !0 }, c.supports.everything || (h = function () { c.readyCallback() }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1)) : (a.attachEvent("onunload", h), b.attachEvent("onreadystatechange", function () { "complete" === b.readyState && c.readyCallback() })), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji))) }(window, document, window._wpemojiSettings);
    var root = document.getElementsByTagName("html")[0]; root.setAttribute("class", "js"),
      function setREVStartSize(a) { try { var b, c = document.getElementById(a.c).parentNode.offsetWidth; if (c = 0 === c || isNaN(c) ? window.innerWidth : c, a.tabw = void 0 === a.tabw ? 0 : parseInt(a.tabw), a.thumbw = void 0 === a.thumbw ? 0 : parseInt(a.thumbw), a.tabh = void 0 === a.tabh ? 0 : parseInt(a.tabh), a.thumbh = void 0 === a.thumbh ? 0 : parseInt(a.thumbh), a.tabhide = void 0 === a.tabhide ? 0 : parseInt(a.tabhide), a.thumbhide = void 0 === a.thumbhide ? 0 : parseInt(a.thumbhide), a.mh = void 0 === a.mh || "" == a.mh ? 0 : a.mh, "fullscreen" === a.layout || "fullscreen" === a.l) b = Math.max(a.mh, window.innerHeight); else { for (var d in a.gw = Array.isArray(a.gw) ? a.gw : [a.gw], a.rl) (void 0 === a.gw[d] || 0 === a.gw[d]) && (a.gw[d] = a.gw[d - 1]); for (var d in a.gh = void 0 === a.el || "" === a.el || Array.isArray(a.el) && 0 == a.el.length ? a.gh : a.el, a.gh = Array.isArray(a.gh) ? a.gh : [a.gh], a.rl) (void 0 === a.gh[d] || 0 === a.gh[d]) && (a.gh[d] = a.gh[d - 1]); var e, f = Array(a.rl.length), g = 0; for (var d in a.tabw = a.tabhide >= c ? 0 : a.tabw, a.thumbw = a.thumbhide >= c ? 0 : a.thumbw, a.tabh = a.tabhide >= c ? 0 : a.tabh, a.thumbh = a.thumbhide >= c ? 0 : a.thumbh, a.rl) f[d] = a.rl[d] < window.innerWidth ? 0 : a.rl[d]; for (var d in e = f[0], f) e > f[d] && 0 < f[d] && (e = f[d], g = d); var h = c > a.gw[g] + a.tabw + a.thumbw ? 1 : (c - (a.tabw + a.thumbw)) / a.gw[g]; b = a.gh[g] * h + (a.tabh + a.thumbh) } void 0 === window.rs_init_css && (window.rs_init_css = document.head.appendChild(document.createElement("style"))), document.getElementById(a.c).height = b, window.rs_init_css.innerHTML += "#" + a.c + "_wrapper { height: " + b + "px }" } catch (a) { console.log("Failure at Presize of Slider:" + a) } };
    if (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) { document.body.className += " using-mobile-browser "; }
    setREVStartSize({ c: 'rev_slider_6_1', rl: [1240, 1024, 768, 480], el: [900, 742, 960, 860], gw: [1440, 1024, 778, 480], gh: [900, 742, 960, 860], layout: 'fullwidth', mh: "0" });
    var revapi6,
      tpj;
    jQuery(function () {
      tpj = jQuery;
      if (tpj("#rev_slider_6_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_6_1");
      } else {
        revapi6 = tpj("#rev_slider_6_1").show().revolution({
          sliderType: "hero",
          jsFileLocation: "//markovskaia.ru/markovskaia_plugins/revslider/public/assets/js/",
          duration: 4000,
          visibilityLevels: "1240,1024,768,480",
          gridwidth: "1440,1024,778,480",
          gridheight: "900,742,960,860",
          minHeight: "",
          editorheight: "900,742,960,860",
          responsiveLevels: "1240,1024,768,480",
          disableProgressBar: "on",
          parallax: {
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
            type: "scroll",
            disable_onmobile: true
          },
          sbtimeline: {
            set: true
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid: true
          },
        });
      }

    });
    setREVStartSize({ c: 'rev_slider_8_2', rl: [1240, 1024, 768, 480], el: [2000, 2220, 1710, 1350], gw: [1240, 1024, 778, 480], gh: [2000, 2220, 1710, 1350], layout: 'fullwidth', mh: "0" });
    var revapi8,
      tpj;
    jQuery(function () {
      tpj = jQuery;
      if (tpj("#rev_slider_8_2").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_8_2");
      } else {
        revapi8 = tpj("#rev_slider_8_2").show().revolution({
          sliderType: "hero",
          jsFileLocation: "//markovskaia.ru/markovskaia_plugins/revslider/public/assets/js/",
          sliderLayout: "fullwidth",
          visibilityLevels: "1240,1024,768,480",
          gridwidth: "1240,1024,778,480",
          gridheight: "2000,2220,1710,1350",
          minHeight: "",
          lazyType: "all",
          keepBPHeight: true,
          editorheight: "2000,2220,1710,1350",
          responsiveLevels: "1240,1024,768,480",
          disableProgressBar: "on",
          navigation: {
            onHoverStop: false
          },
          parallax: {
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
            type: "scroll",
            origo: "slideCenter",
            speed: 1000,
            disable_onmobile: true,
            speedls: "1000ms"
          },
          viewPort: {
            enable: true,
            visible_area: "-200px"
          },
          fallbacks: {
            allowHTML5AutoPlayOnAndroid: true
          },
        });
      }

    });
    var htmlDivCss = unescape("body%20%7B%20background%3A%20%23fff%20%21important%3B%20%7D");
    var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
    if (htmlDiv) {
      htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
    } else {
      var htmlDiv = document.createElement('div');
      htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
      document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
    }
    if (typeof revslider_showDoubleJqueryError === "undefined") {
      function revslider_showDoubleJqueryError(sliderID) {
        var err = "<div class='rs_error_message_box'>";
        err += "<div class='rs_error_message_oops'>Oops...</div>";
        err += "<div class='rs_error_message_content'>";
        err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
        err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
        err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
        err += "</div>";
        err += "</div>";
        jQuery(sliderID).show().html(err);
      }
    }
    var wpcf7 = { "apiSettings": { "root": "http:\/\/markovskaia.ru\/wp-json\/contact-form-7\/v1", "namespace": "contact-form-7\/v1" } };
    var nectarLove = { "ajaxurl": "http:\/\/markovskaia.ru\/wp-admin\/admin-ajax.php", "postID": "1296", "rooturl": "http:\/\/markovskaia.ru", "loveNonce": "80fe6744a7" };
    var nectarLove = { "ajaxurl": "http:\/\/markovskaia.ru\/wp-admin\/admin-ajax.php", "postID": "1296", "rooturl": "http:\/\/markovskaia.ru", "disqusComments": "false", "loveNonce": "80fe6744a7", "mapApiKey": "" };
    (function (m, e, t, r, i, k, a) { m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }; m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a) })(window, document, "script", "../mc.yandex.ru/metrika/tag.js", "ym"); ym(54976081, "init", { id: 54976081, clickmap: true, trackLinks: true, trackHash: true, webvisor: true, accurateTrackBounce: true });
    jQuery(document).ready(function () {

    })
    //   const script = document.createElement("script");

    //   script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCpK1sWi3J3EbUOkF_K4-UHzi285HyFX5M&amp;sensor=false";
    //   script.async = true;

    //   document.body.appendChild(script);
    // });
    // window.addEventListener('unload', );
    // window.addEventListener('load',pageTransitionInit())
  }
  render() {
    return (
      <div style={{    width: '100%'}} class="home page-template-default page page-id-1296 ascend wpb-js-composer js-comp-ver-5.7 vc_responsive" data-footer-reveal="1" data-footer-reveal-shadow="none" data-header-format="default" data-body-border="off" data-boxed-style="" data-header-breakpoint="1000" data-dropdown-style="minimal" data-cae="easeOutQuart" data-cad="700" data-megamenu-width="full-width" data-aie="zoom-out" data-ls="magnific" data-apte="horizontal_swipe" data-hhun="0" data-fancy-form-rcs="1" data-form-style="minimal" data-form-submit="see-through" data-is="minimal" data-button-style="default" data-user-account-button="false" data-header-inherit-rc="false" data-header-search="false" data-animated-anchors="true" data-ajax-transitions="true" data-full-width-header="true" data-slide-out-widget-area="true" data-slide-out-widget-area-style="slide-out-from-right" data-user-set-ocm="off" data-loading-animation="none" data-bg-header="true" data-responsive="1" data-ext-responsive="true" data-header-resize="1" data-header-color="light" data-cart="false" data-remove-m-parallax="" data-remove-m-video-bgs="" data-force-header-trans-color="light" data-smooth-scrolling="0" data-permanent-transparent="1">
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        {/* Large content */}

      
        {/*                                   */}
        {/* <div id="ajax-loading-screen" data-disable-mobile={0} data-disable-fade-on-click={0} data-effect="horizontal_swipe" data-method="standard" className="loaded hidden"><div className="reveal-1" /><div className="reveal-2" /></div> */}
       
        <div id="search-outer" className="nectar small-nav">
          <div id="search">
            <div className="container">
              <div id="search-box">
                <div className="inner-wrap">
                  <div className="col span_12">
                    <form role="search" action="http://markovskaia.ru/" method="GET">
                      <input type="text" name="s" defaultValue="Start Typing..." data-placeholder="Start Typing..." />
                      <span><i>Press enter to begin your search</i></span>						</form>
                  </div>{/*/span_12*/}
                </div>{/*/inner-wrap*/}
              </div>{/*/search-box*/}
              <div id="close"><a href="#">
                <span className="icon-salient-x" aria-hidden="true" />				 </a></div>
            </div>{/*/container*/}
          </div>{/*/search*/}
        </div>{/*/search-outer*/}
        <div id="ajax-content-wrap" style={{    width: '100%'}}>
          <div className="container-wrap" style={{ paddingBottom: '0px', marginBottom: '409px', minHeight: '1020px' }} style={{    width: '100%'}}>
            <div className="container main-content">
              <div className="row">
                <div id="fws_5d84a4cdd8862" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row top-level full-width-content standard_section  first-section loaded" style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="fade-in"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" style={{ backgroundColor: 'rgba(255,255,255,0.43)', opacity: 1 }} /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation instance-0 animated-in" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={0}><div className="column-bg-overlay" />
                    <div className="column-inner-wrap no-transform" style={{ transform: 'translate(0px, 0px)' }}><div data-bg-cover className="column-inner no-extra-padding no-transform" style={{ transform: 'translate(0px, 0px)' }}>
                      <div className="wpb_wrapper">
                        {/* START main larco 1 REVOLUTION SLIDER 6.1.0 */}
                        <rs-module-wrap id="rev_slider_6_1_wrapper" data-source="gallery" style={{ background: 'rgb(255, 255, 255)', padding: '0px', margin: '0px auto', overflow: 'visible', height: '652px' }}><rs-module id="rev_slider_6_1" style={{ height: '652px', marginTop: '0px', marginBottom: '0px' }} data-version="6.1.0" className="revslider-initialised rev_redraw_on_blurfocus" data-idcheck="true">
                          <rs-slides style={{ visibility: 'visible', display: 'block', maxHeight: 'none', height: '100%', width: '900px', overflow: 'hidden', left: '0px' }}>
                            <rs-slide data-key="rs-21" data-title="Slide" data-anim="ei:d;eo:d;s:1500ms;r:0;t:fade;sl:d;" data-originalindex={1} data-origindex={0} data-description style={{ overflow: 'hidden', height: '100%', width: '100%', zIndex: 20, visibility: 'inherit', opacity: 1 }} data-sba data-scroll-based="false" data-owidth={300} data-oheight={200} data-ntrid={0} className="active-rs-slide"><rs-sbg-px style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}><rs-sbg-wrap data-owidth={300} data-oheight={200} style={{ transformOrigin: '50% 50% 0px', opacity: 1, visibility: 'inherit', top: '0px', left: '0px', transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>{/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="markovskaia_plugins/revslider/public/assets/assets/transparent.png" title="PRECH MAIN" width="1922" height="1080" data-parallax="off" class="rev-slidebg" data-no-retina="">*/}<rs-sbg src="http://localhost:8887/markovskaia_plugins/revslider/public/assets/assets/transparent.png" className data-bgcolor="transparent" style={{ background: 'transparent', width: '100%', height: '100%', opacity: 1, top: '0px', left: '0px', visibility: 'inherit', zIndex: 20 }} /></rs-sbg-wrap></rs-sbg-px>
                              {/*
							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '-346px', top: '-112px', zIndex: 8, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-6-slide-21-layer-5" data-type="image" data-rsp_ch="on" data-xy="x:r,r,l,c;xo:-288px,-356px,-118px,65px;y:m;yo:-39px,0,0,15px;" data-text="l:22;a:inherit;" data-dim="w:1774px,1774px,100%,1593px;h:997px,997px,100%,895px;" data-basealign="slide" data-sba="t:true;" data-frame_0="sX:1.1;sY:1.1;" data-frame_1="sp:1800;" data-frame_999="o:0;tp:600;st:w;sR:2800;" style={{ zIndex: 8, fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '1559px', height: '876px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-sba rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true"><img src="http://localhost:8887/wp-content/uploads/2019/08/PRECH-MAIN2.jpg" width={1922} height={1080} data-no-retina style={{ height: '100%', width: '100%', textAlign: 'left', lineHeight: '22px', letterSpacing: '0px', fontWeight: 400, fontSize: '13px', borderColor: 'rgb(255, 255, 255)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px' }} data-stylerecorder="true" />
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*
*/}						</rs-slide>
                          </rs-slides>
                          <rs-static-layers data-key="staticlayers" style={{ left: '0px' }}>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '45px', top: '326px', zIndex: 9, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><rs-layer id="slider-6-slide-5-layer-4" className="rs-layer-static rs-layer" data-type="text" data-color="#242424||#242424||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;yo:481px,326px,612px,218px;" data-text="s:15,15,16,16;l:22;" data-dim="w:auto,auto,auto,245px;h:auto,auto,auto,71px;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:910;sp:1200;sR:910;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;st:w;sR:1890;" style={{ zIndex: 9, fontStyle: 'normal', fontWeight: 400, lineHeight: '22px', fontFamily: 'MAZHREG !important', visibility: 'visible', textAlign: 'left', letterSpacing: '0px', fontSize: '15px', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(36, 36, 36)', textDecoration: 'none', whiteSpace: 'nowrap', width: 'auto', height: 'auto', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-startslide={0} data-endslide={2} data-idcheck="true" data-stylerecorder="true" data-initialised="true">Индивидуальная разработка <br />
                              жилых и общественных <br />
                              помещений
                                        </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '45px', top: '538px', zIndex: 13, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><a id="slider-6-slide-5-layer-9" className="rs-layer rev-btn rs-layer-static" href="portfolio/index.html" target="_self" rel="nofollow" data-type="button" data-color="#242424" data-xy="xo:107px,45px,46px,24px;y:b;yo:65px,65px,168px,25px;" data-text="s:14,14,16,14;l:45;fw:500;a:center;" data-dim="w:223px,223px,216px,221px;minw:0px,none,none,none;minh:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-padding="r:25,21,16,10;l:25,21,16,10;" data-border="bos:solid;boc:#000000;bow:2px,2px,2px,2px;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:910;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:1890;" data-frame_hover="c:#fff;bgc:#242424;boc:#242424;bor:0px,0px,0px,0px;bos:solid;bow:2px,2px,2px,2px;e:Power1.easeInOut;" style={{ zIndex: 13, backgroundColor: 'rgba(0, 0, 0, 0)', fontFamily: 'MAZHMED !important', visibility: 'visible', textAlign: 'center', lineHeight: '45px', letterSpacing: '0px', fontWeight: 500, fontSize: '14px', borderColor: 'rgb(0, 0, 0)', borderStyle: 'solid', borderWidth: '2px', margin: '0px', borderRadius: '0px', padding: '0px 21px', color: 'rgb(36, 36, 36)', textDecoration: 'none', whiteSpace: 'nowrap', width: '223px', height: 'auto', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-startslide={0} data-endslide={2} data-idcheck="true" data-stylerecorder="true" data-initialised="true">Портфолио
                                        </a></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '45px', top: '81px', zIndex: 12, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><rs-layer id="slider-6-slide-5-layer-11" className="rs-layer-static rs-layer" data-type="text" data-color="#242424||#1a1a1a||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;y:m,t,m,t;yo:-183px,81px,-60px,66px;" data-text="s:80,60,80,40;l:80,80,80,50;ls:-1px;fw:300;" data-dim="w:736px,592px,517px,320px;h:90px,auto,94px,58px;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:550;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;e:Power4.easeInOut;st:w;sR:2250;" style={{ zIndex: 12, fontFamily: 'MAZHMED', fontStyle: 'normal', fontWeight: 300, lineHeight: '80px', visibility: 'visible', textAlign: 'left', letterSpacing: '-1px', fontSize: '60px', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(26, 26, 26)', textDecoration: 'none', whiteSpace: 'nowrap', width: '592px', height: 'auto', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-startslide={0} data-endslide={2} data-idcheck="true" data-stylerecorder="true" data-initialised="true">Современная
                                        </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '45px', top: '146px', zIndex: 11, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><rs-layer id="slider-6-slide-5-layer-31" className="rs-layer-static rs-layer" data-type="text" data-color="#242424||#1a1a1a||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;y:m,t,m,t;yo:-103px,146px,0,109px;" data-text="s:80,60,80,40;l:80,80,80,50;ls:-1px;fw:300;" data-dim="w:736px,685px,606px,377px;h:93px,90px,84px,auto;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:660;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;e:Power4.easeInOut;st:w;sR:2140;" style={{ zIndex: 11, fontFamily: 'MAZHMED', fontStyle: 'normal', fontWeight: 300, lineHeight: '80px', visibility: 'visible', textAlign: 'left', letterSpacing: '-1px', fontSize: '60px', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(26, 26, 26)', textDecoration: 'none', whiteSpace: 'nowrap', width: '685px', height: '90px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-startslide={0} data-endslide={2} data-idcheck="true" data-stylerecorder="true" data-initialised="true">уютная роскошь
                                        </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '45px', top: '207px', zIndex: 10, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><rs-layer id="slider-6-slide-5-layer-32" className="rs-layer-static rs-layer" data-type="text" data-color="#242424||#1a1a1a||#1a1a1a||#1a1a1a" data-xy="xo:107px,45px,46px,24px;y:m,t,m,t;yo:-29px,207px,69px,156px;" data-text="s:80,60,80,40;l:80,80,80,50;ls:-1px;fw:300;" data-dim="w:736px,514px,441px,336px;h:95px,auto,88px,auto;minw:0px,none,none,none;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="y:100%;" data-frame_0_mask="u:t;" data-frame_1="st:790;sp:1200;" data-frame_1_mask="u:t;" data-frame_999="o:0;tp:600;e:Power4.easeInOut;st:w;sR:2010;" style={{ zIndex: 10, fontFamily: 'MAZHMED', fontStyle: 'normal', fontWeight: 300, lineHeight: '80px', visibility: 'visible', textAlign: 'left', letterSpacing: '-1px', fontSize: '60px', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(26, 26, 26)', textDecoration: 'none', whiteSpace: 'nowrap', width: '514px', height: 'auto', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-startslide={0} data-endslide={2} data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              в интерьере
                                        </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', minHeight: '8528px', left: '-1px', top: '-461px', zIndex: 8, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block', height: '100%' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', height: '100%', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-6-slide-5-layer-37" className="tp-shape tp-shapewrapper rs-layer-static rs-layer" data-type="shape" data-xy="xo:-167px,-1px,-634px,-1px;yo:0,-461px,6px,-8px;" data-text="fw:100,400,400,400;a:inherit;" data-dim="w:638px,412px,601px,481px;h:100%,1308%,1290px,424px;" data-vbility="t,t,f,f" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-onslides="s:-1;e:-1;" data-frame_0="o:1;" data-frame_1="sR:10;" data-frame_999="o:0;tp:600;st:w;sR:3690;" style={{ zIndex: 8, backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '412px', height: '8528px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-startslide={0} data-endslide={2} data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                            </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*
					*/}</rs-static-layers>
                          <rs-progress className="rs-bottom" style={{ visibility: 'hidden !important', width: '0%' }} />
                          <rs-loader className="off" style={{ display: 'none' }}><div className="dot1" /><div className="dot2" /><div className="bounce1" /><div className="bounce2" /><div className="bounce3" /></rs-loader></rs-module>
                        </rs-module-wrap>
                        {/* END REVOLUTION SLIDER */}
                      </div>
                    </div></div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cddda4d" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 vc_hidden-sm vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding instance-1" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default"><div style={{ height: '140px' }} className="divider" /></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="discover" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg using-bg-color" style={{ backgroundColor: '#f2f2f2' }} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation instance-2 animated-in" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={150}><div className="column-bg-overlay" />
                    <div className="column-inner-wrap no-transform" style={{ transform: 'translate(0px, 0px)' }}><div data-bg-cover className="column-inner padding-7-percent no-transform" style={{ transform: 'translate(0px, 0px)' }}>
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cdddfcd" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding instance-3" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '20px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div><div id="fws_5d84a4cdde1ea" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-10 wpb_column column_container vc_column_container col has-animation no-extra-padding instance-4 animated-in" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={150} style={{ opacity: 1, transform: 'translate(0px, 0px)' }}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  vc_custom_1565972056665">
                                  <div className="wpb_wrapper">
                                    <h1>Предоставляю полный спектр услуг в области дизайна интерьеров и мебельном бизнесе.</h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-2 wpb_column column_container vc_column_container col no-extra-padding instance-5" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                              </div>
                            </div>
                          </div>
                        </div></div><div id="fws_5d84a4cdde4fd" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding instance-6" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '60px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div><div id="fws_5d84a4cdde67c" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row  vc_row-o-content-top standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-2 wpb_column column_container vc_column_container col has-animation no-extra-padding instance-7 animated-in" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0} style={{ opacity: 1, transform: 'translate(0px, 0px)' }}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                  <div className="wpb_wrapper">
                                    <p>Ирина Марковская<br />
                                      Дизайнер интерьеров</p>
                                  </div>
                                </div>
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-4 wpb_column column_container vc_column_container col has-animation padding-3-percent instance-8 animated-in" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0} style={{ opacity: 1, transform: 'translate(0px, 0px)' }}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element ">
                                  <div className="wpb_wrapper">
                                    <p>Более 10 лет создаю уникальные, красивые, функциональные пространства для коммерческих и жилых проектов по всему миру.</p>
                                  </div>
                                </div>
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '40px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-4 wpb_column column_container vc_column_container col has-animation padding-7-percent instance-9 animated-in" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0} style={{ opacity: 1, transform: 'translate(0px, 0px)' }}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <a className="nectar-button large see-through-2 " style={{ borderColor: 'rgba(36, 36, 36, 0.75)', color: 'rgb(36, 36, 36)', visibility: 'visible' }} href="about/index.html" data-color-override="#242424" data-hover-color-override="#242424" data-hover-text-color-override="#ffffff"><span>Обо мне</span></a><div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-2 wpb_column column_container vc_column_container col no-extra-padding instance-10" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                              </div>
                            </div>
                          </div>
                        </div></div>
                      </div>
                    </div></div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cdded45" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-3-percent instance-11" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top-bottom" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cddee82" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding instance-12" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cddf003" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent instance-13" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="nectar-split-heading animated-in"><div className="heading-line"> <div style={{ transform: 'translate(0px, 0px)' }}><h1 style={{ textAlign: 'center' }}>Реализованные</h1> </div> </div><div className="heading-line"> <div style={{ transform: 'translate(0px, 0px)' }}><h1 style={{ textAlign: 'center' }}>проекты</h1> </div> </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cddf211" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding instance-14" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        {/* START Peak Portfolio1 REVOLUTION SLIDER 6.1.0 */}
                        <rs-fullwidth-wrap id="rev_slider_8_2_forcefullwidth" style={{ marginTop: '0px', marginBottom: '0px' }}><rs-module-wrap id="rev_slider_8_2_wrapper" data-source="gallery" style={{ background: 'transparent', padding: '0px', margin: '0px auto', position: 'absolute', overflow: 'visible', width: '900px', left: '0px', height: '2220px' }}><rs-module id="rev_slider_8_2" style={{ height: '2220px', maxHeight: '2220px', marginTop: '0px', marginBottom: '0px' }} data-version="6.1.0" className="revslider-initialised rev_redraw_on_blurfocus" data-idcheck="true">
                          <rs-slides style={{ visibility: 'visible', display: 'block', maxHeight: 'none', height: '100%', width: '100%', overflow: 'hidden' }}>
                            <rs-slide data-key="rs-26" data-title="Slide" data-anim="ei:d;eo:d;s:300ms;r:0;t:fade;sl:0;" data-originalindex={1} data-origindex={0} data-description style={{ overflow: 'hidden', height: '100%', width: '100%', zIndex: 20, visibility: 'inherit', opacity: 1 }} data-sba data-scroll-based="false" data-owidth={300} data-oheight={200} data-ntrid={0} className="active-rs-slide"><rs-sbg-px style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}><rs-sbg-wrap data-owidth={300} data-oheight={200} style={{ transformOrigin: '50% 50% 0px', opacity: 1, visibility: 'inherit', top: '0px', left: '0px', transform: 'matrix(1, 0, 0, 1, 0, 0)' }}>{/*Runtime Modification - Img tag is Still Available for SEO Goals in Source - <img src="markovskaia_plugins/revslider/public/assets/assets/dummy.png" title="Ирина Марковская | Частный дизайнер интерьеров" data-lazyload="//markovskaia.ru/markovskaia_plugins/revslider/public/assets/assets/transparent.png" data-bg="c:#ffffff;" data-parallax="off" class="rev-slidebg" data-no-retina="">*/}<rs-sbg data-lazyload="//markovskaia.ru/markovskaia_plugins/revslider/public/assets/assets/transparent.png" src="http://localhost:8887/markovskaia_plugins/revslider/public/assets/assets/dummy.png" className data-bgcolor="#ffffff" style={{ background: 'rgb(255, 255, 255)', width: '100%', height: '100%', opacity: 1, top: '0px', left: '0px', visibility: 'inherit', zIndex: 20 }} /></rs-sbg-wrap></rs-sbg-px>
                              {/*
							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '650px', top: '270px', zIndex: 16, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><rs-px-mask className="tp-parallax-container" style={{ transform: 'matrix(1, 0, 0, 1, 0, -80.6)' }}><a id="slider-8-slide-26-layer-2" className="rs-layer rs-pxl-1 rs-pxmask" href="projects/udaltsova/index.html" target="_self" rel="nofollow" data-type="image" data-xy="x:c;xo:434px,400px,244px,165px;yo:174px,270px,231px,259px;" data-dim="w:663px,400px,427px,287px;h:663px,400px,427px,287px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_0_mask="u:t;" data-frame_1="e:Power4.easeOut;st:400;sp:1000;sR:400;" data-frame_1_mask="u:t;" data-frame_999="st:w;sR:7600;" data-frame_hover="sX:1.05;sY:1.05;bgc:rgba(255,255,255,0);sp:500ms;e:Power1.easeInOut;gra:0%;bri:110%;blu:0px;m:true;" style={{ zIndex: 16, fontFamily: 'Roboto', cursor: 'pointer', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '400px', height: '400px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', backgroundColor: 'rgba(0, 0, 0, 0)', filter: 'blur(0px) grayscale(0%) brightness(100%)', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px', borderWidth: '0px' }} data-idcheck="true" data-stylerecorder="true" data-initialised="true"><img src="//markovskaia.ru/wp-content/uploads/2019/09/UDAL_FOLIO-1-1024x1024.jpg" width={1024} height={1024} data-lazyload="//markovskaia.ru/wp-content/uploads/2019/09/UDAL_FOLIO-1-1024x1024.jpg" data-no-retina style={{ height: '100%', width: '100%' }} />
                              </a></rs-px-mask></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap h2" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '430px', top: '389px', zIndex: 19, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-3" className="h2 rs-layer" data-type="text" data-color="#242424" data-xy="x:c;xo:177px,177px,110px,1px;yo:389px,389px,402px,305px;" data-text="w:normal;s:40,40,30,30;l:0,6,30,30;ls:-1px;a:left,left,left,center;" data-dim="w:393px,393px,260px,481px;" data-rsp_o="off" data-wrpcls="h2" data-rsp_bd="off" data-padding="t:30;b:30;" data-border="bow:0,0,0,50px;" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:350;sp:1000;sR:350;" data-frame_999="st:w;sR:7650;" data-frame_hover="c:#000;bos:none;bow:0,0,0,0;" style={{ zIndex: 19, cursor: 'pointer', fontFamily: 'MAZHMED !important', visibility: 'visible', textAlign: 'left', lineHeight: '6px', letterSpacing: '-1px', fontWeight: 400, fontSize: '40px', borderColor: 'rgba(255, 255, 255, 0)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '30px 0px', color: 'rgb(36, 36, 36)', textDecoration: 'none', whiteSpace: 'normal', width: '393px', height: 'auto', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px', borderWidth: '0px' }} data-idcheck="true" data-stylerecorder="true" data-initialised="true">Удальцова
                                          </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '430px', top: '384px', zIndex: 18, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-5" data-type="shape" data-xy="x:c;xo:0,0,0,-5px;yo:384px,384px,404px,308px;" data-dim="w:40px;h:71px,71px,87px,87px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;sp:1350;" data-frame_999="st:w;sR:7650;" style={{ zIndex: 18, backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '40px', height: '71px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '34px', top: '750px', zIndex: 15, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-6" data-type="text" data-color="#242424" data-xy="x:c;xo:-232px,-160px,-137px,1px;yo:918px,750px,674px,646px;" data-text="w:normal;s:40,40,30,30;l:10,10,30,30;ls:-1px;a:right,right,right,center;" data-dim="w:511px,511px,312px,480px;h:69px,69px,87px,87px;" data-rsp_o="off" data-rsp_bd="off" data-padding="t:30;b:30;" data-border="bow:0,0,0,50px;" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:350;sp:1000;sR:350;" data-frame_999="st:w;sR:7650;" data-frame_hover="c:#000;bos:none;bow:0,0,0,0;" style={{ zIndex: 15, cursor: 'pointer', fontFamily: 'MAZHMED !important', visibility: 'visible', textAlign: 'right', lineHeight: '10px', letterSpacing: '-1px', fontWeight: 400, fontSize: '40px', borderColor: 'rgba(255, 255, 255, 0)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '30px 0px', color: 'rgb(36, 36, 36)', textDecoration: 'none', whiteSpace: 'normal', width: '511px', height: '69px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">Пречистенка
                                          </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '430px', top: '754px', zIndex: 14, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-7" data-type="shape" data-xy="x:c;xo:0,0,-1px,-1px;yo:902px,754px,677px,652px;" data-dim="w:40px;h:104px,104px,83px,81px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:400;sp:1000;sR:400;" data-frame_999="st:w;sR:7600;" style={{ zIndex: 14, backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '40px', height: '104px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '-60px', top: '670px', zIndex: 12, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><rs-px-mask className="tp-parallax-container" style={{ transform: 'matrix(1, 0, 0, 1, 0, -80.6)' }}><a id="slider-8-slide-26-layer-8" className="rs-layer rs-pxl-1 rs-pxmask" href="projects/prechistenka/index.html" target="_self" rel="nofollow" data-type="image" data-xy="x:c;xo:-435px,-310px,-221px,-162px;yo:704px,670px,580px,620px;" data-dim="w:663px,400px,386px,276px;h:663px,400px,386px,276px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_0_mask="u:t;" data-frame_1="e:Power4.easeOut;st:450;sp:1000;sR:450;" data-frame_1_mask="u:t;" data-frame_999="st:w;sR:7550;" data-frame_hover="sX:1.05;sY:1.05;sp:500ms;e:Power1.easeInOut;gra:0%;bri:110%;blu:0px;m:true;" style={{ zIndex: 12, fontFamily: 'Roboto', cursor: 'pointer', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '400px', height: '400px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', filter: 'blur(0px) grayscale(0%) brightness(100%)', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-idcheck="true" data-stylerecorder="true" data-initialised="true"><img src="//markovskaia.ru/wp-content/uploads/2019/09/PRECH_FOLIO-1024x1024.jpg" width={1024} height={1024} data-lazyload="//markovskaia.ru/wp-content/uploads/2019/09/PRECH_FOLIO-1024x1024.jpg" data-no-retina style={{ height: '100%', width: '100%' }} />
                              </a></rs-px-mask></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '340px', top: '1150px', zIndex: 11, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-11" data-type="text" data-color="#242424" data-xy="x:c;xo:243px,160px,139px,2px;yo:1410px,1150px,974px,1022px;" data-text="w:normal;s:40,40,30,30;l:0,6,30,30;ls:-1px;a:left,left,left,center;" data-dim="w:539px,539px,322px,472px;h:58px,58px,120px,88px;" data-rsp_o="off" data-rsp_bd="off" data-padding="t:30;b:30;" data-border="bow:0,0,0,50px;" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;st:350;sp:1000;sR:350;" data-frame_999="st:w;sR:7650;" data-frame_hover="c:#000;bos:none;bow:0,0,0,0;" style={{ zIndex: 11, cursor: 'pointer', fontFamily: 'MAZHMED !important', visibility: 'visible', textAlign: 'left', lineHeight: '6px', letterSpacing: '-1px', fontWeight: 400, fontSize: '40px', borderColor: 'rgba(255, 255, 255, 0)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '30px 0px', color: 'rgb(36, 36, 36)', textDecoration: 'none', whiteSpace: 'normal', width: '539px', height: '58px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">Детские комнаты
                                          </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '430px', top: '1154px', zIndex: 9, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-12" data-type="shape" data-xy="x:c;yo:1388px,1154px,974px,1026px;" data-dim="w:40px;h:105px,105px,87px,90px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_1="e:Power4.easeOut;sp:1000;" data-frame_999="st:w;sR:8000;" style={{ zIndex: 9, backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '40px', height: '105px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '650px', top: '1070px', zIndex: 10, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', transform: 'matrix(1, 0, 0, 1, 0, 0)', visibility: 'visible', overflow: 'hidden', transformOrigin: '50% 50% 0px' }}><rs-px-mask className="tp-parallax-container" style={{ transform: 'matrix(1, 0, 0, 1, 0, -80.6)' }}><a id="slider-8-slide-26-layer-13" className="rs-layer rs-pxl-1 rs-pxmask" href="projects/detskie/index.html" target="_self" rel="nofollow" data-type="image" data-xy="x:c;xo:434px,400px,228px,166px;yo:1177px,1070px,884px,979px;" data-dim="w:662px,400px,393px,280px;h:662px,400px,393px,280px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="y:200px;" data-frame_0_mask="u:t;" data-frame_1="e:Power4.easeOut;st:450;sp:1000;sR:450;" data-frame_1_mask="u:t;" data-frame_999="st:w;sR:7550;" data-frame_hover="sX:1.05;sY:1.05;sp:500ms;e:Power1.easeInOut;bri:110%;m:true;" style={{ zIndex: 10, fontFamily: 'Roboto', cursor: 'pointer', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '400px', height: '400px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', filter: 'blur(0px) grayscale(0%) brightness(100%)', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} data-idcheck="true" data-stylerecorder="true" data-initialised="true"><img src="//markovskaia.ru/wp-content/uploads/2019/09/DETS_FOLIO-1024x1024.jpg" width={1024} height={1024} data-lazyload="//markovskaia.ru/wp-content/uploads/2019/09/DETS_FOLIO-1024x1024.jpg" data-no-retina style={{ height: '100%', width: '100%' }} />
                              </a></rs-px-mask></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', minHeight: '100%', left: '449px', top: '28px', zIndex: 8, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block', height: '100%' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', height: '100%', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-14" data-type="shape" data-xy="x:c;yo:28px;" data-dim="w:1px;h:100%;" data-basealign="slide" data-rsp_o="off" data-rsp_bd="off" data-frame_0="sY:0;o:1;oY:0%;" data-frame_1="oY:0%;e:Power2.easeInOut;st:700;sp:2000;sR:700;" data-frame_999="st:w;sR:6300;" style={{ zIndex: 8, backgroundColor: 'rgb(36, 36, 36)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '1px', height: '100%', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 0% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '-369px', top: '566px', zIndex: 20, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-15" data-type="shape" data-xy="x:c;xo:452px,-464px,-382px,-452px;yo:165px,566px,525px,481px;" data-dim="w:711px;h:155px,155px,110px,110px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="o:1;" data-frame_999="st:w;sR:8700;" style={{ zIndex: 20, backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '711px', height: '155px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '645px', top: '964px', zIndex: 17, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-16" data-type="shape" data-xy="x:c;xo:-455px,551px,381px,663px;yo:693px,964px,845px,680px;" data-dim="w:711px;h:155px,155px,110px,110px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="o:1;" data-frame_999="st:w;sR:8700;" style={{ zIndex: 17, backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '711px', height: '155px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*

							*/}<rs-layer-wrap className="rs-parallax-wrap" style={{ position: 'absolute', display: 'block', pointerEvents: 'auto', left: '647px', top: '184px', zIndex: 13, visibility: 'visible' }}><rs-loop-wrap style={{ position: 'absolute', display: 'block' }}><rs-mask-wrap style={{ position: 'absolute', display: 'block', visibility: 'visible', overflow: 'visible' }}><rs-layer id="slider-8-slide-26-layer-17" data-type="shape" data-xy="x:c;xo:454px,553px,371px,563px;yo:1171px,184px,197px,805px;" data-dim="w:711px;h:155px,155px,110px,110px;" data-rsp_o="off" data-rsp_bd="off" data-frame_0="o:1;" data-frame_1="sp:700;" data-frame_999="st:w;sR:8300;" style={{ zIndex: 13, backgroundColor: 'rgb(255, 255, 255)', fontFamily: 'Roboto', visibility: 'visible', overflow: 'hidden', borderColor: 'rgb(36, 36, 36)', borderStyle: 'none', margin: '0px', borderRadius: '0px', padding: '0px', color: 'rgb(255, 255, 255)', width: '711px', height: '155px', minHeight: '0px', minWidth: '0px', maxHeight: 'none', maxWidth: 'none', opacity: 1, transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)', transformOrigin: '50% 50% 0px' }} className="rs-layer" data-idcheck="true" data-stylerecorder="true" data-initialised="true">
                              </rs-layer></rs-mask-wrap></rs-loop-wrap></rs-layer-wrap>{/*
*/}						</rs-slide>
                          </rs-slides>
                          <rs-progress className="rs-bottom" style={{ visibility: 'hidden !important', width: '0%' }} />
                          <rs-loader className="off" style={{ display: 'none' }}><div className="dot1" /><div className="dot2" /><div className="bounce1" /><div className="bounce2" /><div className="bounce3" /></rs-loader></rs-module>
                        </rs-module-wrap><rs-fw-forcer style={{ height: '2220px' }} /></rs-fullwidth-wrap>
                        {/* END REVOLUTION SLIDER */}
                        <div id="fws_5d84a4cde6374" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 wpb_column column_container vc_column_container col centered-text has-animation padding-3-percent instance-15" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <a className="nectar-button large see-through-2 " style={{ borderColor: 'rgba(36, 36, 36, 0.75)', color: 'rgb(36, 36, 36)', visibility: 'visible' }} href="portfolio/index.html" data-color-override="#242424" data-hover-color-override="#242424" data-hover-text-color-override="#ffffff"><span>Все проекты</span></a>
                              </div>
                            </div>
                          </div>
                        </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cde6791" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent instance-16" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top-left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default"><div style={{ height: '60px' }} className="divider" /></div><div className="nectar-split-heading"><div className="heading-line"> <div><h1 style={{ textAlign: 'left' }}>Услуги</h1> </div> </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cde6a76" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation padding-7-percent instance-17" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={500}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div><div className="toggles " data-style="minimal"><div className="toggle default"><h3><a href="#"><i className="icon-plus-sign" />Полный дизайн-проект</a></h3><div>
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                            </div>
                          </div>
                          <div id="fws_5d84a4cde70e3" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-18" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>Разработка концепции красивого и удобного интерьера с учетом всех факторов (вкусов обитателей, планировки и назначения помещения, бюджета) и подготовка нормативно-технической базы для воплощения замысла в реальность.</p>
                                    </div>
                                  </div>
                                  <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-19" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                </div>
                              </div>
                            </div>
                          </div></div></div></div><div className="toggle default"><h3><a href="#"><i className="icon-plus-sign" />Комплектация</a></h3><div><div id="fws_5d84a4cde75cc" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-20" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>Услуга позволяет получить желаемый результат без затрат времени и усилий со стороны заказчика, т.к. подбор мебели, освещения, сантехники и других составляющих автором проекта гарантирует точное соответствие будущего интерьера разработанному проекту и созданным визуализациям.</p>
                                    </div>
                                  </div>
                                  <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-21" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                </div>
                              </div>
                            </div>
                          </div></div>
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                              </div>
                            </div>
                          </div></div><div className="toggle default"><h3><a href="#"><i className="icon-plus-sign" />Декорирование</a></h3><div><div id="fws_5d84a4cde7afa" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-22" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>Завершающий этап комплексной разработки дизайна интерьера, связанный с выбором и размещением&nbsp; различных предметов декора и аксессуаров. Благодаря умелому декорированию интерьер приобретает завершенность, становится гармоничным и уютным.</p>
                                    </div>
                                  </div>
                                  <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-23" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                </div>
                              </div>
                            </div>
                          </div></div>
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                              </div>
                            </div>
                          </div></div><div className="toggle default"><h3><a href="#"><i className="icon-plus-sign" />Авторский надзор</a></h3><div><div id="fws_5d84a4cde8005" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-24" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>Контроль ремонтно-отделочных работ на соответствие проекту. Выезд на объекты, консультация исполнителей, а также внесение изменений в чертежи.</p>
                                    </div>
                                  </div>
                                  <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                                </div>
                              </div>
                            </div>
                            <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-25" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                </div>
                              </div>
                            </div>
                          </div></div></div></div></div>
                        <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div><div id="fws_5d84a4cde847c" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent instance-26" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="bottom" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <a className="nectar-button large see-through-2 " style={{ marginTop: '20px', borderColor: 'rgba(36, 36, 36, 0.75)', color: 'rgb(36, 36, 36)', visibility: 'visible' }} href="services/index.html" data-color-override="#242424" data-hover-color-override="#242424" data-hover-text-color-override="#ffffff"><span>Услуги и цены</span></a><div className="divider-wrap" data-alignment="default"><div style={{ height: '90px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cde8818" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent instance-27" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cde8a04" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding instance-28" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="nectar-split-heading"><div className="heading-line"> <div><h1>Instagram</h1> </div> </div></div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-6 wpb_column column_container vc_column_container col has-animation instance-29" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={0}><div className="column-bg-overlay" />
                            <div className="column-inner-wrap"><div data-bg-cover className="column-inner no-extra-padding">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div><div className="nectar-highlighted-text instance-0" data-style="half_text" data-using-custom-color="true" data-color="#eaeaea" style={{}}>
                                  <h3 style={{ textAlign: 'left' }}><a href="https://www.instagram.com/markovskayadesign/"><em>@markovskayadesign</em></a></h3>
                                </div>
                              </div>
                            </div></div>
                          </div>
                        </div></div><div className="divider-wrap" data-alignment="default"><div style={{ height: '60px' }} className="divider" /></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cde8f5e" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  vc_row-o-content-middle standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation padding-7-percent instance-30" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="bottom" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cde9139" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-3 vc_hidden-xs wpb_column column_container vc_column_container col padding-1-percent instance-31 one-fourths clear-both" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                  <div className="inner">
                                    <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                      <img className="img-with-animation skip-lazy  animated-in" data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="wp-content/uploads/2019/08/INST-1-1.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-1-1-350x350.jpg 350w" sizes="100vw" style={{ opacity: 1 }} />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-3 wpb_column column_container vc_column_container col padding-1-percent instance-32 one-fourths right-edge" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                  <div className="inner">
                                    <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                      <img className="img-with-animation skip-lazy " data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="wp-content/uploads/2019/08/INST2.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST2.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST2-350x350.jpg 350w" sizes="100vw" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-3 vc_hidden-xs wpb_column column_container vc_column_container col padding-1-percent instance-33 one-fourths clear-both" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                  <div className="inner">
                                    <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                      <img className="img-with-animation skip-lazy  animated-in" data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="wp-content/uploads/2019/08/INST-3.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST-3.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-3-350x350.jpg 350w" sizes="100vw" style={{ opacity: 1 }} />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vc_col-sm-3 vc_hidden-xs wpb_column column_container vc_column_container col padding-1-percent instance-34 one-fourths right-edge" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="img-with-aniamtion-wrap " data-max-width="100%" data-border-radius="none">
                                  <div className="inner">
                                    <a href="https://www.instagram.com/markovskayadesign/" target="_blank" className>
                                      <img className="img-with-animation skip-lazy  animated-in" data-shadow="none" data-shadow-direction="middle" data-delay={0} height={640} width={640} data-animation="fade-in" src="wp-content/uploads/2019/08/INST-4.jpg" alt="" srcSet="http://markovskaia.ru/wp-content/uploads/2019/08/INST-4.jpg 640w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-150x150.jpg 150w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-300x300.jpg 300w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-100x100.jpg 100w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-140x140.jpg 140w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-500x500.jpg 500w, http://markovskaia.ru/wp-content/uploads/2019/08/INST-4-350x350.jpg 350w" sizes="100vw" style={{ opacity: 1 }} />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cdeae41" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex standard_section " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg" style={{}} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent instance-35" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="top-left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div><div className="nectar-split-heading"><div className="heading-line"> <div><h1>Остались вопросы?</h1> </div> </div></div><div id="fws_5d84a4cdeb0ce" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding instance-36" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '30px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
                <div id="fws_5d84a4cdeb3a4" data-midnight="dark" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex standard_section vertically-align-columns " style={{ paddingTop: '0px', paddingBottom: '0px', left: '0px', marginLeft: '-150px', width: '900px', visibility: 'visible' }}><div className="row-bg-wrap" data-bg-animation="none"><div className="inner-wrap"><div className="row-bg using-bg-color" style={{ backgroundColor: '#f2f2f2' }} /></div><div className="row-bg-overlay" /></div><div className="col span_12 dark left">
                  <div className="vc_col-sm-12 wpb_column column_container vc_column_container col padding-7-percent instance-37" data-t-w-inherits="default" data-border-radius="none" data-shadow="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left-right" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div id="fws_5d84a4cdeb5a8" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding instance-38" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '60px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div><div id="fws_5d84a4cdeb7d2" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding instance-39" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '100px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div><div id="fws_5d84a4cdeb9f7" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row  vc_row-o-equal-height vc_row-flex  vc_row-o-content-middle standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-6 wpb_column column_container vc_column_container col centered-text has-animation instance-40" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="reveal-from-bottom" data-delay={0}><div className="column-bg-overlay" />
                            <div className="column-inner-wrap"><div data-bg-cover className="column-inner no-extra-padding">
                              <div className="wpb_wrapper">
                                <div className="nectar-highlighted-text instance-1" data-style="half_text" data-using-custom-color="true" data-color="#ffffff" style={{}}>
                                  <h3 style={{ textAlign: 'left' }}><a href="mailto:markovskaya29@gmail.com"><em>markovskaya29@gmail.com<br />
                                  </em></a></h3>
                                </div>
                              </div>
                            </div></div>
                          </div>
                          <div className="vc_col-sm-6 wpb_column column_container vc_column_container col has-animation no-extra-padding instance-41" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="left" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation="fade-in-from-bottom" data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bottom-to-top bottom-to-top vc_custom_1566043067819" style={{ maxWidth: '400px', display: 'inline-block' }}>
                                  <div className="wpb_wrapper">
                                    <p>Подробно отвечу на вопросы по выполнению и реализации дизайн-проекта, сроков и бюджета.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div></div><div id="fws_5d84a4cdebe60" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-xs wpb_column column_container vc_column_container col no-extra-padding instance-42" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '100px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div><div id="fws_5d84a4cdec08d" data-midnight data-column-margin="default" data-bg-mobile-hidden className="wpb_row vc_row-fluid vc_row inner_row standard_section    " style={{ paddingTop: '0px', paddingBottom: '0px' }}><div className="row-bg-wrap"> <div className="row-bg   " style={{}} /> </div><div className="col span_12  left">
                          <div className="vc_col-sm-12 vc_hidden-lg vc_hidden-md vc_hidden-sm wpb_column column_container vc_column_container col no-extra-padding instance-43" data-t-w-inherits="default" data-shadow="none" data-border-radius="none" data-border-animation data-border-animation-delay data-border-width="none" data-border-style="solid" data-border-color data-bg-cover data-padding-pos="all" data-has-bg-color="false" data-bg-color data-bg-opacity={1} data-hover-bg data-hover-bg-opacity={1} data-animation data-delay={0}><div className="column-bg-overlay" />
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="divider-wrap" data-alignment="default"><div style={{ height: '60px' }} className="divider" /></div>
                              </div>
                            </div>
                          </div>
                        </div></div>
                      </div>
                    </div>
                  </div>
                </div></div>
              </div>{/*/row*/}
            </div>{/*/container*/}
          </div>{/*/container-wrap*/}
          <div id="footer-outer" data-cols={5} data-custom-color="true" data-disable-copyright="true" data-matching-section-color="true" data-copyright-line="true" data-using-bg-img="false" data-bg-img-overlay="0.7" data-full-width={1} data-using-widget-area="true" data-midnight="light">
            <div id="footer-widgets" data-has-widgets="true" data-cols={5}>
              <div className="container">
                <div className="row">
                  <div className="col span_3 one-fourths clear-both">
                    {/* Footer widget area 1 */}
                    <div id="text-3" className="widget widget_text">			<div className="textwidget"><p>© 2019, Irina Markovskaia<br />
                      Частный дизайн интерьеров</p>
                    </div>
                    </div>					</div>{/*/span_3*/}
                  <div className="col span_3 one-fourths right-edge">
                    {/* Footer widget area 2 */}
                    <div id="nav_menu-4" className="widget widget_nav_menu"><div className="menu-main-menu-container"><ul id="menu-main-menu-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1296 current_page_item menu-item-1572"><a href="index.html" aria-current="page">Главная</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1571"><a href="portfolio/index.html">Проекты</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712"><a href="services/index.html">Услуги и цены</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897"><a href="about/index.html">Обо мне</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145"><a href="contacts/index.html">Контакты</a></li>
                    </ul></div></div>
                  </div>{/*/span_3*/}
                  <div className="col span_3 one-fourths clear-both">
                    {/* Footer widget area 3 */}
                    <div id="text-5" className="widget widget_text">			<div className="textwidget"><p><a href="https://www.instagram.com/markovskayadesign/">instagram</a><br />
                      <a href="https://www.houzz.ru/professionaly/dizayn-interyera/irina-markovskaya-pfvwru-pf~1511930690">houzz</a></p>
                    </div>
                    </div>
                  </div>{/*/span_3*/}
                  <div className="col span_3 one-fourths right-edge">
                    {/* Footer widget area 4 */}
                    <div id="text-2" className="widget widget_text">			<div className="textwidget"><p style={{ textAlign: 'left' }}>Сделано в&nbsp;<a href="https://arcr.ru/">arcr.ru</a></p>
                    </div>
                    </div>
                  </div>{/*/span_3*/}
                </div>{/*/row*/}
              </div>{/*/container*/}
            </div>{/*/footer-widgets*/}
          </div>{/*/footer-outer*/}
          <div id="slide-out-widget-area-bg" className="slide-out-from-right dark">
          </div>
          <div id="slide-out-widget-area" className="slide-out-from-right" data-dropdown-func="separate-dropdown-parent-link" data-back-txt="Back">
            <div className="inner" data-prepend-menu-mobile="false">
              <a className="slide_out_area_close" href="#">
                <span className="icon-salient-x icon-default-style" />				</a>
              <div className="off-canvas-menu-container mobile-only">
                <ul className="menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1296 current_page_item menu-item-1572"><a href="index.html" aria-current="page">Главная</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1571"><a href="portfolio/index.html">Проекты</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712"><a href="services/index.html">Услуги и цены</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897"><a href="about/index.html">Обо мне</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145"><a href="contacts/index.html">Контакты</a></li>
                </ul>
                <ul className="menu secondary-header-items">
                </ul>
              </div>
            </div>
            <div className="bottom-meta-wrap"><ul className="off-canvas-social-links mobile-only"><li><a target="_blank" href="https://www.instagram.com/markovskayadesign/"><i className="fa fa-instagram" /> </a></li><li><a target="_blank" href="https://www.houzz.ru/professionaly/dizayn-interyera/irina-markovskaya-pfvwru-pf~1511930690"><i className="fa fa-houzz" /> </a></li></ul></div>{/*/bottom-meta-wrap*/}
          </div>
        </div> {/*/ajax-content-wrap*/}
      {/* </div> */}
      </div>
    )
  }
}

export default Main
