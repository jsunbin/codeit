import React from 'react'
import rockImg from '../assets/rock.svg'
import scissorImg from '../assets/scissor.svg'
import paperImg from '../assets/paper.svg'

export default function HandIcon({ className, value }) {

  const IMAGES = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg
  }

  const src = IMAGES[value]

  return (
    <>
      <img className={className} src={src} alt={value} />
    </>
  )
}
