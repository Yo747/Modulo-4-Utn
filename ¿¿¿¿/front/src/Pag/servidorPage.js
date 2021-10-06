import React from "react";
const ServidorPage = (props) => {
    return (
    <main class="holder">
        <h2>Servicio?</h2>
        <p>No hay servicios definidos aun... pero vere que puedo hacer</p>

        <div class="servicio"> <img src="Imagenes/Servicio/Light Bulb.png" alt="Luz"/>
            <div class="información">
                <h4> Electricidad</h4>
                <p>Este servicio es el de electricidad, donde uno adquiere... electricidad. O eso me han dicho... como
                    sea, el servicio es representado por una lamparita encendida, uno de los signos universales de la
                    energia electrica... y de las ideas, por lo que puede resultar algo confuso si es que no hay
                    contexto.</p>
            </div>
        </div>
        <div class="servicio"> <img src="Imagenes/Servicio/Water.jpg" alt="Agua"/>
            <div class="información">
                <h4>Agua corriente</h4>
                <p>No hay de que preocuparse, el servicio se llama agua corriente pero eso no quiere decir que este
                    electrificada. O por lo menos eso es lo que esperamos. Que quede claro que ningun participante en el
                    desarrollo de este sitio esta a favor del servicio de "agua electrificada", si es que existe.
                    Recemos por que no.</p>
            </div>
        </div>
        <div class="servicio"> <img src="Imagenes/Servicio/Gas.jpg" alt="Gas"/>
            <div class="información">
                <h4>Gas</h4>
                <p>El servicio de gas, que da gas. No hay mucho mas que eso. Eso si, por favor, haga lo que haga, NO
                    imite a la imagen o si no, KABOOM. Si, se que "KABOOM" suena tentandor pero creame, usted no
                    querra... ¿En serio lo esta considerando? -suspiro- Tengo que pedir un aumento... cuando empiezen a
                    pagarme.</p>
            </div>
        </div>
        <div class="servicio"> <img src="Imagenes/Servicio/Mail.png" alt="Correo"/>
            <div class="información">
                <h4>Correo</h4>
                <p>
                    Y, por ultimo pero no menos importante, el correo. Llueva, truene, nieve o tiemble, los carteros
                    estan dispuestos a entregar sus cartas incluso bajo el riesgo de perder alguna extremidad. O
                    simplemente puede recibir un mail y listo, asi de facil. (Posdata: no le diga esto ultimo a Newman)</p>
            </div>
        </div>
    </main>
    );
}
   export default ServidorPage;