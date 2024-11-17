import React from "react";
import "./Work-Process.css"

const Work_process=()=>{
    return (
        <div className="work-process-head">
            <div className="titles">
                <h4>Working Process</h4>
                <h2>How we works?</h2>
            </div>
            <div className="work-process">
                <div className="container">
                    <div className="row">
                        <div className="work col-md-3 col-lg-3">
                            <h2>01</h2>
                            <h3>Make Appointmnet</h3>
                            <h5>It is a long established fact that a reader will be distracted by the readable content of.</h5>
                            <button>View More<span>&gt;</span></button>
                        </div>
                        <div className=" work-center col-md-3 col-lg-3">
                            <h2>02</h2>
                            <h3>Take Treatment</h3>
                            <h5>It is a long established fact that a reader will be distracted by the readable content of.</h5>
                            <button>View More<span>&gt;</span></button>
                        </div>
                        <div className="work col-md-3 col-lg-3">
                            <h2>03</h2>
                            <h3>Registration</h3>
                            <h5>It is a long established fact that a reader will be distracted by the readable content of.</h5>
                            <button>View More<span>&gt;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}
export default Work_process;