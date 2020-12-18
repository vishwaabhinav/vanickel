import React from 'react'
import contactImg from "../../assets/contact.png"
import Footer from '../Footer/footer.component'

function ContactUs(props) {
    return (
        <div id="contact" className="contact-us">
            <h3 className="contact-us_header text-center">Let's <span>Talk</span>?</h3>
            <div className="d-flex flex-wrap">
                <div className="col-md-8 pr-5">
                    <p className="contact-para">We are here to help. Leave a message and we will get back to you.</p>
                    <div className="d-flex flex-wrap inputs_container">
                        <div className="col-md-6">
                            <label className="contact-label name-label">Full Name*</label>
                            <input type="text"/>
                        </div>
                        <div className="col-md-6">
                            <label className="contact-label mail-label">E-mail ID*</label>
                            <input type="text"/>
                        </div>
                        <div className="col-md-12">
                            <label className="contact-label message-label">Your Message*</label>
                            <textarea ></textarea>
                            <button className="leave-msg-btn d-flex justify-content-center align-items-center">Leave a Message</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 px-5 d-none d-md-block">
                    <img className="w-100" src={contactImg} alt=""/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs
