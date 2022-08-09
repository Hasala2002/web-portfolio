import blob from "../img/blob.svg"
import Footer from "./Footer"
import Navigation from "./Navigation"
import RespNavigation from "./RespNavigation"

const Layout = ({children,setRespNavState,navState}) => {
  return (
    <>
       <img className="blob" src={blob} alt="blob" />
       <Navigation setRespNavState={setRespNavState} navState={navState} />
       {/* <RespNavigation /> */}
       <div className="page">
       {children}
       </div>
       <Footer />
    </>
  )
}

export default Layout