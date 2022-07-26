import React from 'react'
import { SiGithub, SiInstagram, SiBehance, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
       <span className="title">Hasala Heiyanthuduwa</span>
       <span className="email">hhasala2002@gmail.com</span>

       <div className="socials">
            <SiGithub />
            <SiInstagram />
            <SiBehance />
            <SiLinkedin />
       </div>
       <span className="disclaimer">Made by me. ٩(˘◡˘)۶</span>
    </footer>
  )
}

export default Footer