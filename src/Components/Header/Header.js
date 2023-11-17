import React from "react";
import './Header.css';

const Header = () => {
    return (
<header>
    <div className="intro intro3" id="home">
        <div className="container">
            <div className="row center-content">
            <div className="h-info col-md-8 col-sm-8 .col-lg-6">
                <h3 className="col-8 col-md-10 col-sm-12">
                    Good food choices are good investments.
                </h3>
                <p className="title col-md-8 col-8 col-sm-8">
                    Lorem ipsum dolor sit amet consectetur adipiscing
                    elit Etiam et purus a odio finibus bibendum amet leo. 
                </p>
                <div className="space30">                
                </div>
                <div className="dual-btn d-block d-sm-block d-md-flex col-md-9">
                    <button href="#explore" className="btn-prime btn-one">
                        <div className="btn-style">
                            <span> Order Now </span>
                            <i className="fa-span fa fa-shopping-basket"></i>
                        </div>
                    </button>
                    <button href="#explore" className="btn-prime btn-two">
                    <div className="btn-style">
                        <span> Learn More </span>
                        <i className="fa-span fa-solid fa-chevron-right"></i>
                    </div>   
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</header>
)
};

export default Header;