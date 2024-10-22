import bannerInicio from "../../assets/image/homeImage/bannerInicio.jpg"
import "../../assets/css/estilosHome/rutasStyle.css"
import logoEmpresa2 from "../../assets/image/homeImage/LogoCootra2.png"
import areaLogo from "../../assets/image/homeImage/areaMetropolitana.jpg"
import metroLogo from "../../assets/image/homeImage/metro.png"

const rutas = () => {
  return (
    <div>
      <div className="containerBanner">
        <div className="contenido">
          <img src={logoEmpresa2} alt="" />
          <div className="textLogo">
            <p>" Siempre en movimiento, siempre contigo "</p>
          </div>
        </div>
      </div>
      <h1 className="titleRutas">Nuestras Rutas</h1>
      <div className="containerRutas">
        <div className="block">
          <div className="subBlock">
            <img src={metroLogo} alt="" />
            <h3>Ruta Integrada</h3>
            <h2>C4 - METRO BARCELONA</h2>
          </div>
          <div className="subBlock">
            <h4>Frecuencia: 8 Minutos</h4>
            <h4>Tiempo Promedio de Recorrido: 1 Hora y 10 Minutos</h4>
          </div>
        </div>
        <div className="block">
          <div className="subBlock">
            <img src={metroLogo} alt="" />
            <h3>Ruta Integrada</h3>
            <h2>C4 - METRO SABANETA</h2>
          </div>
          <div className="subBlock">
            <h4>Frecuencia: 8 Minutos</h4>
            <h4>Tiempo Promedio de Recorrido: 1 Hora y 10 Minutos</h4>
          </div>
        </div>
        <div className="block">
          <div className="subBlock">
            <img src={areaLogo} alt="" />
            <h3>Ruta Metropolitana</h3>
            <h2>T-004 - MINORISTA</h2>
          </div>
          <div className="subBlock">
            <h4>Frecuencia: 8 Minutos</h4>
            <h4>Tiempo Promedio de Recorrido: 1 Hora y 10 Minutos</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default rutas
