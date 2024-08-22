"use client"
import { useEffect, useState } from "react";
import CountryList from "../../../../lib/countryFlag.json";

const FlightCardPrice = ({ price, currency }) => {
    const [country, setCountry] = useState(null);

    useEffect(() => {
        if (document) {
            setCountry(JSON.parse(localStorage.getItem("country")))
        }
    }, [])
    return <>{country && <div className="text-dark fs-3 fw-bold lh-base">{country.currency}{country.currencySymbol}{price}</div>}</>

}

export default FlightCardPrice;