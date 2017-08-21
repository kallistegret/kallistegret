import React from 'react'
import styles from './Nav.style'

export default class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li> <a href='#'> RÉSUMÉ </a> </li>
        <li> <a href='#'> PORTFOLIO </a> </li>
        <li> <a href='/AboutMe'> ABOUT ME </a> </li>
        <style jsx>{styles}</style>
      </ul>
    )
  }
}
