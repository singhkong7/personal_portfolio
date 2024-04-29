import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Project from './screens/Project';
import Interests from './screens/Interests';
import ErrorPage from './screens/404';
import Contact from './screens/Contact';

function App() {
  return (
    <div className='bg-slate-200 min-h-screen'>
       <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route
                    path="/interests"
                    element={<Interests />}
                />
                 <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;