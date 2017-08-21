import React from "react"
import MainLayout from '../../layout/MainLayout/MainLayout'
import Logo from '../../components/Logo/Logo'
import GSAP from 'react-gsap-enhancer'
import styles from './aboutme.style'

  export default class AboutMePage extends React.Component {

    render () {

      return (
        <MainLayout>
          <div className='host'>

            <div className="logo">
              <Logo />
            </div>

            <p>
              Salut, j'm'appelle Kallisté et vraiment chui la plusse nulosse. lol
            </p>

          </div>
          <style jsx>{styles}</style>
        </MainLayout>
      )
    }

  }