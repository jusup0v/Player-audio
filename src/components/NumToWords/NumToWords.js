import React, { Component } from 'react';
import toWord from 'number-to-words';


class NumToWords extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            Text: ''
        }
    }
    onClick = () => {
        this.setState({
            Text: toWord.toWords(this.state.value)
        })
    }
    render() {
        const { num } = this.props
        const { value, Text } = this.state
        return (
            <div>
                <input type="number"
                    onChange={(e) => this.setState({ value: e.target.value })}
                    value={value}
                />
                <button onClick={this.onClick}>add</button>
                <h1>{Text}</h1>
            </div>
        );
    }
}

export default NumToWords;