import React from "react";
const ContactPage = (props) => {
    return (
        <main class="holder">
        <p>¿Le gusto lo que vio? Si es asi, puede hacer contacto para dar sugerencias y dejar comentarios. Tambien puede darle un like y
            suscribi... Perdon, jeje, plataforma equivocada. Aunque la verdad siempre quise decirlo.</p>
        <div class="columna left">
            <h2>Contato?</h2>
            <form action="" method="" class="Formula">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p> <label for="">E-Mail</label>
                    <input type="text"/>
                </p>
                <p> <label for="">Teléfono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Comentario</label>
                    <textarea id="Comentario"></textarea>
                </p>
                <p class="acciones"> <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>

        <div class="columna right">
            <h2>Mas contactos</h2>
            <p>Otros medios</p>
            <ul>
                <li>Telefono ?777?77</li>
                <li> E-Mail: ?.?.?@gmail.com </li>
            </ul>
        </div>
    </main>
    );
}
export default ContactPage;