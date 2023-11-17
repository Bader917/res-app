import React from "react";
import {Carousel} from "react-bootstrap";
import Data from '../../PersonalData';
import './Slider.css';

export default function Slider() {

  const myData = Data.map((el) => (

    <Carousel.Item key={el.id}>
      <div className="data-info">
          <img src={el.img} alt="Img" />

          <div className="data-details">
            <p>{el.Job}</p>
            <h2>{el.name}</h2>
          </div>
      </div>
    </Carousel.Item>
    
  ))

  return (
    <>
      <div className="slider">
          <div className="container">
            <div className="Testimonials-title">
              <h2>Testimonials</h2>
            </div>
                <Carousel id="about-us">
                  {myData}
                </Carousel>
          </div>
      </div>

      <section id="about-us">

        <div className="container">
          <div className="about-inline text-center Asked">
            <h3>Frequently Asked Questions</h3>
          </div>
        </div>
        <div className="container">
          <div className="row askque">

            <div className="col-md-5 col-sm-12">
              <div className="faq">
                <h4>
                  <span>~</span>
                  Is Foodera Bread really baked fresh each day?
                </h4>
                <p>
                    Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in Bookmarksgrove right at the coast of the Semantics.
                </p>
              </div>
            </div>

            <div className="col-md-5 col-sm-12">
              <div className="faq">
                <h4>
                  <span>~</span>
                  Is Foodera Bread really baked fresh each day?
                </h4>
                <p>
                    Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in Bookmarksgrove right at the coast of the Semantics.
                </p>
              </div>
            </div>

            <div className="col-md-5 col-sm-12">
              <div className="faq">
                <h4>
                  <span>~</span>
                  Is Foodera Bread really baked fresh each day?
                </h4>
                <p>
                    Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in Bookmarksgrove right at the coast of the Semantics.
                </p>
              </div>
            </div>

            <div className="col-md-5 col-sm-12">
              <div className="faq">
                <h4>
                  <span>~</span>
                  Is Foodera Bread really baked fresh each day?
                </h4>
                <p>
                    Far far away, behind the word mountains, far from the countries 
                    Vokalia and Consonantia, there live the blind texts. Separated
                    they live in Bookmarksgrove right at the coast of the Semantics.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};