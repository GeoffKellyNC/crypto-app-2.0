import React from 'react'
import styled from 'styled-components'
import millify from 'millify'

function CryptoCard({ coin }) {




  return (
    <StyledCryptoCard>
        <div className='top-card'>
            <img 
                src = { coin.iconUrl }
                alt = {coin.name}
                className = 'coin-icon'
            />
            <p className = 'coin-name'> { `${coin.name} (${coin.symbol})` } </p>
        </div>
        <div className = 'bottom-card'>
            <p className = 'coin-price'> Price (USD): 
                <span>{ `${coin.price} USD` }</span> </p>
            <p className = 'coin-price'> Price (BTC):
                <span>{ `${coin.btcPrice} BTC` }</span> </p>
            <p className = 'coin-change'>  Change: 
                <span
                    className = { coin.change > 0 ? 'positive': 'negative'  }
                >{ coin.change }</span> </p>
            <p className = 'coin-market-cap'> Market Cap:
                <span>{ millify(coin.marketCap) }</span> </p>
            <p className = 'coin-volume'> Volume (24h):
                <span>{ millify(coin["24hVolume"]) }</span> </p>
            <p className = 'coin-rank'> Rank:
                <span>{ coin.rank }</span> </p>
        </div>
      

    </StyledCryptoCard>
  )
}

export default CryptoCard


const StyledCryptoCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 25em;
    height: auto;
    border-radius: 20px;
    box-sizing: border-box;
    background: ${pr => pr.theme.colors.lightBlack};
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    transition: all 0.2s ease-in-out;
    &:hover{
        background: rgb(65,16,235);
        background: linear-gradient(125deg, rgba(65,16,235,1) 15%, rgba(53,116,246,1) 100%);
        transform: scale(1.05);

        p{
            color: white;
        }
    }

    p{
        font-family: ${pr => pr.theme.fonts.primary};
        font-size: ${pr => pr.theme.fontSizes.tiny};
        color: ${pr => pr.theme.colors.fontSecondary};
        font-weight: bold;
    }

    span {
        font-family: ${pr => pr.theme.fonts.primary};
        color: white;
        font-size: ${pr => pr.theme.fontSizes.tiny};
        padding: 0 0.5rem;
        font-weight: 300;
    }

    .positive {
        color: green;
    }

    .negative {
        color: red;
    }


    .coin-icon{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 0.5rem;
    }

    .top-card{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem 1rem;
        gap: 0.5rem;
    }

    .coin-name{
        font-size: ${pr => pr.theme.fontSizes.small};
        font-weight: bold;
        color: white;
    }




`