import React from 'react'
import HandIcon from './HandIcon'
import bgImg from '../assets/purple.svg'
import './HandButton.css'

export default function HandButton( {value, onClick}) {
  const style = {
  width: '166px',
  height: '166px',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  backgroundImage: `url('${bgImg}')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain'
  }
  const handleClick = () => onClick(value);

  return (
    <button className="HandButton" style={style} onClick={handleClick}>
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  )
}
