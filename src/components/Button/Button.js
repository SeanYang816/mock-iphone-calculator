import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = props => {
    const { label, value, type, theme, position, doubleSpace, onClick, active } = props
    return (
        <button id={label} className={
            classNames(
                styles.button,
                styles[theme],
                doubleSpace && styles.doubleSpace,
                active && styles.active,
                )}
            data-position={position}
            onClick={onClick(type, value)}>
            {`${value}`}
        </button>
    )
}

Button.propTypes = {}

export default Button