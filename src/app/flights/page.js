import FlightCard from "../_components/FlightCard/page";
import ModifySearch from "../_components/ModifySearc/page";
import OfferCard from "../_components/OfferCard/page";
import SearchFilter from "../_components/SearchFilter/page";
import airlines from "../../../lib/airlines.json";
import airportsDB from "../../../lib/airports.json";

const fetchFlightList = async (searchParams) => {
    let currency = searchParams.curr || "USD";
    console.log(currency, "currency")
    let query = {
        "currencyCode": currency,
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
                        "cabin": searchParams.class,
                        "originDestinationIds": [
                            "1"
                        ]
                    }
                ]
            }
        }
    };

    try {
        const response = await fetch("https://api.amadeus.com/v2/shopping/flight-offers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${searchParams.tk}`
            },
            body: JSON.stringify(query)
        });

        const json = await response.json();
        // console.log(json, "JSON");
        // console.log(sampleResponse, "Sample Response");
        // let json = {};
        // json.data = await SampleRespone;
        const FlightList = json.data.map(a => {
            a.itineraries.forEach(b => {
                b.segments.forEach(segment => {
                    segment.airline = airlines[segment.carrierCode];
                    segment.arrival.airport = airportsDB[segment.arrival.iataCode];
                    segment.departure.airport = airportsDB[segment.departure.iataCode];

                    // Append the cabin class to the segment
                    const cabin = a.travelerPricings[0].fareDetailsBySegment.find(fare => fare.segmentId === segment.id)?.cabin;
                    if (cabin) segment.cabin = cabin;
                });
            });
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
    const nonStopFlights = FlightList.filter(offer => offer.itineraries.every(itin => itin.segments.length === 1));
    const stopoverFlights = FlightList.filter(offer => offer.itineraries.some(itin => itin.segments.length > 1));
    nonStopFlights.sort((a, b) => a.price.total - b.price.total); // Replace 'price.total' with your chosen criteria
    stopoverFlights.sort((a, b) => a.price.total - b.price.total); // Replace 'price.total' with your chosen criteria
    FlightList = [...nonStopFlights, ...stopoverFlights];
    FlightList = FlightList.sort((a, b) => {
        a.itineraries[0].segments.length - b.itineraries[0].segments.length
    })
    return <>
        <div className="bg-primary position-relative inner-search-form-container">
            <ModifySearch trip={{ src: searchParams.src, destination: searchParams.des, departureDate: searchParams.dep }} bookingClass={searchParams.class} token={searchParams.tk} />
        </div >
        {/* <!-- ============================ All Flits Search Lists Start ================================== --> */}
        <section className="gray-simple">
            <div className="container">
                <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                    {/* <!-- Sidebar Filter Options --> */}
                    <SearchFilter flightDataLength={FlightList.length} />
                    {/* <!-- All Flight Lists --> */}
                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing {FlightList.length} Search Results</h5>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12">
                                <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                                    {/* <div className="flsx-first me-2">
                                        <div className="bg-white rounded py-2 px-3">
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="mapoption" />
                                                <label className="form-check-label ms-1" for="mapoption">Map</label>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="flsx-first mt-sm-0 mt-2">
                                        <ul className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm"
                                            id="filtersblocks" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button"
                                                    role="tab" aria-selected="true">Our Trending</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button"
                                                    role="tab" aria-selected="false">Most Popular</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab"
                                                    aria-selected="false">Lowest Price</button>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center g-4 mt-2">
                            {/* <!-- Offer Coupon Box --> */}
                            {/* <OfferCard /> */}
                            {/* <!-- Offer Coupon Box --> */}
                            {/* <!-- Single Flight --> */}
                            {/* <!-- Sidebar Filter Options --> */}
                            {FlightList && FlightList.map((a, i) => {
                                return <FlightCard key={i} flight={a} currency={searchParams.currency} trip={{ source: searchParams.src, des: searchParams.des }} />
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- ============================ All Flits Search Lists End ================================== --> */}

    </>
}

export default FlightListPage;