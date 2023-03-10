import './App.css';
import { Header } from '../Header';
import { Searcher } from '../Header/Searcher';
import { Profile } from '../Header/Profile';
import { List } from '../List';
import { Item } from '../List/Item';
import { EvaluacionGrades } from '../List/Item/EvaluacionGrades';
import { TallerGrades } from '../List/Item/TallerGrades';

const courses = [
    {
        nombre: 'Curso 1',
        profesor: 'Mauro',
        programa: 'Maestria en I.A',
        workGrades: [
            {
                value: '1.0',
            },
            {
                value: '2.9'
            }, 
            {
                value: '4.5'
            },
            {
                value: '3.2'
            }
        ],
        examGrades: [
            {
                value: '1.0',
            },
            {
                value: '2.9'
            }, 
            {
                value: '4.5'
            }
        ],
    },
    {
        nombre: 'Curso 2',
        profesor: 'Mauro',
        programa: 'Maestria en I.A',
        workGrades: [
            {
                value: '1.0',
            },
            {
                value: '2.9'
            }, 
            {
                value: '4.5'
            }
        ],
        examGrades: [
            {
                value: '1.0',
            },
            {
                value: '2.9'
            }, 
            {
                value: '4.5'
            }
        ],
    },
    {
        nombre: 'Curso 3',
        profesor: 'Mauro',
        programa: 'Maestria en I.A',
        workGrades: [
            {
                value: '1.0',
            },
            {
                value: '2.9'
            }, 
            {
                value: '4.5'
            }
        ],
        examGrades: [
            {
                value: '1.0',
            },
            {
                value: '2.9'
            }, 
            {
                value: '4.5'
            }
        ],
    }
]

function App() {
  return (
    <div className="App">
        
        <Header>
            <Profile />
            <Searcher />
        </Header>

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
                    />
                )
            )}
        />
    </div>
  );
}

export default App;