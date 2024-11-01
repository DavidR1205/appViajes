import FooterLogin from "../components/componentsLogin/footerLogin"
import "../assets/css/estilosHome/estilosLayoutLogin.css"

const layoutLogin = ({ children }) => {
  return (
    <>
      <div className="pageLogin">
        <div className="contentLogin">
          {children}
        </div>
        <div className="contentFooter">
          <FooterLogin />
        </div>
      </div>
    </>
  )
}

export default layoutLogin