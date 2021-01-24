import React, { Component } from 'react';

export default class Logo extends Component {

  LogoStyled() {
    return {
      width: '70%',
      height: '70%'
    }    
  }

  render() {
   return <a href="#home">
      <img
        style={this.LogoStyled()} 
        src="images/logo.png" 
        href="#home"
        alt="logo">
      </img>
    </a>
  }
}