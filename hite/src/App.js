import logo from './logo.svg';
import './App.css';
import { MainPage } from './Pages';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
