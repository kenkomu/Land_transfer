import type { Component } from 'solid-js';

const PropertyListings: Component = () => {

    return (

        <div>






            <div class="maxw1600 m0a dashboard-bd">
                {/* Wrapper */}
                <div id="wrapper" class="int_main_wraapper">
                    {/* START SECTION HEADINGS */}
                    {/* Header Container
        ================================================== */}
                    <div class="dash-content-wrap">
                        <header id="header-container" class="db-top-header">
                            {/* Header */}
                            <div id="header">
                                <div class="container-fluid">
                                    {/* Left Side Content */}
                                    <div class="left-side">
                                        {/* Logo */}
                                        <div id="logo">
                                            <a href="index.{/*"><img src="images/logo.svg" alt="" /></a>
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
                                        <nav id="navigation" class="style-1">
                                            <ul id="responsive">
                                                <li><a href="my-listings.{/*#">Home</a>

                                                </li>
                                                <li><a href="my-listings.{/*#">Listing</a>

                                                </li>
                                                <li><a href="my-listings.{/*#">Property</a>

                                                </li>



                                            </ul>
                                        </nav>
                                        <div class="clearfix"></div>
                                        {/* Main Navigation / End */}
                                    </div>
                                    {/* Left Side Content / End */}
                                    {/* Right Side Content / */}
                                    <div class="header-user-menu user-menu">
                                        <div class="header-user-name">
                                            <span><img src="images/testimonials/ts-1.jpg" alt="" /></span>Hi, Mary!
                                        </div>

                                    </div>
                                    {/* Right Side Content / End */}
                                </div>
                            </div>
                            {/* Header / End */}
                        </header>
                    </div>
                    <div class="clearfix"></div>
                    {/* Header Container / End */}

                    {/* START SECTION USER PROFILE */}
                    <section class="user-page section-padding pt-5">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                                    <div class="user-profile-box mb-0">
                                        <div class="sidebar-header"><img src="images/logo-blue.svg" alt="header-logo2.png" /> </div>
                                        <div class="header clearfix">
                                            <img src="images/testimonials/ts-1.jpg" alt="avatar" class="img-fluid profile-img" />
                                        </div>
                                        <div class="active-user">
                                            <h2>Mary Smith</h2>
                                        </div>
                                        <div class="detail clearfix">
                                            <ul class="mb-0">
                                                <li>
                                                    <a href="dashboard.{/*">
                                                        <i class="fa fa-map-marker"></i> Dashboard
                                                    </a>
                                                </li>

                                                <li>
                                                    <a class="active" href="my-listings.{/*">
                                                        <i class="fa fa-list" aria-hidden="true"></i>My Properties
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="add-property.{/*">
                                                        <i class="fa fa-list" aria-hidden="true"></i>Add Property
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="payment-method.{/*">
                                                        <i class="fas fa-credit-card"></i>Payments
                                                    </a>
                                                </li>


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
                                    <div class="col-lg-12 mobile-dashbord dashbord">
                                        <div class="dashboard_navigationbar dashxl">
                                            <div class="dropdown">
                                               <button onclick="myFunction()" class="dropbtn"><i class="fa fa-bars pr10 mr-2"></i> Dashboard Navigation</button>
                                                <ul id="myDropdown" class="dropdown-content">
                                                    <li>
                                                        <a href="dashboard.{/*">
                                                            <i class="fa fa-map-marker mr-3"></i> Dashboard
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a class="active" href="my-listings.{/*">
                                                            <i class="fa fa-list mr-3" aria-hidden="true"></i>My Properties
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="add-property.{/*">
                                                            <i class="fa fa-list mr-3" aria-hidden="true"></i>Add Property
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="payment-method.{/*">
                                                            <i class="fas fa-credit-card mr-3"></i>Payments
                                                        </a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="my-properties">
                                        <table class="table-responsive">
                                            <thead>
                                                <tr>
                                                    <th class="pl-2">My Properties</th>
                                                    <th class="p-0"></th>
                                                    <th>Date Added</th>
                                                    <th>Views</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="image myelist">
                                                        <a href="single-property-1.{/*"><img alt="my-properties-3" src="images/feature-properties/fp-1.jpg" class="img-fluid" /></a>
                                                    </td>
                                                    <td>
                                                        <div class="inner">
                                                            <a href="single-property-1.{/*"><h2>Ruiru Villa</h2></a>
                                                            <figure><i class="lni-map-marker"></i> Nairobi</figure>
                                                            <ul class="starts text-left mb-0">
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="ml-3">(6 Reviews)</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>08.14.2020</td>
                                                    <td>163</td>
                                                    <td class="actions">
                                                        <a href="my-listings.{/*#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                                        <a href="my-listings.{/*#"><i class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="image">
                                                        <a href="single-property-1.{/*"><img alt="my-properties-3" src="images/feature-properties/fp-2.jpg" class="img-fluid" /></a>
                                                    </td>
                                                    <td>
                                                        <div class="inner">
                                                            <a href="single-property-1.{/*"><h2>Luxury Villa House</h2></a>
                                                            <figure><i class="lni-map-marker"></i> Nairobi</figure>
                                                            <ul class="starts text-left mb-0">
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star-o"></i>
                                                                </li>
                                                                <li class="ml-3">(6 Reviews)</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>08.14.2020</td>
                                                    <td>202</td>
                                                    <td class="actions">
                                                        <a href="my-listings.{/*#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                                        <a href="my-listings.{/*#"><i class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="image">
                                                        <a href="single-property-1.{/*"><img alt="my-properties-3" src="images/feature-properties/fp-3.jpg" class="img-fluid" /></a>
                                                    </td>
                                                    <td>
                                                        <div class="inner">
                                                            <a href="single-property-1.{/*"><h2>Luxury Villa House</h2></a>
                                                            <figure><i class="lni-map-marker"></i> Nairobi</figure>
                                                            <ul class="starts text-left mb-0">
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="ml-3">(6 Reviews)</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>08.14.2020</td>
                                                    <td>412</td>
                                                    <td class="actions">
                                                        <a href="my-listings.{/*#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                                        <a href="my-listings.{/*#"><i class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="image">
                                                        <a href="single-property-1.{/*"><img alt="my-properties-3" src="images/feature-properties/fp-4.jpg" class="img-fluid" /></a>
                                                    </td>
                                                    <td>
                                                        <div class="inner">
                                                            <a href="single-property-1.{/*"><h2>Luxury Villa House</h2></a>
                                                            <figure><i class="lni-map-marker"></i> Nairobi</figure>
                                                            <ul class="starts text-left mb-0">
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star-o"></i>
                                                                </li>
                                                                <li class="ml-3">(6 Reviews)</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>08.14.2020</td>
                                                    <td>675</td>
                                                    <td class="actions">
                                                        <a href="my-listings.{/*#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                                        <a href="my-listings.{/*#"><i class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="image">
                                                        <a href="single-property-1.{/*"><img alt="my-properties-3" src="images/feature-properties/fp-5.jpg" class="img-fluid" /></a>
                                                    </td>
                                                    <td>
                                                        <div class="inner">
                                                            <a href="single-property-1.{/*"><h2>Luxury Villa House</h2></a>
                                                            <figure><i class="lni-map-marker"></i> Nairobi</figure>
                                                            <ul class="starts text-left mb-0">
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="ml-3">(6 Reviews)</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>08.14.2020</td>
                                                    <td>325</td>
                                                    <td class="actions">
                                                        <a href="my-listings.{/*#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                                        <a href="my-listings.{/*#"><i class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="image">
                                                        <a href="single-property-1.{/*"><img alt="my-properties-3" src="images/feature-properties/fp-6.jpg" class="img-fluid" /></a>
                                                    </td>
                                                    <td>
                                                        <div class="inner">
                                                            <a href="single-property-1.{/*"><h2>Luxury Villa House</h2></a>
                                                            <figure><i class="lni-map-marker"></i> Nairobi</figure>
                                                            <ul class="starts text-left mb-0">
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star"></i>
                                                                </li>
                                                                <li class="mb-0"><i class="fa fa-star-o"></i>
                                                                </li>
                                                                <li class="ml-3">(6 Reviews)</li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td>08.14.2020</td>
                                                    <td>247</td>
                                                    <td class="actions">
                                                        <a href="my-listings.{/*#" class="edit"><i class="lni-pencil"></i>Edit</a>
                                                        <a href="my-listings.{/*#"><i class="far fa-trash-alt"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END SECTION USER PROFILE */}

                    {/* START FOOTER */}
                    <footer class="first-footer">
                        <div class="second-footer">
                            <div class="container">
                                <p>2021 © Copyright - All Rights Reserved.</p>
                                <p>Made With <i aria-hidden="true"></i> Ken</p>
                            </div>
                        </div>
                    </footer>

                    <a data-scroll href="my-listings.{/*#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
                    {/* END FOOTER */}

              


                </div>
                {/* Wrapper / End */}
            </div>



        </div>

    )
}


export default PropertyListings;