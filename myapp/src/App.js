import './App.css';
import Card from './component/atom/card';
import { Data } from './data';
function App() {


  return (
    <div className="first">
      {
        Data.map((x)=>{
          return(
            <Card pic={x.url}
            Name={x.name}
            Position={x.position}  
            exp={x.exp}
            />
          )
        })
      }
    </div>
  );
}
export default App;
