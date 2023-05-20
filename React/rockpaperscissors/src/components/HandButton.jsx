import React from 'react'
import HandIcon from './HandIcon'

export default function HandButton( {value, onClick}) {

  const handleClick = () => onClick(value);

  return (
    <button onClick={handleClick}>
      <HandIcon value={value}/>
    </button>
  )
}
