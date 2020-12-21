import React from 'react'
import Component1 from './Component1';
import Component2 from './Component2';
import '../style/Styles.css';
import TableComponent from './TableComponent'

class StateComponent1 extends React.Component {

    state = {
        // For name input field
        textFieldName: 'Name: ',
        textFieldPropertyName: 'textFieldValue',
        textFieldPlaceHolderName: 'Type Name',
        textFieldValue: '',

        // For city input field
        textFieldCityName: 'City: ',
        textFieldCityPropertyName: 'textFieldCityValue',
        textFieldCityPlaceHolderName: 'Type City',
        textFieldCityValue: '',

        // For button
        buttonName: 'Add',
        buttonType: 'button',

        // For reset button
        buttonNameReset: 'Reset',
        buttonTypeReset: 'reset',

        // Show hide span
        spanShowHide: {
            display: 'none'
        },

        // Array of data
        details: [],

        spanLatestValue: '',
        spanLatestCityValue: ''
    }

    // getRows = (userDetails, index) => {
    //     return (
    //         <tr key={index}>
    //             <td>{userDetails.name}</td>
    //             <td>{userDetails.city}</td>
    //             <td>
    //                 <Component2
    //                     buttonName='Delete'
    //                     buttonType='button'
    //                     onClick={this.deleteRow.bind(this, index)}
    //                 />
    //             </td>
    //         </tr>
    //     );
    // }

    resetValue = () => {
        // alert('Reseting value');
        this.setState({
            textFieldValue: '',
            textFieldCityValue: '',
            spanShowHide: {
                display: 'none'
            }
        });
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    viewStateValue = () => {
        const object = {
            name: this.state.textFieldValue,
            city: this.state.textFieldCityValue
        }
        const arrayDet = Object.assign(this.state.details);
        arrayDet.push(object);
        this.setState({
            spanShowHide: {
                display: 'contents'
            },
            details: arrayDet,
            spanLatestValue: this.state.textFieldValue,
            spanLatestCityValue: this.state.textFieldCityValue
        });
    }

    deleteRow = (index) => {
        const arrayDet = this.state.details.filter((_, i) => i !== index)
        if (arrayDet.length === 0) {
            this.setState({
                textFieldValue: '',
                textFieldCityValue: '',
                spanShowHide: {
                    display: 'none'
                },
            })
        } else {
            this.setState({
                details: arrayDet
            });
        }
    }

    render() {
        return (
            <div>
                <br />
                <Component1
                    textFieldPlaceHolderName={this.state.textFieldPlaceHolderName}
                    textFieldPropertyName={this.state.textFieldPropertyName}
                    textFieldName={this.state.textFieldName}
                    textFieldValue={this.state.textFieldValue}
                    onChange={this.handleOnChange.bind(this)} /><br />

                <Component1
                    textFieldPlaceHolderName={this.state.textFieldCityPlaceHolderName}
                    textFieldPropertyName={this.state.textFieldCityPropertyName}
                    textFieldName={this.state.textFieldCityName}
                    textFieldValue={this.state.textFieldCityValue}
                    onChange={this.handleOnChange.bind(this)} /><br />

                <Component2
                    buttonName={this.state.buttonName}
                    buttonType={this.state.buttonType}
                    onClick={this.viewStateValue.bind(this)} />

                <Component2
                    buttonName={this.state.buttonNameReset}
                    buttonType={this.state.buttonTypeReset}
                    onClick={this.resetValue.bind(this)} />
                <br />
                <span style={this.state.spanShowHide}>
                    Recent Name is <b className="spanData">{this.state.spanLatestValue}</b>
                    &nbsp;and recent city is <b className="spanData">{this.state.spanLatestCityValue}</b>
                </span>
                <br />

                <TableComponent
                    showHideTable={this.state.spanShowHide}
                    userDetails={this.state.details}
                    onClickHandler={this.deleteRow}
                />

                {/* <div style={this.state.spanShowHide}>
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th></th>
                            </tr>
                            {this.state.details.map(this.getRows)}
                        </tbody>
                    </table>
                </div> */}
            </div>
        );
    }
}

export default StateComponent1;