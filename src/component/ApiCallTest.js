import React from 'react';
import Axios from 'axios';
import AutoComplete from 'react-autocomplete'

class ApiCallTest extends React.Component {

    state = {
        films: [],
        value: '',
        hideShow: {
            display: 'none'
        },
        filmDetails: {}
    }

    componentDidMount() {
        Axios.get(`https://ghibliapi.herokuapp.com/films`)
            .then(res => {
                const films = res.data;
                this.setState({ films });
            })
    }

    onChangeValue = (event) => {
        this.setState({
            value: event.target.value,
            hideShow: {
                display: 'none'
            },
        })
    }

    onSelectValue = (event, item) => {
        this.setState({
            value: event,
            hideShow: {
                display: 'contents'
            },
            filmDetails: item
        })
    }


    render() {
        return (
            <div>
                Search:
                <AutoComplete items={this.state.films}
                    getItemValue={(item) => item.title}
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>
                            {item.title}
                        </div>
                    }
                    value={this.state.value}
                    onChange={this.onChangeValue.bind(this)}
                    onSelect={this.onSelectValue.bind(this)}
                    shouldItemRender={(item, value) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1}
                />
                <br />
                <br />
                <div style={this.state.hideShow}>
                    Details:<br />
                    <br />
                    Title: {this.state.filmDetails.title}<br />
                    Description: {this.state.filmDetails.description}<br />
                    Director: {this.state.filmDetails.director}<br />
                    Producer: {this.state.filmDetails.producer}<br />
                    release_date: {this.state.filmDetails.release_date}<br />
                    rt_score:  {this.state.filmDetails.rt_score}<br />
                </div>
            </div>

        );
    }
}

export default ApiCallTest;