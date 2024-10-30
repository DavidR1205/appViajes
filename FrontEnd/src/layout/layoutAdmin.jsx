import NavAdmin from "../components/componentsAdmin/navAdmin"
import FooterAdmin from "../components/componentsAdmin/footerAdmin"
import Router from "../router/router"
import "../assets/css/estilosAdmin/estilosLayout.css"


const layoutAdmin = ({ children }) => {
  return (
    <>
      <div className="pageAdmin">
        <div className="navAdmin-content">
          <NavAdmin />
        </div>

        <div className="contentAdmin">
          {children}
        </div>

        <div className="contentFooter">
          <FooterAdmin />
        </div>
      </div>
    </>
  )
}

export default layoutAdmin
