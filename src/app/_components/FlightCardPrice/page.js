"use client"
import { useEffect, useState } from "react";
import CountryList from "../../../../lib/countryFlag.json";

const FlightCardPrice = ({ price, currency }) => {
    const [country, setCountry] = useState({
        "country": "United States",
        "flag": "/assets/img/flag/united-states.png",
        "currency": "USD",
        "currencySymbol": "$"
    });

    useEffect(() => {
        if (localStorage.getItem("country") !== undefined) {
            setCountry(JSON.parse(localStorage.getItem("country")))
        }
    }, [])
    return <> <div className="text-dark fs-3 fw-bold lh-base">{country.currency}{country.currencySymbol}{price}</div></>

}

export default FlightCardPrice;