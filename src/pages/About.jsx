import React from 'react'
import PageWrapper from '../utilities/PageWrapper'
import styles from './styles/About.module.scss'
import profile from '../img/profile.jpg'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <PageWrapper>
        <div className={styles.aboutPage}>
            <h1>About me</h1>
            <span className={styles.subtitle}>Hello there ( ﾟ▽ﾟ )/</span>
            <div className={styles.info}>
                <div className={styles.image}>
                    <img src={profile} alt="profile" />
                </div>
                <div className={styles.paras}>
                <p className={styles.first}>I've been coding and programming for 8+ years and dabbled in a lot different technologies, and had the opportunity to work in an amazing ICT society at my school, where I got to apply, improve and evolve my skills in Programming, Web Design & Development and UI/UX Designs.</p>
                <p>These days I spent my time at college while I work on code and design skills .</p>
                <p>I do freelance work occasionally, Got an idea, but finding it difficult to get started? Let me help you with the nitty gritty technical work. <Link to="/contact">Let's talk</Link></p>
                </div>
            </div>
        </div>
    </PageWrapper>
  )
}

export default About