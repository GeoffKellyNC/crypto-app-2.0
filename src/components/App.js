import React, { useEffect } from 'react'
import '../master-styles/App.css';
import * as actions from '../redux-state/action-creators'
import { connect } from 'react-redux'

function App(props) {

  const { 
    stats,
    fetchStats } = props

    useEffect(() => {
      fetchStats()
      console.log(stats)
    },[])

  


  return (
    <div className="App">

    </div>
  );
}

const mapStateToProps = state => {
  return{
    stats: state.stats
  }
}

export default connect(mapStateToProps, actions) (App);
