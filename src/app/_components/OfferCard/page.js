const OfferCard = () => {
    return <div class="col-xl-12 col-lg12 col-md-12">
        <div class="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
            <div class="d-md-flex align-items-center justify-content-start">
                <div class="flx-icon-first mb-md-0 mb-3">
                    <div class="square--60 circle bg-white"><i class="fa-solid fa-gift fs-3 text-success"></i></div>
                </div>
                <div class="flx-caps-first ps-2">
                    <h6 class="fs-5 fw-medium text-light mb-0">Start Exploring The World</h6>
                    <p class="text-light mb-0">Book FlightsEffortless and Earn $50+ for each booking with Booking.com
                    </p>
                </div>
            </div>
            <div class="flx-last text-md-end mt-md-0 mt-4"><button type="button" class="btn btn-whites fw-medium full-width text-dark px-xl-4">Get Started</button></div>
        </div>
    </div>
}

export default OfferCard;