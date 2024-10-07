import NavAdmin from "../components/componentsAdmin/navAdmin"
import FooterAdmin from "../components/componentsAdmin/footerAdmin"
import Router from "../router/router"

const layoutAdmin = ({children}) => {
  return (
    <>
    <NavAdmin />
      <div>
        {children}
      </div>
    <FooterAdmin />
  </>
  )
}

export default layoutAdmin
