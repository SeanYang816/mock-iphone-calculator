import React, { useState } from 'react'
import styles from './Home.module.scss'
import { buttonList } from 'constants'
import Button from 'components/Button/Button'
import PropTypes from 'prop-types'

const Home = props => {

  const [firstNumber, setFirstNumber] = useState(0)
  const [seocndNumber, setSecondNumber] = useState(null)
  const [operator, setOperator] = useState('')
  const [operatorNumber, setOperatorNumber] = useState(0)
  const isFirstNumber = !operator || typeof seocndNumber !== 'number'
  const handleClick = (type, value) => (e) => {
    switch (type) {
      case 'number':
        if (!operator) {
          if (!firstNumber) {
            setFirstNumber(value)
            return
          }
          if (value === 0) {
            setFirstNumber(firstNumber * 10)
            return
          }
          const { length } = String(firstNumber)
          setFirstNumber(value * (Math.pow(10, length)) + firstNumber)
          return
        }
        if (!seocndNumber) {
          setSecondNumber(value)
          return
        }
        if (value === 0) {
          setSecondNumber(seocndNumber * 10)
          return
        }
        const { length } = String(seocndNumber)
        setSecondNumber(value * (Math.pow(10, length)) + seocndNumber)
        return
      case 'assignment':
        if (!operator) return
        switch (operator) {
          case '\u00f7':
            if (seocndNumber === null) {
              setFirstNumber(firstNumber / operatorNumber)
              return
            }
            setFirstNumber(firstNumber / seocndNumber)
            break
          case '\u00d7':
            if (seocndNumber === null) {
              setFirstNumber(firstNumber * operatorNumber)
              return
            }
            setFirstNumber(firstNumber * seocndNumber)
            break
          case '\u002d':
            if (seocndNumber === null) {
              setFirstNumber(firstNumber - operatorNumber)
              return
            }
            setFirstNumber(firstNumber - seocndNumber)
            break
          case '\u002b':
            if (seocndNumber === null) {
              setFirstNumber(firstNumber + operatorNumber)
              return
            }
            setFirstNumber(firstNumber + seocndNumber)
            break
          default:
            break
        }
        setSecondNumber(null)
        setOperator('')
        break
      case 'operator':
        setOperatorNumber(firstNumber)
        setOperator(value)
        break
      case 'percentage':
        !operator ? setFirstNumber(firstNumber / 100) : setSecondNumber(seocndNumber / 100)
        break
      case 'clear':
        setFirstNumber(0)
        setSecondNumber(null)
        setOperator('')
        setOperatorNumber(0)
        break
      case 'plusOrMinus':
        isFirstNumber ?
          setFirstNumber(firstNumber > 0 ? -Math.abs(firstNumber) : Math.abs(firstNumber)) :
          setSecondNumber(seocndNumber > 0 ? -Math.abs(seocndNumber) : Math.abs(seocndNumber))
        break
      default:
        console.error('Some Error Occur!')
        break;
    }

  }
  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.display}>{isFirstNumber ? firstNumber : seocndNumber}</div>
        <div className={styles.buttonGroup}>
          {buttonList.map((item) => (
            <Button key={item.label} {...item} onClick={handleClick} active={operator === item.value} />
          ))}
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home