import React, { Component } from 'react'

export default class course extends Component {
  render() {
    const {title,description} =this.props.courseInfo
    return (
      <div className='col-md-4'>
        <div className="course">
         <h2>{title}</h2>
         <p>{description}</p>
         </div>
      </div>
    )
  }
}
