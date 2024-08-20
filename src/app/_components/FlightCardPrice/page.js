"use client"
import { useEffect, useState } from "react";
const FlightCardPrice = ({ price }) => {
    const [country, setCountry] = useState({});
    useEffect(() => {
        setCountry(JSON.parse(localStorage.getItem("country")))
    }, [])
    return <div className="text-dark fs-3 fw-bold lh-base">{country.currency}{country.currencySymbol}{price}</div>
}

export default FlightCardPrice;