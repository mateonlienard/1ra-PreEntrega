import './navbar.css';
import './Carrito'
import Carrito from './Carrito';

function NavBar(){
    return (
                    <nav class="lugar-tabla">
                        <ul class="tabla">
                            <li class='articulo' href="index.html">Inicio</li>
                            <li class='articulo' href="ratones.html">Ratones</li>
                            <li class='articulo' href="auriculares.html">Auriculares</li>
                            <li class='articulo' href="monitores.html">Monitores</li>
                            <li class='articulo' href="televisores.html">Televisores</li>
                            <li class='articulo' href="contacto.html">Contactanos!</li>
                            <Carrito />
                        </ul>
                    </nav>
    )
}

export default NavBar;