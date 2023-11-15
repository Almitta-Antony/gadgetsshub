import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Home from './pages/Home';
import Read from './components/Read';
import Update from './components/Update';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     
<Routes>
     <Route path='/' element={<Home></Home>} ></Route>
     <Route path='/add' element={<Create></Create>}></Route>
     <Route path='/read' element={<Read></Read>}></Route>
     <Route path='/edit/:id' element={<Update></Update>}></Route>

</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;
