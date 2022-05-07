import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <StyledFooter>
        <div className = 'links'>
            <a href='/'> Home </a>
            <a href='/about'> Blockchain </a>
            <a href='/contact'> NFT's </a>
            <a href= '/link'> News </a>
        </div>
        <div className = 'social-links'>
            <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>
        <div className = 'copyright'>
            <p> Copyright © 2022. All Rights Reserved. </p>
        </div>

    </StyledFooter>
  )
}

export default Footer



const StyledFooter = styled.div`
        width: 100%;
        height: auto;
        background-color: ${pr => pr.theme.colors.lightBlack};
        font-family: ${pr => pr.theme.fonts.primary};
        color: ${pr => pr.theme.colors.fontSecondary};

        .links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 2rem 0;
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

        .social-links {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 1rem;
        }

        .social-links a {
            text-decoration: none;
            color: ${pr => pr.theme.colors.fontSecondary};
            font-size: ${pr => pr.theme.fontSizes.medium};
            padding: 0.5rem 1rem;
            transition: all 0.2s ease-in-out;
        }

        .social-links a:hover {
            color: ${pr => pr.theme.colors.primary};
        }

        .copyright {
            display: flex;
            justify-content: center;
            padding: 0.5rem 1rem;
        }








    

    




`