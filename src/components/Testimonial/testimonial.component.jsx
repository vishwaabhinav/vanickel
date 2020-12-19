import React, { useState } from "react";
import quotes from "../../assets/quotes.png";

const dots = ["","",""]

function Testimonial(props) {
    const [move, setMove] = useState(0)
  return (
    <div className="testimonial_container d-flex">
      <div className="testimonial-details mx-auto">
        <h3 className="testimonial_header text-center">
          What our <span>Clients</span> are saying?
        </h3>
        <img className="quotes-img" src={quotes} alt="" />
        <div className="testimonials d-flex justify-content-start">
          <div className="testimonial" style={{transform:`translate(-${move}%)`,transition:".5s"}}>
            <p className="quote">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sequi
              facilis modi, ratione molestias ex et necessitatibus quo illo
              tenetur distinctio labore repellendus libero obcaecati ipsum ab
              incidunt quia, dolore inventore ea. Corrupti eligendi similique
              veniam, voluptatum ratione ipsam tenetur. Recusandae, porro.
            </p>
            <p className="client-info text-right">
              - John Doe, CEO Tata Groups
            </p>
          </div>
          <div className="testimonial" style={{transform:`translate(-${move}%)`,transition:".5s"}}>
            <p className="quote">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sequi
              facilis modi, ratione molestias ex et necessitatibus quo illo
              tenetur distinctio labore repellendus libero obcaecati ipsum ab
              incidunt quia, dolore inventore ea. Corrupti eligendi similique
              veniam, voluptatum ratione ipsam tenetur. Recusandae, porro.
            </p>
            <p className="client-info text-right">
              - John Doe2, CEO Tata Groups
            </p>
          </div>
          <div className="testimonial" style={{transform:`translate(-${move}%)`,transition:".5s"}}>
            <p className="quote">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sequi
              facilis modi, ratione molestias ex et necessitatibus quo illo
              tenetur distinctio labore repellendus libero obcaecati ipsum ab
              incidunt quia, dolore inventore ea. Corrupti eligendi similique
              veniam, voluptatum ratione ipsam tenetur. Recusandae, porro.
            </p>
            <p className="client-info text-right">
              - John Doe3, CEO Tata Groups
            </p>
          </div>
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

export default Testimonial;
