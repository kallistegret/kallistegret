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

    this.state = {
      pressToPlayRendered: false
    }
  }

  componentDidMount() {
    this.addAnimation(this.animateGlitch.bind(this))

    setTimeout(() => {
      this.setState({
        pressToPlayRendered: true
      })
    }, 3000)
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
    return this.glitchAnimation
  }

  removeGlitchAnimation(onComplete) {

    this.glitchAnimation.stop()
    var glitch = document.getElementById("host")

    TweenMax.to([glitch], 1, {y: -window.innerHeight, onComplete: onComplete})
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
      <div id="host" className="host" style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black'
      }}>

        <div id="glitch" />

        <div id='play' className='playButton' onClick={this.dismiss}/>

        {this.state.pressToPlayRendered ? this.renderPressToPlay() : null}

          <style jsx> {styles} </style>

      </div>
    );
  }
}

export default Glitch;
