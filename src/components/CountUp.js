import React from 'react';
import CountUp from "react-countup";
import './style.css'

function CounterUp() {
    return (
        <div className={'container mt-5 mb-5'}>
            <div className="row">
                <div className="col-md-4">
                    <div className="radius">
                        <div className={'counter'}>
                            <h1>+<CountUp start={0} end={999} duration={6} /></h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="radius">
                        <div className={'counter'}>
                            <h1>+<CountUp start={0} end={99} duration={6} /></h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="radius">
                        <div className={'counter'}>
                            <h1>+<CountUp start={0} end={36} duration={6} /></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CounterUp;