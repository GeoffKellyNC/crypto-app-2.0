import axios from 'axios'
import * as types from './action-types';



export const fetchStats = () => dispatch => {
    axios.get('https://api.blockchair.com/stats')
    .then(res => {
        const statsData = res.data.data
        dispatch({ type: types.GET_STATS, payload: statsData})
        dispatch({ type: types.STATS_LOADING, payload: false})
    })
    .catch(err => console.error(err))
}
