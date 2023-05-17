import './App.css';
import Login from './atm/login';
import About from './atm/about';
import Project from './atm/project';
import Video from './atm/video';
// import {Routes , router}
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   
    <Routes>
    <Route path ="./login" element={<Login/>}/>
    <Route path ="./about" element={<About/>}/>
    <Route path ="./project" element={<Project/>}/>
    <Route path ="./video" element={<Video/>}/>
    </Routes>

    </div>
  );
}

export default App;
