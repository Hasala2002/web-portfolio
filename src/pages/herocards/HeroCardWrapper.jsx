import React from 'react'
import { motion } from "framer-motion"

const HeroCardWrapper = ({children}) => {
  return (
    <motion.div
    className="heroCardContent"
    initial={{rotateZ: 360}}
    animate={{rotateZ: 0}}
    transition={{type: "spring",duration:0.5}}   
    >
    {children}
    </motion.div>
  )
}

export default HeroCardWrapper