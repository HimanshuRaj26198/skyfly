const ReturnFlightCard = () => {
    return <div class="col-xl-12 col-lg12 col-md-12">
        <div class="flights-accordion">
            <div class="flights-list-item bg-white rounded-3 p-3">
                <div class="row gy-4 align-items-center justify-content-between">

                    <div class="col">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="label bg-light-primary text-primary me-2">Departure</span>
                                    <span class="text-muted text-sm">26 Jun 2023</span>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="row gx-lg-5 gx-3 gy-4 align-items-center">

                                    <div class="col-sm-auto">
                                        <div class="d-flex align-items-center justify-content-start">
                                            <div class="d-start fl-pic">
                                                <img class="img-fluid" src="assets/img/air-1.png" width="45" alt="image" />
                                            </div>
                                            <div class="d-end fl-title ps-2">
                                                <div class="text-dark fw-medium">Qutar Airways</div>
                                                <div class="text-sm text-muted">First Class</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="row gx-3 align-items-center">
                                            <div class="col-auto">
                                                <div class="text-dark fw-bold">07:40</div>
                                                <div class="text-muted text-sm fw-medium">DOH</div>
                                            </div>

                                            <div class="col text-center">
                                                <div class="flightLine departure">
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div class="text-muted text-sm fw-medium mt-3">Direct</div>
                                            </div>

                                            <div class="col-auto">
                                                <div class="text-dark fw-bold">12:20</div>
                                                <div class="text-muted text-sm fw-medium">DEL</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-auto">
                                        <div class="text-dark fw-medium">4H 40M</div>
                                        <div class="text-muted text-sm fw-medium">2 Stop</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="label bg-light-success text-success me-2">Return</span>
                                    <span class="text-muted text-sm">26 Jun 2023</span>
                                </div>
                            </div>

                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="row gx-lg-5 gx-3 gy-4 align-items-center">
                                    <div class="col-sm-auto">
                                        <div class="d-flex align-items-center justify-content-start">
                                            <div class="d-start fl-pic">
                                                <img class="img-fluid" src="assets/img/air-2.png" width="45" alt="image" />
                                            </div>
                                            <div class="d-end fl-title ps-2">
                                                <div class="text-dark fw-medium">Qutar Airways</div>
                                                <div class="text-sm text-muted">Business</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="row gx-3 align-items-center">
                                            <div class="col-auto">
                                                <div class="text-dark fw-bold">14:10</div>
                                                <div class="text-muted text-sm fw-medium">DEL</div>
                                            </div>

                                            <div class="col text-center">
                                                <div class="flightLine return">
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                                <div class="text-muted text-sm fw-medium mt-3">Direct</div>
                                            </div>

                                            <div class="col-auto">
                                                <div class="text-dark fw-bold">19:30</div>
                                                <div class="text-muted text-sm fw-medium">DOH</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-auto">
                                        <div class="text-dark fw-medium">5H 30M</div>
                                        <div class="text-muted text-sm fw-medium">2 Stop</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-auto">
                        <div class="d-flex items-center h-100">
                            <div class="d-lg-block d-none border br-dashed me-4"></div>
                            <div>
                                <div class="d-flex align-items-center justify-content-md-end mb-3">
                                    <span class="square--20 rounded text-xs text-muted border me-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="Free WiFi"><i
                                            class="fa-solid fa-wifi"></i></span>
                                    <span class="square--20 rounded text-xs text-muted border me-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="Food Available"><i
                                            class="fa-solid fa-utensils"></i></span>
                                    <span class="square--20 rounded text-xs text-muted border me-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="One Cup Tea"><i
                                            class="fa-solid fa-mug-saucer"></i></span>
                                    <span class="square--20 rounded text-xs text-muted border" data-bs-toggle="tooltip"
                                        data-bs-placement="top" data-bs-title="Pet Allow"><i class="fa-solid fa-dog"></i></span>
                                </div>
                                <div class="text-start text-md-end">
                                    <span class="label bg-light-success text-success me-1">15% Off</span>
                                    <div class="text-dark fs-3 fw-bold lh-base">US$934</div>
                                    <div class="text-muted text-sm mb-2">Refundable</div>
                                </div>

                                <div class="flight-button-wrap">
                                    <button class="btn btn-primary btn-md fw-medium full-width" data-bs-toggle="modal"
                                        data-bs-target="#bookflight">
                                        Select Flight<i class="fa-solid fa-arrow-trend-up ms-2"></i>
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