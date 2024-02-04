import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TopBar from './component/TopBar'
import Results from './pages/Results';
import { ImgContextProvider } from './db/imgcontext';


function App() {
  return (
    <ImgContextProvider>
        <BrowserRouter>
        <TopBar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/result' element={<Results />} />
          </Routes>
        </BrowserRouter>
        </ImgContextProvider>
  );
}

export default App;
