import './css/App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Topbar from './components/navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <Topbar />
        <Routes>
          <Route index element={<Home />} /> 
          <Route path='about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
