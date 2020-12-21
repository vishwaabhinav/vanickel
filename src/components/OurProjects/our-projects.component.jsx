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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum
        voluptatem magnam deserunt illum, culpa veniam in eius consequatur
        similique. Cum nihil blanditiis facere amet culpa, sit soluta reiciendis
        iste?
      </p>
      <div className="our-projects_container">
        <div className="our-projects d-flex align-items-center">
          <h3 className="our-projects_header">Our <br/>Latest <br/>Projects</h3>
          <div className="projects_container d-flex justify-content-between">
              <div className="project"  style={{transform:`translate(-${move}%)`,transition:".5s"}}>
                  <img className="project-img" src={project} alt=""/>
                  <h5 className="project-title m-0">Project 2</h5>
              </div>
              <div className="project"  style={{transform:move?(deviceWidth<1025?`translate(-${move}%)`:`translate(calc(-${move}% - 83px))`):"",transition:".5s"}}>
                  <img className="project-img" src={project} alt=""/>
                  <h5 className="project-title m-0">Project 3</h5>
              </div>
              <div className="project"  style={{transform:move?(deviceWidth<1025?`translate(-${move}%)`:`translate(calc(-${move}% - 83px))`):"",transition:".5s"}}>
                  <img className="project-img" src={project} alt=""/>
                  <h5 className="project-title m-0">Project 4</h5>
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
