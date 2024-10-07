import logoEmpresa from "../../assets/image/homeImage/logoCootransporte.png"

const footerHome = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footerContent">
          <div className="contImage">
            <img src={logoEmpresa} className="imgFooter" />
          </div>
          <div className="infoFooter">
            <h3>Informacion de Contacto</h3>
            <p>Direccion:</p>
            <p>Carrera 00A # 00 Sur 000</p>
            <p>Horarios</p>
            <p>Lunes - Viernes de 00:00 a 00:00
              <br />Sabados - de 00:00 a 00:00</p>
            <p>Telefono - 000 000 00 00</p>
          </div>
        </div>
        <div className="contCopy">
          <p className="copyFooter">© Todos los derechos reservados - Cootransporte S.A.S - 2024</p>
        </div>
      </footer>

    </div>
  )
}

export default footerHome