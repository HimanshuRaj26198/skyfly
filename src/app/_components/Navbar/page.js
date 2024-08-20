"use client"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react";
import Country from "../../../../lib/countryFlag.json";
import Link from "next/link";



const Navbar = () => {
    const path = usePathname();
    const [country, setCountry] = useState("United States of America (the)");
    const [error, setError] = useState(null);
    const [flagUrl, setFlagUrl] = useState("/assets/img/flag/united-states.png");
    const [currency, setCurrency] = useState("USD");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                    const data = await response.json();
                    setCountry(data.countryName);
                    setFlagUrl(Country[data.countryName].flag);
                    setCurrency(Country[data.countryName].currency);
                    localStorage.setItem("country", JSON.stringify(Country[data.countryName]));

                },
                (error) => localStorage.setItem("country", JSON.stringify(Country[country]))
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        };


        if (document) {
            const gtag = document.createElement("script");
            gtag.src = "https://www.googletagmanager.com/gtag/js?id=AW-16665917801";

            const inlineScript = document.createElement('script');
            inlineScript.innerHTML = `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'AW-16665917801');`

            // const conversionScript = document.createElement("script");
            // conversionScript.innerHTML = `
            //     function gtag_report_conversion(url) {
            //     var callback = function () {
            //         if (typeof(url) != 'undefined') {
            //         window.location = url;
            //         }
            //     };
            //     gtag('event', 'conversion', {
            //         'send_to': 'AW-16665917801/8Xz-CJaCy8oZEOny9oo-',
            //         'event_callback': callback
            //     });
            //     return false;
            // `
            document.head.appendChild(gtag);
            document.head.appendChild(inlineScript);
            // document.head.appendChild(conversionScript);

            //talk to
            let tawktoScript = document.createElement("script");
            tawktoScript.type = "text/javascript";
            tawktoScript.innerHTML = `(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66bce0ce146b7af4a43a7218/1i58ssag4';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
            `

            document.head.appendChild(tawktoScript);
            //end tawkTo

            return () => {
                document.head.removeChild(gtag);
                document.head.removeChild(inlineScript);
                // document.head.removeChild(conversionScript);

            };
        };

    }, []);
    return <div className={`header ${path === "/" ? 'header-transparent theme' : 'navbar-light'}`} >
        <div className="container" >
            <nav id="navigation" className="navigation navigation-landscape">
                <div className="nav-header">
                    <a className="nav-brand static-show" href="#">
                        <img src="/assets/images/skyfly-logo.png" className="logo" alt="" /></a>
                    <a className="nav-brand mob-show" href="#">
                        <img src="/assets/images/skyfly-logo.png" className="logo" alt="" /></a>
                    <div className="nav-toggle"></div>
                    <div className="mobile_nav">
                        <ul>
                            <li className="currencyDropdown me-2">
                                <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span
                                    className="fw-medium">{currency}</span></a>
                            </li>
                            <li className="languageDropdown me-2">
                                <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">
                                    <img src={flagUrl} className="img-fluid" width="17" alt="Country" /></a>
                            </li>
                            <li>
                                <a href="#" className="bg-light-primary text-primary rounded" data-bs-toggle="modal"
                                    data-bs-target="#login"><i className="fa-regular fa-circle-user fs-6"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav-menus-wrapper" style={{ transitionProperty: "none" }}>
                    <ul className="nav-menu">

                        <li><Link href="/">Home<span className="submenu-indicator"></span></Link>
                            {/* <ul className="nav-dropdown nav-submenu">
                                <li>
                                    <a href="index.html">Home version 01</a>
                                </li>
                                <li>
                                    <a href="home-2.html">Home version 02</a>
                                </li>
                                <li>
                                    <a href="home-3.html">Home version 03</a>
                                </li>
                                <li>
                                    <a href="home-4.html">Home version 04</a>
                                </li>
                                <li>
                                    <a href="home-5.html">Home version 05</a>
                                </li>
                                <li>
                                    <a href="slider-home.html">Home version 06</a>
                                </li>
                            </ul> */}
                        </li>

                        <li><a href="JavaScript:Void(0);">About Us<span className="submenu-indicator"></span></a>
                            {/* <ul className="nav-dropdown nav-submenu">
                                <li><a href="JavaScript:Void(0);">Hotel<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="hotel-list-01.html">Hotel list 01</a></li>
                                        <li><a href="hotel-list-02.html">Hotel list 02</a></li>
                                        <li><a href="hotel-list-03.html">Hotel list 03</a></li>
                                        <li><a href="hotel-detail.html">Hotel Detail 01</a></li>
                                        <li><a href="hotel-detail-2.html">Hotel Detail 02</a></li>
                                    </ul>
                                </li>
                                <li><a href="JavaScript:Void(0);">Flight<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="flight-list-01.html">Flight List 01</a></li>
                                        <li><a href="flight-list-02.html">Flight List 02</a></li>
                                        <li><a href="Flight-detail.html">Flight Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="JavaScript:Void(0);">Rental<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="property-list-01.html">Rental List 01</a></li>
                                        <li><a href="property-list-02.html">Rental List 02</a></li>
                                        <li><a href="property-list-03.html">Rental List 03</a></li>
                                        <li><a href="rental-detail.html">Rental Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="JavaScript:Void(0);">Car<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="car-list-01.html">Car List 01</a></li>
                                        <li><a href="car-list-02.html">Car List 02</a></li>
                                        <li><a href="car-list-03.html">Car List 03</a></li>
                                        <li><a href="car-detail.html">Car Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="JavaScript:Void(0);">Destination<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="destination-01.html">Destination List 01</a></li>
                                        <li><a href="destination-02.html">Destination List 02</a></li>
                                        <li><a href="destination-03.html">Destination List 03</a></li>
                                        <li><a href="destination-detail.html">Destination Detail</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="join-us.html">Join with SkyFly</a>
                                </li>
                                <li>
                                    <a href="add-listing.html">Add Listing</a>
                                </li>
                                <li>
                                    <a href="compare-listing.html">Compare Listing</a>
                                </li>
                                <li>
                                    <a href="booking-page.html">Booking Page</a>
                                </li>
                                <li>
                                    <a href="my-profile.html">User Dashboard</a>
                                </li>
                            </ul> */}
                        </li>

                        <li><a href="JavaScript:Void(0);">Pages<span className="submenu-indicator"></span></a>
                            {/* <ul className="nav-dropdown nav-submenu">
                                <li><a href="JavaScript:Void(0);">Blog<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="classNameic-blog.html">ClassNameic Blog</a></li>
                                        <li><a href="blog.html">Blog Grid Style</a></li>
                                        <li><a href="blog-detail.html">Single Blog</a></li>
                                    </ul>
                                </li>
                                <li><a href="JavaScript:Void(0);">Authentication<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="login.html">Sign In</a></li>
                                        <li><a href="register.html">Sign Up</a></li>
                                        <li><a href="forgot-password.html">Forgot Password</a></li>
                                        <li><a href="two-factor-auth.html">Two factor authentication</a></li>
                                    </ul>
                                </li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="career-page.html">Career Page</a></li>
                                <li><a href="help-center.html">Help Center</a></li>
                                <li><a href="faq.html">FAQ's</a></li>
                                <li><a href="404.html">Error Page</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="JavaScript:Void(0);">Contact Us<span className="submenu-indicator"></span></a>
                                    <ul className="nav-dropdown nav-submenu">
                                        <li><a href="contact-v1.html">Contact V.01</a></li>
                                        <li><a href="contact-v2.html">Contact V0.2</a></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>

                        <li><a href="JavaScript:Void(0);">Menu<span className="submenu-indicator"></span></a>
                            {/* <ul className="nav-dropdown nav-submenu xxl-menu">
                                <li>
                                    <a href="home-stay.html">
                                        <div className="mega-advance-menu">
                                            <div className="mega-first square--50 rounded-2 gray-simple text-success fs-4"><i
                                                className="fa-solid fa-spa"></i></div>
                                            <div className="mega-last ps-2">
                                                <h6 className="lh-base fs-6 font--bold m-0">Home Stays</h6>
                                                <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="home-hotel.html">
                                        <div className="mega-advance-menu">
                                            <div className="mega-first square--50 rounded-2 gray-simple text-warning fs-4"><i
                                                className="fa-solid fa-hotel"></i></div>
                                            <div className="mega-last ps-2">
                                                <h6 className="lh-base fs-6 font--bold m-0">Home Hotel</h6>
                                                <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="home-flight.html">
                                        <div className="mega-advance-menu">
                                            <div className="mega-first square--50 rounded-2 gray-simple text-primary fs-4"><i
                                                className="fa-solid fa-plane"></i></div>
                                            <div className="mega-last ps-2">
                                                <h6 className="lh-base fs-6 font--bold m-0">Home Flight</h6>
                                                <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="home-rental.html">
                                        <div className="mega-advance-menu">
                                            <div className="mega-first square--50 rounded-2 gray-simple text-purple fs-4"><i
                                                className="fa-solid fa-eye"></i></div>
                                            <div className="mega-last ps-2">
                                                <h6 className="lh-base fs-6 font--bold m-0">Home Rental</h6>
                                                <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="home-car.html">
                                        <div className="mega-advance-menu">
                                            <div className="mega-first square--50 rounded-2 gray-simple text-seagreen fs-4"><i
                                                className="fa-brands fa-dropbox"></i></div>
                                            <div className="mega-last ps-2">
                                                <h6 className="lh-base fs-6 font--bold m-0">Home Cabs</h6>
                                                <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="home-stay.html">
                                        <div className="mega-advance-menu">
                                            <div className="mega-first square--50 rounded-2 gray-simple text-info fs-4"><i
                                                className="fa-solid fa-person-walking-luggage"></i></div>
                                            <div className="mega-last ps-2">
                                                <h6 className="lh-base fs-6 font--bold m-0">Home Destination</h6>
                                                <p className="text-sm-muted m-0">Beautiful Place for stays</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul> */}
                        </li>

                        <li><a href="documantion/index.html" target="_blank">Docs</a></li>

                    </ul>

                    <ul className="nav-menu nav-menu-social align-to-right">
                        <li className="currencyDropdown me-2">
                            <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#currencyModal"><span
                                className="fw-medium">{currency}</span></a>
                        </li>
                        <li className="languageDropdown me-2">
                            <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#countryModal">
                                <img src={flagUrl} className="img-fluid" width="17" alt="Country" /></a>
                        </li>
                        <li style={{ marginRight: "5px" }} className="list-buttons">
                            <a href="#" className="bg-primary" data-bs-toggle="modal" data-bs-target="#login"><i
                                className="fa-regular fa-circle-user fs-6 me-2"></i>Sign In / Register</a>
                        </li>
                        <li className="list-buttons">
                            <a style={{ display: "flex", flexDirection: "column", fontSize: "18px" }} href="trl:+1 (888) 267-5955" className="bg-primary" data-bs-toggle="modal" data-bs-target="#login">
                                <span style={{ fontSize: "8px" }} >Call 24/7 for our best deals</span>
                                +1 (888) 267-5955
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
}


export default Navbar;