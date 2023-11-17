import React from "react";
import './parallax.css';

const Parallax = () => {
    return (
    <>
    <section className="parallax-content parallax text-center">
        <div className="overlay"></div>
        <div className="container">
            <div className="row d-flex">
                <div className="col-md-8">
                    <h4 className="parallax-title">Baked fresh daily by bakers with passion.</h4>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <a href="/" className="btn parallax-btn btn-lg btn-primary pull-left">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="text-center">
        <div className="cta-wrap subscribe-elt ">
            <div className="container">
                <div className="col-md-12" id="contact-us">
                    <h1>
                        Hurry up! Subscribe our newsletter
                        <br />
                        and get
                        <span>25% Off</span>
                    </h1>
                    <p>Limited time offer for this month, No credit card required.</p>

                    <div className="container">
                        <div className="row center-content subscribe">
                            <input type="email" placeholder="Enter email" className="col-sm-7 col-md-6 col-lg-6 col-8" />
                            <input type="submit" value="Submit" className="col-sm-4 col-md-3 col-lg-3 col-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
};

export default Parallax;