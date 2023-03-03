import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import background from '../public/images/background-large.jpg'
import './index.css'

function App() {
  return (
  <div className="App p-2" style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="">
      <header className="">
        <div className="justify-center-md content-center display-flex">
          <h1 className="text-6xl justify-center-md text-center content-center display-flex">Adam Latham's Portfolio</h1>
        </div>
        <div className=" justify-center-md content-center display-flex">.
          <NavBar />
        </div>
      </header>
      <div className=" " id='projects'>
        <ProjectCard
        img='../public/images/gameover.jpg'
        title="Game Price Checker"
        github="https://github.com/Hurtorc/Game_Price"
        description="An application that allows users to search for video games and see the current price of the game on multiple platforms."
        />
         <ProjectCard
        img=""
        title="Weather App"
        github="https://github.com/Hurtorc/Weather_App"
        description="An application that allows users to search for a city and see the current weather conditions and a 5 day forecast."
         />
         <ProjectCard
        img=""
        title="ReadMe Generator"
        github="https://github.com/Hurtorc/READEME_Gen"
        description="An application that allows users to create a ReadMe file for their project with a few simple questions."
         />
         <ProjectCard
        img=""
        title="Password Generator"
        github="https://github.com/Hurtorc/hw-3"
        description="A simple application that allows users to generate a random password based on a few simple criteria."
         />
         <ProjectCard
        img=""
        title="Quiz Game"
        github=""
        description="A simple quiz game that allows users to test their knowledge of the Star Wars universe."
         />
         <ProjectCard
        img=""
        title="Game Price Checker 2.0"
        github="https://github.com/Hurtorc/Game-Price-Checker-2.0"
        description="A reimagining of my first project, Game Price Checker. This version uses a different API and allows users to search for games by title, platform, or genre."
         />
      </div>
      <div className=" p-10 gap-4" id="about">
        <About />
      </div>
      
      </div>
      <footer className=" p-10 gap-6" id="contact">
        <Contact />
      </footer>
  </div>
  )
}

export default App
