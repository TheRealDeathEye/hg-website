import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Topbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <Topbar />
        <Routes>
          <Route index element={<Home />} /> 
          <Route index element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
