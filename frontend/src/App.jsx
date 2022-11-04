import './App.css';
import Navigation from './Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Tasks from './features/pets/Tasks';


function App() {
  return (
    <div >
      <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Tasks/>}/>
        </Routes>
        </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
