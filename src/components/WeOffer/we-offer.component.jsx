import React, { useState } from "react";
import proto from "../../assets/proto.png";
import support from "../../assets/support.png";
import legacy from "../../assets/legacy.png";
import ml from "../../assets/ml.png";
import block from "../../assets/block.png";
import webapp from "../../assets/webapp.png";
import pattern from "../../assets/pattern.png";

function WeOffer(props) {
  const [protoType, setProto] = useState(false)
  const [supportScale, setSupportScale] = useState(false)
  const [legacyMigration, setLegacyMigration] = useState(false)
  const [machine, setMachine] = useState(false)
  const [blockChain, setBlockChain] = useState(false)
  const [mobileapp, setMobileapp] = useState(false)
  return (
    <div id="we-offer" className="we-offer">
      <h3 className="we-offer_header text-center">
        What we <span>Offer</span>?
      </h3>
      <p className="we-offer-para text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        consectetur quia nam, sunt recusandae tempora fugiat at odio obcaecati
        quo ipsam soluta sit veritatis debitis, libero vero iure magni ipsum.
      </p>
      <div className="offers_container">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="offer-column p-3 my-3">
            <div
            className="offer d-flex flex-column justify-content-between"  
            style={{position:protoType?"absolute":"static"}}
            >
              <div className="offer-details d-flex align-items-center mb-4"

              >
                <img className="offer-img" src={proto} alt="" />
                <h3 className="offer-title m-0 ml-3">
                  Prototype & MVP Development
                </h3>
              </div>
              <p className="detail" style={{height: protoType?"auto":"0",transition:"1s"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, sit cupiditate voluptates ullam quidem id sequi quia.
                Sequi eius praesentium suscipit error molestiae accusamus? Dolor
                illo obcaecati dolorum cum quam ipsa neque ducimus. Accusantium,
                aliquid?
              </p>
              <button className="view-details m-0 text-right"
                onClick={
                  ()=>{
                    setProto(!protoType)
                    setSupportScale(false)
                    setLegacyMigration(false)
                    setMachine(false)
                    setBlockChain(false)
                    setMobileapp(false)
                  }
                }

                onBlur={
                  ()=>{
                    setProto(false)
                  }
                }
              >View Details</button>
            </div>
          </div>
          <div className="offer-column p-3 my-3">
            <div tabIndex="-1" 
            className="offer d-flex flex-column justify-content-between" 
            style={{position:supportScale?"absolute":"static"}}
            onFocus={
              ()=>{

              }
            }
            onBlur={
              ()=>{

              }
            }
            >
              <div className="offer-details d-flex align-items-center mb-4">
                <img className="offer-img" src={support} alt="" />
                <h3 className="offer-title m-0 ml-3">Support for Scale</h3>
              </div>
              <p className="detail" style={{height: supportScale?"auto":"0",transition:"1s"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, sit cupiditate voluptates ullam quidem id sequi quia.
                Sequi eius praesentium suscipit error molestiae accusamus? Dolor
                illo obcaecati dolorum cum quam ipsa neque ducimus. Accusantium,
                aliquid?
              </p>
              <button className="view-details m-0 text-right"
                onClick={
                  ()=>{
                    setProto(false)
                    setSupportScale(!supportScale)
                    setLegacyMigration(false)
                    setMachine(false)
                    setBlockChain(false)
                    setMobileapp(false)
                  }
                }
                onBlur={
                  ()=>{
                    setSupportScale(false)
                  }
                }
              >View Details</button>
            </div>
          </div>
          <div className="p-3 my-3 dots-block">
            <img className="w-100" src={pattern} alt="" />
          </div>
          <div className="p-3 my-3 dots-block">
            <img src={pattern} alt="" className="w-100" />
          </div>
          <div className="offer-column  p-3 my-3">
            <div tabIndex="-1" 
            className="offer d-flex flex-column justify-content-between" 
            style={{position:legacyMigration?"absolute":"static"}}
            onFocus={
              ()=>{

              }
            }
            onBlur={
              ()=>{

              }
            }
            >
              <div className="offer-details d-flex align-items-center mb-4">
                <img className="offer-img" src={legacy} alt="" />
                <h3 className="offer-title m-0 ml-3">Legacy Migration</h3>
              </div>
              <p className="detail" style={{height: legacyMigration?"auto":"0",transition:"1s"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, sit cupiditate voluptates ullam quidem id sequi quia.
                Sequi eius praesentium suscipit error molestiae accusamus? Dolor
                illo obcaecati dolorum cum quam ipsa neque ducimus. Accusantium,
                aliquid?
              </p>
              <button className="view-details m-0 text-right"
                onClick={
                  ()=>{
                    setProto(false)
                    setSupportScale(false)
                    setLegacyMigration(!legacyMigration)
                    setMachine(false)
                    setBlockChain(false)
                    setMobileapp(false)
                  }
                }

                onBlur={
                  ()=>{
                    setLegacyMigration(false)
                  }
                }
              >View Details</button>
            </div>
          </div>
          <div className="offer-column p-3 my-3">
            <div tabIndex="-1" 
            className="offer d-flex flex-column justify-content-between" 
            style={{position:machine?"absolute":"static"}}
            onFocus={
              ()=>{

              }
            }
            onBlur={
              ()=>{

              }
            }
            >
              <div className="offer-details d-flex align-items-center mb-4">
                <img className="offer-img" src={ml} alt="" />
                <h3 className="offer-title m-0 ml-3">
                  Machine Learning/ Deep Learning
                </h3>
              </div>
              <p className="detail" style={{height: machine?"auto":"0",transition:"1s"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, sit cupiditate voluptates ullam quidem id sequi quia.
                Sequi eius praesentium suscipit error molestiae accusamus? Dolor
                illo obcaecati dolorum cum quam ipsa neque ducimus. Accusantium,
                aliquid?
              </p>
              <button className="view-details m-0 text-right"
                onClick={
                  ()=>{
                    setProto(false)
                    setSupportScale(false)
                    setLegacyMigration(false)
                    setMachine(!machine)
                    setBlockChain(false)
                    setMobileapp(false)
                  }
                }

                onBlur={
                  ()=>{
                    setMachine(false)
                  }
                }
              >View Details</button>
            </div>
          </div>
          <div className="offer-column p-3 my-3">
            <div tabIndex="-1" 
            className="offer d-flex flex-column justify-content-between" 
            style={{position:blockChain?"absolute":"static"}}
            onFocus={
              ()=>{

              }
            }
            onBlur={
              ()=>{

              }
            }
            >
              <div className="offer-details d-flex align-items-center mb-4">
                <img className="offer-img" src={block} alt="" />
                <h3 className="offer-title m-0 ml-3">Blockchain Development</h3>
              </div>
              <p className="detail" style={{height: blockChain?"auto":"0",transition:"1s"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, sit cupiditate voluptates ullam quidem id sequi quia.
                Sequi eius praesentium suscipit error molestiae accusamus? Dolor
                illo obcaecati dolorum cum quam ipsa neque ducimus. Accusantium,
                aliquid?
              </p>
              <button className="view-details m-0 text-right"
                onClick={
                  ()=>{
                    setProto(false)
                    setSupportScale(false)
                    setLegacyMigration(false)
                    setMachine(false)
                    setBlockChain(!blockChain)
                    setMobileapp(false)
                  }
                }

                onBlur={
                  ()=>{
                    setBlockChain(false)
                  }
                }
              >View Details</button>
            </div>
          </div>
          <div className="offer-column p-3 my-3">
            <div tabIndex="-1" 
            className="offer d-flex flex-column justify-content-between" 
            style={{position:mobileapp?"absolute":"static"}}
            onFocus={
              ()=>{

              }
            }
            onBlur={
              ()=>{

              }
            }
            >
              <div className="offer-details d-flex align-items-center mb-4">
                <img className="offer-img" src={webapp} alt="" />
                <h3 className="offer-title m-0 ml-3">
                  Mobile & WebApp Development
                </h3>
              </div>
              <p className="detail" style={{height: mobileapp?"auto":"0",transition:"1s"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae, sit cupiditate voluptates ullam quidem id sequi quia.
                Sequi eius praesentium suscipit error molestiae accusamus? Dolor
                illo obcaecati dolorum cum quam ipsa neque ducimus. Accusantium,
                aliquid?
              </p>
              <button className="view-details m-0 text-right"
                onClick={
                  ()=>{
                    setProto(false)
                    setSupportScale(false)
                    setLegacyMigration(false)
                    setMachine(false)
                    setBlockChain(false)
                    setMobileapp(!mobileapp)
                  }
                }

                onBlur={
                  ()=>{
                    setMobileapp(false)
                  }
                }
              >View Details</button>
            </div>
          </div>
          <div className="p-3 my-3 dots-block">
            <img src={pattern} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeOffer;
