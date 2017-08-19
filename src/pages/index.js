import React from "react"
import Glitch from '../components/Glitch/Glitch'
import Nav from '../components/Nav/Nav'

export default class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      glitchDisplayed: true
    }

    this.dismissGlitch = this.dismissGlitch.bind(this)
  }

  dismissGlitch() {
    this.setState({
      glitchDisplayed: false
    })
  }
  render() {

    return (
      <div>
        <div className="glitch">
        { this.state.glitchDisplayed
          ? <Glitch onDismiss={this.dismissGlitch}/>
          : null
        }
        </div>

        <h1 style={{
          fontSize: '50px',
          textAlign: 'center',
          paddingTop: '40vh'
        }}>Kallisté</h1>



      </div>
    )
  }

}
