import {useState} from 'react'

function App() {
  const [value, setValue] = useState(0)
  return (
    <>
    <div className="box">
      <h2>CONTADOR</h2>
      <p>{value}</p>
      <button className="btn" onClick={() => setValue(value + 1)}>Aumentar</button>
      <button className="btn" onClick={() => setValue(value - 1)}>Diminuir</button>
      <button className="btn" onClick={() => setValue(0)}>Resetar</button>

    </div>
    </>
  )
    
}

export default App;
