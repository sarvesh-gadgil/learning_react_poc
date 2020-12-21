import React from 'react'
import Component2 from './Component2'

const TableComponent = (props) => {

    const deleteRowHandle = (index) => {
        props.onClickHandler(index);
    }

    const getRows = (userDetails, index) => {
        return (
            <tr key={index}>
                <td>{userDetails.name}</td>
                <td>{userDetails.city}</td>
                <td>
                    <Component2
                        buttonName='Delete'
                        buttonType='button'
                        onClick={() => deleteRowHandle(index)}
                    />
                </td>
            </tr>
        );
    }

    return (
        <div style={props.showHideTable}>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th></th>
                    </tr>
                    {props.userDetails.map(getRows)}
                </tbody>
            </table>
        </div>
    );
}

export default TableComponent;