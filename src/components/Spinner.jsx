import React, { Component } from 'react'
import loading from '../assets/loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div style={{padding:'20rem 0'}} className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
