import React, { useEffect } from 'react'
import * as actions from '../../redux-state/action-creators'
import { connect } from 'react-redux'
import styled from 'styled-components'

//Components Imported
import CryptoCard from './CryptoCard'

function Home(props) {

    const {
        stats,
        statsLoading,
        fetchStats
    } = props

    useEffect(() => {
        fetchStats()
    }, [])


    console.log(stats)




  return (
    <StyledHome>
        <div> Home </div>

        { statsLoading ? <div> Loading... </div> :
            stats.map(coin => {
                return <CryptoCard coin = {coin} />
            })
        }
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
    color: white;
    font-family: ${pr => pr.theme.fonts.primary};


`