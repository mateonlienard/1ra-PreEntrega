import './navbar.css';
import CartWidget from '../NavBar/CartWidget/CartWidget';

function NavBar(){
    return (
                    <nav class="lugar-tabla">
                        <ul class="tabla">
                            <li class='articulo'><a href="index.html">Inicio</a></li>
                            <li class='articulo'><a href="ratones.html">Ratones</a></li>
                            <li class='articulo'><a href="auriculares.html">Auriculares</a></li>
                            <li class='articulo'><a href="monitores.html">Monitores</a></li>
                            <li class='articulo'><a href="televisores.html">Televisores</a></li>
                            <li class='articulo'><a href="contacto.html">Contactanos!</a>!</li>
                            <CartWidget />
                        </ul>
                    </nav>
    )
}

export default NavBar;