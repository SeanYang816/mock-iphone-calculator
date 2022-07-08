import React from 'react'
import styles from './Home.module.scss'
import { buttonList } from 'constants'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'

const Home = props => {
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>0</div>
        <div className={styles.buttonGroup}>
          {buttonList.map((item) => (
            <Button key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home