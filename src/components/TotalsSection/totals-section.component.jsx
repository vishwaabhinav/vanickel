import React from 'react'

function TotalsSection() {
    return (
        <div className="totals-section">
            <div className="totals_container d-flex flex-wrap justify-content-center">
                <div className="total_container col-md-3 text-right">
                    <h3 className="total">25+</h3>
                    <h5 className="total-about">Clients Worked With</h5>
                </div>
                <div className="total_container col-md-3">
                    <h3 className="total">100+</h3>
                    <h5 className="total-about">Projects Completed</h5>
                </div>
            </div>
            <div className="rotate-right"></div>
        </div>
    )
}

export default TotalsSection
