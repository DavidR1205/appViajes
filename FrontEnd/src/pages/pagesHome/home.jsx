import bannerInicio from "../../assets/image/homeImage/bannerInicio.jpg"
import areaLogo from "../../assets/image/homeImage/areaMetropolitana.jpg"
import simitLogo from "../../assets/image/homeImage/simit.png"
import runtLogo from "../../assets/image/homeImage/runt.jpg"
import noticia1 from "../../assets/image/homeImage/noticia 1.jpg"
import noticia2 from "../../assets/image/homeImage/noticia 2.png"
import estabilidad from "../../assets/image/homeImage/estabilidad.png"
import servicio from "../../assets/image/homeImage/servicio.png"
import administracion from "../../assets/image/homeImage/administracion.png"
import logoEmpresa from "../../assets/image/homeImage/logoCootransporte.png"
import logoEmpresa2 from "../../assets/image/homeImage/LogoCootra2.png"

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={noticia2} className="d-block w-100 img-fluid" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={bannerInicio} className="imgNoticia" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="containerLogo">
                <div className="contenido">
                    <img src={logoEmpresa2} alt="" />
                    <div className="textLogo">
                        <p>" Siempre en movimiento, siempre contigo "</p>
                    </div>
                </div>
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
                    <img src={estabilidad} alt="" />
                    <h3>Estabilidad Laboral</h3>
                    <p>En Cootransporte S.A.S, creemos en el bienestar y el desarrollo de nuestros colaboradores.
                        Fomentamos un entorno laboral seguro y equitativo, donde cada empleado puede crecer profesionalmente. </p>
                </div>
                <div>
                    <img src={administracion} alt="" />
                    <h3>Administracion</h3>
                    <p>Nos enorgullece contar con una gestión eficiente y transparente, orientada a optimizar
                        los recursos y garantizar la sostenibilidad de la empresa.</p>
                </div>
                <div>
                    <img src={servicio} alt="" />
                    <h3>Servicio</h3>
                    <p>El servicio es el corazón de nuestra operación. En Cootransporte S.A.S., estamos comprometidos con brindar
                        transporte seguro, puntual y confortable a nuestros usuarios.</p>
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