import {Link} from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
        <div class="holder">
            <ul>
                <li><Link class="activo" href="index.html">Home</Link></li>
                <li><Link href="Diseñadores.html"> Diseñadores</Link></li>
                <li><Link href="Servidor.html">Servicio</Link></li>
                <li><Link href="Fotos.html">Galeria</Link></li>
                <li><Link href="News.html">Noticias</Link></li>
                <li><Link href="Contact.html">Contacto</Link></li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;