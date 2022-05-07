import React from 'react'
import styled from 'styled-components'

import bitcoinAll from './assets/bitcoin-all.png'
import chart2 from './assets/chart-2.png'

function Charts() {
  return (
    <StyledCharts>
        <div className="charts">
                <img src={bitcoinAll} alt="bitcoin-all" className="btc-chart" />
                <img src={chart2} alt="chart-2" className='chart-2' />
        </div>

    </StyledCharts>
  )
}

export default Charts


const StyledCharts = styled.div`
    display: flex;
    flex-direction: row;

    .charts {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        
    }

   .charts img{
        width: 100%;
        height: auto;
        margin: 1rem;
   }



`