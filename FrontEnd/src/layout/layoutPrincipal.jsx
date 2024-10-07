import NavHome from "../components/componentsHome/navHome"
import FooterHome from "../components/componentsHome/footerHome"
import Router from "../router/router"

const LayoutPrincipal = ({children}) => {
  return (
    <>
      <NavHome />
        <div>
          {children}
        </div>
      <FooterHome />
    </>
  )
}

export default LayoutPrincipal