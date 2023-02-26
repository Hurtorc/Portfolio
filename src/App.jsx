import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
  <div className="App">
    <header className="App-header">
      <h1 className="d-inline-flex text-center">Adam Latham's Portfolio</h1>
      <NavBar className="navbar d-inline-flex"/>
    </header>
    <div className="container">
      
    </div>
    <div className="container ">
      <ProjectCard className="space-right"/>
      <ProjectCard />
      <ProjectCard />
    </div>
  
  
  </div>
  )
}

export default App
