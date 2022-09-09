import React from 'react'
import styles from './styles.module.css'


export const LoremButton = (props) => {
  return <button className={
    (props.type ? styles['btn-' + props.type] : styles['btn-default'])}>
    {props.children}
  </button>
}

export const LoremText = (props) => {
  const wordLenght = props.words;
  const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  let loremReturned;

  if (wordLenght > 69) {
    let longLorem = Lorem.repeat(Math.ceil(wordLenght / 69));
    let longLoremWords = longLorem.split(' ');
    let longLoremJoined = longLoremWords.slice(0, wordLenght).join(' ');
    loremReturned = longLoremJoined;
  } else {
    let loremWords = Lorem.split(' ');
    let loremJoined = loremWords.slice(0, wordLenght).join(' ');
    loremReturned = loremJoined;
  }

  return (
    <div className={props.font==='fancy' ? styles['fancy-font'] : ''}>
      {loremReturned} {props.children}
    </div>
  )
}

export const LoremDiv = ({children}) => {
  return(
    <div className={styles['loremborder']}>
      {children}
    </div>
  )
}

export const LoremContainer = ({children}) => {
  return(
    <div className={styles['container']}>
      {children}
    </div>
  )
}
export const LoremColumn = (props) => {
  return(
    <div className={props.column=='2'? styles['lorem-col-2']: (props.column=='3'? styles['lorem-col-3']: (props.column=='4'? styles['lorem-col-4']:''))}>
      {props.children}
    </div>
  )
}
export const LoremHeader = (props) => {
  return(
    <div className={styles['lorem-header']+' '+(props.center?styles['center']:'')}>
      {props.children}
    </div>
  )
}
export const LoremFooter = (props) => {
  return(
    <div className={styles['lorem-footer']}>

{props.children}
    </div>
  )
}
export const LoremFooterLeft = (props) => {
  return(
    <div className={styles['lorem-footer-list-left']}>
      <ul style={{listStyle:'none'}}>
        {props.children}
      </ul>
    </div>
  )
}
export const LoremFooterRight = (props) => {
  return(
    <div className={styles['lorem-footer-list-right']}>
      <ul style={{listStyle:'none'}}>
        {props.children}
      </ul>
    </div>
  )
}
