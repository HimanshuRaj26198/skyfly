import SearchForm from "../_components/SearchForm/page";

const HomePage = () => {
    return <>
        <div className="image-cover hero-header bg-white" style={{ background: "url(../assets/img/2151022224.jpg)no-repeat" }}
            data-overlay="5">
            <div className="container">
                {/* <!-- Search Form --> */}
                <div className="row justify-content-between align-items-center">
                    {/* <!-- Banner Heading --> */}
                    <div className="col-cl-5 col-lg-6 col-md-12">
                        <div className="position-relative">
                            <h1 className="top_heading_mobile" >Making Travel Easy</h1>
                            <p className="fw-light mb-0 top_desktop_text">Find the best flight deals to your destination</p>
                            <div className="d-flex align-items-start justify-content-start gap-3 flex-wrap mt-xl-5 mt-4 top_desktop_text">
                                <div className="bannrButton top_desktop_text">
                                    <button type="button" className="btn btn-whites fw-medium px-4 rounded-pill">Discover Place</button>
                                </div>
                                <div className="bannrHelp">
                                    {/* <Link href="#" data-bs-toggle="modal" data-bs-target="#popup-video" className="d-flex align-items-center justify-content-start gap-2">
                                    <div className=""><div className="square--50 circle bg-white"><i className="fa-solid fa-play text-danger"></i></div></div>
                                    <div className="videoText fw-medium text-light">Watch Video</div>
                                </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Form --> */}
                    <SearchForm />
                </div>
                {/* <!-- </row> --> */}
            </div>
        </div>
        {/* <!-- ============================ Features Start ================================== --> */}
        <section className="border-bottom">
            <div className="container">
                <div className="row align-items-center justify-content-between g-4">

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                        <div className="featuresBox-wrap">
                            <div className="featuresBox-icons mb-3">
                                <i className="fa-solid fa-sack-dollar fs-1 text-primary"></i>
                            </div>
                            <div className="featuresBox-captions">
                                <h4 className="fw-bold fs-5 lh-base mb-0">Easy Booking</h4>
                                <p className="m-0">SkyFly makes booking flights a breeze with our intuitive, user-friendly platform. Effortlessly plan your next trip today.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                        <div className="featuresBox-wrap">
                            <div className="featuresBox-icons mb-3">
                                <i className="fa-solid fa-umbrella-beach fs-1 text-primary"></i>
                            </div>
                            <div className="featuresBox-captions">
                                <h4 className="fw-bold fs-5 lh-base mb-0">Best Destinations</h4>
                                <p className="m-0">Explore top destinations with SkyFly and grab the best deals on tickets. Your next adventure is just a click away.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                        <div className="featuresBox-wrap">
                            <div className="featuresBox-icons mb-3">
                                <i className="fa-solid fa-person-walking-luggage fs-1 text-primary"></i>
                            </div>
                            <div className="featuresBox-captions">
                                <h4 className="fw-bold fs-5 lh-base mb-0">Travel Guides</h4>
                                <p className="m-0">SkyFly offers detailed travel guides for top destinations worldwide. Plan your journey with expert insights and tips.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                        <div className="featuresBox-wrap">
                            <div className="featuresBox-icons mb-3">
                                <i className="fa-solid fa-headset fs-1 text-primary"></i>
                            </div>
                            <div className="featuresBox-captions">
                                <h4 className="fw-bold fs-5 lh-base mb-0">Friendly Support</h4>
                                <p className="m-0">SkyFly provides friendly support to ensure a smooth booking experience. We're here to assist you every step of the way.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- ============================ Features End ================================== --> */}


        {/* <!-- ============================ Best Locations Design Start ================================== --> */}
        <section>
            <div className="container">

                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center mb-5">
                            <h2>Explore Popular Destination</h2>
                            <p>Discover popular destinations across the globe with SkyFly's expert recommendations.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center gy-4 gx-3">

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-8.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>New York</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">10 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">5 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-7.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>Las Vegas</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">06 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">14 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-1.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>San Antonio</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">09 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">16 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-2.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>Houston</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">07 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">18 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-3.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>San Francisco</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">4 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">12 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-4.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>Nashville</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">16 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">7 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-5.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>Philadelphia</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">14 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">10 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                            <div className="destination-blocks-pics p-1">
                                <a href="#"><img src="assets/img/city/c-6.png" className="img-fluid rounded" alt="" /></a>
                            </div>
                            <div className="destination-blocks-captions">
                                <div className="touritem-flexxer text-center p-3">
                                    <h4 className="city fs-5 m-0 fw-bold">
                                        <span>San Diego</span>
                                    </h4>
                                    <p className="detail ellipsis-container m-0">
                                        <span className="ellipsis-item__normal">12 Destinations</span>
                                        <span className="separate ellipsis-item__normal"></span>
                                        <span className="ellipsis-item">32 Hotels</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- ============================ Best Locations Design Start ================================== --> */}


        {/* <!-- ============================ Flexible features End ================================== --> */}
        <section>
            <div className="container">
                <div className="row align-items-center justify-content-between">

                    <div className="col-xl-5 col-lg-5 col-md-12 position-relative pe-xl-5 pe-lg-4 pe-md-4 pb-xl-5 pb-lg-4 pb-md-4">
                        <div className="position-relative mb-lg-0 mb-4">
                            <img src="assets/img/img-3.jpg" className="img-fluid rounded-3 position-relative z-1" alt="" />
                            <div className="position-absolute bottom-0 start-0 z-index-1 mb-4 ms-5">
                                <div className="bg-body d-flex d-inline-block rounded-3 position-relative p-3 z-2">

                                    {/* <!-- Avatar group --> */}
                                    <div className="me-4">
                                        <h6 className="fw-normal">Client</h6>
                                        {/* <!-- Avatar group --> */}
                                        <ul className="avatar-group mb-0">
                                            <li className="avatar avatar-md">
                                                <img className="avatar-img circle" src="assets/img/team-1.jpg" alt="avatar" />
                                            </li>
                                            <li className="avatar avatar-md">
                                                <img className="avatar-img circle" src="assets/img/team-2.jpg" alt="avatar" />
                                            </li>
                                            <li className="avatar avatar-md">
                                                <img className="avatar-img circle" src="assets/img/team-3.jpg" alt="avatar" />
                                            </li>
                                            <li className="avatar avatar-md">
                                                <img className="avatar-img circle" src="assets/img/team-4.jpg" alt="avatar" />
                                            </li>
                                            <li className="avatar avatar-md">
                                                <div className="avatar-img circle bg-primary">
                                                    <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* <!-- Rating --> */}
                                    <div>
                                        <h6 className="fw-normal mb-3">Rating</h6>
                                        <h6 className="m-0">4.5<i className="fa-solid fa-star text-warning ms-1"></i></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <figure className="position-absolute bottom-0 end-0 d-none d-md-block mb-n5 me-n4">
                            <svg height="400" className="fill-primary opacity-25" viewBox="0 0 340 340">
                                <circle cx="194.2" cy="2.2" r="2.2"></circle>
                                <circle cx="2.2" cy="2.2" r="2.2"></circle>
                                <circle cx="218.2" cy="2.2" r="2.2"></circle>
                                <circle cx="26.2" cy="2.2" r="2.2"></circle>
                                <circle cx="242.2" cy="2.2" r="2.2"></circle>
                                <circle cx="50.2" cy="2.2" r="2.2"></circle>
                                <circle cx="266.2" cy="2.2" r="2.2"></circle>
                                <circle cx="74.2" cy="2.2" r="2.2"></circle>
                                <circle cx="290.2" cy="2.2" r="2.2"></circle>
                                <circle cx="98.2" cy="2.2" r="2.2"></circle>
                                <circle cx="314.2" cy="2.2" r="2.2"></circle>
                                <circle cx="122.2" cy="2.2" r="2.2"></circle>
                                <circle cx="338.2" cy="2.2" r="2.2"></circle>
                                <circle cx="146.2" cy="2.2" r="2.2"></circle>
                                <circle cx="170.2" cy="2.2" r="2.2"></circle>
                                <circle cx="194.2" cy="26.2" r="2.2"></circle>
                                <circle cx="2.2" cy="26.2" r="2.2"></circle>
                                <circle cx="218.2" cy="26.2" r="2.2"></circle>
                                <circle cx="26.2" cy="26.2" r="2.2"></circle>
                                <circle cx="242.2" cy="26.2" r="2.2"></circle>
                                <circle cx="50.2" cy="26.2" r="2.2"></circle>
                                <circle cx="266.2" cy="26.2" r="2.2"></circle>
                                <circle cx="74.2" cy="26.2" r="2.2"></circle>
                                <circle cx="290.2" cy="26.2" r="2.2"></circle>
                                <circle cx="98.2" cy="26.2" r="2.2"></circle>
                                <circle cx="314.2" cy="26.2" r="2.2"></circle>
                                <circle cx="122.2" cy="26.2" r="2.2"></circle>
                                <circle cx="338.2" cy="26.2" r="2.2"></circle>
                                <circle cx="146.2" cy="26.2" r="2.2"></circle>
                                <circle cx="170.2" cy="26.2" r="2.2"></circle>
                                <circle cx="194.2" cy="50.2" r="2.2"></circle>
                                <circle cx="2.2" cy="50.2" r="2.2"></circle>
                                <circle cx="218.2" cy="50.2" r="2.2"></circle>
                                <circle cx="26.2" cy="50.2" r="2.2"></circle>
                                <circle cx="242.2" cy="50.2" r="2.2"></circle>
                                <circle cx="50.2" cy="50.2" r="2.2"></circle>
                                <circle cx="266.2" cy="50.2" r="2.2"></circle>
                                <circle cx="74.2" cy="50.2" r="2.2"></circle>
                                <circle cx="290.2" cy="50.2" r="2.2"></circle>
                                <circle cx="98.2" cy="50.2" r="2.2"></circle>
                                <circle cx="314.2" cy="50.2" r="2.2"></circle>
                                <circle cx="122.2" cy="50.2" r="2.2"></circle>
                                <circle cx="338.2" cy="50.2" r="2.2"></circle>
                                <circle cx="146.2" cy="50.2" r="2.2"></circle>
                                <circle cx="170.2" cy="50.2" r="2.2"></circle>
                                <circle cx="194.2" cy="74.2" r="2.2"></circle>
                                <circle cx="2.2" cy="74.2" r="2.2"></circle>
                                <circle cx="218.2" cy="74.2" r="2.2"></circle>
                                <circle cx="26.2" cy="74.2" r="2.2"></circle>
                                <circle cx="242.2" cy="74.2" r="2.2"></circle>
                                <circle cx="50.2" cy="74.2" r="2.2"></circle>
                                <circle cx="266.2" cy="74.2" r="2.2"></circle>
                                <circle cx="74.2" cy="74.2" r="2.2"></circle>
                                <circle cx="290.2" cy="74.2" r="2.2"></circle>
                                <circle cx="98.2" cy="74.2" r="2.2"></circle>
                                <circle cx="314.2" cy="74.2" r="2.2"></circle>
                                <circle cx="122.2" cy="74.2" r="2.2"></circle>
                                <circle cx="338.2" cy="74.2" r="2.2"></circle>
                                <circle cx="146.2" cy="74.2" r="2.2"></circle>
                                <circle cx="170.2" cy="74.2" r="2.2"></circle>
                                <circle cx="194.2" cy="98.2" r="2.2"></circle>
                                <circle cx="2.2" cy="98.2" r="2.2"></circle>
                                <circle cx="218.2" cy="98.2" r="2.2"></circle>
                                <circle cx="26.2" cy="98.2" r="2.2"></circle>
                                <circle cx="242.2" cy="98.2" r="2.2"></circle>
                                <circle cx="50.2" cy="98.2" r="2.2"></circle>
                                <circle cx="266.2" cy="98.2" r="2.2"></circle>
                                <circle cx="74.2" cy="98.2" r="2.2"></circle>
                                <circle cx="290.2" cy="98.2" r="2.2"></circle>
                                <circle cx="98.2" cy="98.2" r="2.2"></circle>
                                <circle cx="314.2" cy="98.2" r="2.2"></circle>
                                <circle cx="122.2" cy="98.2" r="2.2"></circle>
                                <circle cx="338.2" cy="98.2" r="2.2"></circle>
                                <circle cx="146.2" cy="98.2" r="2.2"></circle>
                                <circle cx="170.2" cy="98.2" r="2.2"></circle>
                                <circle cx="194.2" cy="122.2" r="2.2"></circle>
                                <circle cx="2.2" cy="122.2" r="2.2"></circle>
                                <circle cx="218.2" cy="122.2" r="2.2"></circle>
                                <circle cx="26.2" cy="122.2" r="2.2"></circle>
                                <circle cx="242.2" cy="122.2" r="2.2"></circle>
                                <circle cx="50.2" cy="122.2" r="2.2"></circle>
                                <circle cx="266.2" cy="122.2" r="2.2"></circle>
                                <circle cx="74.2" cy="122.2" r="2.2"></circle>
                                <circle cx="290.2" cy="122.2" r="2.2"></circle>
                                <circle cx="98.2" cy="122.2" r="2.2"></circle>
                                <circle cx="314.2" cy="122.2" r="2.2"></circle>
                                <circle cx="122.2" cy="122.2" r="2.2"></circle>
                                <circle cx="338.2" cy="122.2" r="2.2"></circle>
                                <circle cx="146.2" cy="122.2" r="2.2"></circle>
                                <circle cx="170.2" cy="122.2" r="2.2"></circle>
                                <circle cx="194.2" cy="146.2" r="2.2"></circle>
                                <circle cx="2.2" cy="146.2" r="2.2"></circle>
                                <circle cx="218.2" cy="146.2" r="2.2"></circle>
                                <circle cx="26.2" cy="146.2" r="2.2"></circle>
                                <circle cx="242.2" cy="146.2" r="2.2"></circle>
                                <circle cx="50.2" cy="146.2" r="2.2"></circle>
                                <circle cx="266.2" cy="146.2" r="2.2"></circle>
                                <circle cx="74.2" cy="146.2" r="2.2"></circle>
                                <circle cx="290.2" cy="146.2" r="2.2"></circle>
                                <circle cx="98.2" cy="146.2" r="2.2"></circle>
                                <circle cx="314.2" cy="146.2" r="2.2"></circle>
                                <circle cx="122.2" cy="146.2" r="2.2"></circle>
                                <circle cx="338.2" cy="146.2" r="2.2"></circle>
                                <circle cx="146.2" cy="146.2" r="2.2"></circle>
                                <circle cx="170.2" cy="146.2" r="2.2"></circle>
                                <circle cx="194.2" cy="170.2" r="2.2"></circle>
                                <circle cx="2.2" cy="170.2" r="2.2"></circle>
                                <circle cx="218.2" cy="170.2" r="2.2"></circle>
                                <circle cx="26.2" cy="170.2" r="2.2"></circle>
                                <circle cx="242.2" cy="170.2" r="2.2"></circle>
                                <circle cx="50.2" cy="170.2" r="2.2"></circle>
                                <circle cx="266.2" cy="170.2" r="2.2"></circle>
                                <circle cx="74.2" cy="170.2" r="2.2"></circle>
                                <circle cx="290.2" cy="170.2" r="2.2"></circle>
                                <circle cx="98.2" cy="170.2" r="2.2"></circle>
                                <circle cx="314.2" cy="170.2" r="2.2"></circle>
                                <circle cx="122.2" cy="170.2" r="2.2"></circle>
                                <circle cx="338.2" cy="170.2" r="2.2"></circle>
                                <circle cx="146.2" cy="170.2" r="2.2"></circle>
                                <circle cx="170.2" cy="170.2" r="2.2"></circle>
                                <circle cx="194.2" cy="194.2" r="2.2"></circle>
                                <circle cx="2.2" cy="194.2" r="2.2"></circle>
                                <circle cx="218.2" cy="194.2" r="2.2"></circle>
                                <circle cx="26.2" cy="194.2" r="2.2"></circle>
                                <circle cx="242.2" cy="194.2" r="2.2"></circle>
                                <circle cx="50.2" cy="194.2" r="2.2"></circle>
                                <circle cx="266.2" cy="194.2" r="2.2"></circle>
                                <circle cx="74.2" cy="194.2" r="2.2"></circle>
                                <circle cx="290.2" cy="194.2" r="2.2"></circle>
                                <circle cx="98.2" cy="194.2" r="2.2"></circle>
                                <circle cx="314.2" cy="194.2" r="2.2"></circle>
                                <circle cx="122.2" cy="194.2" r="2.2"></circle>
                                <circle cx="338.2" cy="194.2" r="2.2"></circle>
                                <circle cx="146.2" cy="194.2" r="2.2"></circle>
                                <circle cx="170.2" cy="194.2" r="2.2"></circle>
                                <circle cx="194.2" cy="218.2" r="2.2"></circle>
                                <circle cx="2.2" cy="218.2" r="2.2"></circle>
                                <circle cx="218.2" cy="218.2" r="2.2"></circle>
                                <circle cx="26.2" cy="218.2" r="2.2"></circle>
                                <circle cx="242.2" cy="218.2" r="2.2"></circle>
                                <circle cx="50.2" cy="218.2" r="2.2"></circle>
                                <circle cx="266.2" cy="218.2" r="2.2"></circle>
                                <circle cx="74.2" cy="218.2" r="2.2"></circle>
                                <circle cx="290.2" cy="218.2" r="2.2"></circle>
                                <circle cx="98.2" cy="218.2" r="2.2"></circle>
                                <circle cx="314.2" cy="218.2" r="2.2"></circle>
                                <circle cx="122.2" cy="218.2" r="2.2"></circle>
                                <circle cx="338.2" cy="218.2" r="2.2"></circle>
                                <circle cx="146.2" cy="218.2" r="2.2"></circle>
                                <circle cx="170.2" cy="218.2" r="2.2"></circle>
                                <circle cx="194.2" cy="242.2" r="2.2"></circle>
                                <circle cx="2.2" cy="242.2" r="2.2"></circle>
                                <circle cx="218.2" cy="242.2" r="2.2"></circle>
                                <circle cx="26.2" cy="242.2" r="2.2"></circle>
                                <circle cx="242.2" cy="242.2" r="2.2"></circle>
                                <circle cx="50.2" cy="242.2" r="2.2"></circle>
                                <circle cx="266.2" cy="242.2" r="2.2"></circle>
                                <circle cx="74.2" cy="242.2" r="2.2"></circle>
                                <circle cx="290.2" cy="242.2" r="2.2"></circle>
                                <circle cx="98.2" cy="242.2" r="2.2"></circle>
                                <circle cx="314.2" cy="242.2" r="2.2"></circle>
                                <circle cx="122.2" cy="242.2" r="2.2"></circle>
                                <circle cx="338.2" cy="242.2" r="2.2"></circle>
                                <circle cx="146.2" cy="242.2" r="2.2"></circle>
                                <circle cx="170.2" cy="242.2" r="2.2"></circle>
                                <circle cx="194.2" cy="266.2" r="2.2"></circle>
                                <circle cx="2.2" cy="266.2" r="2.2"></circle>
                                <circle cx="218.2" cy="266.2" r="2.2"></circle>
                                <circle cx="26.2" cy="266.2" r="2.2"></circle>
                                <circle cx="242.2" cy="266.2" r="2.2"></circle>
                                <circle cx="50.2" cy="266.2" r="2.2"></circle>
                                <circle cx="266.2" cy="266.2" r="2.2"></circle>
                                <circle cx="74.2" cy="266.2" r="2.2"></circle>
                                <circle cx="290.2" cy="266.2" r="2.2"></circle>
                                <circle cx="98.2" cy="266.2" r="2.2"></circle>
                                <circle cx="314.2" cy="266.2" r="2.2"></circle>
                                <circle cx="122.2" cy="266.2" r="2.2"></circle>
                                <circle cx="338.2" cy="266.2" r="2.2"></circle>
                                <circle cx="146.2" cy="266.2" r="2.2"></circle>
                                <circle cx="170.2" cy="266.2" r="2.2"></circle>
                                <circle cx="194.2" cy="290.2" r="2.2"></circle>
                                <circle cx="2.2" cy="290.2" r="2.2"></circle>
                                <circle cx="218.2" cy="290.2" r="2.2"></circle>
                                <circle cx="26.2" cy="290.2" r="2.2"></circle>
                                <circle cx="242.2" cy="290.2" r="2.2"></circle>
                                <circle cx="50.2" cy="290.2" r="2.2"></circle>
                                <circle cx="266.2" cy="290.2" r="2.2"></circle>
                                <circle cx="74.2" cy="290.2" r="2.2"></circle>
                                <circle cx="290.2" cy="290.2" r="2.2"></circle>
                                <circle cx="98.2" cy="290.2" r="2.2"></circle>
                                <circle cx="314.2" cy="290.2" r="2.2"></circle>
                                <circle cx="122.2" cy="290.2" r="2.2"></circle>
                                <circle cx="338.2" cy="290.2" r="2.2"></circle>
                                <circle cx="146.2" cy="290.2" r="2.2"></circle>
                                <circle cx="170.2" cy="290.2" r="2.2"></circle>
                                <circle cx="194.2" cy="314.2" r="2.2"></circle>
                                <circle cx="2.2" cy="314.2" r="2.2"></circle>
                                <circle cx="218.2" cy="314.2" r="2.2"></circle>
                                <circle cx="26.2" cy="314.2" r="2.2"></circle>
                                <circle cx="242.2" cy="314.2" r="2.2"></circle>
                                <circle cx="50.2" cy="314.2" r="2.2"></circle>
                                <circle cx="266.2" cy="314.2" r="2.2"></circle>
                                <circle cx="74.2" cy="314.2" r="2.2"></circle>
                                <circle cx="290.2" cy="314.2" r="2.2"></circle>
                                <circle cx="98.2" cy="314.2" r="2.2"></circle>
                                <circle cx="314.2" cy="314.2" r="2.2"></circle>
                                <circle cx="122.2" cy="314.2" r="2.2"></circle>
                                <circle cx="338.2" cy="314.2" r="2.2"></circle>
                                <circle cx="146.2" cy="314.2" r="2.2"></circle>
                                <circle cx="170.2" cy="314.2" r="2.2"></circle>
                                <circle cx="194.2" cy="338.2" r="2.2"></circle>
                                <circle cx="2.2" cy="338.2" r="2.2"></circle>
                                <circle cx="218.2" cy="338.2" r="2.2"></circle>
                                <circle cx="26.2" cy="338.2" r="2.2"></circle>
                                <circle cx="242.2" cy="338.2" r="2.2"></circle>
                                <circle cx="50.2" cy="338.2" r="2.2"></circle>
                                <circle cx="266.2" cy="338.2" r="2.2"></circle>
                                <circle cx="74.2" cy="338.2" r="2.2"></circle>
                                <circle cx="290.2" cy="338.2" r="2.2"></circle>
                                <circle cx="98.2" cy="338.2" r="2.2"></circle>
                                <circle cx="314.2" cy="338.2" r="2.2"></circle>
                                <circle cx="122.2" cy="338.2" r="2.2"></circle>
                                <circle cx="338.2" cy="338.2" r="2.2"></circle>
                                <circle cx="146.2" cy="338.2" r="2.2"></circle>
                                <circle cx="170.2" cy="338.2" r="2.2"></circle>
                            </svg>
                        </figure>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="row gy-xl-5 g-4">

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="fbxer-wraps">
                                    <div className="fbxerWraps-icons mb-3">
                                        <div className="square--70 circle bg-light-primary"><i className="fa-solid fa-gifts text-primary fs-3"></i>
                                        </div>
                                    </div>
                                    <div className="fbxerWraps-caps">
                                        <h5 className="fw-bold fs-6">Get Superb Deals</h5>
                                        <p className="fw-light fs-6 m-0">Unlock superb deals on flights with SkyFly’s exclusive offers, making your travel affordable and enjoyable every time.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="fbxer-wraps">
                                    <div className="fbxerWraps-icons mb-3">
                                        <div className="square--70 circle bg-light-info"><i className="fa-solid fa-gifts text-info fs-3"></i></div>
                                    </div>
                                    <div className="fbxerWraps-caps">
                                        <h5 className="fw-bold fs-6">100% Transparency Price</h5>
                                        <p className="fw-light fs-6 m-0">Experience 100% price transparency with SkyFly, ensuring no hidden fees or surprises. Book with confidence, knowing exactly what you pay.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="fbxer-wraps">
                                    <div className="fbxerWraps-icons mb-3">
                                        <div className="square--70 circle bg-light-success"><i className="fa-solid fa-gifts text-success fs-3"></i>
                                        </div>
                                    </div>
                                    <div className="fbxerWraps-caps">
                                        <h5 className="fw-bold fs-6">Pure Trusted & Free</h5>
                                        <p className="fw-light fs-6 m-0">SkyFly offers a purely trusted and free service, ensuring complete transparency and zero hidden fees for your travel needs. Experience hassle-free booking today.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="fbxer-wraps">
                                    <div className="fbxerWraps-icons mb-3">
                                        <div className="square--70 circle bg-light-warning"><i className="fa-solid fa-gifts text-warning fs-3"></i>
                                        </div>
                                    </div>
                                    <div className="fbxerWraps-caps">
                                        <h5 className="fw-bold fs-6">Travel With Confidence</h5>
                                        <p className="fw-light fs-6 m-0">Book your travels with confidence through SkyFly’s reliable and secure platform. Trust us to handle your journey smoothly and professionally.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- ============================ Flexible features End ================================== --> */}

        {/* <!-- ============================ Our Reviews Start ================================== --> */}
        <section className="gray">
            <div className="container">

                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center mb-5">
                            <h2>Loving Reviews By Our Customers</h2>
                            <p>Check our satisfied customers reviews below</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center g-xl-4 g-lg-4 g-md-4 g-3">

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="card border-0 rounded-3">
                            <div className="card-body">
                                <div className="position-absolute top-0 end-0 mt-3 me-3"><span
                                    className="square--40 circle text-primary bg-light-primary"><i
                                        className="fa-solid fa-quote-right"></i></span></div>
                                <div className="d-flex align-items-center flex-thumbes">
                                    <div className="revws-pic"><img src="assets/img/team-1.jpg" className="img-fluid rounded-2" width="80" alt="" />
                                    </div>
                                    <div className="revws-caps ps-3">
                                        <h6 className="fw-bold fs-6 m-0">Emma Johnson</h6>
                                        <p className="text-muted-2 text-md m-0">United States</p>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="revws-desc mt-3">
                                    <p className="m-0 text-md">SkyFly provided an outstanding booking experience, seamless and hassle-free from start to finish. Highly recommend their service!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="card border-0 rounded-3">
                            <div className="card-body">
                                <div className="position-absolute top-0 end-0 mt-3 me-3"><span
                                    className="square--40 circle text-primary bg-light-primary"><i
                                        className="fa-solid fa-quote-right"></i></span></div>
                                <div className="d-flex align-items-center flex-thumbes">
                                    <div className="revws-pic"><img src="assets/img/team-2.jpg" className="img-fluid rounded-2" width="80" alt="" />
                                    </div>
                                    <div className="revws-caps ps-3">
                                        <h6 className="fw-bold fs-6 m-0">Michael Smith</h6>
                                        <p className="text-muted-2 text-md m-0">United States</p>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="revws-desc mt-3">
                                    <p className="m-0 text-md">Booking my flights with SkyFly was effortless. The platform was intuitive, and their customer support was excellent throughout.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="card border-0 rounded-3">
                            <div className="card-body">
                                <div className="position-absolute top-0 end-0 mt-3 me-3"><span
                                    className="square--40 circle text-primary bg-light-primary"><i
                                        className="fa-solid fa-quote-right"></i></span></div>
                                <div className="d-flex align-items-center flex-thumbes">
                                    <div className="revws-pic"><img src="assets/img/team-3.jpg" className="img-fluid rounded-2" width="80" alt="" />
                                    </div>
                                    <div className="revws-caps ps-3">
                                        <h6 className="fw-bold fs-6 m-0">Sarah Williams</h6>
                                        <p className="text-muted-2 text-md m-0">United States</p>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="revws-desc mt-3">
                                    <p className="m-0 text-md">I was impressed with SkyFly’s user-friendly interface and efficient booking system. Everything went smoothly, and I felt well-supported.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="card border-0 rounded-3">
                            <div className="card-body">
                                <div className="position-absolute top-0 end-0 mt-3 me-3"><span
                                    className="square--40 circle text-primary bg-light-primary"><i
                                        className="fa-solid fa-quote-right"></i></span></div>
                                <div className="d-flex align-items-center flex-thumbes">
                                    <div className="revws-pic"><img src="assets/img/team-4.jpg" className="img-fluid rounded-2" width="80" alt="" />
                                    </div>
                                    <div className="revws-caps ps-3">
                                        <h6 className="fw-bold fs-6 m-0">James Anderson</h6>
                                        <p className="text-muted-2 text-md m-0">United States</p>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="revws-desc mt-3">
                                    <p className="m-0 text-md">SkyFly made finding the best flight deals easy and quick. Their service is top-notch, and I’m extremely satisfied with my experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="card border-0 rounded-3">
                            <div className="card-body">
                                <div className="position-absolute top-0 end-0 mt-3 me-3"><span
                                    className="square--40 circle text-primary bg-light-primary"><i
                                        className="fa-solid fa-quote-right"></i></span></div>
                                <div className="d-flex align-items-center flex-thumbes">
                                    <div className="revws-pic"><img src="assets/img/team-5.jpg" className="img-fluid rounded-2" width="80" alt="" />
                                    </div>
                                    <div className="revws-caps ps-3">
                                        <h6 className="fw-bold fs-6 m-0">Olivia Brown</h6>
                                        <p className="text-muted-2 text-md m-0">United States</p>
                                        <div className="d-flex align-items-center justify-content-start">
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                            <span className="me-1 text-xs text-warning"><i className="fa-solid fa-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="revws-desc mt-3">
                                    <p className="m-0 text-md">The convenience and reliability of SkyFly’s booking service exceeded my expectations. I’ll definitely use them for future travels</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- ============================ Our Reviews End ================================== --> */}


        {/* <!-- ================================ Article Section Start ======================================= --> */}
        <section>
            <div className="container">

                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                        <div className="secHeading-wrap text-center mb-5">
                            <h2>Trending & Popular Articles</h2>
                            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center g-4">

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="blogGrid-wrap d-flex flex-column h-100">
                            <div className="blogGrid-pics">
                                <a href="#" className="d-block"><img src="assets/img/blog-1.jpg" className="img-fluid rounded"
                                    alt="Blog image" /></a>
                            </div>
                            <div className="blogGrid-caps pt-3">
                                <div className="d-flex align-items-center mb-1"><span
                                    className="label text-success bg-light-success">Destination</span></div>
                                <h4 className="fw-bold fs-6 lh-base"><a href="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                                    Comfirtable And Best Price</a></h4>
                                <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                                    to be unintendedly humorous or offensive day of going live.</p>
                                <a className="text-primary fw-medium" href="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="blogGrid-wrap d-flex flex-column h-100">
                            <div className="blogGrid-pics">
                                <a href="#" className="d-block"><img src="assets/img/blog-2.jpg" className="img-fluid rounded"
                                    alt="Blog image" /></a>
                            </div>
                            <div className="blogGrid-caps pt-3">
                                <div className="d-flex align-items-center mb-1"><span
                                    className="label text-success bg-light-success">Journey</span></div>
                                <h4 className="fw-bold fs-6 lh-base"><a href="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                                    Comfirtable And Best Price</a></h4>
                                <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                                    to be unintendedly humorous or offensive day of going live.</p>
                                <a className="text-primary fw-medium" href="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="blogGrid-wrap d-flex flex-column h-100">
                            <div className="blogGrid-pics">
                                <a href="#" className="d-block"><img src="assets/img/blog-3.jpg" className="img-fluid rounded"
                                    alt="Blog image" /></a>
                            </div>
                            <div className="blogGrid-caps pt-3">
                                <div className="d-flex align-items-center mb-1"><span
                                    className="label text-success bg-light-success">Business</span></div>
                                <h4 className="fw-bold fs-6 lh-base"><a href="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                                    Comfirtable And Best Price</a></h4>
                                <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                                    to be unintendedly humorous or offensive day of going live.</p>
                                <a className="text-primary fw-medium" href="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- ================================ Article Section Start ======================================= --> */}


        {/* <!-- ============================ Call To Action Start ================================== --> */}
        <div className="py-5 bg-primary">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <h4 className="text-light fw-bold lh-base m-0">Join our Newsletter To Keep Up To Date With Us!</h4>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="newsletter-forms mt-md-0 mt-4">
                            <form>
                                <div className="row align-items-center justify-content-between bg-white rounded-3 p-2 gx-0">
                                    <div className="col-xl-9 col-lg-8 col-md-8">
                                        <div className="form-group m-0">
                                            <input type="text" className="form-control bold ps-1 border-0" placeholder="Enter Your Mail!" />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-4 col-md-4">
                                        <div className="form-group m-0">
                                            <button type="button" className="btn btn-dark fw-medium full-width">Submit<i
                                                className="fa-solid fa-arrow-trend-up ms-2"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* <!-- ============================ Call To Action Start ================================== --> */}
    </>
}

export default HomePage;