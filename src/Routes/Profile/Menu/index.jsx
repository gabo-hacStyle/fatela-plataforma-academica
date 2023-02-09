import { useNavigate, useParams } from 'react-router-dom';
import './Menu.css'

function Menu () {
    const { slug }= useParams();
    console.log(slug)
    const navigate = useNavigate();
    return (
        <aside>
            <button 
                onClick={() =>
                    navigate(`/${slug}`)
                }
            >👤</button>
            <button 
                onClick={() =>
                    navigate(`/${slug}/notas`)
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