import FooterLogin from "../components/componentsLogin/footerLogin"

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