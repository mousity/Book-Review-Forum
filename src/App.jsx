import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='head'>
      <NavBar />
    </div>
  )
}

export default App
