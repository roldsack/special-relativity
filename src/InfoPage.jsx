import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function InfoPage() {
  return (
    <div id='infoContainer'>
    <Link to='/'>
        <Button id='back-button' variant='outlined' sx={{ marginBottom: '20px' }}>
            ← Back
        </Button>
    </Link>

      <h1>THE SCIENCE BEHIND THE JOURNEY</h1>

      <div className='infoSection'>
        <h2>What is Special Relativity?</h2>
        <p>
          Einstein's theory of Special Relativity tells us that space and time are not separate, 
          they are a single concept known as spacetime. This means that observers 
          moving at different speeds experience time differently. The faster you travel, the slower 
          time passes for you relative to an observer.
        </p>
      </div>

      <div className='infoSection'>
        <h2>How does this affect time?</h2>
        <p>
          When an object travels at speeds close to the speed of light, time begins to pass more 
          slowly for the traveller compared to someone who remains stationary. This effect is known 
          as time dilation. It is not just a theory, as it has been measured and confirmed in real experiments.
        </p>
      </div>

      <div className='infoSection'>
        <h2>The Lorentz Factor</h2>
        <p>
          The difference in time experienced by the traveller versus a stationary observer is 
          calculated using the Lorentz Factor:
        </p>
        <div id='formula'>
          <h2>y = 1 / √(1 - v²/c²)</h2>
        </div>
        <p>
          Where v is the traveller's speed and c is the speed of light. The closer v gets to c, 
          the larger y becomes, and hence the slower time passes for the traveller.
        </p>
      </div>

      <div className='infoSection'>
        <h2>A Limitation of scientific fictional representations</h2>
        <p>
          While fictional spacecraft like the Overlords ship make near light speed travel look 
          easy, in reality this is practically impossible. As an object approaches the speed 
          of light, its mass increases, a concept known as relativistic mass, making further 
          acceleration increasingly difficult.
        </p>
      </div>

      <Link to='/travel-page'>
        <Button variant='outlined' sx={{
          fontSize: '24px',
          padding: '12px 24px',
          marginTop: '50px',
        }}>
          I'm Ready to Experience It →
        </Button>
      </Link>
    </div>
  );
}

export default InfoPage;