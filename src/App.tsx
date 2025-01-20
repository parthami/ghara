const App = () => {
  const time = new Date().toISOString()

  return (
    <div>
        <div className="h-screen grid grid-cols-2 grid-rows-2 gap-4">
            <div className="bg-gray-200 flex">
                <span className="m-auto">{time}</span>
            </div>
            <div className="bg-gray-300 flex">
                <span className="m-auto">Panel 2</span>
            </div>
            <div className="bg-gray-300 flex">
                <span className="m-auto">Panel 3</span>
            </div>
            <div className="bg-gray-200 flex">
                <span className="m-auto">Panel 4</span>
            </div>
        </div>
    </div>
  )
};

export default App
