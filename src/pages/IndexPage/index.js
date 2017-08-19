import React from "react"
import Glitch from '../../components/Glitch/Glitch'
import styles from './index.style'
import MainLayout from '../../layout/MainLayout/MainLayout'
import Logo from '../../components/Logo/Logo'
import Nav from '../../components/Nav/Nav'

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
    this.refs.logo.appearAnimation()

  }
  render() {

    return (
      <div className='main'>
        { this.state.glitchDisplayed
          ? <div className="glitch">
              <Glitch onDismiss={this.dismissGlitch}/>
            </div>
          : null
        }

        <MainLayout>
          <div className='host'>

          <div className="logo">
            <Logo ref='logo'/>
          </div>

        <h1 className="main-title">
          K<span>A</span>LLISTÉ
          </h1>

                  <div className="nav"><Nav /></div>

          </div>
        </MainLayout>


        <style jsx>{styles}</style>
      </div>
    )
  }

}
