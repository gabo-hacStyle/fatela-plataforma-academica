import { Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import { LoginPage } from '../LoginPage';
import { Profile } from '../Profile';
import {Menu} from '../Menu'
import { RecordAcademico } from '../RecordAcademico';
//import { GradesHeader } from '../RecordAcademico/GradesHeader';
//import { Student } from '../RecordAcademico/GradesHeader/Student';
//import { Searcher } from '../RecordAcademico/GradesHeader/Searcher'
import { NavBar } from '../NavBar';
import { List } from '../RecordAcademico/List';
import { Item } from '../RecordAcademico/List/Item';
import {TallerGrades} from '../RecordAcademico/List/Item/TallerGrades'
import {EvaluacionGrades} from '../RecordAcademico/List/Item/EvaluacionGrades'
import {courses} from '../data'
import './App.css';


function App() {
  return (
    <div className="App">
        <HashRouter>    
            <NavBar />
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/:slug' element={
                    <>
                        <Menu />
                        <Profile />
                    </>
                }>
                    <Route path='/:slug/notas' element={
                    <>
                        <RecordAcademico>
                            {/*<GradesHeader>
                                <Student />
                                <Searcher />
                           </GradesHeader>*/}
                                
                            <List 
                                render={
                                    () => courses.map((course, index) => (
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
                            </RecordAcademico>
    
                    </>                               
                    }/>
                    </Route>
                
            </Routes>
        </HashRouter> 
    </div>
  );
}

export default App;