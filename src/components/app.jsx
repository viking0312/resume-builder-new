import * as React from "react"
import { useState } from "react"
import Header from "./Header"
import Home from "./Home"

const handleLogin = () => {
  alert("logged in")
}

const handleWether = () => {}

const App = () => {
  console.log("render")
  const [comp, setComp] = useState("news")

  const [login, setLogin] = useState()
  const handleCallback = (compName) => {
    setComp(compName)
  }
  return (
    <div>
      <Header handle={handleCallback}></Header>
      <Home info={comp}></Home>
    </div>
  )
}

export default App
