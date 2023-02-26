import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
  <div className="App">
    <header className="App-header">
      <h1>Adam Latham's Portfolio</h1>
    </header>
    <div className="container">
      <NavBar />
    </div>
  <ProjectCard />
  <ProjectCard />
  <ProjectCard />
  
  
  
  </div>
  )
}

export default App
