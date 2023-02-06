import './App.css';
//import { Header } from '../Header';
import { Searcher } from '../Header/Searcher';
import { Profile } from '../Profile';
import { List } from '../List';
import { Item } from '../List/Item';
import { EvaluacionGrades } from '../List/Item/EvaluacionGrades';
import { TallerGrades } from '../List/Item/TallerGrades';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { LoginPage } from '../LoginPage/index';
import { Menu } from '../Menu';
import { courses } from '../data';

function App() {
  return (
    <div className="App">
        <HashRouter>    
            <Menu />
            <Routes>
                <Route path='/' element={<LoginPage />}>
                    <Route path=':slug' element={<Profile />}>
                        <Route path='/:slug/notas' element={
                            <>
                                <Profile />
                                <Searcher />
                                <List 
                                    render={() => courses.map(
                                        (course, index) => (
                                        <Item
                                            nombre={course.nombre}
                                            profesor={course.profesor}
                                            programa={course.programa}
                    
                                            tallerGrades={() =>  
                                                course.workGrades.map((grade, index) => ( 
                                                    <TallerGrades 
                                                        key={index}
                                                        grades={grade.value}
                                                    />
                                                ))
                                            }
                                            
                                                evaluacionGrades={ () => 
                                                course.examGrades.map((grade, index) => (
                                                    <EvaluacionGrades 
                                                        key={index}
                                                        grades={grade.value}
                                                    />
                                                ))
                                            }                       
                                            key={index}
                                        />)
                                )}/>
                            </>
                        }/>
                    </Route>
                </Route>
                
            </Routes>
        </HashRouter> 
    </div>
  );
}

export default App;