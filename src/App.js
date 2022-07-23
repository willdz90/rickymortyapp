import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import CardDetail from './Pages/CardDetail/CardDetail.jsx';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<CardDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
