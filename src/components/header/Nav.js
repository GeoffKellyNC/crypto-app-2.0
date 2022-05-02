import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <StyledNav>
        <div className = 'links'>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/about'> About </NavLink>
            <NavLink to='/contact'> Contact </NavLink>
            <NavLink to= '/link'> Other Link </NavLink>
        </div>
    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`


    .links {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 1rem;
    }

    .links a {
        text-decoration: none;
        color: ${pr => pr.theme.colors.fontSecondary};
        font-size: ${pr => pr.theme.fontSizes.medium};
        padding: 0.5rem 1rem;
        transition: all 0.2s ease-in-out;
    }

    .links a:hover {
        color: ${pr => pr.theme.colors.primary};
    }



`