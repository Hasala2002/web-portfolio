import { NavLink } from "react-router-dom";
import { TbAlignRight } from "react-icons/tb";

const Navigation = ({setRespNavState, navState}) => {
  return (
    <div className="nav">
      <div className="nav-title">Portfolio</div>
      <div className="nav-links">
        <div className={`res-nav-toggle ${navState ? 'open' : null}`} onClick={()=>{setRespNavState(true)}}>
          <TbAlignRight />
        </div>
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link selected": "nav-link"} >Home</NavLink>
        <NavLink to="/work" className={({isActive}) => isActive ? "nav-link selected": "nav-link"} >Work</NavLink>
        <NavLink to="/skills" className={({isActive}) => isActive ? "nav-link selected": "nav-link"} >Skills</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "nav-link selected": "nav-link"} >About</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link selected": "nav-link"} >Contact</NavLink>
      </div>
    </div>
  )
}

export default Navigation