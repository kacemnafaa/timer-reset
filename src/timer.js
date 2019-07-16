
import React, { Component } from 'react';
import Seconde from './seconde';

export default class Timer extends Component {
    constructor(props) {
        super(props)
        this.state=0;
    }
    render() {
        return (
            <div>
              <Seconde ms={tab[2]}/>
            </div>
        )
    }
}

