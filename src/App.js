import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home.jsx'
import Container from './components/layout/container';
import RequireAuth from './helper/RequireAuth';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={
            <RequireAuth>
              <Home/>
            </RequireAuth>
          }/> 
        </Routes>
     
      </Container>
       
        
          
       
    
    </div>
  );
}

export default App;
