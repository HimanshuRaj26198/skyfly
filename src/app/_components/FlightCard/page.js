"use client"
import Link from "next/link";
import FlightCardPrice from "../FlightCardPrice/page";
import { useRouter } from "next/navigation";
const FlightCard = ({ flight, trip }) => {
    const router = useRouter();
    const getFormattedDate = (date) => {
        let newDate = new Date(date)
        if (!isNaN(newDate)) {
            const formattedDate = newDate.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });
            return formattedDate;
        } else {
            console.log("Not a valid date");
        }
    };

    const getTimeFromDate = (date) => {
        let newDate = new Date(date);

        // Get hours and minutes
        let hours = newDate.getHours();
        let minutes = newDate.getMinutes();

        // Add leading zero to minutes if needed
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        // Add leading zero to hours if needed
        if (hours < 10) {
            hours = '0' + hours;
        }
        return `${hours}:${minutes}`;
    };


    function extractDuration(ptString) {
        // Define a regular expression to match hours and minutes
        const regex = /PT(\d+H)?(\d+M)?/;

        // Use the regex to extract hours and minutes
        const matches = ptString.match(regex);

        // Initialize hours and minutes
        let hours = '';
        let minutes = '';

        if (matches) {
            // Extract hours if present
            if (matches[1]) {
                hours = matches[1].replace('H', '') + 'H';
            }

            // Extract minutes if present
            if (matches[2]) {
                minutes = matches[2].replace('M', '') + 'M';
            }
        }

        // Return the formatted duration as "XH YM"
        return `${hours} ${minutes || '00M'}`.trim();
    }
    ;

    const getFlightDetail = () => {
        let pathname = `/flights/${trip.source}-${trip.des}`;
        localStorage.setItem("selectedFlight", JSON.stringify(flight));
        router.push(pathname)
    }

    return <div className="col-xl-12 col-lg12 col-md-12">
        <div className="flights-accordion">
            <div className="flights-list-item bg-white rounded-3 p-3">
                <div className="row gy-4 align-items-center justify-content-between">
                    <div className="col">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="label bg-light-primary text-primary me-2">Departure</span>
                                    <span className="text-muted text-sm">{getFormattedDate(flight.itineraries[0].segments[0].departure.at)}</span>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 flight-card-custom">
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "10px" }} >
                                    {
                                        flight.itineraries[0].segments.map(a => {
                                            return <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
                                                <div className="col-sm-auto">
                                                    <div className="d-flex align-items-center justify-content-start">
                                                        <div className="d-start fl-pic">
                                                            <img className="img-fluid" src={a.airline.logo} width="45" alt="image" />
                                                        </div>
                                                        <div className="d-end fl-title ps-2">
                                                            <div className="text-dark fw-medium">{a.airline.name}</div>
                                                            <div className="text-sm text-muted">First Class</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col">
                                                    <div className="row gx-3 align-items-center">
                                                        <div className="col-auto">
                                                            <div className="text-dark fw-bold">{getTimeFromDate(a.departure.at)}</div>
                                                            <div className="text-muted text-sm fw-medium">{a.departure.iataCode}</div>
                                                        </div>

                                                        <div className="col text-center">
                                                            <div className="flightLine departure">
                                                                <div></div>
                                                                <div></div>
                                                            </div>
                                                            {flight.itineraries[0].segments.length === 1 && <div className="text-muted text-sm fw-medium mt-3">Direct</div>}
                                                        </div>

                                                        <div className="col-auto">
                                                            <div className="text-dark fw-bold">{getTimeFromDate(a.arrival.at)}</div>
                                                            <div className="text-muted text-sm fw-medium">{a.arrival.iataCode}</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        })
                                    }
                                </div>
                                <div className="col-md-auto">
                                    <div className="text-dark fw-medium">{extractDuration(flight.itineraries[0].duration)}</div>
                                    <div className="text-muted text-sm fw-medium">{flight.itineraries[0].segments.length === 1 ? "Non" : flight.itineraries[0].segments.length - 1} Stop</div>
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
                                    <FlightCardPrice price={flight.price.total} />
                                    <div className="text-muted text-sm mb-2">Refundable</div>
                                </div>

                                <div onClick={getFlightDetail} className="flight-button-wrap">
                                    <button style={{ zIndex: "999" }} className="btn btn-primary btn-md fw-medium full-width">
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

export default FlightCard;