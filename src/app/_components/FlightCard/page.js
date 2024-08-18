import FlightCardPrice from "../FlightCardPrice/page";

const FlightCard = async ({ flight }) => {
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

    return <div class="col-xl-12 col-lg12 col-md-12">
        <div class="flights-accordion">
            <div class="flights-list-item bg-white rounded-3 p-3">
                <div class="row gy-4 align-items-center justify-content-between">

                    <div class="col">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="label bg-light-primary text-primary me-2">Departure</span>
                                    <span class="text-muted text-sm">{getFormattedDate(flight.itineraries[0].segments[0].departure.at)}</span>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12 flight-card-custom">
                                <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "10px" }} >
                                    {
                                        flight.itineraries[0].segments.map(a => {
                                            return <div class="row gx-lg-5 gx-3 gy-4 align-items-center">
                                                <div class="col-sm-auto">
                                                    <div class="d-flex align-items-center justify-content-start">
                                                        <div class="d-start fl-pic">
                                                            <img class="img-fluid" src={a.airline.logo} width="45" alt="image" />
                                                        </div>
                                                        <div class="d-end fl-title ps-2">
                                                            <div class="text-dark fw-medium">{a.airline.name}</div>
                                                            <div class="text-sm text-muted">First Class</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col">
                                                    <div class="row gx-3 align-items-center">
                                                        <div class="col-auto">
                                                            <div class="text-dark fw-bold">{getTimeFromDate(a.departure.at)}</div>
                                                            <div class="text-muted text-sm fw-medium">{a.departure.iataCode}</div>
                                                        </div>

                                                        <div class="col text-center">
                                                            <div class="flightLine departure">
                                                                <div></div>
                                                                <div></div>
                                                            </div>
                                                            {flight.itineraries[0].segments.length === 1 && <div class="text-muted text-sm fw-medium mt-3">Direct</div>}
                                                        </div>

                                                        <div class="col-auto">
                                                            <div class="text-dark fw-bold">{getTimeFromDate(a.arrival.at)}</div>
                                                            <div class="text-muted text-sm fw-medium">{a.arrival.iataCode}</div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        })
                                    }
                                </div>
                                <div class="col-md-auto">
                                    <div class="text-dark fw-medium">{extractDuration(flight.itineraries[0].duration)}</div>
                                    <div class="text-muted text-sm fw-medium">{flight.itineraries[0].segments.length === 1 ? "Non" : flight.itineraries[0].segments.length - 1} Stop</div>
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
                                    <FlightCardPrice price={flight.price.total} />
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

export default FlightCard;