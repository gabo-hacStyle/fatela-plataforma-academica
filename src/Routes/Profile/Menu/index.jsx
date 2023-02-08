import { useNavigate } from 'react-router-dom';
import './Menu.css'

function Menu () {
    const navigate = useNavigate();
    return (
        <aside>
            <button 
                onClick={() =>
                    navigate('/alfredo-murcia')
                }
            >👤</button>
            <button 
                onClick={() =>
                    navigate('/alfredo-murcia/notas')
                }
            >📝</button>
            <button className='logout-button'
                onClick={() =>
                    navigate('/')
                }
            >🔐</button>
        </aside>
    )
}
export {Menu}