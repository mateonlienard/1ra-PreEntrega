import './navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function Carrito(){
    return(
        <div className='carrito'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>3</p>
        </div>
    )
}

export default Carrito;