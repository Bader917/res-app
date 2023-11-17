import React from "react";
import './Footer.css';
 
const Footer = () => {

const AddClass = (e) => {
    e.target.classList.add('fa-spin');
}

const RemoveClass = (e) => {
    e.target.classList.remove('fa-spin');
}


return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center footer-st">
                    <a href="/">Register</a>
                    <a href="/">Forum</a>
                    <a href="/">BackGround</a>
                    <a href="/">FaceBook</a>
                </div>
                <div className="footer-social text-center">

                <a href="https://www.facebook.com/Sinbadr917" target="_blank" rel="noreferrer">
                    <div className="opend">
                    <i onMouseEnter={AddClass} onMouseLeave={RemoveClass} className="fa-brands fa-facebook"></i>
                    </div>
                </a>

                <a href="https://www.twitter.com/Sinbadr917" target="_blank" rel="noreferrer">
                    <div className="opend">
                    <i onMouseEnter={AddClass} onMouseLeave={RemoveClass} className="fa-brands fa-twitter"></i>
                    </div>
                </a>


                <a href="https://www.linkedin.com/in/sinbader917/" target="_blank" rel="noreferrer"> 
                <div className="opend">
                    <i onMouseEnter={AddClass} onMouseLeave={RemoveClass} className="fa-brands fa-linkedin"></i>
                </div>
                </a>
                
                
                
                <a href="https://github.com/Sinbader917" target="_blank" rel="noreferrer">
                <div className="opend">
                <i onMouseEnter={AddClass} onMouseLeave={RemoveClass} className="fa-brands fa-github"></i>
                </div>
                </a>


                <a href="https://www.instagram.com/Sinbadr917" target="_blank" rel="noreferrer">
                <div className="opend">
                <i onMouseEnter={AddClass} onMouseLeave={RemoveClass} className="fa-brands fa-instagram"></i>
                </div>
                </a>

                </div>
                <div className="container text-center copy-right">
                    <p>© 2023. Bader Mohammed. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
)
};

export default Footer;