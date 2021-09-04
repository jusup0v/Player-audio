import React, { Component } from 'react';
import './Game.css'

class Game extends Component {
    constructor() {
        super()
        this.state = {
            data: ['', '', '', '', '', '', '', '', ''],
            active: false
        }
    }
    onDiv = (i) => {
        console.log(i);
        this.setState(({ data, active }) => {
            const box = data.map((elem, index) => {
                if (i === index && elem === '') active = !active
                return i === index && elem === '' ? (active ? 'x' : 'o') : elem
            })
            return {
                data: box,
                active
            }
        })
    }
    render() {
        const { active } = this.state
        return (
            <>
                <div className="all">
                    <h1>Крести Нолики</h1>
                    <h1>Кто ходит: </h1>
                    <div className='container1'>
                        {
                            this.state.data.map((elem, index) => {
                                return (
                                    <div className='box1'
                                        onClick={() => this.onDiv(index)}>
                                        <span>{elem}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}



export default Game;