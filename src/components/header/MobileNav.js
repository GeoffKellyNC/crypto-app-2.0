import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function MobileNav({ isOpen }) {
  return (
    <StyledMobileNav className = 'links'>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/about'> About </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
        <NavLink to= '/link'> Other Link </NavLink>
    </StyledMobileNav>
  )
}

export default MobileNav


const StyledMobileNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background: ${pr => pr.theme.colors.lightBlack};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4em;
    z-index: 1;
    padding: 0.5rem 0;
    transition: all 0.2s ease-in-out;
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
    transform: ${pr => pr.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-in-out;
    background: ${pr => pr.theme.colors.lightBlack};
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    `