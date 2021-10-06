import {Link} from "react-router-dom";


const Nav = (props) => {
    return (
        <nav>
        <div class="holder">
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li><Link to="/Diseñadores"> Diseñadores</Link></li>
                <li><Link to="/Servidor">Servicio</Link></li>
                <li><Link to="/Fotos">Galeria</Link></li>
                <li><Link to="/News">Noticias</Link></li>
                <li><Link to="/Contact">Contacto</Link></li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;