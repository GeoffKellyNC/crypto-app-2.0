import axios from 'axios'
import * as types from './action-types';



export const fetchStats = () => dispatch => {
    axios.get('https://api.blockchair.com/stats')
    .then(res => {
        console.log(res)
    })
    .catch(err => console.error(err))
}