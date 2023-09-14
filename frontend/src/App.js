import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Step11 from './components/Step11';
import Step12 from './components/Step12';
import Step21 from './components/Step21'; 
import Step22 from './components/Step22'; 
import Step3 from './components/Step3'; 

import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Watch from './components/Watch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signout' element={<SignOut/>} />
        <Route path='/step11' element={<Step11/>} />
        <Route path='/step12' element={<Step12/>} />
        <Route path='/step21' element={<Step21/>} />
        <Route path='/step22' element={<Step22/>} />
        <Route path='/step3' element={<Step3/>} />
        <Route path='/watch' element={<Watch/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
