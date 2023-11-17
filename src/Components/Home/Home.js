import React, { useState } from "react";
import './Home.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Home = () => {
    
    const [Count, setCount] = useState(false);

return (
<section className="numbers">
    <div className="container">
        <div className="row nums">
            <div className="col-md-3 space">
                <h2 className="num ">
                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                    {Count && <CountUp start={0} end={999} duration={1} delay={0} /> }
                    +
                </ScrollTrigger>
                </h2>
                <h6>SAVINGS</h6>
                <span className="span-after"></span>
            </div>
            <div className="col-md-3 space">
                <h2 {...{ "goal": "999" }} className="num">
                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                    {Count && <CountUp start={0} end={992} duration={1} delay={0} /> }
                    +
                </ScrollTrigger>
                </h2>
                <h6>PHOTOS</h6>
                <span className="span-after"></span>
            </div>
            <div className="col-md-3 space">
                <h2 {...{ "goal": "999" }} className="num">
                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                    {Count && <CountUp start={0} end={990} duration={1} delay={0} /> }
                    +
                </ScrollTrigger>
                </h2>
                <h6>ROCKETS</h6>
                <span className="span-after"></span>
            </div>
            <div className="col-md-3 space">
                <h2 {...{ "goal": "999" }} className="num">
                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                    {Count && <CountUp start={0} end={995} duration={1} delay={0} /> }
                    +
                </ScrollTrigger>
                </h2>
                <h6>GLOBES</h6>
                <span className="span-after"></span>
            </div>
        </div>
    </div>
</section>
)
};


export default Home;