import React from 'react'
import { TbChevronsRight } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'

const RespNavigation = ({navState,setNavState}) => {

  const navigate = useNavigate()

  const handleLink = (path) => {
    setNavState(false)
    navigate(path)
  }

  return (
    <div className={`respNav ${navState ? 'open' : ''}`}>
      <div className="respNavToggleButton" onClick={()=>{setNavState(false)}}>
        <TbChevronsRight /> 
      </div>
    <div className="links">
      <div onClick={()=>handleLink("/")}>Home</div>
      <div>•</div>
      <div onClick={()=>handleLink("/work")}>Work</div>
      <div>•</div>
      <div onClick={()=>handleLink("/skills")}>Skills</div>
      <div>•</div>
      <div onClick={()=>handleLink("/about")}>About</div>
      <div>•</div>
      <div onClick={()=>handleLink("/contact")}>Contact</div>
      </div>
    </div>
  )
}

export default RespNavigation