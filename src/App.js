import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const App = () => {
  const [long_url, setLong_url] = useState("")
  const [url1, setUrl1] = useState("Short url here")


  const shorten = (e) => {

    const link ={
      long_url:long_url
    }

    const headers = {
      'apiKey': 'DFoN3h6cHZFECoXeRf5qVv54d9T4XNYH'
    }
    
    axios.post("https://test.godigibee.io/pipeline/training/v1/martin-encurtador-url", link, {
        headers: headers
      })

      .then((response) => {
        console.log(response.data)
        setUrl1(response.data.url)
      })
      .catch((error) => {
        console.log(error)
      })
      console.log(link)

    e.preventDefault()
  }

  return (
    <div className="App">
      <input type="text" className="input"
        onChange={(e) => setLong_url(e.target.value)}
      />

      <button className='btn'
        onClick={shorten}
      >Shorten</button>


      <p link className="shorten"
      >{url1}</p>
    </div>
  )
}

export default App