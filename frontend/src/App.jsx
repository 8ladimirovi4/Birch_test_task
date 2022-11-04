import './App.css';
import PetList from './features/pets/PetList';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <div >
      <Provider store={store}>

      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/petlist' element={<PetList/>}/>
        <Route path='/' element={<div>Главн</div>}/>
        </Routes>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
