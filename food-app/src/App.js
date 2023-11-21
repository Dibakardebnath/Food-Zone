
import { AllRoute } from './AllRoute/AllRoute';
import './App.css';
import { Footer } from './Component/Footer';
import { Nav } from './Component/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <AllRoute/>
     <Footer/>
    </div>
  );
}

export default App;
