import React, { Component } from 'react'
import {FilterData ,FilterDate} from '../components/FiltreData'
import "../Styles/Card.scss"

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className='culture_style'>
          <FilterData />
          <FilterDate />
        </div>
      </div>
    )
  }
}
