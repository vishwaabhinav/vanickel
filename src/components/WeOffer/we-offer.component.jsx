import React, { useState } from "react";
import proto from "../../assets/proto.png";
import support from "../../assets/support.png";
import legacy from "../../assets/legacy.png";
import ml from "../../assets/ml.png";
import block from "../../assets/block.png";
import webapp from "../../assets/webapp.png";
import pattern from "../../assets/pattern.png";

function WeOffer() {
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
                  Prototype &amp; MVP Development
                </h3>
              </div>
              <p className="detail" style={{height: protoType?"auto":"0",transition:"1s"}}>
              Support in transforming ideation into tangibility. 
              Swift unlocking of business cases and rapid prototyping for market testing, 
              feedback and scale up planning. We provide the advantage of cost efficient projects within a compact time frame.
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
              Having scaled the products from tens of users to thousands and then millions, we know the challenges involved. We can help you do the same for your rocket-ship. 
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
              Support in migrating & re-engineering your existing legacy data into flexible to adapt applications, which lead your business transformation initiatives by providing the most up to date user experience.
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
              Services starting from creating scalable data pipelines to come up with efficient algorithms, across areas such as computer vision or natural language processing, etc, in order to help you in coming up with the perfect learning solution for your customers.
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
              Help in understanding the technology as well as the potential behind this new economy and guide your path in blockchain based digital transformation, such as leveraging smart contracts or apps powered by distributed ledgers.
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
              Build cross-platform applications that are compatible across devices. Includes user app, publisher interface, server side components, testing, deployment, end to end support in rollout.
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
