import FlightCard from "../_components/FlightCard/page";
import ModifySearch from "../_components/ModifySearc/page";
import OfferCard from "../_components/OfferCard/page";
import SearchFilter from "../_components/SearchFilter/page";
import airlines from "../../../lib/airlines.json";
import airportsDB from "../../../lib/airports.json";

const fetchFlightList = async (searchParams) => {
    let query = {
        "currencyCode": `${searchParams.curr}`,
        "originDestinations": [
            {
                "id": "1",
                "originLocationCode": searchParams.src,
                "destinationLocationCode": searchParams.des,
                "departureDateTimeRange": {
                    "date": searchParams.dep
                }
            }
        ],
        "travelers": [
            {
                "id": "1",
                "travelerType": "ADULT"
            }
        ],
        "sources": [
            "GDS"
        ],
        "searchCriteria": {
            "maxFlightOffers": 50,
            "flightFilters": {
                "cabinRestrictions": [
                    {
                        "cabin": "ECONOMY",
                        "originDestinationIds": [
                            "1"
                        ]
                    }
                ]
            }
        }
    };

    try {
        const response = await fetch("https://test.api.amadeus.com/v2/shopping/flight-offers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${searchParams.tk}`
            },
            body: JSON.stringify(query)
        });

        const json = await response.json();

        const FlightList = json.data.map(a => {
            a.itineraries.forEach(b => {
                b.segments.forEach(segment => {
                    segment.airline = airlines[segment.carrierCode];
                    segment.arrival.airport = airportsDB[segment.arrival.iataCode];
                    segment.departure.airport = airportsDB[segment.departure.iataCode];
                });
            });
            // a.direct = a.itineraries['segments'].length <= 2 ? true : false;
            return a;
        });

        return FlightList;
    } catch (err) {
        console.error(err);
        return [];
    }
}

const FlightListPage = async ({ searchParams }) => {
    let FlightList = await fetchFlightList(searchParams);
    return <>
        <div className="bg-primary position-relative inner-search-form-container">
            <ModifySearch />
        </div >
        {/* <!-- ============================ All Flits Search Lists Start ================================== --> */}
        <section class="gray-simple">
            <div class="container">
                <div class="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                    {/* <!-- Sidebar Filter Options --> */}
                    <SearchFilter />
                    {/* <!-- All Flight Lists --> */}
                    <div class="col-xl-9 col-lg-8 col-md-12">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-xl-4 col-lg-4 col-md-4">
                                <h5 class="fw-bold fs-6 mb-lg-0 mb-3">Showing 280 Search Results</h5>
                            </div>
                            <div class="col-xl-8 col-lg-8 col-md-12">
                                <div class="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                                    <div class="flsx-first me-2">
                                        <div class="bg-white rounded py-2 px-3">
                                            <div class="form-check form-switch">
                                                <input class="form-check-input" type="checkbox" role="switch" id="mapoption" />
                                                <label class="form-check-label ms-1" for="mapoption">Map</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flsx-first mt-sm-0 mt-2">
                                        <ul class="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm"
                                            id="filtersblocks" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button"
                                                    role="tab" aria-selected="true">Our Trending</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button"
                                                    role="tab" aria-selected="false">Most Popular</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab"
                                                    aria-selected="false">Lowest Price</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row align-items-center g-4 mt-2">

                            {/* <!-- Single Flight --> */}
                            {/* <!-- Sidebar Filter Options --> */}
                            {FlightList && FlightList.map(a => {
                                return <FlightCard flight={a} />
                            })}
                            {/* <!-- Offer Coupon Box --> */}
                            <OfferCard />
                            {/* <!-- Single Flight --> */}
                            <div class="col-xl-12 col-lg12 col-md-12">
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
                                                                        <img class="img-fluid" src="assets/img/air-2.png" width="45" alt="image" />
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
                                                                        <img class="img-fluid" src="assets/img/air-3.png" width="45" alt="image" />
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

                            {/* <!-- Single Flight --> */}
                            <div class="col-xl-12 col-lg12 col-md-12">
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
                                                                        <img class="img-fluid" src="assets/img/air-4.png" width="45" alt="image" />
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
                                                                        <img class="img-fluid" src="assets/img/air-1.png" width="45" alt="image" />
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

                            {/* <!-- Single Flight --> */}
                            <div class="col-xl-12 col-lg12 col-md-12">
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
                                                                        <img class="img-fluid" src="assets/img/air-2.png" width="45" alt="image" />
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
                                                                        <img class="img-fluid" src="assets/img/air-4.png" width="45" alt="image" />
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

                            {/* <!-- Single Flight --> */}
                            <div class="col-xl-12 col-lg12 col-md-12">
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
                                                                        <img class="img-fluid" src="assets/img/air-3.png" width="45" alt="image" />
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
                                                                        <img class="img-fluid" src="assets/img/air-1.png" width="45" alt="image" />
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

                            {/* <!-- Single Flight --> */}
                            <div class="col-xl-12 col-lg12 col-md-12">
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
                                                                        <img class="img-fluid" src="assets/img/air-3.png" width="45" alt="image" />
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

                            {/* <!-- Single Flight --> */}
                            <div class="col-xl-12 col-lg12 col-md-12">
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
                                                                        <img class="img-fluid" src="assets/img/air-4.png" width="45" alt="image" />
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

                            <div class="col-xl-12 col-lg-12 col-12">
                                <div class="pags card py-2 px-5">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination m-0 p-0">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true"><i class="fa-solid fa-arrow-left-long"></i></span>
                                                </a>
                                            </li>
                                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><i class="fa-solid fa-arrow-right-long"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- ============================ All Flits Search Lists End ================================== --> */}

    </>
}

export default FlightListPage;