import React from 'react'

const Component1 = (props) => {
    return (
        <div>
            {props.textFieldName}
            <input type="text"
                name={props.textFieldPropertyName}
                placeholder={props.textFieldPlaceHolderName}
                onChange={props.onChange}
                value={props.textFieldValue}
                required
            ></input>
        </div>
    );
}

export default Component1;