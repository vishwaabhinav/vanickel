import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import toggler from "../../assets/toggler.png"

function Header(props) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="header_container">
            <header className="header d-flex justify-content-between align-items-center">
                <img src={toggler} alt="" className="toggler d-block d-md-none"
                    onClick={
                        ()=>{
                            setToggle(!toggle)
                        }
                    }
                />
                <div className="logo_container d-flex align-items-center">
                    <img className="logo" src={logo} alt=""/>
                    <div className="logo-text_container">
                        <h3 className="big-logo-text text-uppercase m-0">Vanickel</h3>
                        <h5 className="small-logo-text text-uppercase m-0">Labs</h5>
                    </div>
                </div>
                <ul className={`navigation-links_container m-0 d-flex align-items-center closed ${toggle?"opened":""}`}>
                    <li className="navigation-link m-0 active-navigation"><a href="#home"> Home</a></li>
                    <li className="navigation-link m-0"><a href="#we-offer"> What we Offer?</a></li>
                    <li className="navigation-link m-0"><a href="#we-did"> What we Did?</a></li>
                    <li className="navigation-link m-0"><a href="#contact"> Contact Us</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header
