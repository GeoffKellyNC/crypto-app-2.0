import axios from 'axios'
import * as types from './action-types';



// export const fetchStats = () => dispatch => {
//     axios.get('https://api.blockchair.com/stats')
//     .then(res => {

//         const statsData = Object.keys(res.data.data)

//         dispatch({ type: types.GET_STATS, payload: statsData})
//         dispatch({ type: types.STATS_LOADING, payload: false})
//     })
//     .catch(err => console.error(err))
// }



export const fetchStats = () => dispatch => {
    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '100',
          offset: '0'
        },
        headers: {
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
          'X-RapidAPI-Key': 'd111348fcamsh04dc037ab98320dp1f5fd6jsnb81ca9f78a0e'
        }
    }

    axios(options)
        .then(res => {
            const statsData = res.data.data.coins
            dispatch({ type: types.GET_STATS, payload: statsData})
            dispatch({ type: types.STATS_LOADING, payload: false})
        })
        .catch(err => console.error(err))


}


    
