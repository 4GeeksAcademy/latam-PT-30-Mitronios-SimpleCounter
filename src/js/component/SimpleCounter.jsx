import React from "react";
import PropType from "prop-types"

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

SimpleCounter.propTypes = {
    digit6: PropType.string,
    digit5: PropType.string,
    digit4: PropType.string,
    digit3: PropType.string,
    digit2: PropType.string,
    digit1: PropType.string,
}
