import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion"

import Home from "../pages/Home"
import Work from "../pages/Work"
import WorkDisplay from "../pages/WorkDisplay";
import NotFound from "../pages/NotFound";
import Skills from "../pages/Skills";
import GraphicWorkDisplay from "../pages/GraphicWorkDisplay";
import Contact from "../pages/Contact";
import About from "../pages/About";

export default function AnimatedRoutes(){

  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}> 
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/graphicdesign" element={<GraphicWorkDisplay />} />
          <Route path="work/:workType" element={<WorkDisplay />} />
          <Route path="skills" element={<Skills />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

// export default AnimatedRoutes