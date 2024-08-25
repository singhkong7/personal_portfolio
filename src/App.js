import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import ErrorPage from './screens/404';

function App() {
  return (
    <div className='bg-black min-h-screen'>
       <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;