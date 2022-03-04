import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Container from './layout/container';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
