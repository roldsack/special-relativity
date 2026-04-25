import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import Menu from './Menu';
import Result from './Result';


function TravelPage() {
  const [speed, setSpeed] = useState('');
  const [distance, setDistance] = useState('');
  const [earthPassedTime, setEarthTime] = useState(null);
  const [userPassedTime, setUserTime] = useState(null);
  const [lorentz, setLorentz] = useState(null);
  const [speedError, setSpeedError] = useState(false); 
  const [distanceError, setDistanceError] = useState(false);

  function calculate() {
    let valid = true

    if (speed == '' || isNaN(parseFloat(speed)) || speed <= 0 || speed > 99.99) { 
        setSpeedError(true) 
        valid = false 
    } else { 
        setSpeedError(false) 
    } if (distance == '' || isNaN(parseFloat(distance)) || distance <= 0) { 
        setDistanceError(true) 
        valid = false
    } else {
        setDistanceError(false) 
    } 
    
    if (!valid) return

    const maxSpeed = Math.min(parseFloat(speed), 99.99)
    const v = maxSpeed / 100
    const lorentzValue = 1 / Math.sqrt(1 - v ** 2)
    const earthPassedTime = parseFloat(distance) / v
    const userPassedTime = earthPassedTime / lorentzValue
    setEarthTime(earthPassedTime.toFixed(2))
    setUserTime(userPassedTime.toFixed(2));
    setLorentz(lorentzValue.toFixed(2))
  }

  return (
    <div>
    <Link to='/info-page'>
        <Button id='back-button' variant='outlined' sx={{ marginBottom: '20px' }}>
            ← Back
        </Button>
    </Link>
      <h1>EXPERIENCE SPECIAL RELATIVITY</h1>
      <div id='inputsContainer'>
        <div id='inputs'>
            <TextField
                error={speedError}
                id="speed-input"
                label="Speed (% of speed of light)"
                helperText={speedError && "Enter a value between 1 and 99.99"}
                variant="filled"
                value={speed}
                onChange={(event) => setSpeed(event.target.value)}
            />
            <br />
            <br />
            <TextField
                error={distanceError}
                id="distance-input"
                label="Distance (light years)"
                helperText={distanceError ? "Enter a valid number greater than 0" : "Enter the total to and back journey distance in light years"}
                variant="filled"
                value={distance}
                onChange={(event) => setDistance(event.target.value)}
            />
            <br />
            <Button id="submit" variant="contained" onClick={calculate}>
                Experience
            </Button>
        </div>
        
        <Menu id='menu' setSpeed={setSpeed} setDistance={setDistance}></Menu>
      </div>
      <Result earthTime={earthPassedTime} userTime={userPassedTime} lorentz={lorentz}></Result>
    </div>
  );
}

export default TravelPage;
