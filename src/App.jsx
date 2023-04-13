import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <> <Navbar /> <Main /> </> } />
      </Routes>
    </div>
  )
}

export default App
