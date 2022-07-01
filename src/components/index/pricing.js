import * as React from "react"

const Pricing = () => (
    <section id="pricing" className="pricing">
        <div className="section-title">
            <h2>Pricing</h2>
        </div>
        {/* Interior Services */}
        <div className="container mb-4">
            <h3 className="text-center mb-3">Interior Services:</h3>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="card-title pricing-card-title">Silver Tier</h4>
                    </div>
                    <div className="card-body">
                        <p>Starting at $85</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Vacuum Cleaning</li>
                            <li>Wipe/Brush with Disinfectant Cleaner</li>
                            <li>Clean Mirrors and Windows</li>
                        </ul>
                        <br/>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="card-title pricing-card-title">Gold Tier</h4>
                    </div>
                    <div className="card-body">
                        <p>Starting at $150</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>All services included in Silver Tier plus</li>
                            <li>Steam Clean</li>
                            <li>Clean and Condition Leathers</li>
                            <li>Vacuum Trunk and Hatch</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="card-title pricing-card-title">Platinum Tier</h4>
                    </div>
                    <div className="card-body">
                        <p>Starting at $225</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>All services included in Gold Tier plus</li>
                            <li>Pre-Spray and Conditioning</li>
                            <li>Deep Clean and Conditioning</li>
                            <li>UV Protectant</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Exterior Services */}
        <div className="container mb-4">
            <h3 className="text-center mb-3">Exterior Services:</h3>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="card-title pricing-card-title">Silver Tier</h4>
                    </div>
                    <div className="card-body">
                        <p>Starting at $45</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Pressue Rinse</li>
                            <li>Wheel and Tire Cleaning</li>
                            <li>Touchless High Quality Foam Wash</li>
                            <li>Towel Dry</li>
                            <li>Window and Mirror Cleaning</li>
                            <li>Tire Shine</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="card-title pricing-card-title">Gold Tier</h4>
                    </div>
                    <div className="card-body">
                        <p>Starting at $60</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>All services included in Silver Tier plus</li>
                            <li>Spray Sealant</li>
                        </ul>
                        <br/><br/><br/><br/>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="card-title pricing-card-title">Platinum Tier</h4>
                    </div>
                    <div className="card-body">
                        <p>Starting at $180</p>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>All services included in Gold Tier plus</li>
                            <li>Clay Bar</li>
                            <li>Trim and Plastic Dressing</li>
                            <li>Carnuba Based Wax</li>
                        </ul>
                        <br/><br/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Pricing
