const HotelSearch = () => {
    return <div className="tab-pane" id="hotels">
        <div className="row gy-3 gx-md-3 gx-sm-3">
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group hdd-arrow mb-0">
                    <select className="goingto form-control fw-bold hdd-arrow">
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

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group mb-0">
                    <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" readOnly="readonly" />
                </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group mb-0">
                    <div className="booking-form__input guests-input mixer-auto">
                        <button name="guests-btn" id="guests-input-btn">1 Guest</button>
                        <div className="guests-input__options" id="guests-input-options">
                            <div>
                                <span className="guests-input__ctrl minus" id="adults-subs-btn"><i
                                    className="fa-solid fa-minus"></i></span>
                                <span className="guests-input__value"><span id="guests-count-adults">1</span>Adults</span>
                                <span className="guests-input__ctrl plus" id="adults-add-btn"><i
                                    className="fa-solid fa-plus"></i></span>
                            </div>
                            <div>
                                <span className="guests-input__ctrl minus" id="children-subs-btn"><i
                                    className="fa-solid fa-minus"></i></span>
                                <span className="guests-input__value"><span id="guests-count-children">0</span>Children</span>
                                <span className="guests-input__ctrl plus" id="children-add-btn"><i
                                    className="fa-solid fa-plus"></i></span>
                            </div>
                            <div>
                                <span className="guests-input__ctrl minus" id="room-subs-btn"><i
                                    className="fa-solid fa-minus"></i></span>
                                <span className="guests-input__value"><span id="guests-count-room">0</span>Rooms</span>
                                <span className="guests-input__ctrl plus" id="room-add-btn"><i
                                    className="fa-solid fa-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group mb-0">
                    <button type="button" className="btn btn-primary full-width fw-medium">Search Hotels<i className="fa-solid fa-location-arrow ms-2"></i></button>
                </div>
            </div>

        </div>
    </div>
}

export default HotelSearch;