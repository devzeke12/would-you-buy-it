import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TopBar from './component/TopBar'
import Results from './pages/Results';
import { ImgContextProvider } from './db/imgcontext';


function App() {
  return (
    <div className='bg-[#FAFAFA] dark:bg-[#181A1E] transition-colors delay-200'>
    <ImgContextProvider>
        <BrowserRouter>
        <TopBar />
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/result' element={<Results />} />
          </Routes>
        </BrowserRouter>
        </ImgContextProvider>
    </div>
  );
}

export default App;
