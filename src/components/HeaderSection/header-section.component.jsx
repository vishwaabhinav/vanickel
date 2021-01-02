import React from "react";
import headerBg from "../../assets/headerBg-compressed.jpg"

function HeaderSection() {
  return (
    <div id="home" className="header-section">
      <div className="content_container d-flex flex-wrap">
        <div className="col-md-4">
            <h3 className="we-help_header">
              Innovating for simplicity
            </h3>
            <div className="short-line"></div>
            {/* <p className="we-help-para">
              To help our clients achieve their maximum business potential by
              harnessing the power of technology, driven by innovation
            </p> */}
            <a href="#contact" className="lets-talk-btn d-flex justify-content-center align-items-center">Let&apos;s Talk</a>
        </div>
        <div className="col-md-8">
          <img className="w-100" src={headerBg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
