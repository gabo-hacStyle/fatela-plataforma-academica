import { Routes, Route, HashRouter } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { Profile } from './Profile';
import {Notas} from './Notas/index'
import { NavBar } from '../NavBar';

function App() {
  return (
    <div className="App">
        <HashRouter>    
            <NavBar />
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/:slug' element={<Profile />}>
                    <Route path='/:slug/notas' element={<Notas />}/>
                </Route>
            </Routes>
        </HashRouter> 
    </div>
  );
}

export {App};