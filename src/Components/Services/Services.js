import React from "react";
import './Services.css';
import Data from '../../../src/Data';

const Services = () => {
    const itemData = Data.map((item) => {
        return (
            <div className="col-md-4 col-sm-6" key={item.id}>
                <div className="card-product">
                    <div className="img-wrap">
                        <img src={item.img} alt="Img" />
                    </div>
                    <div className="info-wrap">
                        <h4 className="title">{item.title}</h4>
                        <p className="time">{item.time}</p>
                    <div className="price-wrap h3">
                        <span className="price-new">{item.price_new}</span>
                        <del className="price-old">{item.price_old}</del>
                    </div>
                    </div>
                        <div className="btn-wrap">
                            <button href="#explore" className="btn-prime btn-one">
                                <div className="btn-style">
                                    <span> Order Now </span>
                                </div>
                            </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
    <div className="elements-content">
        <div className="container">
            <div className="about-inline services-content">
                <h3>Explore Our Foods</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam et purus a odio finibus bibendum in sit
                        amet leo. Mauris feugiat erat tellus. Far far away,
                        behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts
                        Separated they live in Bookmarksgrove.
                    </p>
            </div>

            <div className="row" id="services">
                {itemData}
            </div>
        </div>
    </div>
    )
};

export default Services;