import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {

    return (
        <>
            {options.map(option =>
            (
                <button type='button' onClick={onLeaveFeedback} key={option} name={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</button>
            )
            )}

        </>
    );
};

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}

{/* <button type='button' onClick={onLeaveFeedback} name='good'>Good</button>
            <button type='button' onClick={onLeaveFeedback} name='neutral'>Neutral</button>
            <button type='button' onClick={onLeaveFeedback} name='bad'>Bad</button> */}