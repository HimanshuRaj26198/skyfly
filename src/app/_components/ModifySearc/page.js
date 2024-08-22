"use client"

import { useState, useEffect, useRef } from "react";
import Airports from "../../../../lib/airports.json";
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';




function getWindowDimensions() {
    if (typeof window !== "undefined") { // Check if window is defined
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }
    return { width: 0, height: 0 };
}

const ModifySearch = ({ bookingClass, trip }) => {
    const router = useRouter();
    const [modifySearchVisible, setModifySearchVisible] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [source, setSource] = useState("");
    const [des, setDes] = useState("");
    const [depDate, setDepDate] = useState("");
    const [token, setToken] = useState(null);
    const [country, setCountry] = useState({});

    let airportList = Object.values(Airports).map(a => {
        return { value: a.iata, label: `${a.city}, ${a.iata}` }
    });


    const handleOriginChange = (selected) => {
        setSource(selected);
    };

    const handleDestinationChange = (selected) => {
        setDes(selected);
    }

    const handleDepartureChange = (selectedDates) => {
        const adjustedDate = new Date(selectedDates[0].getTime() - selectedDates[0].getTimezoneOffset() * 60000);
        setDepDate(adjustedDate);
    }

    const handleModifySearchSubmit = () => {
        if (!source) {
            toast.error("Add a origin airport.")
        } else if (!des) {
            toast.error("Add a destination airport.")
        } else if (!depDate) {
            toast.error("Add a departure date.")
        } else {
            console.log(country, "Country")
            router.push(`/flights?src=${source.value}&des=${des.value}&dep=${depDate.toISOString().substring(0, 10)}&tk=${token}&curr=${country.currency}&class=${bookingClass}`)
        }
    }

    const showModifySearch = () => {
        console.log("Function Triggering");
        console.log(modifySearchVisible, "Visible");
        setModifySearchVisible(prevState => !prevState);
    };

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
            setToken(json.access_token);
        } catch (err) {
            console.log(err);
        }
    }

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

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        setSource(airportList.find(a => { if (a.value === trip.src) return a }));
        setDes(airportList.find(a => { if (a.value === trip.destination) return a }));
        let tripDate = new Date(trip.departureDate);
        setDepDate(tripDate);
        // setCountry(JSON.parse(Cookies.get('country')))
        setCountry(JSON.parse(localStorage.getItem("country")));
        window.addEventListener('resize', handleResize);
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))
        } else {
            fetchToken();
        }
        handleResize(); // Call it initially to set the state correctly
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update visibility based on window size
    useEffect(() => {
        if (window) {
            if (windowDimensions.width < 992) {
                setModifySearchVisible(false);
            } else {
                setModifySearchVisible(true);
            }
        }
    }, [windowDimensions]);

    return (
        <>
            <div className="container search-filter-opener">
                <div onClick={() => showModifySearch()} className="modify-search-action-container">
                    <span> Modify Search </span> {modifySearchVisible ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}
                </div>
            </div>
            {modifySearchVisible && (
                <div className="container inner-search-form">
                    {/* Search Form */}
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="search-wrap position-relative">
                                <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                                    <div className="col-xl-8 col-lg-7 col-md-12">
                                        <div className="row gy-3 gx-md-3 gx-sm-2">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                                <div className="form-group hdd-arrow mb-0">
                                                    <label className="text-light text-uppercase opacity-75">Leaving From</label>
                                                    <Select
                                                        className="leaving form-control fw-bold"
                                                        options={airportList}
                                                        placeholder="Leaving..."
                                                        styles={customStyles}
                                                        onChange={handleOriginChange}
                                                        defaultValue={source}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-group hdd-arrow mb-0">
                                                    <label className="text-light text-uppercase opacity-75">Going To</label>
                                                    <Select
                                                        className="leaving form-control fw-bold"
                                                        options={airportList}
                                                        placeholder="Going To"
                                                        styles={customStyles}
                                                        onChange={handleDestinationChange}
                                                        defaultValue={des}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-12">
                                        <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                                <div className="form-group mb-0">
                                                    <label className="text-light text-uppercase opacity-75">Journey Date</label>
                                                    <Flatpickr
                                                        className="form-control fw-bold choosedate"
                                                        value={depDate}

                                                        onChange={handleDepartureChange}
                                                        options={{
                                                            dateFormat: 'Y-m-d',
                                                            minDate: "today",
                                                            disableMobile: true,
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
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                <div className="form-group mb-0">
                                                    <button onClick={handleModifySearchSubmit} type="button" className="btn btn-whites text-primary full-width fw-medium">
                                                        <i className="fa-solid fa-magnifying-glass me-2"></i>Search
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModifySearch;
