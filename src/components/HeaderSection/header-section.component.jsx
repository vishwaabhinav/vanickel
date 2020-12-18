import React from "react";
import headerBg from "../../assets/headerBg.png"

function HeaderSection(props) {
  return (
    <div className="header-section">
      <div className="content_container d-flex flex-wrap">
        <div className="col-md-4">
            <h3 className="we-help_header">
              We help you to achieve success in a short time
            </h3>
            <div className="short-line"></div>
            <p className="we-help-para">
              To help our clients achieve their maximum business potential by
              harnessing the power of technology, driven by innovation
            </p>
            <button className="lets-talk-btn d-flex justify-content-center align-items-center">Let's Talk</button>
        </div>
        <div className="col-md-8">
          <img className="w-100" src={headerBg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
