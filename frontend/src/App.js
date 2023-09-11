import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Step1 from './components/Step1';
import Step21 from './components/Step21'; 

import { BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signout' element={<SignOut/>} />
        <Route path='/step1' element={<Step1/>} />
        <Route path='/step21' element={<Step21/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
