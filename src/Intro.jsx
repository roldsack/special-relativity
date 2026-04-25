import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import './index.css'
import { useState } from 'react';

function Intro() {
  const[name, setName] = useState('')
  const [nameSaved, setNameSaved] = useState(false)
  const [nameError, setNameError] = useState(false)

  function nameSubmit() {
    if (name == '') {
        setNameError(true);
        return;
    }

    localStorage.setItem('name', name)
    setNameSaved(true)
    setNameError(false)
  }
  
  return (
    <div>
        <h1>WELCOME</h1>
        <div id='intro-message'>
            <h2>In Arthur Clarke's novel Childhood's End, a young man named Jan Rodricks secretly boards an Overlord spacecraft, 
            a vehicle capable of travelling close to the speed of light. When Jan returns, nearly 80 years have passed on Earth. 
            His friends are gone, and the world he knew was no longer the same. Yet for Jan, only a fraction of that time had passed. 
            </h2>

            <h2>
            This is due to Einstein's theory of Special Relativity, which tells us that the faster you travel, the slower 
            time moves for you. As you approach the speed of light, time passes extremely slowly for the traveller, and this effect 
            is measured using the Lorentz Factor. Today, you are going to experience it yourself. Step into Jan's shoes, choose your 
            speed and destination, and discover how much time would pass on Earth. 
            </h2>

            <div id='nameContainer'>
                <TextField
                    error={nameError}
                    id="name-input"
                    label="Name"
                    variant="outlined"
                    helperText={nameError? "Please enter your name" : "Enter your name"}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onKeyDown={(event) => { if (event.key === 'Enter') nameSubmit() }}
                />

                <Button variant='outlined'onClick={nameSubmit} sx={{
                    color: '#4fc3f7',
                    marginLeft: '10px',
                    marginBottom: '50px'
                }}
                >Enter name</Button>
            </div>

            <br />
            {nameSaved && (
            <Link to='/info-page'>
                <Button variant='outlined' sx={{
                    fontSize: '40px',
                    padding: '12px 24px',
                    marginTop: '50px',
                    color: '#4fc3f7',
                }}
                >Begin the Journey!</Button>
            </Link>
            )}
        </div>
    </div>
  );
}

export default Intro;
