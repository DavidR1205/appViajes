import FooterLogin from "../components/componentsLogin/footerLogin"
import Router from "../router/router"

const layoutLogin = ({children}) => {
  return (
    <>
      <div>
        {children}
      </div>
    <FooterLogin />
  </>
  )
}

export default layoutLogin