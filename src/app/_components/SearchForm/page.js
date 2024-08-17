"use client"
import { useEffect } from "react";
import Link from "next/link";
import HotelSearch from "../HotelSearch/page";
import TourSearch from "../TourSearch/page";
import CabSearch from "../CabSearch/page";
import FlightSearch from "../FlightSearch/page";
const SearchForm = () => {
    useEffect(() => {
        const customScript = document.createElement("script");
        customScript.src = "/assets/js/custom.js"
        document.body.appendChild(customScript);
    }, [])
    return <div className="col-xl-5 col-lg-6 col-md-12">
        <div className="searchableForm bg-white rounded-3">
            <div className="searchableHead">
                <ul className="nav nav-tabs lights medium justify-content-center" id="tour-pills-tab" role="tablist">
                    {/* <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="tab" href="#hotels"><i className="fa-solid fa-hotel me-2"></i>Hotels</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link active" data-bs-toggle="tab" href="#flights"><i className="fa-solid fa-jet-fighter me-2"></i>Flights</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="tab" href="#tours"><i className="fa-solid fa-globe me-2"></i>Tour</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" data-bs-toggle="tab" href="#cabs"><i className="fa-solid fa-car me-2"></i>Cab</Link>
                    </li> */}
                </ul>
            </div>
            <div className="searchableCaps">
                <div className="search-wrap">
                    <div className="tab-content p-xl-5 p-4">
                        <FlightSearch />
                        <HotelSearch />
                        <TourSearch />
                        <CabSearch />
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default SearchForm;