import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Experience from "./components/Experience/Experience";
import NavBar from "./components/NavBar/NavBar";
import Person from "./components/Person/Person";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Person/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contacts/>
    </div>
  )
}

export default App;
