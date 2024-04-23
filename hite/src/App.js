import logo from './logo.svg';
import './App.css';
import { MainPage, SubPage, Sidebar } from './Pages';
import { Routes, Route} from 'react-router-dom'
import brandData from './Datas/brandData';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={<MainPage/>} />
        <Route exact path='/brand' element={<SubPage/>}>
          <Route exact path='/brand/soju/:brandid' element={<SubPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
