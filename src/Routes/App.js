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
          <Routes>
                <Route path='/' element={<NavBar />} >
                  <Route index
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
                </Route>
            </Routes>
        </BrowserRouter> 
    </div>
  );
}

export {App};