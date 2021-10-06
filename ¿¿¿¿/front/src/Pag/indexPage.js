import React from "react";
const IndexPage = (props) => {
    return (
        <main class="holder">
        <div class="obrero"><img src="Imagenes/Galeria/Construction.jpg" alt="Construccion"/>
        </div>
        <div class="y">
            <div class="aviso left">
                <h2>Aviso</h2>
                <div>
                    <p>El sitio al que usted esta tratando de ingresar aun se encuentra en construccion. Nos disculpamos
                        por
                        las
                        molestias ocasionadas, pero ¡no se preocupe! Muy pronto se completara el desarrollo del mismo
                        para
                        poder
                        brindarle el servicio que usted requiera.</p>
                    <p>... ¿Que de que trata el sitio? ¿es chiste, no? Usted lo sabe por supuesto, despues de todo esta
                        intentando
                        ingresar en el. ¿No habra visto el enlace de
                        casualidad en la web y cliqueo a riesgo de contraer un virus o algo peor, o si? Esperemos que
                        no.
                    </p>
                    <p>Pero ya, dejemenos de tonterias. Lea un libro, tome algo de aire o vea una pelicula y para cuando
                        termine,
                        tal vez, o no, o puede que si, osea no, el sitio este terminado (Lo que significa no, no se
                        ilusione)
                    </p>
                </div>
            </div>
            <div class="reviews right">
                <h2>Reviews</h2>
                <div class="review">
                    <p>"Un excelente sitio sin terminar" Usuario que NO es un diseñador.</p>
                    <p>"¿Para que terminarlo? Ya es perfecto" Señor rodañesid</p>
                    <p>"Todo es relativo asi que a lo mejor ya esta terminado, aunque no lo parezca" Alberto Einstein
                    </p>

                </div>
            </div>
        </div>
        
    </main>
    
    );
}
export default IndexPage;