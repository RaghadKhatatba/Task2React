import React, { Component } from 'react'
import Course from './Course'
export default class Courses extends Component {
    state ={
        courses:[
            {
        id:1,
        title:'React',
        description:'this is React'
            },{
                id:1,
                title:'Redux',
                description:'this is Redux'
            },{
                id:1,
                title:'React Native',
                description:'this is React Native'
            }
        ]
    }
  render() {
    return (
        <div>
        <div className="container">
            <div className="row">
                {this.state.courses.map((course)=>{
                    return <Course courseInfo={course} />
                }

                )}
            </div>
        </div>
      </div>
    )
  }
}
