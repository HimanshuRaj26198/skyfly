"use client"
import Airports from "../../../../lib/airports.json";
import { useState, useEffect } from "react";
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Preloader from "../Preloader/page";


const FlightSearch = () => {
    const router = useRouter();
    const [returnTrip, setReturnTrip] = useState(false);
    const [departure, setDeparture] = useState("");
    const [returnD, setReturnD] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [adultCount, setAdultCount] = useState(0);
    const [country, setCountry] = useState({});
    const [loading, setLoading] = useState(false);
    const [bookingClass, setBookingClass] = useState("ECONOMY");
    const classList = [
        { label: "ECONOMY", value: "ECONOMY" },
        { label: "FIRST CLASS", value: "FIRST" },
        { label: "BUSINESS", value: "BUSINESS" },
        { label: "PREMIUM ECONOMY", value: "PREMIUM_ECONOMY" }
    ]
    let airportList = Object.values(Airports).map(a => {
        return { value: a.iata, label: `${a.city}, ${a.iata}` }
    });

    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: 'none', // Remove the border
            boxShadow: 'none', // Remove box shadow
            '&:hover': {
                border: 'none', // Ensure no border on hover
            },
            height: '100%'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'rgba(0, 0, 0, 0.3)', // Change placeholder color
            fontSize: '14px', // Change placeholder font size
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'black', // Change selected value color
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999, // Ensure menu is above other elements
        }),
    };


    const handleSearchFlights = async () => {
        if (!origin.value) {
            toast.error("Please add origin airport.")
        } else if (!destination.value) {
            toast.error("Please add destination airport.")
        } else if (!departure) {
            toast.error("Please add departure date.")
        } else if (returnTrip && !returnD) {
            toast.error("Please add return date.")
        }
        else {
            setLoading(true);
            let token = localStorage.getItem("typCknhbg");
            let curr = JSON.parse(localStorage.getItem("country")).currency || "USD";
            router.push(`/flights?src=${origin.value}&des=${destination.value}&dep=${departure.toISOString().substring(0, 10)}&ret=${returnD && returnD.toISOString().substring(0, 10)}&adult=${adultCount}&tk=${token}&curr=${curr}&class=${bookingClass}`)
        }
    }
    const handleDepartureChange = (selectedDates) => {
        setDeparture(selectedDates[0]);
    };

    const handleReturnDateChange = (selectedDates) => {
        setReturnD(selectedDates[0]);
    }

    const handleOriginChange = (selected) => {
        setOrigin(selected);
    }

    const handleDestinationChange = (selected) => {
        setDestination(selected);
    }

    const fetchToken = async () => {
        let body = new URLSearchParams();
        body.append("grant_type", "client_credentials");
        body.append("client_id", "0fTkgg7u7lrqduKUEFx7v5Gnhey4ZG50");
        body.append("client_secret", "1kbdDxkhO4kMMH9p");
        try {
            const data = await fetch("https://api.amadeus.com/v1/security/oauth2/token",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: body.toString()
                });
            const json = await data.json();
            localStorage.setItem("typCknhbg", json.access_token);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setCountry(JSON.parse(localStorage.getItem("country")));
        fetchToken();
    }, [])

    return <>
        {loading && <div className="dark_container" > <Preloader /> </div>}
        <div className="tab-pane show active" id="flights">
            <div className="row gx-lg-2 g-3">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="flx-start mb-sm-0 mb-2">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={() => setReturnTrip(true)} type="radio" name="trip" id="return" value="option1" checked={returnTrip} />
                            <label className="form-check-label" for="return">Return</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onClick={() => setReturnTrip(false)} checked={!returnTrip} type="radio" name="trip" id="oneway" value="option2" />
                            <label className="form-check-label" for="oneway">One Way</label>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row gy-3 gx-lg-2 gx-3">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                            <div className="form-group hdd-arrow mb-0">
                                <Select
                                    className="leaving form-control fw-bold"
                                    options={airportList}
                                    placeholder="Leaving..."
                                    styles={customStyles}
                                    onChange={handleOriginChange}
                                />
                            </div>
                            <div className="btn-flip-icon mt-md-0">
                                <button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left"></i></button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="form-groupp hdd-arrow mb-0">
                                <Select
                                    className="leaving form-control fw-bold"
                                    options={airportList}
                                    placeholder="Going To"
                                    styles={customStyles}
                                    onChange={handleDestinationChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="form-group mb-0">
                        <Flatpickr
                            className="form-control fw-bold choosedate"
                            value={departure}
                            onChange={handleDepartureChange}
                            options={{
                                dateFormat: 'Y-m-d',
                                minDate: "today",
                                disableMobile: true
                            }}
                            render={({ defaultValue, value, ...props }, ref) => {
                                return (
                                    <input
                                        {...props}
                                        ref={ref}
                                        className="form-control fw-bold choosedate"// Add your custom styles
                                        placeholder="Departure.."
                                        type="text"
                                    />
                                );
                            }}
                        />
                        {/* <input className="form-control fw-bold choosedate" type="text" placeholder="Departure.." /> */}
                    </div>
                </div>
                {returnTrip && <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="form-group mb-0">
                        <Flatpickr
                            className="form-control fw-bold choosedate"
                            value={returnD}
                            onChange={handleReturnDateChange}
                            options={{
                                dateFormat: 'Y-m-d',
                                minDate: "today",
                                disableMobile: true
                            }}
                            render={({ defaultValue, value, ...props }, ref) => {
                                return (
                                    <input
                                        {...props}
                                        ref={ref}
                                        className="form-control fw-bold choosedate"// Add your custom styles
                                        placeholder="Return..."
                                        type="text"
                                    />
                                );
                            }}
                        />
                        {/* <input onChange={(e) => { console.log(e.target.value) }} className="form-control fw-bold choosedate" type="text" placeholder="Return.." /> */}
                    </div>
                </div>}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="form-groupp hdd-arrow mb-0">
                        <Select
                            className="occupant form-control fw-bold"
                            options={classList}
                            placeholder="Travel Class"
                            styles={customStyles}
                            onChange={(selected) => { setBookingClass(selected.value) }}
                        />
                    </div>
                </div>

                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="form-group mb-0">
                        <button onClick={handleSearchFlights} type="button" className="btn btn-primary full-width fw-medium">Search Flights<i className="fa-solid fa-location-arrow ms-2"></i></button>
                    </div>
                </div>

            </div>
        </div></>
}

export default FlightSearch;