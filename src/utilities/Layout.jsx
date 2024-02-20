import blob from "../img/blob.svg"
import Footer from "./Footer"
import Navigation from "./Navigation"
import RespNavigation from "./RespNavigation"
import { FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () =>{
  return useContext(ThemeContext)
}

export const ThemeProvider = (props) =>{
  
  const {theme,setTheme,children} = props

  // const [theme,setTheme] = useState(false)
  
  const value = {
    theme,
    setTheme
  }

  return(
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}


export const Layout = ({children,setRespNavState,navState}) => {

  const themeSwitch = useRef(0)
  // const {setTheme} = useTheme()
  const [theme,setTheme] = useState(false)
  const toggleTheme = () =>{
      if (themeSwitch.current.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem('theme',"dark")
        setTheme(true)
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem('theme',"light")
        setTheme(false)
      }
    }

    useEffect(() => {
      if(localStorage.getItem('theme')){
        document.documentElement.setAttribute("data-theme", localStorage.getItem('theme'));
        if(localStorage.getItem('theme')==="dark"){
          setTheme(true)
          themeSwitch.current.checked = true
        }
      }
    },[])

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <label className="switcher">
        <input type="checkbox" onChange={()=>{toggleTheme()}} name="theme-switcher" ref={themeSwitch} />
        <div>
          <i className="sun"><FaSun /></i>
          <div className="arrow"><FaArrowLeft /></div>
          <i className="moon"><FaMoon /></i>  
        </div>
  </label>
       {/* <img className="blob" src={blob} alt="blob" /> */}
       <svg className="blob" width="1581" height="1500" viewBox="0 0 1581 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="blobSVG" d="M1404.66 362.355C1545.45 555.259 1627.89 807.88 1550.56 984.799C1474.3 1161.82 1238.27 1263.14 991.843 1361.3C746.578 1458.5 489.95 1551.37 307.463 1467.01C124.976 1382.64 17.587 1122.22 2.64651 869.766C-12.398 618.378 64.9018 376.027 224.187 215.711C382.41 55.2904 621.453 -22.1378 841.606 5.84523C1061.76 33.8283 1262.92 168.285 1404.66 362.355Z"/>
        </svg>
       <Navigation setRespNavState={setRespNavState} navState={navState} />
       {/* <RespNavigation /> */}
       <div className="page">
       {children}
       </div>
       <Footer />
    </ThemeProvider>
  )
}
