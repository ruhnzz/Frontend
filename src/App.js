import './App.css';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MatchSummary from './components/MatchSummary';
import PlayerReports from './components/PlayerReports';
import Chatbot from './components/Chatbot';
import ContactUs from './components/ContactUs';
import HomeInnerPara from './components/HomeInnerPara';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import News from './components/News';

function App() { 
  return (
    <div className="App">   
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/MatchSummary" element={<MatchSummary/>}/>
        <Route path="/PlayerReports" element={<PlayerReports/>}/>
        <Route path="/Chatbot" element={<Chatbot/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/HomeInnerPara/:innerPara/:imageUrl" element={<HomeInnerPara/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </div>
  );
}

export default App;