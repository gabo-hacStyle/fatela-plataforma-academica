import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { Profile } from './Profile';
import {Notas} from './Notas/index'
import { NavBar } from '../NavBar';
import { usePlatform } from '../Hooks/usePlatform';
import { Menu } from './Profile/Menu';

function App() {
  const {slug, setSlug} = usePlatform();
  return (
    <div className="App">
        <BrowserRouter>    
            <NavBar />
            <Routes>
                <Route path='/' 
                  element={
                    <LoginPage 
                      slug={slug} 
                      submitEvent={(newSlugValue) => setSlug(newSlugValue)}
                    />} 
                />
                <Route path='/:slug' 
                    element={
                      <Profile>
                          <Menu setSlug={setSlug}/>
                      </Profile>
              
                }>
                    <Route path='/:slug/notas' element={<Notas />}/>
                </Route>
            </Routes>
        </BrowserRouter> 
    </div>
  );
}

export {App};