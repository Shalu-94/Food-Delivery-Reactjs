
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Aboutus from './about';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import Contactform from './contact';
import Foods from './food';

import Signup from './signupform';
import Fast from './fastfood';
import Homes from './homefood';


function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='about.js' element={<Aboutus/>}></Route>
  <Route path='contact.js' element={<Contactform/>}></Route>
  <Route path='food.js' element={<Foods/>} ></Route>
  <Route path='signupform.js' element={<Signup/>} ></Route>
  <Route path='fastfood.js' element={<Fast/>}></Route>
  <Route path='homefood.js' element={<Homes/>}></Route>
  </Routes>
</BrowserRouter>

   </>
  );
}

export default App;
