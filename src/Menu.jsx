import { useState } from 'react';
import { Button, IconButton, Tooltip } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import InfoOutlinedIcon from '@mui/icons-material/Info';
import overlord from './assets/overlord_spacecraft.jpg'
import venturestar from './assets/isv_venture_star.png'
import taylor from './assets/taylor_journey.jpeg'


function Menu({setSpeed, setDistance}) {

  const [menuIndex, setMenuIndex] = useState(0);

  const scenarios = [ 
    { 
        name: "Jan's Journey (Childhood's End)", 
        context: "Jan Rodricks boards an Overlord spacecraft headed for the Overlords' home star. The spacecraft travels at nearly the speed of light, and when Jan returns, 80 years have passed on Earth.", 
        speed: "99.99", 
        distance: "80",
        image: overlord 
    }, 
    { 
        name: "ISV Venture Star (Avatar)", 
        context: "The ISV Venture Star carries humans travelling at approximately 70% the speed of light. Those back home age significantly more than the crew during the journey.",
        speed: "70", 
        distance: "4.37",
        image: venturestar 
    }, 
    { 
        name: "Taylor's Journey (Planet of the Apes)", 
        context: "Astronaut Taylor boards a spacecraft travelling at near light speed. When he lands, he believes he is on an alien planet, not realising thousands of years have passed on Earth.", 
        speed: "99", 
        distance: "2006", 
        image: taylor
    } 
    ];

    function journeySubmit() {
        setSpeed(scenarios[menuIndex].speed)
        setDistance(scenarios[menuIndex].distance)
    }
  return (
    <div id='menuContainer'>
        <h3>Journey Options:</h3>
      <div id='menuSelector'>
        <IconButton onClick={f => setMenuIndex(f => (menuIndex - 1 + scenarios.length) % scenarios.length)}>
            <ArrowCircleLeftIcon color='primary'/>
        </IconButton>

        <span>{scenarios[menuIndex].name}</span>

        <IconButton onClick={f => setMenuIndex(f => (menuIndex + 1) % scenarios.length)}>
            <ArrowCircleRightIcon color='primary'/>
        </IconButton>

        <Tooltip title={scenarios[menuIndex].context}>
            <IconButton sx={{ color: 'var(--accent)' }}> 
                <InfoOutlinedIcon/> 
            </IconButton>        
        </Tooltip>

        <img 
            src={scenarios[menuIndex].image} 
            alt={scenarios[menuIndex].name}
            id='scenario-image'
        />
      </div>
      <br />
      <Button variant='contained' color='primary' onClick={journeySubmit}>Select Journey</Button>
    </div>
  );
}

export default Menu;
