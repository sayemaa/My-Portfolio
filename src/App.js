import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Home/Blogs';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/Home/ProjectDetails';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='project/:projectId' element={<ProjectDetails />}>
                </Route>
                <Route path='/blogs' element={<Blogs />}></Route>
            </Routes>
        </div>
    );
}

export default App;
