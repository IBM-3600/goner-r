//import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import HomePage from './pages/HomePage';
import WorldPage from './pages/WorldPage';
import Nav from './components/Nav';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='chat' element={<ChatPage/>}/>
      <Route path='world' element={<WorldPage/>}/>
    </Routes>
    </>
    
  );
}

export default App;
