import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
    <div>
        < div id="footer-outer" data-cols={5} data-custom-color="true" data- disable-copyright="true" data-matching-section-color="true" data-copyright-line="true" data-using-bg-img="false" data-bg-img-overlay="0.7" data-full-width={1} data-using-widget-area="true" >
            <div id="footer-widgets" data-has-widgets="true" data-cols={5}>
                <div className="container">
                    <div className="row">
                        <div className="col span_3">
                            {/* Footer widget area 1 */}
                            <div id="text-3" className="widget widget_text">
                                <div className="textwidget">
                                    <p>© 2019, Irina Markovskaia<br />
                                        Частный дизайн интерьеров</p>
                                </div>
                            </div>
                        </div>
                        {/*/span_3*/}
                        <div className="col span_3">
                            {/* Footer widget area 2 */}
                            <div id="nav_menu-4" className="widget widget_nav_menu">
                                <div className="menu-main-menu-container">
                                    <ul id="menu-main-menu-1" className="menu">
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1296 current_page_item menu-item-1572">
                                            <a href="index.html" aria-current="page">Главная</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1571">
                                            <a href="portfolio/index.html">Проекты</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712">
                                            <a href="services/index.html">Услуги и цены</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897">
                                            <a href="about/index.html">Обо мне</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145">
                                            <a href="contacts/index.html">Контакты</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*/span_3*/}
                        <div className="col span_3">
                            {/* Footer widget area 3 */}
                            <div id="text-5" className="widget widget_text">
                                <div className="textwidget">
                                    <p><a href="https://www.instagram.com/markovskayadesign/">instagram</a><br />
                                        <a href="https://www.houzz.ru/professionaly/dizayn-interyera/irina-markovskaya-pfvwru-pf~1511930690">houzz</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*/span_3*/}
                        <div className="col span_3">
                            {/* Footer widget area 4 */}
                            <div id="text-2" className="widget widget_text">
                                <div className="textwidget">
                                    <p style={{ textAlign: 'left' }}>Сделано в&nbsp;<a href="https://arcr.ru/">arcr.ru</a></p>
                                </div>
                            </div>
                        </div>
                        {/*/span_3*/}
                    </div>
                    {/*/row*/}
                </div>
                {/*/container*/}
            </div>
            {/*/footer-widgets*/}
        </div >
        < div id="slide-out-widget-area-bg" className="slide-out-from-right dark" >
        </div >
        <div id="slide-out-widget-area" className="slide-out-from-right" data-dropdown-func="separate-dropdown-parent-link" data-back-txt="Back">
            <div className="inner" data-prepend-menu-mobile="false">
                <a className="slide_out_area_close" href="#">
                    <span className="icon-salient-x icon-default-style" /> </a>
                <div className="off-canvas-menu-container mobile-only">
                    <ul className="menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1296 current_page_item menu-item-1572">
                            <a href="index.html" aria-current="page">Главная</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1571"><a href="portfolio/index.html">Проекты</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1712"><a href="services/index.html">Услуги и цены</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1897"><a href="about/index.html">Обо мне</a></li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2145"><a href="contacts/index.html">Контакты</a></li>
                    </ul>
                    <ul className="menu secondary-header-items">
                    </ul>
                </div>
            </div>
            <div className="bottom-meta-wrap">
                <ul className="off-canvas-social-links mobile-only">
                    <li><a target="_blank" href="https://www.instagram.com/markovskayadesign/"><i className="fa fa-instagram" /> </a></li>
                    <li><a target="_blank" href="https://www.houzz.ru/professionaly/dizayn-interyera/irina-markovskaya-pfvwru-pf~1511930690"><i className="fa fa-houzz" /> </a></li>
                </ul>
            </div>
            {/*/bottom-meta-wrap*/}
        </div>
    </div>

)

export default Footer;