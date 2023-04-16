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
          <Route path='movie/:id' element= {<h1>Movie Details</h1>}></Route>
          <Route path='movie/:type' element= {<h1>Movie List</h1>}></Route>
          <Route path='/*' element= {<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>


  );
}

export default App;
