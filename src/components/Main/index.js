import React, { Component } from 'react'

import { Button }  from 'reactstrap'
import Result from '../Result'

import './style.css'
import doOperetation from '../../functions/doOperations'
import shouldConcat from '../../functions/shouldConcat'

const MAX_RESULT = 99999999

export default class Main extends Component {
  state = {
    operator: null,
    display: 0,
    firstNumber: 0, 
    lastNumber: 0,
    currentNumber: 0,
    floatPoint: false
  }

  setOperatorHandle = bOperator => {
    const { currentNumber, firstNumber } = this.state
    this.setState({ 
      operator: bOperator, 
      firstNumber: firstNumber === 0 ? currentNumber : firstNumber, 
      currentNumber: 0
    })
  }

  numberHandle = number => {
    const { operator, currentNumber, floatPoint } = this.state

    if (!floatPoint) {
      if ((currentNumber.toString().length === 8 && !operator)) {
        return  
      }
      if ((number === 0 && currentNumber === 0)) {
        return    
      }
    }
    
    const concat = shouldConcat(currentNumber, operator)
    let newNumber

    console.log('floatPoint && concat', floatPoint && concat)
    if (floatPoint) {
      newNumber = `${currentNumber}.${number}`
      this.setState({ floatPoint: false })
    } else {
      newNumber = concat ? `${currentNumber}${number}` : number
    }
    

    this.setState({ display: newNumber, currentNumber: Number(newNumber) })
  }

  equalHandle = () => {
    const { currentNumber, firstNumber, operator } = this.state

    const result = doOperetation(
      operator, 
      firstNumber, 
      currentNumber
    )

    if (result > MAX_RESULT) return

    this.setState({
      display: result,
      firstNumber: result
    })
  }

  clearHandle = () => {
    const { display } = this.state

    if (display !== 0) {
      this.setState({ 
        display: 0,
        currentNumber: 0
      })

      return 
    }

    this.setState({
      currentNumber: 0,
      firstNumber: 0,
      operator: null
    })
  }

  signalHandle = () => {
    const { firstNumber } = this.state
    const newValue = firstNumber * -1
    
    this.setState({
      firstNumber: newValue,
      display: newValue
    })

  }

  percentHandle = () => {
    const { display, currentNumber, firstNumber } = this.state
    
    this.setState({ 
      display: display / 100, 
      currentNumber: currentNumber / 100,
      firstNumber: firstNumber / 100 
    })
  }
  
  render () {
    const { operator, display, currentNumber } = this.state
    return (
        <div className="calculator-body">
          <div className="result-session">
            <Result operator={operator} display={display}/>
          </div>
          <div className="buttons-session">
            <Button 
              onClick={this.clearHandle}
              className="secundary-operator"
            >{display === 0 ? 'AC' : 'C'}</Button>
            <Button 
              onClick={this.signalHandle}
              className="secundary-operator">+/-</Button>
            <Button 
              onClick={this.percentHandle}
              className="secundary-operator">%</Button>
            <Button 
              color="warning"
              className="principal-operator"
              onClick={() => this.setOperatorHandle('÷')}>÷</Button> 
            <Button 
              className="number"
              onClick={() => this.numberHandle(7)}
            >7</Button>
            <Button 
              onClick={() => this.numberHandle(8)}
              className="number">8</Button>
            <Button 
              onClick={() => this.numberHandle(9)}
              className="number">9</Button>
            <Button 
              color="warning"
              className="principal-operator"
              onClick={() => this.setOperatorHandle('x')}>x</Button> 
            <Button 
              onClick={() => this.numberHandle(4)}
              className="number">4</Button>
            <Button 
              onClick={() => this.numberHandle(5)}
              className="number">5</Button>
            <Button 
              onClick={() => this.numberHandle(6)}
              className="number">6</Button>
            <Button 
              color="warning"
              className="principal-operator"
              onClick={() => this.setOperatorHandle('+')}>+</Button> 
            <Button 
              onClick={() => this.numberHandle(1)}
              className="number">1</Button>
            <Button 
              onClick={() => this.numberHandle(2)}
              className="number">2</Button>
            <Button 
              onClick={() => this.numberHandle(3)}
              className="number">3</Button>
            <Button 
              color="warning"
              className="principal-operator"
              onClick={() => this.setOperatorHandle('-')}>-</Button> 
            <Button 
              onClick={() => this.numberHandle(0)}
              className="number zero">0</Button>
            <Button 
              onClick={() => { this.setState({ floatPoint: true }) }}
              className="number">,</Button>
            <Button 
              onClick={() => this.equalHandle()}
              className="principal-operator"
              color="warning">=</Button>
          </div>
        </div>
    )
  }
}