import React, { Component } from 'react'
import Wallet from '../components/Wallet'
import About from '../components/About'

export default class ProfilPage extends Component {
  render() {
    return (
      <div className='container columns-2'>
        <div className=''>  <Wallet /></div>
        <div className=''>  <About /></div>
      </div>
    )
  }
}
