"use client"
import { useEffect, useRef, useState } from "react";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import Country from "../../../../lib/countryFlag.json";
const FlightDetail = () => {
    const [flight, setFlight] = useState(null);
    const [travellers, setTravellers] = useState([]);
    const firstNameRef = useRef("");
    const lastNameRef = useRef("");
    const passportNumber = useRef("");
    const passportExpire = useRef("");
    const [DOB, setDOB] = useState(null);
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("Male");
    const emailRef = useRef("");
    const mobNo = useRef("");
    const [country, setCountry] = useState(Country["United States of America (the)"]);
    const [filledNum, setFilledNum] = useState(false);
    const contactName = useRef("");
    const contactLastname = useRef("");
    const contactNum = useRef("+1");
    const contactEmail = useRef("");


    const handleSelectGender = (gender) => {
        setGender(gender);
    }

    const handleNationalitySelect = (e) => {
        setNationality(e.target.value);
    }

    const handleDOBChange = (selectedDates) => {
        setDOB(selectedDates[0]);
    };

    function calculateAge(DOB) {
        const birthDate = new Date(DOB);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // If birth month hasn't occurred yet this year or it's the current month but the birth day hasn't occurred yet
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    // Example usage:
    const age = calculateAge('1995-09-17');
    console.log(age); // Outputs the age


    const handleAddTraveller = () => {
        let traveller = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            passportNumber: passportNumber.current.value,
            passportExpire: passportExpire.current.value,
            DOB: DOB,
            nationality,
            gender,
        };

        setTravellers([...travellers, traveller]);
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        passportNumber.current.value = "";
        passportExpire.current.value = "";
        setDOB(null);
        setNationality("");
        setGender("");
    }

    function formatIsoDateToDayMonth(isoDate) {
        const date = new Date(isoDate);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short'
        }).replace(' ', ' ');
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

    const removeElementByIndex = (array, index) => {
        if (index > -1 && index < array.length) {
            array.splice(index, 1);
        }
        return array;
    };


    const handleRemoveItem = (index) => {
        setTravellers(prevArray => removeElementByIndex([...prevArray], index));
    }

    const handleContactFormSubmit = (e) => {
        e.preventDefault();
        let contactFormData = new FormData();
        console.log(contactName.current.value, "Name Ref");
        console.log(contactLastname.current.value, "Name Ref")
        console.log(contactEmail.current.value, "Name Ref")
        console.log(contactNum.current.value, "Name Ref")
        contactFormData.append("FirstName", contactName.current.value);
        contactFormData.append("LastName", contactLastname.current.value);
        contactFormData.append("Email", contactEmail.current.value);
        contactFormData.append("Mobile", contactNum.current.value);
        console.log(contactFormData, "Form");
        console.log(contactFormData.get("FirstName"), "FormData");
        fetch("https://script.google.com/macros/s/AKfycbwVmb-Fq-ph0V-Buszfxf-iww-DuyO7M7s7APz-3-yNsDeXO3XWQCG3-djqs9kJ1X1CdA/exec",
            {
                method: "POST",
                body: contactFormData
            }
        ).then(res => console.log(res)).catch(err => console.log(err));
    }

    useEffect(() => {
        setFlight(JSON.parse(localStorage.getItem("selectedFlight")));

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                    const data = await response.json();
                    setCountry(data.countryName);
                    setFlagUrl(Country[data.countryName].flag);
                    setCurrency(Country[data.countryName].currency);
                    console.log({ countryObj: Country[data.countryName], countryName: data.countryName }, "IN NAV");
                    localStorage.setItem("country", JSON.stringify(Country[data.countryName]));
                    Cookies.set("country", JSON.stringify(Country[data.countryName], { expires: 1 }));
                },
                (error) => console.log(error)
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
        // if (document) {
        //     let script = document.createElement("script");
        //     script.type = "text/javascript";
        //     script.innerHTML = `
        //         const scriptURL = 'https://script.google.com/macros/s/AKfycbwVmb-Fq-ph0V-Buszfxf-iww-DuyO7M7s7APz-3-yNsDeXO3XWQCG3-djqs9kJ1X1CdA/exec'
        //         const form = document.forms['google-sheet']
        //         form.addEventListener('submit', e => {
        //           e.preventDefault()
        //           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        //             .then(response => window.open('/error.html', '_self'))
        //         })
        //     `
        // }
    }, [])
    return <>
        <section className="pt-3 gray-simple">
            <div className="container">
                <div className="row">

                    {/* <!-- Breadcrumb --> */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#" className="text-primary">Home</a></li>
                                <li className="breadcrumb-item"><a href="#" className="text-primary">Flight</a></li>
                                {flight && <li className="breadcrumb-item active" >{flight.itineraries[0].segments[0].departure.airport.city} To {flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.airport.city}</li>}
                            </ol>
                        </nav>
                    </div>

                    {/* <!-- Flight Info --> */}
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-12">
                                <div className="card border-0 mb-4">
                                    <div className="card-body">
                                        <div className="crd-block d-md-flex align-items-start justify-content-start">
                                            <div className="crd-heaader-0 flex-shrink-0 mb-3 mb-md-0">
                                                <div className="square--70 rounded-2 bg-light-primary text-primary fs-3"><i className="fa-solid fa-plane"></i></div>
                                            </div>
                                            <div className="crd-heaader-first ps-md-3">
                                                <div className="d-inline-flex align-items-center mb-1">
                                                    {flight && <span className="label fw-medium bg-light-success text-success">{flight.itineraries[0].segments[0].cabin} CLASS</span>}
                                                </div>
                                                <div className="d-block">
                                                    {flight && <h4 className="mb-0"> {flight.itineraries[0].segments[0].departure.airport.city} ({flight.itineraries[0].segments[0].departure.iataCode}) <span className="text-muted-2 mx-3"><i className="fa-solid fa-arrow-right-arrow-left"></i></span>{flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.airport.city} ({flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}) </h4>}
                                                    {flight && <div className="explotter-info">
                                                        <p className="detail ellipsis-container fw-semibold">
                                                            <span className="ellipsis-item__normal">{formatIsoDateToDayMonth(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].departure.at)}</span>
                                                            <span className="separate ellipsis-item__normal"></span>
                                                            <span className="ellipsis-item">{flight.itineraries[0].segments.length - 1 || "Non-"}Stop</span>
                                                            <span className="separate ellipsis-item__normal"></span>
                                                            <span className="ellipsis-item">{extractDuration(flight.itineraries[0].duration)}</span>
                                                        </p>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Flight Info --> */}
                                <div className="card border-0 mb-4">
                                    <div className="card-body">
                                        <div className="flights-accordion">
                                            <div className="flights-list-item">
                                                <div className="row gy-4 align-items-center justify-content-between">

                                                    {flight && flight.itineraries[0].segments.map(a => {
                                                        return <div className="col">
                                                            <div className="row">
                                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <span className="label bg-light-primary text-primary me-2">Departure</span>
                                                                        <span className="text-muted text-sm">26 Jun 2023</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                                    <div className="row gx-lg-5 gx-3 gy-4 align-items-center">

                                                                        <div className="col-sm-auto">
                                                                            <div className="d-flex align-items-center justify-content-start">
                                                                                <div className="d-start fl-pic">
                                                                                    <img className="img-fluid" src={a.airline.logo} width="45" alt="image" />
                                                                                </div>
                                                                                <div className="d-end fl-title ps-2">
                                                                                    <div className="text-dark fw-medium">{a.airline.name}</div>
                                                                                    <div className="text-sm text-muted">{a.cabin} Class</div>
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
                                                                                    <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                                                                                </div>

                                                                                <div className="col-auto">
                                                                                    <div className="text-dark fw-bold">{getTimeFromDate(a.arrival.at)}</div>
                                                                                    <div className="text-muted text-sm fw-medium">{a.arrival.iataCode}</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-auto">
                                                                            <div className="text-dark fw-medium">{extractDuration(flight.itineraries[0].duration)}</div>
                                                                            <div className="text-muted text-sm fw-medium">2 Stop</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Return Row will use Later */}
                                                            {/* <div className="row mt-4">
                                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <span className="label bg-light-success text-success me-2">Return</span>
                                                                        <span className="text-muted text-sm">26 Jun 2023</span>
                                                                    </div>
                                                                </div>
    
                                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                                    <div className="row gx-lg-5 gx-3 gy-4 align-items-center">
                                                                        <div className="col-sm-auto">
                                                                            <div className="d-flex align-items-center justify-content-start">
                                                                                <div className="d-start fl-pic">
                                                                                    <img className="img-fluid" src="assets/img/air-1.png" width="45" alt="image" />
                                                                                </div>
                                                                                <div className="d-end fl-title ps-2">
                                                                                    <div className="text-dark fw-medium">Qutar Airways</div>
                                                                                    <div className="text-sm text-muted">Business</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
    
                                                                        <div className="col">
                                                                            <div className="row gx-3 align-items-center">
                                                                                <div className="col-auto">
                                                                                    <div className="text-dark fw-bold">14:10</div>
                                                                                    <div className="text-muted text-sm fw-medium">LOS</div>
                                                                                </div>
    
                                                                                <div className="col text-center">
                                                                                    <div className="flightLine return">
                                                                                        <div></div>
                                                                                        <div></div>
                                                                                    </div>
                                                                                    <div className="text-muted text-sm fw-medium mt-3">Direct</div>
                                                                                </div>
    
                                                                                <div className="col-auto">
                                                                                    <div className="text-dark fw-bold">19:30</div>
                                                                                    <div className="text-muted text-sm fw-medium">DLH</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
    
                                                                        <div className="col-md-auto">
                                                                            <div className="text-dark fw-medium">5H 30M</div>
                                                                            <div className="text-muted text-sm fw-medium">2 Stop</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Login Alert --> */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="d-flex align-items-center justify-content-start py-3 px-3 rounded-2 bg-success mb-4">
                                        <p className="text-light fw-semibold m-0"><i className="fa-solid fa-gift text-warning me-2"></i><a href="#"
                                            className="text-white text-decoration-underline">Login</a> or <a href="#"
                                                className="text-white text-decoration-underline">Register</a> to earn upto 100 coins (approx 1.72 US$)
                                            after check-out.
                                        </p>
                                    </div>
                                </div>

                                {/* <!-- Flight Details --> */}

                                {/* <!-- Traveler Details --> */}
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    {/* <!-- Overview --> */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h6 className="fw-semibold mb-0">Traveler Details</h6>
                                        </div>

                                        <div className="card-body">

                                            <div className="bg-success bg-opacity-10 rounded-2 p-3 mb-3">
                                                <p className="h6 text-md mb-0"><span className="badge bg-success me-2">New</span>Please enter your name as per your passport ID</p>
                                            </div>

                                            {travellers && travellers.map((a, i) => {
                                                return <div className="gray rounded-3 position-relative p-4 mb-3">
                                                    <div className="position-absolute top-50 end-0 translate-middle-y me-2">
                                                        <a onClick={() => handleRemoveItem(i)} className="text-primary fs-5"><i className="fa-solid fa-circle-xmark"></i></a>
                                                    </div>
                                                    <div className="row align-items-center row-cols-xl-5 row-cols-lg-3 row-cols-md-3 col-cols-2">
                                                        <div className="col">
                                                            <p className="text-dark fw-semibold lh-base">Name</p>
                                                            <p className="text-muted-2 fw-medium lh-1">{a.firstName} {a.secondName}</p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-dark fw-semibold lh-base">Passport</p>
                                                            <p className="text-muted-2 fw-medium lh-1">{a.passportNumber}</p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-dark fw-semibold lh-base">Gender</p>
                                                            <p className="text-muted-2 fw-medium lh-1">{a.gender}</p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-dark fw-semibold lh-base">Age</p>
                                                            <p className="text-muted-2 fw-medium lh-1">{calculateAge(a.DOB)}</p>
                                                        </div>
                                                        <div className="col">
                                                            <p className="text-dark fw-semibold lh-base">Nationality</p>
                                                            <p className="text-muted-2 fw-medium lh-1">{a.nationality}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            })}

                                            {filledNum && <div className="full-width d-flex flex-column mb-4 position-relative">

                                                <div className="row align-items-stat">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 mb-2">
                                                        <h5>Add More Passengers</h5>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">First Name</label>
                                                            <input ref={firstNameRef} type="text" className="form-control" placeholder="Your First Name" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Last Name</label>
                                                            <input ref={lastNameRef} type="text" className="form-control" placeholder="Your Last Name" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Passport Number</label>
                                                            <input ref={passportNumber} type="text" className="form-control" placeholder="Passport Number Here" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Passport Expire</label>
                                                            <input ref={passportExpire} type="text" className="form-control" placeholder="Passport Expire Date" />
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Date of birth</label>
                                                            <Flatpickr
                                                                className="form-control fw-bold"
                                                                value={DOB}
                                                                onChange={handleDOBChange}
                                                                options={{
                                                                    dateFormat: 'Y-m-d',
                                                                    maxDate: "today",
                                                                    disableMobile: true
                                                                }}
                                                                render={({ defaultValue, value, ...props }, ref) => {
                                                                    return (
                                                                        <input
                                                                            {...props}
                                                                            ref={ref}
                                                                            className="form-control fw-bold"// Add your custom styles
                                                                            placeholder="DOB.."
                                                                            type="text"
                                                                        />
                                                                    );
                                                                }}
                                                            />
                                                            {/* <input ref={DOBRef} className="form-control fw-bold" type="text" placeholder="Select Date.." id="basicDate" readonly="readonly" /> */}
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Nationality</label>
                                                            <select onChange={(e) => handleNationalitySelect(e)} className="select form-control">
                                                                <option value="lv">Las Vegas</option>
                                                                <option value="la">Los Angeles</option>
                                                                <option value="kc">Kansas City</option>
                                                                <option value="no">New Orleans</option>
                                                                <option value="kc">Jacksonville</option>
                                                                <option value="lb">Long Beach</option>
                                                                <option value="cl">Columbus</option>
                                                                <option value="cn">Canada</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Gender</label>
                                                            <div className="form-group">
                                                                <div className="form-check form-check-inline">
                                                                    <input onChange={() => handleSelectGender("Male")} className="form-check-input" checked={gender === "Male"} type="radio" name="gender" id="male" value="option1" />
                                                                    <label className="form-check-label" for="male">Male</label>
                                                                </div>
                                                                <div className="form-check form-check-inline">
                                                                    <input onChange={() => handleSelectGender("Female")} className="form-check-input" checked={gender === "female"} type="radio" name="gender" id="female" value="option2" />
                                                                    <label className="form-check-label" for="female">Female</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                                        <button onClick={() => handleAddTraveller()} className="btn btn-md px-5 btn-light-primary fw-medium" type="button">Add Passengers</button>
                                                    </div>

                                                </div>
                                            </div>}

                                            <div className="full-width d-flex flex-column mb-2 position-relative">

                                                <div className="row align-items-stat">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 mb-2">
                                                        <h5>Personal Information</h5>
                                                    </div>
                                                    <form onSubmit={handleContactFormSubmit} method="post" >
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">First Name</label>
                                                                <input ref={contactName} type="text" className="form-control" placeholder="First Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Last Name</label>
                                                                <input ref={contactLastname} type="text" className="form-control" placeholder="Last Name" />
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Email Address</label>
                                                                <input ref={contactEmail} type="text" className="form-control" placeholder="Email Here" />
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">Mobile number</label>
                                                                <input ref={contactNum} type="tel" className="form-control" placeholder="Contact Number" />
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <button name="submit" className="btn btn-md full-width px-5 btn-primary fw-medium" type="submit">Proceed to add passenger</button>
                                                        </div>
                                                    </form>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- Sidebar --> */}
                            <div className="col-xl-3 col-lg-4 col-md-12">
                                <div className="card mb-4 mt-lg-0 mt-4">
                                    <div className="card-header"><h4>Price Summary</h4></div>
                                    <div className="card-body py-2">
                                        <div className="price-summary">
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0">
                                                    Base Fare
                                                    {flight && <span className="fw-semibold text-dark">{country && country.currencySymbol}{flight.price.base}</span>}
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0">
                                                    Discount
                                                    {flight && <span className="fw-semibold text-success">-{country && country.currencySymbol}0</span>}
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0">
                                                    Other Services
                                                    {flight && <span className="fw-semibold text-dark">{country && country.currencySymbol}{flight.price.total - flight.price.base}</span>}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-white border-top py-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <p className="fw-semibold text-muted-2 mb-0">Total Price</p>
                                            {flight && <p className="fw-semibold text-primary mb-0">{country && country.currencySymbol}{flight.price.total}</p>}
                                        </div>
                                    </div>
                                </div>

                                <div className="card border rounded-3">
                                    <div className="card-header">
                                        <h4>Coupons & Offers</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group position-relative">
                                            <input type="text" className="form-control" placeholder="Have a Coupon Code?" value="" />
                                            <a href="#" className="position-absolute top-50 end-0 fw-semibold translate-middle text-primary disable">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default FlightDetail;