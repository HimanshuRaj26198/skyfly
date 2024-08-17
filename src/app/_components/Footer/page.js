const Footer = () => {
    return <footer className="footer skin-light-footer">
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-4">
                        <div className="footer-widget">
                            <div className="d-flex align-items-start flex-column mb-3">
                                <div className="d-inline-block"><img src="assets/images/skyfly-logo.png" className="img-fluid" width="160"
                                    alt="Footer Logo" />
                                </div>
                            </div>
                            <div className="footer-add pe-xl-3">
                                <p>We make your dream more beautiful & enjoyful with lots of happiness.</p>
                            </div>
                            <div className="foot-socials">
                                <ul>
                                    <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-google-plus"></i></a></li>
                                    <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="JavaScript:Void(0);"><i className="fa-brands fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="footer-widget">
                            <h4 className="widget-title">The Navigation</h4>
                            <ul className="footer-menu">
                                <li><a href="JavaScript:Void(0);">Talent Marketplace</a></li>
                                <li><a href="JavaScript:Void(0);">Payroll Services</a></li>
                                <li><a href="JavaScript:Void(0);">Direct Contracts</a></li>
                                <li><a href="JavaScript:Void(0);">Hire Worldwide</a></li>
                                <li><a href="JavaScript:Void(0);">Hire in the USA</a></li>
                                <li><a href="JavaScript:Void(0);">How to Hire</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-4">
                        <div className="footer-widget">
                            <h4 className="widget-title">Our Resources</h4>
                            <ul className="footer-menu">
                                <li><a href="JavaScript:Void(0);">Free Business tools</a></li>
                                <li><a href="JavaScript:Void(0);">Affiliate Program</a></li>
                                <li><a href="JavaScript:Void(0);">Success Stories</a></li>
                                <li><a href="JavaScript:Void(0);">Upwork Reviews</a></li>
                                <li><a href="JavaScript:Void(0);">Resources</a></li>
                                <li><a href="JavaScript:Void(0);">Help & Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <div className="footer-widget">
                            <h4 className="widget-title">The Company</h4>
                            <ul className="footer-menu">
                                <li><a href="JavaScript:Void(0);">About Us</a></li>
                                <li><a href="JavaScript:Void(0);">Leadership</a></li>
                                <li><a href="JavaScript:Void(0);">Contact Us</a></li>
                                <li><a href="JavaScript:Void(0);">Investor Relations</a></li>
                                <li><a href="JavaScript:Void(0);">Trust, Safety & Security</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h4 className="widget-title">Payment Methods</h4>
                            <div className="pmt-wrap">
                                <img src="assets/img/payment.png" className="img-fluid" alt="" />
                            </div>
                            <div className="our-prtwrap mt-4">
                                <div className="prtn-title">
                                    <p className="text-muted-2 fw-medium">Our Partners</p>
                                </div>
                                <div className="prtn-thumbs d-flex align-items-center justify-content-start">
                                    <div className="pmt-wrap pe-4">
                                        <img src="assets/img/mytrip.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="pmt-wrap pe-4">
                                        <img src="assets/img/tripadv.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className="pmt-wrap pe-4">
                                        <img src="assets/img/goibibo.png" className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="footer-bottom border-top">
            <div className="container">
                <div className="row align-items-center justify-content-between">

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <p className="mb-0">© 2023 SkyFly</p>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <ul className="p-0 d-flex justify-content-start justify-content-md-end text-start text-md-end m-0">
                            <li><a href="#">Terms of services</a></li>
                            <li className="ms-3"><a href="#">Privacy Policies</a></li>
                            <li className="ms-3"><a href="#">Cookies</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>
}

export default Footer;