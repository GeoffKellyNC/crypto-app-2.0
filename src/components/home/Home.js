import React, { useEffect, useState } from 'react'
import * as actions from '../../redux-state/action-creators'
import { connect } from 'react-redux'
import styled from 'styled-components'

// import Test from './Test'

//Components Imported
import CryptoCard from './CryptoCard'
import Hero from './Hero'

function Home(props) {
    const [selected, setSelected] = useState(false)

    const {
        stats,
        statsLoading,
        fetchStats
    } = props

    useEffect(() => {
        fetchStats()
    }, [])

    const top12Coins = stats.slice(0, 12)
    const remainingCoins = stats.slice(12, 39)









  return (
    <StyledHome>
        <Hero />
        <h3 className = 'coins-title'> Explore Cryptocurrencies... </h3>
        <div className = 'coin-cards'>
            { statsLoading ? <div> Loading... </div> :
                top12Coins.map(coin => {
                    return <CryptoCard key = {coin.uuid} coin = {coin} />
                })
            }
            {
                selected ?
                remainingCoins.map(coin => {
                    return <CryptoCard key = {coin.uuid} coin = {coin} />
                }
                ) : <div onClick = {() => setSelected(true)}> View More </div>
            }
        </div>
        {/* <Test /> */}
    </StyledHome>
  )
}

const mapStateToProps = state => {
    return {
        stats: state.stats,
        statsLoading: state.statsLoading
    }
}

export default connect(mapStateToProps, actions) (Home)



const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};

    .coin-cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.5rem 0;
        gap: 0.6rem;
    }

    .coins-title{
        font-size: ${pr => pr.theme.fontSizes.medium};
        padding: 0.5rem 1rem;
        font-family: ${pr => pr.theme.fonts.primary};
    }



`