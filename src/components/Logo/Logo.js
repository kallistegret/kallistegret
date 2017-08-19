import React from 'react'
import {TweenMax} from 'gsap'

export default class Logo extends React.Component {
  componentDidMount(){
  }
  appearAnimation(){
    var logo = document.getElementById('logo')
    TweenMax.to(logo, 2, {
      filter: 'grayscale(0%)',
    
    })
  }
  render() {
    return (
      <div id='logo' style={{
        height: `100%`,
        width: `100%`,
        backgroundImage: "url('/assets/logo.svg')",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        filter: 'grayscale(100%)'
      }}/>
    )
  }
}
