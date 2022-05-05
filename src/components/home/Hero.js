import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <StyledHero>
        <span className='blockchain-explorer'>Blockchain explorer,</span>
        <span className='visualizer'>visualizer, and NFT analyzer.</span>
        <span className = 'small-title'> Explore over 100 different coins and NFT's</span>
    </StyledHero>
  )
}

export default Hero


const StyledHero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};
    min-width: 100%;
    border-radius: 16px;
    height: 20vh;
    margin-top: 25em;

    .blockchain-explorer{
        font-size: 36px;
        font-weight: 600;
    }

    .visualizer{
        font-size: 36px;
        font-weight: 600;
    }

    .small-title{
        font-size: 18px;
        font-weight: 300;

        &::after{
            content: '';
            display: block;
            width: 100%;
            height: 4px;
            background: ${pr => pr.theme.colors.primary};
            margin-top: 0.5rem;
    }



`