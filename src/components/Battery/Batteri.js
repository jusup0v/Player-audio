import React, { Component } from 'react';
import './Battery.css'

class Batteri extends Component {
    constructor() {
        super()
        this.state = {
            active: 0,
            prosent: 0
        }
        setInterval(() => {
            this.setState(({ active, prosent }) => {
                if (active === 3 && prosent === 3) {
                    active = 0
                    prosent = 0
                } else {
                    active++
                    prosent++
                } return {
                    active,
                    prosent
                }
            })
        }, 1000);
    }
    render() {
        const { active, prosent } = this.state
        let text = '33%';
        let color = 'red'
        if (active === 2 && prosent === 2) {
            color = 'yellow'
            text = '66%'
        } else if (active === 3 && prosent === 3) {
            color = 'green'
            text = '100%'
        }
        return (
            <>
                <div className='container'>
                    <div style={{ backgroundColor: color }} className={active >= 1 ? 'block1' : null}></div>
                    <div style={{ backgroundColor: color }} className={active >= 2 ? 'block2' : null}></div>
                    <div style={{ backgroundColor: color }} className={active >= 3 ? 'block3' : null}></div>
                    <div className='block4'></div>
                </div>
                <h1>{active >= 1 ? text : '0%'}</h1>
            </>
        );
    }
}

export default Batteri;