import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import SignIn from './components/SignIn';

import { BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
