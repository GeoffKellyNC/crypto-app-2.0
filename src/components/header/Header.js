import React from 'react'
import styled from 'styled-components'
import Nav from '../header/Nav'

function Header() {
  return (
    <StyledHeader>
        <div> Header </div>
        <Nav />
    </StyledHeader>
  )
}

export default Header


const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
    background: ${pr => pr.theme.colors.lightBlack};

`