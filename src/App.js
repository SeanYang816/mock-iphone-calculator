import React, { Children } from 'react'
import PropTypes from 'prop-types'
import Home from './pages/Home/Home'

const App = ({ children }) => {
  return (
    <div id="app">
      {Children.only(children)}
    </div>
  )
}

App.propTypes = {}

export default App