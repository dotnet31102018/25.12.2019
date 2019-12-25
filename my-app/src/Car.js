import React, { Component } from 'react'

class Car extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>Brand: {this.props.brand}</div>
        <div>Year: {this.props.year}</div>
        <div>Color: {this.props.color}</div>
      </div>
    )
  }
}

export default Car;