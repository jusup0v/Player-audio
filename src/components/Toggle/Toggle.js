import React, { Component } from 'react';

class Toggle extends Component {
    render() {
        const { active, onClick } = this.props;
        return (
            <div>
                <button onClick={onClick}>Click!</button>
                <img style={{ display: active ? 'none' : 'block' }} src="https://cdn.motor1.com/images/mgl/Zq72Z/s1/mercedes-amg-gt-r-by-domanig.jpg " height='500px' width='800px' alt="" />
            </div>
        );
    }
}

export default Toggle;