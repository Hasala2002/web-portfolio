import React from 'react'
import { SiGithub, SiInstagram, SiBehance, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
       <span className="title">Hasala Heiyanthuduwa</span>
       <span className="email">hhasala2002@gmail.com</span>

       <div className="socials">
            <a href="https://github.com/Hasala2002" target="_blank"><SiGithub /></a>
            <a href="https://www.instagram.com/hasala2002/" target="_blank"><SiInstagram /></a>
            <a href="https://behance.net/gallery/135267581/Portfolio" target="_blank"><SiBehance /></a>
            <a href="https://linkedin.com/in/hasala-heiyantuduwa-748639187/" target="_blank"><SiLinkedin /></a>
       </div>
       <span className="disclaimer">Made by me. ٩(˘◡˘)۶</span>
    </footer>
  )
}

export default Footer