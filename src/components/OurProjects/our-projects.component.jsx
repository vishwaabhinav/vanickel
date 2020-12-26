import React, { useEffect, useState } from "react";
import project from "../../assets/project.png"


function OurProjects() {
    const [move, setMove] = useState(0)
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
    const [dots, setDots] = useState(["",""])

    useEffect(() => {
        window.addEventListener("resize", function() {
            setDeviceWidth(window.innerWidth)
            if(window.innerWidth< 1025){
                setDots(["","",""])
            }else{
                setDots(["",""])
            }
        });
    }, [])
  return (
    <div id="we-did" className="what-we-did">
      <h3 className="what-we-did_header text-center">
        What we <span>Did</span>?
      </h3>
      <p className="what-we-did-para text-center mx-auto">
      Some of our work in the past year includes customised web app development for clients accross industries; Online fitness, Agri-tech &amp; Ed-tech to name a few. Apart from this we have a few successful apps in Shopify ecosystem, and a first of its kind B2B marketplace for visibility, networking &amp; digifying payments for diverse freelance small businesses.
      </p>
      <div className="our-projects_container">
        <div className="our-projects d-flex align-items-center">
          <h3 className="our-projects_header">Our <br/>Latest <br/>Projects</h3>
          <div className="projects_container d-flex justify-content-between">
              <div className="project"  style={{transform:`translate(-${move}%)`,transition:".5s"}}>
                  <img className="project-img" src={project} alt=""/>
                  <h5 className="project-title m-0">Green &amp; U</h5>
                  <h6 className="project-subtitle m-0">Online business &amp; Design outlook consult</h6>
              </div>
              <div className="project"  style={{transform:move?(deviceWidth<1025?`translate(-${move}%)`:`translate(calc(-${move}% - 83px))`):"",transition:".5s"}}>
                  <img className="project-img" src={project} alt=""/>
                  <h5 className="project-title m-0">TagPixie - Shopify App</h5>
                  <h6 className="project-subtitle m-0">Post Sale Automation - Inventory Management for Shopify Stores</h6>
              </div>
              <div className="project"  style={{transform:move?(deviceWidth<1025?`translate(-${move}%)`:`translate(calc(-${move}% - 83px))`):"",transition:".5s"}}>
                  <img className="project-img" src={project} alt=""/>
                  <h5 className="project-title m-0">PayOrb</h5>
                  <h6 className="project-subtitle m-0">B2B marketplace for visibility, networking &amp; digifying payments for diverse freelance businesses</h6>
              </div>
          </div>
          <div className="rotate-left"></div>
        </div>
        <div className="dots_container d-flex justify-content-center">
        {
                dots.map((dot,i)=>{
                    return (
                        <div key={i} className="dot_container d-flex justify-content-center align-items-center mx-1"
                            onClick={
                                ()=>{
                                    setMove(i * 100)
                                }
                            }
                        >
                            <div className="inner-dot"></div>
                        </div>
                    )
                })
            }
            </div>
      </div>
    </div>
  );
}

export default OurProjects;
