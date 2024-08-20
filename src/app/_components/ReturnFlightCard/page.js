const ReturnFlightCard = () => {
    return <div className="col-xl-12 col-lg12 col-md-12">
        <div className="flights-accordion">
            <div className="flights-list-item bg-white rounded-3 p-3">
                <div className="row gy-4 align-items-center justify-content-between">

                    <div className="col">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="label bg-light-primary text-primary me-2">Departure</span>
                                    <span className="text-muted text-sm">26 Jun 2023</span>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row gx-lg-5 gx-3 gy-4 align-items-center">

                                    <div className="col-sm-auto">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="d-start fl-pic">
                                                <img className="img-fluid" src="assets/img/air-1.png" width="45" alt="image" />
                                            </div>
                                            <div className="d-end fl-title ps-2">
                                                <div className="text-dark fw-medium">Qutar Airways</div>
                                                <div className="text-sm text-muted">First Class</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="row gx-3 align-items-center">
                                            <div className="col-auto">
                                                <div className="text-dark fw-bold">07:40</div>
                                                <div className="text-muted text-sm fw-medium">DOH</div>
                                            </div>

                                            <div className="col text-center">
                                                <div className="flightLine departure">
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                                            </div>

                                            <div className="col-auto">
                                                <div className="text-dark fw-bold">12:20</div>
                                                <div className="text-muted text-sm fw-medium">DEL</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-auto">
                                        <div className="text-dark fw-medium">4H 40M</div>
                                        <div className="text-muted text-sm fw-medium">2 Stop</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="label bg-light-success text-success me-2">Return</span>
                                    <span className="text-muted text-sm">26 Jun 2023</span>
                                </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
                                    <div className="col-sm-auto">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <div className="d-start fl-pic">
                                                <img className="img-fluid" src="assets/img/air-2.png" width="45" alt="image" />
                                            </div>
                                            <div className="d-end fl-title ps-2">
                                                <div className="text-dark fw-medium">Qutar Airways</div>
                                                <div className="text-sm text-muted">Business</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="row gx-3 align-items-center">
                                            <div className="col-auto">
                                                <div className="text-dark fw-bold">14:10</div>
                                                <div className="text-muted text-sm fw-medium">DEL</div>
                                            </div>

                                            <div className="col text-center">
                                                <div className="flightLine return">
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                                            </div>

                                            <div className="col-auto">
                                                <div className="text-dark fw-bold">19:30</div>
                                                <div className="text-muted text-sm fw-medium">DOH</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-auto">
                                        <div className="text-dark fw-medium">5H 30M</div>
                                        <div className="text-muted text-sm fw-medium">2 Stop</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-auto">
                        <div className="d-flex items-center h-100">
                            <div className="d-lg-block d-none border br-dashed me-4"></div>
                            <div>
                                <div className="d-flex align-items-center justify-content-md-end mb-3">
                                    <span className="square--20 rounded text-xs text-muted border me-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="Free WiFi"><i
                                            className="fa-solid fa-wifi"></i></span>
                                    <span className="square--20 rounded text-xs text-muted border me-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="Food Available"><i
                                            className="fa-solid fa-utensils"></i></span>
                                    <span className="square--20 rounded text-xs text-muted border me-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="One Cup Tea"><i
                                            className="fa-solid fa-mug-saucer"></i></span>
                                    <span className="square--20 rounded text-xs text-muted border" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="Pet Allow"><i className="fa-solid fa-dog"></i></span>
                                </div>
                                <div className="text-start text-md-end">
                                    <span className="label bg-light-success text-success me-1">15% Off</span>
                                    <div className="text-dark fs-3 fw-bold lh-base">US$934</div>
                                    <div className="text-muted text-sm mb-2">Refundable</div>
                                </div>

                                <div className="flight-button-wrap">
                                    <button className="btn btn-primary btn-md fw-medium full-width" data-bs-toggle="modal"
                                        data-bs-target="#bookflight">
                                        Select Flight<i className="fa-solid fa-arrow-trend-up ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ReturnFlightCard;