import { useState,useEffect } from 'react';
import './App.css';
// import { render } from '@testing-library/react';


function App() {

  const [image , setImage] = useState('')
    useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((data)=> data.json())
    .then ((response)=> setImage(response.message))
    .catch((error) => console.log(error))  
  },[])



  return (
    <div className="App">
      <img 
        src={image}
        height={'200px'}
        width={'200px'}
        alt='dog image'
      />
    </div>
  );
}

export default App;
