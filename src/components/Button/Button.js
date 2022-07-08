import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const convertUnicode = (input) => {
    return input.replace(/\\u[0-9a-fA-F]{4}/g,function(a,b) {
      var charcode = parseInt(b,16);
      return String.fromCharCode(charcode);
    });
  }
  
const Button = props => {
    const { label, value, type, theme, position, doubleSpace} = props
  return (
    <button className={classNames(styles.button, styles[theme], doubleSpace && styles.doubleSpace)} data-position={position}>
        {`${value}`}
        </button>
  )
}

Button.propTypes = {}

export default Button