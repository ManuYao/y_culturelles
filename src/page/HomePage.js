import React, { Component } from 'react'
import {FilterData ,FilterDate} from '../components/FiltreData'
import HeaderPage from '../components/HeaderPage'
import "../Styles/Card.scss"

export default class HomePage extends Component {
  render() {
    return (
      <div>
          <HeaderPage/>
            <div className='culture_style '>
          <FilterData />
          <FilterDate />
        </div>
      </div>
    )
  }
}
