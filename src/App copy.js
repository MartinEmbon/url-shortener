import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button"
import { InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

const App = () => {

  const [long_url, setlong_url] = useState("")
  const [url1, setUrl1] = useState("Ingrese a url...")

  const shorten = (e) => {
    e.preventDefault()

    const headers = {
      'apiKey': 'DFoN3h6cHZFECoXeRf5qVv54d9T4XNYH'
    }
   

    axios.post("https://test.godigibee.io/pipeline/training/v1/martin-encurtador-url", long_url, {
      headers: headers
      
    })
      .then((response) => {
        console.log(response.data)
        //setUrl1(response.data.url)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      {/* <input type="text" className="input"/> */}
      <InputGroup className="mb-3 mt-5" style={{width: "90%", margin: "auto" }}>
        <InputGroup.Text
          onChange={(e) => setlong_url(e.target.value)}
        >Ingrese a url para encurtar</InputGroup.Text>
        <FormControl aria-label="First name" />
      </InputGroup>

      <Button variant="info"
        onClick={shorten}
      >Encurtar a URL agora!</Button>

      <p className="shorten"
      >{url1 === null ? "Ingrese URL valida!" : url1}</p>
    
    </div>
    
  )
}

export default App