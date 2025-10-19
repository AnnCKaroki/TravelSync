import WeatherDashboard from './components/features/weather/WeatherDashboard.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">TravelSync Dashboard</h1>
      <WeatherDashboard />
    </div>
  )
}

export default App
