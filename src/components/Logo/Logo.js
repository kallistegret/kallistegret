import React from 'react'

export default class Logo extends React.Component {
  render() {
    return (
      <div style={{
        height: `100%`,
        width: `100%`,
        backgroundImage: "url('/assets/logo.svg')",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}/>
    )
  }
}
