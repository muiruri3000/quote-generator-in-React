import logo from './logo.svg';
import './App.css';
import './neat.css';
import QuoteGen from './quoteGen/quoteGen';
import Presser from './presser.js'

function Title({prop}){
  return(
    <h1 style={{textAlign: 'center'}}>React: Random Quotes Generator.</h1>
  )
}
function App(
  
) {
  return (
    <>

  <div className='container'>
    
<div className='box'>
    <Title prop = 'React'/>

   
    <QuoteGen />
   

</div>
  </div>
</>
  );
}

export default App;
