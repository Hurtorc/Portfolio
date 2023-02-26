import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import './index.css'

function App() {
  return (
  <div className="App w-screen h-screen">
    <header className="App-header  mx-auto flex flex-col display: inline-block ">
      <h1 className="flex text-5xl p">Adam Latham's Portfolio</h1>
      <NavBar />
    </header>
    <div className="columns-2 flex flex-row gap-3 space-x">
      <ProjectCard className="space-right"/>
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
  )
}

export default App
