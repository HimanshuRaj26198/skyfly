const TourSearch = () => {
    return <div className="tab-pane" id="tours">
        <div className="row gy-3 gx-md-2 gx-sm-2">

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group hdd-arrow mb-0">
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

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group mb-0">
                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Date" readOnly="readonly" />
                </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group hdd-arrow mb-0">
                    <select className="tour form-control fw-bold">
                        <option value="">Select</option>
                        <option value="ny">Family Package</option>
                        <option value="sd">Honymoon Package</option>
                        <option value="sj">Group Package</option>
                        <option value="ph">Desert</option>
                        <option value="nl">History</option>
                    </select>
                </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="form-group mb-0">
                    <button type="button" className="btn btn-primary full-width fw-medium">Discover Space<i className="fa-solid fa-location-arrow ms-2"></i></button>
                </div>
            </div>

        </div>
    </div>
}


export default TourSearch;