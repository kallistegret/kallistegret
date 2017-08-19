import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import GSAP from 'react-gsap-enhancer';
import styles from './Glitch.style';
import TypeWriter from 'react-typewriter';

@GSAP()
class Glitch extends Component {

  constructor(props) {
    super(props)
    this.dismiss = this.dismiss.bind(this)
  }

  componentDidMount() {
    this.addAnimation(this.animateGlitch.bind(this))
  }


  animateGlitch({target}) {
    var glitch = document.getElementById("glitch")
    var playButton = document.getElementById('play')

    TweenMax.to(playButton, 3, {
      opacity: 1,
      delay: 0.5,
    })

    this.glitchAnimation = new TimelineMax({repeat: -1})
        .to(glitch, 0.1, {x: 45})
        .to(glitch, 0.1, {x:0})
        .to(glitch, 5, {})
        .to(glitch, 0.1, {x: 45})
        .to(glitch, 0.1, {x: 0})
        .to(glitch, 0.1, {x: 45})
        .to(glitch, 0.1, {x: 0})
        .to(glitch, 0.1, {x: 45})
        .to(glitch, 0.1, {x: 0})
        .to(glitch, 2.5, {})
  }

  removeGlitchAnimation(onComplete) {

    this.glitchAnimation.stop()
    var glitch = document.getElementById("glitch")
    var playButton = document.getElementById("play")
    var pressToPlay = document.getElementById("pressToPlay")

    TweenMax.to([glitch, playButton, pressToPlay], 1, {y: -window.innerHeight, onComplete: onComplete})
  }


  dismiss() {
    this.removeGlitchAnimation(this.props.onDismiss)
  }

  renderPressToPlay() {
    return (
      <div id='pressToPlay'>
        <TypeWriter typing={1} minDelay={100} maxDelay={150} > Press to Play </TypeWriter>
      </div>
    )
  }

  render() {
    return (
      <div className="host" style={{
        maxWidth: '100vw',
        maxHeight: '100vh'
      }}>

        <div id="glitch" />

        <div id='play' className='playButton' onClick={this.dismiss}/>

        {this.renderPressToPlay()}

          <style jsx> {styles} </style>

      </div>
    );
  }
}

export default Glitch;
