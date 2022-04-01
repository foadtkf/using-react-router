import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Friend from './Components/Friend/Friend';
import FriendDetail from './Components/FriendDetail/FriendDetail';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
<Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/friends' element={<Friend></Friend>}></Route>
        <Route path='/friends/:friendID' element={<FriendDetail></FriendDetail>}></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
