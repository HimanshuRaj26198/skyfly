"use client"

import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

const ModifySearch = () => {
    const [modifySearchVisible, setModifySearchVisible] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const showModifySearch = () => {
        console.log("Function Triggering");
        console.log(modifySearchVisible, "Visible");
        setModifySearchVisible(prevState => !prevState);
    };

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially to set the state correctly
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Update visibility based on window size
    useEffect(() => {
        if (windowDimensions.width < 992) {
            setModifySearchVisible(false);
        } else {
            setModifySearchVisible(true);
        }
    }, [windowDimensions]);

    return (
        <>
            <div className="container search-filter-opener">
                <div onClick={() => showModifySearch()} className="modify-search-action-container">
                    <span> Modify Search </span> {modifySearchVisible ? <i className="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}
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
                                                    <select className="leaving form-control fw-bold">
                                                        <option value="">Select</option>
                                                        <option value="ny">New York</option>
                                                        <option value="sd">San Diego</option>
                                                        <option value="sj">San Jose</option>
                                                        <option value="ph">Philadelphia</option>
                                                        <option value="nl">Nashville</option>
                                                        <option value="sf">San Francisco</option>
                                                        <option value="hu">Houston</option>
                                                        <option value="sa">San Antonio</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="form-group hdd-arrow mb-0">
                                                    <label className="text-light text-uppercase opacity-75">Going To</label>
                                                    <select className="goingto form-control fw-bold">
                                                        <option value="">Select</option>
                                                        <option value="ny">New York</option>
                                                        <option value="sd">San Diego</option>
                                                        <option value="sj">San Jose</option>
                                                        <option value="ph">Philadelphia</option>
                                                        <option value="nl">Nashville</option>
                                                        <option value="sf">San Francisco</option>
                                                        <option value="hu">Houston</option>
                                                        <option value="sa">San Antonio</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-12">
                                        <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                                <div className="form-group mb-0">
                                                    <label className="text-light text-uppercase opacity-75">Journey Date</label>
                                                    <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                                <div className="form-group mb-0">
                                                    <button type="button" className="btn btn-whites text-primary full-width fw-medium">
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
