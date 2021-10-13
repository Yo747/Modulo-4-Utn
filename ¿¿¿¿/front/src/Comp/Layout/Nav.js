import {NavLink} from "react-router-dom";
import "../../Styles/Components/Layout/Nav.css"

const Nav = (props) => {
    return (
        <nav>
        <div class="holder">
            <ul>
                <li> <NavLink activeClassName= "activo" exact to="/"> Home </NavLink></li>
                <li><NavLink activeClassName= "activo" exact to="/Diseñadores"> Diseñadores</NavLink></li>
                <li><NavLink activeClassName= "activo" exact to="/Servidor">Servicio</NavLink></li>
                <li><NavLink activeClassName= "activo" exact to="/Fotos">Galeria</NavLink></li>
                <li><NavLink activeClassName= "activo" exact to="/News">Noticias</NavLink></li>
                <li><NavLink activeClassName= "activo" exact to="/Contact">Contacto</NavLink></li>
            </ul>
        </div>
    </nav>
    );
}
export default Nav;