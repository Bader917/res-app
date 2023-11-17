import React from "react";
import PrideImg from '../../assets/1.png';
import ingImg from '../../assets/2.png';
import './Section.css';

const Section = () => {
return (
    <>
    <section className="pride">
        <div className="container">
            <div className="row content-center">
                <div className="col-md-6 img">
                    <img src={PrideImg} alt="Img"/>
                </div>
                <div className="col-md-5 title">
                    <h2>
                        We pride ourselves on making real
                        food from the best ingredients.
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Etiam et purus a odio finibus
                        bibendum in sit amet leo. Mauris feugiat erat tellus.
                    </p>
                    <button><a href="/" target="_blank">Learn More</a></button>
                </div>
            </div>
        </div>
    </section>

    <section className="ingredients">
        <div className="container">
            <div className="row center-content">
            <div className="col-md-5 title">
                <h2>
                    We make everything by hand with
                    the best possible ingredients.
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam et purus a odio finibus bibendum in sit
                    amet leo. Mauris feugiat erat tellus.Far far away,
                    behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts.
                </p>
                    <ul className="list">
                        <li>
                                <i className="fa-solid fa-check"></i>
                                Etiam sed dolor ac diam volutpat.
                        </li>
                        <li>
                                <i className="fa-solid fa-check"></i>
                                Erat volutpat aliquet imperdiet.
                        </li>
                        <li>
                                <i className="fa-solid fa-check"></i>
                                purus a odio finibus bibendum.
                        </li>
                    </ul>
                    <button className="list-btn"><a href="#" target="_blank">Learn More</a></button>
                </div>
                <div className="col-md-7 ing-img img">
                    <img src={ingImg} alt="Img"/>
                </div>
            </div>
        </div>
    </section>

    <section className="video-action">
        <div className="container">
        <div className="row">
            <h1>
                When a man's stomach is full it makes no
                <br/>difference whether he is rich or poor.
            </h1>
            <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Etiam et purus
                      <br/> a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
            </p>
            <a href="/" className="video-story">
                <span>
                    <i className="fa-solid fa-caret-right"></i>
                    Watch Our Story
                </span>
            </a>
            </div>
        </div>
    </section>
    </>

)
};

export default Section;