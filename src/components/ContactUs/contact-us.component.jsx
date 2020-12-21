import React, { useState } from 'react'
import contactImg from "../../assets/contact.png"
import Footer from '../Footer/footer.component'
import axios from 'axios';

function ContactUs() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        message: ""
    });

    return (
        <div id="contact" className="contact-us">
            <h3 className="contact-us_header text-center">Let&apos;s <span>Talk</span>?</h3>
            <div className="d-flex flex-wrap">
                <div className="col-md-8 pr-5">
                    <p className="contact-para">We are here to help. Leave a message and we will get back to you.</p>
                    <div className="d-flex flex-wrap inputs_container">
                        <div className="col-md-6">
                            <label className="contact-label name-label">Full Name*</label>
                            <input className="name-input" type="text" value={formData.name} onChange={(evt)=>{
                                setFormData({
                                    ...formData,
                                    name: evt.target.value,
                                });
                            }}/>
                        </div>
                        <div className="col-md-6">
                            <label className="contact-label mail-label">E-mail ID*</label>
                            <input className="mail-input" type="text" value={formData.mail} onChange={(evt)=>{
                                setFormData({
                                    ...formData,
                                    mail: evt.target.value,                                    
                                });
                            }}/>
                        </div>
                        <div className="col-md-12">
                            <label className="contact-label message-label">Your Message*</label>
                            <textarea className="message-label" value={formData.message} onChange={(evt)=>{
                                setFormData({
                                    ...formData,
                                    message: evt.target.value,
                                });
                            }}></textarea>
                            <button className="leave-msg-btn d-flex justify-content-center align-items-center"
                            onClick={async () => {
                                setIsLoading(true);
                                await SendFormData(formData);
                                setFormData({
                                    name: "",
                                    mail: "",
                                    message: ""
                                });
                                setIsLoading(false);
                            }}>
                                {isLoading ? '...' : 'Leave a Message'}
                            </button>
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

function SendFormData(data) {
    return axios.post('/.netlify/functions/mail', data).then((resp) => {
        console.log('Sucessfully sent formdata', resp);
    }).catch(err => {
        console.error('Error in submitting', err);
    });
}

export default ContactUs
