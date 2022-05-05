import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Test() {
    const [testData, setTestData] = useState([])


    useEffect(() => {
        const dataArray = []
        axios.get('https://api.blockchair.com/stats')
        .then(res => {
            const data = res.data
            for (let key in data) {
                dataArray.push(data[key])
            }
            setTestData(dataArray)
        })
        .catch(err => console.error(err))
    }, [])


  return (
    <div>
        <h1>Test</h1>
        {
          console.log("testData", testData)
        }
    </div>
  )
}

export default Test

// var numeric_array = new Array();
// for (var items in Array){
//     numeric_array.push( Array[items] );
// }