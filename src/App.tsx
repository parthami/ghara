import './App.css'

function App() {
  const time = new Date().toISOString()

  return (
    <div className="flex h-screen">
        <span className="m-auto">{time}</span>
    </div>
  )
}

export default App
