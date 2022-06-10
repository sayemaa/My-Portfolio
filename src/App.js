import './App.css';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects';
import Navbar from './Pages/Shared/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
        </div>
    );
}

export default App;
