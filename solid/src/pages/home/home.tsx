import type { Component } from 'solid-js';
import { useNavigate } from "@solidjs/router";

//         <div>
// home  <button onClick={(e)=>{
//     e.preventDefault();
//             navigate("/login");
//         }}>Login</button>
//         </div>


const Home: Component = () => {
    // const navigate = useNavigate();
    return (

        <div class="int_dark_bg">
            {/* Wrapper */}
            <div id="wrapper" class="int_main_wraapper">
                <div class="int_infosidebar">


                </div>
                {/* START SECTION HEADINGS */}
                {/* Header Container
        ================================================== */}
                <header id="header-container">
                    {/* Header */}
                    <div id="header" class="int_content_wraapper hd">
                        <div class="container container-header">
                            {/* Left Side Content */}
                            <div class="left-side">
                                {/* Logo */}
                                <div id="logo">
                                    <a href="index.html"><img src="images/logo-white-1.svg"
                                        data-sticky-logo="images/logo-white-1.svg" alt="" /></a>
                                </div>
                                {/* Mobile Navigation */}
                                <div class="mmenu-trigger">
                                    <button class="hamburger hamburger--collapse" type="button">
                                        <span class="hamburger-box">
                                            <span class="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                                {/* Main Navigation */}
                                <nav id="navigation" class="style-1 black">
                                    <ul id="responsive">

                                        <li>
                                            <a href="index-13.html#">Home</a>

                                        </li>


                                        <li>
                                            <a href="index-13.html#">Property</a>
                                        </li>


                                        <li>
                                            <a href="index-13.html#">Buyer</a>
                                        </li>


                                        <li>
                                            <a href="index-13.html#">Seller</a>
                                        </li>

                                    </ul>
                                </nav>
                                {/* Main Navigation / End */}
                            </div>
                            {/* Left Side Content / End */}

                            {/* Right Side Content / End */}
                            <div class="right-side d-none d-none d-lg-none d-xl-flex">
                                {/* Header Widget */}
                                <div class="header-widget">
                                    <a href="add-property.html" class="button border">Add Listing<i
                                        class="fas fa-laptop-house ml-2"></i></a>
                                </div>
                                {/* Header Widget / End */}
                            </div>


                            <div class="right-side d-none d-none d-lg-none d-xl-flex sign ml-0">
                                {/* Header Widget */}
                                <div class="header-widget sign-in">
                                    <div class="show-reg-form modal-open"><a href="index-13.html#">Sign In</a></div>
                                </div>
                                {/* Header Widget / End */}
                            </div>
                            {/* Right Side Content / End */}

                            {/* lang-wrap*/}
                            <div class="header-user-menu user-menu add d-none d-lg-none d-xl-flex">

                            </div>
                            {/* lang-wrap end*/}

                        </div>
                    </div>
                    {/* Header / End */}

                </header>
                <div class="clearfix"></div>
                {/* Header Container / End */}

                <div class="int_content_wraapper int_content_left">
                    {/*===Start Revolution Slider===*/}
                    <div class="int_banner_slider">
                        <div class="banner_box_wrapper">
                            <div class="container-fluid">
                                <div class="row ">
                                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 align-self-center">
                                        <div class="main_contentblock">
                                            <div class="swiper-container" data-aos="fade-right">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="swiper_imgbox imgbox1">
                                                            <div class="swipper_img">
                                                                <h4>For Sale <span>Land</span></h4>
                                                                <h2>ORCHARD Land 2</h2>
                                                                <h3>$ 230,000<span class="banner_span1"></span></h3>
                                                                <p><i class="fa fa-map-marker mr-3"></i>Nairobi, Kenya
                                                                </p>
                                                                {/* homes List */}
                                                                <ul class="homes-list clearfix">

                                                                    <li>
                                                                        <i class="fa fa-bath" aria-hidden="true"></i>
                                                                        <span>Water & Electricity </span>
                                                                    </li>
                                                                    <li>
                                                                        <i class="fa fa-object-group"
                                                                            aria-hidden="true"></i>
                                                                        <span>50 by 100</span>
                                                                    </li>
                                                                    <li>
                                                                        <i class="fas fa-warehouse"
                                                                            aria-hidden="true"></i>
                                                                        <span>24/7 security</span>
                                                                    </li>
                                                                </ul>
                                                                <a href="single-property-1.html" class="int_btn">View
                                                                    Land <span class="btn_caret"><i
                                                                        class="fas fa-caret-right"></i></span></a>
                                                                <h1>Real</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="swiper_imgbox imgbox2">
                                                            <div class="swipper_img">
                                                                <h4>For Sale <span>Land</span></h4>
                                                                <h2>Ruiru Villa Estate</h2>
                                                                <h3>$ 4,600<span class="banner_span1"></span></h3>
                                                                <p><i class="fa fa-map-marker mr-3"></i>Nairobi, Kenya
                                                                </p>
                                                                {/* homes List */}
                                                                <ul class="homes-list clearfix">
                                                                    <li>
                                                                        <i class="fa fa-bath" aria-hidden="true"></i>
                                                                        <span>Water & Electricity </span>
                                                                    </li>
                                                                    <li>
                                                                        <i class="fa fa-object-group"
                                                                            aria-hidden="true"></i>
                                                                        <span>50 by 100</span>
                                                                    </li>
                                                                    <li>
                                                                        <i class="fas fa-warehouse"
                                                                            aria-hidden="true"></i>
                                                                        <span>24/7 security</span>
                                                                    </li>
                                                                </ul>
                                                                <a href="single-property-1.html" class="int_btn">View
                                                                    Land <span class="btn_caret"><i
                                                                        class="fas fa-caret-right"></i></span></a>
                                                                <h1>Real</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-8 col-lg-8 col-md-7 align-self-center pr-0">
                                        {/*=== Swiper ===*/}
                                        <div class="main_imgblock">
                                            <div class="swiper-container" data-aos="fade-left">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="swiper_contbox">
                                                            <div class="swipper_conntent">
                                                                <img src="images/slider/img2.jpg" class="img-fluid "
                                                                    alt="images" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="swiper_contbox">
                                                            <div class="swipper_conntent">
                                                                <img src="images/slider/img1.jpg" class="img-fluid"
                                                                    alt="images" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*=== Add Arrows ===*/}
                                <div class="banner_navi">
                                    <div class="swiper-button-next">Next</div>
                                    <div class="swiper-button-prev">Prev</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*===End Revolution Slider===*/}
                </div>

                {/* START SECTION PROPERTIES FOR SALE */}
                <section class="recently portfolio featured bg-black-1 rec-pro">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="section-title col-md-5 pl-44">
                                <h3>Lands</h3>
                                <h2>For Sale</h2>
                            </div>
                        </div>
                        <div class="portfolio col-xl-12 p-0">
                            <div class="slick-lancers">
                                <div class="agents-grid">
                                    <div class="landscapes listing-item compact thehp-1" data-aos="fade-up"
                                        data-aos-delay="150">
                                        <a href="single-property-1.html" class="recent-16">
                                            <div class="recent-img16 img-fluid img-center"
                                                style="background-image: url(images/feature-properties/img3.jpg);"></div>
                                            <div class="recent-content"></div>
                                            <div class="listing-badges">
                                                <span>For Sale</span>
                                            </div>
                                            <div class="recent-details">
                                                <div class="recent-title">Kamakis</div>
                                                <div class="recent-price mb-3">$230,000</div>
                                                <div class="house-details thehp-1"><i class="fa fa-bath mr-1"
                                                    aria-hidden="true"></i>Water &
                                                    Electricity<span>|</span><i class="fa fa-object-group mr-1"
                                                        aria-hidden="true"></i> 50 by 100
                                                </div>
                                            </div>
                                            <div class="view-proper">View Details</div>
                                        </a>
                                    </div>
                                </div>
                                <div class="agents-grid" data-aos="fade-up" data-aos-delay="250">
                                    <div class="people listing-item compact thehp-1">
                                        <a href="single-property-1.html" class="recent-16">
                                            <div class="recent-img16 img-center"
                                                style="background-image: url(images/feature-properties/img4.jpg);"></div>
                                            <div class="recent-content"></div>
                                            <div class="listing-badges">
                                                <span>For Sale</span>
                                            </div>
                                            <div class="recent-details">
                                                <div class="recent-title">Family Villas</div>
                                                <div class="recent-price mb-3">$230,000</div>
                                                <div class="house-details thehp-1"><i class="fa fa-bath mr-1"
                                                    aria-hidden="true"></i>Water &
                                                    Electricity<span>|</span><i class="fa fa-object-group mr-1"
                                                        aria-hidden="true"></i> 50 by 100
                                                </div>
                                            </div>
                                            <div class="view-proper">View Details</div>
                                        </a>
                                    </div>
                                </div>
                                <div class="agents-grid" data-aos="fade-up" data-aos-delay="350">
                                    <div class="people landscapes no-pb pbp-3 listing-item compact thehp-1">
                                        <a href="single-property-1.html" class="recent-16">
                                            <div class="recent-img16 img-center"
                                                style="background-image: url(images/feature-properties/img10.jpg);"></div>
                                            <div class="recent-content"></div>
                                            <div class="listing-badges">
                                                <span>For Sale</span>
                                            </div>
                                            <div class="recent-details">
                                                <div class="recent-title">Villa Estate</div>
                                                <div class="recent-price mb-3">$230,000</div>
                                                <div class="house-details thehp-1"><i class="fa fa-bath mr-1"
                                                    aria-hidden="true"></i>Water &
                                                    Electricity<span>|</span><i class="fa fa-object-group mr-1"
                                                        aria-hidden="true"></i> 50 by 100
                                                </div>
                                            </div>
                                            <div class="view-proper">View Details</div>
                                        </a>
                                    </div>
                                </div>
                                <div class="agents-grid" data-aos="fade-up" data-aos-delay="450">
                                    <div class="landscapes listing-item compact thehp-1">
                                        <a href="single-property-1.html" class="recent-16">
                                            <div class="recent-img16 img-center"
                                                style="background-image: url(images/interior/img5.jpg);"></div>
                                            <div class="recent-content"></div>
                                            <div class="listing-badges">
                                                <span>For Sale</span>
                                            </div>
                                            <div class="recent-details">
                                                <div class="recent-title">Luxury Condo</div>
                                                <div class="recent-price mb-3">$230,000</div>
                                                <div class="house-details thehp-1"><i class="fa fa-bath mr-1"
                                                    aria-hidden="true"></i>Water &
                                                    Electricity<span>|</span><i class="fa fa-object-group mr-1"
                                                        aria-hidden="true"></i> 50 by 100
                                                </div>
                                            </div>
                                            <div class="view-proper">View Details</div>
                                        </a>
                                    </div>
                                </div>
                                <div class="agents-grid" data-aos="fade-up" data-aos-delay="550">
                                    <div class="people listing-item compact thehp-1">
                                        <a href="single-property-1.html" class="recent-16">
                                            <div class="recent-img16 img-center"
                                                style="background-image: url(images/interior/img11.jpg);"></div>
                                            <div class="recent-content"></div>
                                            <div class="listing-badges">
                                                <span>For Sale</span>
                                            </div>
                                            <div class="recent-details">
                                                <div class="recent-title">Luxury Villa</div>
                                                <div class="recent-price mb-3">$230,000</div>
                                                <div class="house-details thehp-1"><i class="fa fa-bath mr-1"
                                                    aria-hidden="true"></i>Water &
                                                    Electricity<span>|</span><i class="fa fa-object-group mr-1"
                                                        aria-hidden="true"></i> 50 by 100
                                                </div>
                                            </div>
                                            <div class="view-proper">View Details</div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* END SECTION PROPERTIES FOR SALE */}

                {/* START SECTION SERVICES */}
                <section class="services-home rec-pro">
                    <div class="container-fluid">
                        <div class="section-title">
                            <h3>Property</h3>
                            <h2>Services</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-12 m-top-0 m-bottom-40" data-aos="fade-up" data-aos-delay="150">
                                <div class="service bg-light-2 border-1 border-light box-shadow-1 box-shadow-2-hover">
                                    <div class="media">
                                        <i class="fa fa-home bg-base text-white rounded-100 box-shadow-1 p-top-5 p-bottom-5 p-right-5 p-left-5"></i>
                                    </div>
                                    <div class="agent-section p-top-35 p-bottom-30 p-right-25 p-left-25">
                                        <h4 class="m-bottom-15 text-bold-700">Houses</h4>
                                        <p>Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo
                                            rhoncus ut imperdiet venenatis vitae justo.</p>
                                        <a class="text-base text-base-dark-hover text-size-13"
                                            href="https://code-theme.com/html/findhouses/properties-full-list.html">Read
                                            More <i class="fa fa-long-arrow-right ml-2"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12 m-top-40 m-bottom-40" data-aos="fade-up"
                                data-aos-delay="250">
                                <div class="service bg-light-2 border-1 border-light box-shadow-1 box-shadow-2-hover">
                                    <div class="media">
                                        <i class="fas fa-building bg-base text-white rounded-100 box-shadow-1 p-top-5 p-bottom-5 p-right-5 p-left-5"></i>
                                    </div>
                                    <div class="agent-section p-top-35 p-bottom-30 p-right-25 p-left-25">
                                        <h4 class="m-bottom-15 text-bold-700">Apartments</h4>
                                        <p>Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo
                                            rhoncus ut imperdiet venenatis vitae justo.</p>
                                        <a class="text-base text-base-dark-hover text-size-13"
                                            href="https://code-theme.com/html/findhouses/properties-full-list.html">Read
                                            More <i class="fa fa-long-arrow-right ml-2"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12 m-top-40 m-bottom-40 commercial" data-aos="fade-up"
                                data-aos-delay="350">
                                <div class="service bg-light-2 border-1 border-light box-shadow-1 box-shadow-2-hover">
                                    <div class="media">
                                        <i class="fas fa-warehouse bg-base text-white rounded-100 box-shadow-1 p-top-5 p-bottom-5 p-right-5 p-left-5"></i>
                                    </div>
                                    <div class="agent-section p-top-35 p-bottom-30 p-right-25 p-left-25">
                                        <h4 class="m-bottom-15 text-bold-700">Commercial</h4>
                                        <p>Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo
                                            rhoncus ut imperdiet venenatis vitae justo.</p>
                                        <a class="text-base text-base-dark-hover text-size-13"
                                            href="https://code-theme.com/html/findhouses/properties-full-list.html">Read
                                            More <i class="fa fa-long-arrow-right ml-2"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                {/* END SECTION SERVICES */}


                {/* START SECTION PRICING */}

                {/* END SECTION PRICING */}

                {/* START SECTION TESTIMONIALS */}
                <section class="testimonials bg-black-2 rec-pro">
                    <div class="container-fluid">
                        <div class="section-title">
                            <h3>Happy</h3>
                            <h2>Customers</h2>
                        </div>
                        <div class="owl-carousel style1">
                            <div class="test-1" data-aos="fade-up" data-aos-delay="150">
                                <h3>Lisa Smith</h3>
                                <img src="images/testimonials/ts-1.jpg" alt="" />
                                <h6 class="mt-2">Nairobi</h6>
                                <ul class="starts text-center mb-2">
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                                    donec, suscipit tortor et sapien donec.</p>
                            </div>
                            <div class="test-1" data-aos="fade-up" data-aos-delay="250">
                                <h3>Jhon Morris</h3>
                                <img src="images/testimonials/ts-2.jpg" alt="" />
                                <h6 class="mt-2">Kiambu</h6>
                                <ul class="starts text-center mb-2">
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star-o"></i>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                                    donec, suscipit tortor et sapien donec.</p>
                            </div>
                            <div class="test-1" data-aos="fade-up" data-aos-delay="350">
                                <h3>Mary Deshaw</h3>
                                <img src="images/testimonials/ts-3.jpg" alt="" />
                                <h6 class="mt-2">Mombasa</h6>
                                <ul class="starts text-center mb-2">
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                                    donec, suscipit tortor et sapien donec.</p>
                            </div>
                            <div class="test-1" data-aos="fade-up" data-aos-delay="450">
                                <h3>Gary Steven</h3>
                                <img src="images/testimonials/ts-4.jpg" alt="" />
                                <h6 class="mt-2">Kisumu</h6>
                                <ul class="starts text-center mb-2">
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star-o"></i>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                                    donec, suscipit tortor et sapien donec.</p>
                            </div>
                            <div class="test-1" data-aos="fade-up" data-aos-delay="550">
                                <h3>Cristy Mayer</h3>
                                <img src="images/testimonials/ts-5.jpg" alt="" />
                                <h6 class="mt-2">Nakuru</h6>
                                <ul class="starts text-center mb-2">
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                                    donec, suscipit tortor et sapien donec.</p>
                            </div>
                            <div class="test-1" data-aos="fade-up">
                                <h3>Ichiro Tasaka</h3>
                                <img src="images/testimonials/ts-6.jpg" alt="" />
                                <h6 class="mt-2">Kilifi</h6>
                                <ul class="starts text-center mb-2">
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star"></i>
                                    </li>
                                    <li><i class="fa fa-star-o"></i>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis
                                    donec, suscipit tortor et sapien donec.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END SECTION TESTIMONIALS */}

                {/* START SECTION BLOG */}

                {/* END SECTION BLOG */}

                {/* START FOOTER */}
                <footer class="first-footer rec-pro">
                    <div class="top-footer bg-black-2">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-3 col-md-6">
                                    <div class="netabout">
                                        <a href="index.html" class="logo">
                                            <img src="images/logo-white-1.svg" alt="netcom" />
                                        </a>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt
                                            architecto soluta laboriosam, perspiciatis, aspernatur officiis esse.</p>
                                    </div>
                                    <div class="contactus">
                                        <ul>
                                            <li>
                                                <div class="info">
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                    <p class="in-p">Nairobi, Kenya</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="info">
                                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                                    <p class="in-p">+25412345678</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="info">
                                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                                    <p class="in-p ti">support@findhouses.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">

                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="widget">
                                        <h3>Twitter Feeds</h3>
                                        <div class="twitter-widget contuct">
                                            <div class="twitter-area">
                                                <div class="single-item">
                                                    <div class="icon-holder">
                                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="text">
                                                        <h5><a href="index-13.html#">@findhouses</a> all share them with
                                                            me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                                <div class="single-item">
                                                    <div class="icon-holder">
                                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="text">
                                                        <h5><a href="index-13.html#">@findhouses</a> all share them with
                                                            me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                                <div class="single-item">
                                                    <div class="icon-holder">
                                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="text">
                                                        <h5><a href="index-13.html#">@findhouses</a> all share them with
                                                            me baby said inspet.</h5>
                                                        <h4>about 5 days ago</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="newsletters">
                                        <h3>Newsletters</h3>
                                        <p>Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to
                                            receive news in your inbox.</p>
                                    </div>
                                    <form class="bloq-email mailchimp form-inline" method="post">
                                        <label for="subscribeEmail" class="error"></label>
                                        <div class="email">
                                            <input type="email" id="subscribeEmail" name="EMAIL"
                                                placeholder="Enter Your Email" />
                                            <input type="submit" value="Subscribe" />
                                            <p class="subscription-success"></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-footer rec-pro">
                        <div class="container-fluid sd-f">
                            <p>2023 © Ken - All Rights Reserved.</p>
                            <ul class="netsocials">
                                <li><a href="index-13.html#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="index-13.html#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="index-13.html#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="index-13.html#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </footer>

                <a data-scroll href="index-13.html#wrapper" class="go-up"><i class="fa fa-angle-double-up"
                    aria-hidden="true"></i></a>
                {/* END FOOTER */}

                {/*register form */}
                <div class="login-and-register-form modal">
                    <div class="main-overlay"></div>
                    <div class="main-register-holder">
                        <div class="main-register fl-wrap">
                            <div class="close-reg"><i class="fa fa-times"></i></div>
                            <h3>Welcome to <span>Find<strong>Houses</strong></span></h3>
                            <div class="soc-log fl-wrap">
                                <p>Login</p>
                                <a href="index-13.html#" class="facebook-log"><i class="fa fa-facebook-official"></i>Log
                                    in with Facebook</a>
                                <a href="index-13.html#" class="twitter-log"><i class="fa fa-twitter"></i> Log in with
                                    Twitter</a>
                            </div>
                            <div class="log-separator fl-wrap"><span>Or</span></div>
                            <div id="tabs-container">
                                <ul class="tabs-menu">
                                    <li class="curSale"><a href="index-13.html#tab-1">Login</a></li>
                                    <li><a href="index-13.html#tab-2">Register</a></li>
                                </ul>
                                <div class="tab">
                                    <div id="tab-1" class="tab-contents">
                                        <div class="custom-form">
                                            {/* <form method="post" name="registerform">
                                        <label>Username or Email Address * </label>
                                        <input name="email" type="text" onClick="this.select()" value=""/>
                                        <label>Password * </label>
                                        <input name="password" type="password" onClick="this.select()" value=""/>
                                        <button type="submit" class="log-submit-btn"><span>Log In</span></button>
                                        <div class="clearfix"></div>
                                        <div class="filter-tags">
                                            <input id="check-a" type="checkbox" name="check"/>
                                            <label for="check-a">Remember me</label>
                                        </div>
                                    </form> */}
                                            <div class="lost_password">
                                                <a href="index-13.html#">Lost Your Password?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab">
                                        <div id="tab-2" class="tab-contents">
                                            <div class="custom-form">
                                                {/* <form method="post" name="registerform" class="main-register-form" id="main-register-form2">
                                            <label>First Name * </label>
                                            <input name="name" type="text" onclick="this.select()" value=""/>
                                            <label>Second Name *</label>
                                            <input name="name2" type="text" onClick="this.select()" value=""/>
                                            <label>Email Address *</label>
                                            <input name="email" type="text" onClick="this.select()" value=""/>
                                            <label>Password *</label>
                                            <input name="password" type="password" onClick="this.select()" value=""/>
                                            <button type="submit" class="log-submit-btn"><span>Register</span></button>
                                        </form> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*register form end */}

                {/* START PRELOADER */}
                {/*<div id="preloader">*/}
                {/*    <div id="status">*/}
                {/*        <div class="status-mes"></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* END PRELOADER */}


            </div>
            {/* Wrapper / End */}
        </div>


    )
}


export default Home;