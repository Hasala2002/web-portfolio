import blob from "../img/blob.svg"
import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = ({children}) => {
  return (
    <>
       <img className="blob" src={blob} alt="blob" />
       <Navigation />
       <div className="page">
       {children}
       </div>
       <Footer />
    </>
  )
}

export default Layout