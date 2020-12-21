import React from "react";
import aboutImg from "../../assets/about.png";

function AboutUs() {
  return (
    <div className="about-us">
      <h3 className="about-us_header text-center">About Us</h3>
      <p className="about-us-para text-center mx-auto">
      Our name Vanickel, is a combination of Vanadium and Nickel, which are 2 highly catalytic metals. We at Vanickel labs aim to provide that catalyst to your business, in the form of technological and analytical boost.
      </p>
      <div className="d-flex about-us-content flex-wrap">
        <div className="col-md-6 about-us-img_container">
          <img src={aboutImg} alt="" />
        </div>
        <div className="col-md-6">
          <div className="question-answer_container">
            <h5 className="question m-0">Who we are?</h5>
            <div className="big-line"></div>
            <p className="answer m-0">
            <b>Abhinav Vishwa</b> - Senior programmer with 10+ years of experience in distributed software development, heads the tech gamut of the company. Experience in implementing groundbreaking projects in the likes of Uber, Google & DEShaw.
            </p>            
            <br /><br />
            <p className="answer m-0">
            <b>Madhurima Roy</b> - Marketing professional with global exposure in business operations, works in integrating tech deliverables of our team with business output of the client. 
            </p>
          </div>
          <div className="question-answer_container">
            <h5 className="question m-0">Why choose Us?</h5>
            <div className="big-line"></div>
            <p className="answer m-0">
            We are a team of highly motivated professionals, implementing and learning each day, nimble in the way we function, and keep our client&apos;s business output at the top priority of each project. With expertise & insights from diverse industries we bring to you technology solutions in the form of economic &amp; scalable offerings.
            </p>
            <br />
            
            <p className="answer m-0">
            We respect our client&apos;s timelines above everything else and are transparent in all our project quotes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
