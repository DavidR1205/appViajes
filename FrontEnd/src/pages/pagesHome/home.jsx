import bannerInicio from "../../assets/image/homeImage/bannerInicio.jpg"
import areaLogo from "../../assets/image/homeImage/areaMetropolitana.jpg"
import simitLogo from "../../assets/image/homeImage/simit.png"
import runtLogo from "../../assets/image/homeImage/runt.jpg"

const Home = () => {
    return (
        <div>
            <div className="Banner">
                <img src={bannerInicio} className="bannerInicio" />
            </div>
            <div className="contDescription">
                <h1>Quienes somos</h1>
                <p>En Cootransporte S.A.S., somos una empresa comprometida con ofrecer soluciones de movilidad eficientes, seguras y accesibles en el área metropolitana.
                    Desde nuestros inicios, hemos trabajado incansablemente para conectar a las personas y sus destinos a través de un servicio de transporte público de calidad.
                    <br />
                    <br />
                    Nuestra flota moderna y nuestros operadores capacitados nos permiten garantizar una experiencia de viaje confiable y cómoda para miles de usuarios diarios.
                    Además, nos preocupamos por el cuidado del medio ambiente, implementando prácticas sostenibles que contribuyen al desarrollo responsable de nuestra comunidad.
                    <br />
                    <br />
                    Con una visión centrada en la innovación, buscamos adaptarnos constantemente a las necesidades cambiantes de nuestros pasajeros, mejorando nuestras rutas, optimizando frecuencias
                    y aplicando tecnología avanzada para ofrecer un servicio más eficiente.
                    <br />
                    <br />
                    En Cootransporte S.A.S., no solo llevamos personas, sino también el compromiso de facilitar la vida diaria de quienes confían en nosotros, conectando cada rincón de la ciudad con
                    profesionalismo y responsabilidad.
                </p>
            </div>
            <div className="contBase">
                <div>
                    <h3>Estabilidad Laboral</h3>
                    <p>En Cootransporte S.A.S., creemos en el bienestar y el desarrollo de nuestros colaboradores. 
                        Fomentamos un entorno laboral seguro y equitativo, donde cada empleado puede crecer profesionalmente. </p>
                </div>
                <div>
                    <h3>Administracion</h3>
                    <p>Nos enorgullece contar con una gestión eficiente y transparente, orientada a optimizar 
                        los recursos y garantizar la sostenibilidad de la empresa.</p>
                </div>
                <div>
                    <h3>Servicio</h3>
                    <p>El servicio es el corazón de nuestra operación. En Cootransporte S.A.S., estamos comprometidos con brindar una experiencia de 
                        transporte segura, puntual y confortable a cada uno de nuestros usuarios.</p>
                </div>
            </div>

            <div className="titleEnlaces">
                <h3>Enlaces de Interes</h3>
            </div>

            <div className="contEnlaces">
                <div>
                    <a href="https://www.metropol.gov.co/">
                    <img src={areaLogo} alt="" />
                    </a>
                    <p>Area Metropolitana</p>
                </div>
                <div>
                    <a href="https://www.fcm.org.co/simit/#/home-public">
                        <img src={simitLogo} alt="" />
                    </a>
                    <p>SIMIT</p>
                </div>
                <div>
                    <a href="https://www.runt.gov.co/">
                        <img src={runtLogo} alt="" />
                    </a>
                    <p>RUNT</p>
                </div>
            </div>
        </div>
    )
}

export default Home