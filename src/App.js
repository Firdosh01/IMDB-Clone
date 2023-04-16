import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header/Header';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className='App'>

      <Router>
        <Header />
        <Routes>
          <Route index element= {<Home />}></Route>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
