
import './../App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './About';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='another'>
      <Home></Home>
    <Routes>
    
        <Route exact  path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
    
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

