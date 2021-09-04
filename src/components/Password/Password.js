import React, { Component } from 'react';

class Password extends Component {
    render() {
        const { active, onClick2 } = this.props;
        return (
            <div>
                <input type={active ? 'hide' : 'password'} />
                <button onClick={onClick2}>{active ? 'Hide' : 'Show'}</button>
            </div>
        );
    }
}

export default Password;