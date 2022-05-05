import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from '../header/Nav'
import HamburgerIcon from './HamburgerIcon'
import MobileNav from './MobileNav'

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
        console.log('is open',isOpen)
    }

  return (
    <StyledHeader>
        <HamburgerIcon  handleClick = {handleClick} />
        <Nav />
        {
            isOpen && <MobileNav isOpen = {isOpen} />
        }
    </StyledHeader>
  )
}

export default Header


const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
    background: ${pr => pr.theme.colors.lightBlack};
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    z-index: 1;
    padding: 0.5rem 0;
    
 
    
    


`