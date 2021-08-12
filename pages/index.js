import React, { Component } from 'react'
import { Hamburger, Logo } from 'itechartsitewrapper'

export default class extends Component {
  render () {
    return (
        <>
          <Hamburger color='red' />
          <Logo />
        </>
    );
  }
}