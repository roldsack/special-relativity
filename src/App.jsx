import { Routes, Route } from 'react-router-dom';
import './index.css'
import TravelPage from './TravelPage';
import Intro from './Intro';
import InfoPage from './InfoPage'

function App() {
  return (
    <div>    
      <Routes>
        <Route
          path="/"
          element={<Intro/>}
        />
        <Route
          path="/travel-page"
          element={<TravelPage/>}
        />
        <Route
          path="/info-page"
          element={<InfoPage/>}
        />
      </Routes>
    </div>
  )
}

export default App
