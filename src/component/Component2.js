import React from 'react'

const Component2 = (props) => {
    return (
        <React.Fragment>
            <button type={props.buttonType}
                onClick={props.onClick}>
                {props.buttonName}
            </button>
        </React.Fragment>
    );
}

export default Component2;