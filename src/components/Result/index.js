import React, { Component } from 'react'

import './styles.css'

export default class extends Component {
  render () {
    return (
      <div className="screen">
        <span className="operator">{this.props.operator}</span>
        <span className="result">{this.props.display}</span>
      </div>
    )
  }
}