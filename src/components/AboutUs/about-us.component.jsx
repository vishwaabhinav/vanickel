import React from "react";
import aboutImg from "../../assets/about.png";

function AboutUs(props) {
  return (
    <div className="about-us">
      <h3 className="about-us_header text-center">About Us</h3>
      <p className="about-us-para text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        aperiam quam similique eius. Recusandae sapiente incidunt sunt id quo
        totam enim, accusamus numquam vel expedita adipisci facere? A esse
        exercitationem magni maiores molestias qui maxime.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              sapiente. Dolor, fugit! Consequatur nihil dolore eveniet commodi
              blanditiis cumque voluptate at culpa reiciendis cum eos ipsa nemo
              voluptates officiis sit ut ad et, praesentium distinctio veniam
              dolorum repellendus quaerat sequi aspernatur! Voluptate aliquid
              iste provident aliquam cumque vero, aperiam id.
            </p>
          </div>
          <div className="question-answer_container">
            <h5 className="question m-0">Why choose Us?</h5>
            <div className="big-line"></div>
            <p className="answer m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              sapiente. Dolor, fugit! Consequatur nihil dolore eveniet commodi
              blanditiis cumque voluptate at culpa reiciendis cum eos ipsa nemo
              voluptates officiis sit ut ad et, praesentium distinctio veniam
              dolorum repellendus quaerat sequi aspernatur! Voluptate aliquid
              iste provident aliquam cumque vero, aperiam id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
