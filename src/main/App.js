
import './../App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";import MainHome from './MainHome';
import MainAbout from './MainAbout';
;
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='main'>
      <MainHome></MainHome> 
    <Routes>
        <Route  path="/mainHome" element={<MainHome />} />
        <Route path="/mainAbout" element={<MainAbout />}/>
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;


