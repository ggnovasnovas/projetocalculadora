import React, { Component } from 'react'
import './Calculadora.css'

export default class Calculadora extends Component {

    render() {
        return (
            <div className="Calculadora">
              
                <input type="submit" value="AC"></input>
                <input type="submit" value="/"></input>
                <input type="submit" value="7"></input>
                <input type="submit" value="8"></input>
                <input type="submit" value="9"></input>
                <input type="submit" value="*"></input>
                <input type="submit" value="4"></input>
                <input type="submit" value="5"></input>
                <input type="submit" value="6"></input>
                <input type="submit" value="-"></input>
                <input type="submit" value="2"></input>
                <input type="submit" value="3"></input>
                <input type="submit" value="+"></input>
                <input type="submit" value="0"></input>
                <input type="submit" value="."></input>
                <input type="submit" value="="></input>


                

            </div>
        )
    }
}