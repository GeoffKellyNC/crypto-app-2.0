import React from 'react'
import styled from 'styled-components'

import './styles/hamburger.css'

function HamburgerIcon({ handleClick }) {
  return (
    <div className='ham-container' onClick = {() => handleClick()}>
        <label for="check">
        <input type="checkbox" id="check"/> 
        <span></span>
        <span></span>
        <span></span>
        </label>
    </div>
  )
}

export default HamburgerIcon




