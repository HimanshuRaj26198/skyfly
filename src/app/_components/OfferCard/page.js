const OfferCard = () => {
    return <div className="col-xl-12 col-lg12 col-md-12">
        <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
            <div className="d-md-flex align-items-center justify-content-start">
                <div className="flx-icon-first mb-md-0 mb-3">
                    <div className="square--60 circle bg-white"><i className="fa-solid fa-gift fs-3 text-success"></i></div>
                </div>
                <div className="flx-caps-first ps-2">
                    <h6 className="fs-5 fw-medium text-light mb-0">Looking For More Cheaper Flights ?</h6>
                    <p className="text-light mb-0">Call our travel agents and crack big deals.
                    </p>
                </div>
            </div>
            <div className="flx-last text-md-end mt-md-0 mt-4"><a type="button" href="tel:+1-(888) 267-5955" className="btn btn-whites  full-width text-dark px-xl-4 contact_number"> +1-(888) 267-5955</a></div>
        </div>
    </div>
}

export default OfferCard;