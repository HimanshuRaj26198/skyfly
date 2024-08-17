"use client"
import Airports from "../../../../lib/airports.json";
import { useState } from "react";
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useRouter } from "next/navigation";
import { toast, useEffect } from "react-toastify";

const FlightSearch = () => {
    const router = useRouter();
    const [returnTrip, setReturnTrip] = useState(false);
    const [departure, setDeparture] = useState("");
    const [returnD, setReturnD] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [adultCount, setAdultCount] = useState(0);
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


    const handleSearchFlights = () => {
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
            router.push(`/flights?src=${origin.value}&des=${destination.value}&dep=${departure.toISOString().substring(0, 10)}&ret=${returnD && returnD.toISOString().substring(0, 10)}&adult=${adultCount}`)
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

    return <div className="tab-pane show active" id="flights">
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
                    <select onChange={(e) => { setAdultCount(e.target.value) }} className="occupant form-control fw-bold">
                        <option value="">Select</option>
                        <option value="1">01 Adult</option>
                        <option value="2">02 Adult</option>
                        <option value="3">03 Adult</option>
                        <option value="4">04 Adult</option>
                        <option value="5">05 Adult</option>
                        <option value="6">06 Adult</option>
                        <option value="7">07 Adult</option>
                        <option value="8"> 08 Adult</option>
                    </select>
                </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group mb-0">
                    <button onClick={handleSearchFlights} type="button" className="btn btn-primary full-width fw-medium">Search Flights<i className="fa-solid fa-location-arrow ms-2"></i></button>
                </div>
            </div>

        </div>
    </div>
}

export default FlightSearch;