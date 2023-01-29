import './App.css';
import WindowTracker from './WindowTracker';
import React from 'react';

function App() {
  const [show, setShow] = React.useState(true)

  function toggle() {
    setShow(prevShow => !prevShow)
  }
  return (
    <div className="container">
        <button onClick={toggle} >
            Toggle WindowTracker
        </button>
        {show && <WindowTracker />}
    </div>
  )
}

export default App;