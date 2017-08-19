import React from 'react'
import styles from './MainLayout.style'

export default class MainLayout extends React.Component {
  render() {
    return (

      <div className='host'>
        <div className='content'>{this.props.children}</div>

        <div className='top bar'/>

        <div className='bottom bar'/>

        <style jsx>{styles}</style>
      </div>
    )
  }
}
