import { useState } from 'react'
import Post from './assets/Post'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='MAIN-CONTAINER'>
      <div className="main">
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default App
