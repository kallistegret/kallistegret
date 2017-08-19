import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Index from './pages/IndexPage/index'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index}/>
        </div>
      </Router>
    )
  }
}
