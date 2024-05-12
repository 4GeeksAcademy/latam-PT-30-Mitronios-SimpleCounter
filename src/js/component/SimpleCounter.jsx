import React from "react";

export const SimpleCounter = (props) => {
    return (
        <div className="counter">
            <div className="clock bg-dark bg-opacity-50 rounded border border-dark">
                <i className="fa fa-clock"></i>
            </div>
            <div className="six bg-dark bg-opacity-50 rounded border border-dark">{props.digit6}</div>
            <div className="five bg-dark bg-opacity-50 rounded border border-dark">{props.digit5}</div>
            <div className="four bg-dark bg-opacity-50 rounded border border-dark">{props.digit4}</div>
            <div className="three bg-dark bg-opacity-50 rounded border border-dark">{props.digit3}</div>
            <div className="two bg-dark bg-opacity-50 rounded border border-dark">{props.digit2}</div>
            <div className="one bg-dark bg-opacity-50 rounded border border-dark">{props.digit1}</div>
        </div>
    )
};
