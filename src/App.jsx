import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import background from './assets/images/background-large.jpg'
import './index.css'

function App() {
  return (
  <div class="App p-2" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div class="p-5 m-5 center-align justify-content-xl-evenly">
      <header class="center-align justify-content-evenly flex-col">
        <h1 class="text-6xl justify-center-md text-center display-flex">Adam Latham's Portfolio</h1>
        <NavBar />
      </header>
      <div class="grid grid-cols-2 gap-4" id='projects'>
        <ProjectCard
        img='./assets/images/gameover.jpg'
        title="Game Price Checker"
        github="https://github.com/Hurtorc/Game_Price"
        description=""
         />
         <ProjectCard
        img=""
        title="Weather App"
        github="https://github.com/Hurtorc/Weather_App"
        description=""
         />
         <ProjectCard
        img=""
        title="ReadMe Generator"
        github="https://github.com/Hurtorc/READEME_Gen"
        description=""
         />
         <ProjectCard
        img=""
        title="Password Generator"
        github="https://github.com/Hurtorc/hw-3"
        description=""
         />
         <ProjectCard
        img=""
        title="Quiz Game"
        github=""
        description=""
         />
         <ProjectCard
        img=""
        title="Game Price Checker 2.0"
        github="https://github.com/Hurtorc/Game-Price-Checker-2.0"
        description=""
         />
      </div>
      <div class=" " id="about">
        <About />
      </div>
      
      </div>
      <footer className="" id="contact">
        <Contact />
      </footer>
  </div>
  )
}

export default App
