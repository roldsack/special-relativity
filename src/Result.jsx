function Result({ earthTime, userTime, lorentz}) {
  const name = localStorage.getItem('name')

function getFunFact() {
    const earth = parseFloat(earthTime)
    if (earth < 10) {
      return `While you aged ${userTime} years, a child on Earth grew up and started their career.`
    } else if (earth < 50) {
      return `While you aged ${userTime} years, entire generations were born and raised on Earth.`
    } else if (earth < 100) {
      return `While you aged ${userTime} years, most people alive when you left have now passed away.`
    } else {
      return `While you aged ${userTime} years, multiple generations lived and died on Earth. The world you knew is gone.`
    }
  }

  return (
    <div>
        <h2>Result:</h2>
        <div id="results-container"> 
            <div className="results-card"> 
                <h2>🌍 Earth</h2> 
                <h2>{earthTime ? `${earthTime} years` : '-'}</h2> 
            </div>

            <div className="results-card">
                <h2>🚀 {name}</h2> 
                <h2>{userTime ? `${userTime} years` : '-'}</h2> 
            </div> 
            <h2>Lorentz Factor: {lorentz ? lorentz : '-'}</h2> 
        </div>  
        {earthTime && userTime && (
            <div id='fun-fact'>
                <p>{"Fun fact: " + getFunFact()}</p>
            </div>
        )}

    </div>
    );
}

export default Result;
