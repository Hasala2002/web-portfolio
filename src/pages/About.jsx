import React from 'react'
import PageWrapper from '../utilities/PageWrapper'
import styles from './styles/About.module.scss'
import profile from '../img/profile.jpg'
import { Link } from "react-router-dom";
import { IoRocket } from 'react-icons/io5';

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
                <p className={styles.first}>I've been coding and programming for 8+ years and dabbled in a lot different technologies, and had the opportunity to work in an amazing ICT society at my school in Sri Lanka, where I got to apply, improve and evolve my skills in Programming, Web Design & Development and UI/UX Designs.</p>
                <p>These days I spent my time at college while I work on code and design skills .</p>
                <p>Outside of work, you'd probably find me playing Minecraft, or watching random TV shows.</p>
                <p>I also do freelance work occasionally.</p>
                </div>
            </div>
            <div className={styles.freelance}>
              <div className={styles.heroTitle}>Got a new idea?</div>
              <div className={styles.content}>but finding it difficult to get started? Let me help you with the nitty gritty technical work.</div>
              <Link to="/contact">Let's talk <IoRocket /></Link>
            </div>
            <a href="https://holopin.io/@hasala2002" className={styles.holopin}>
            <img src="https://holopin.me/hasala2002" alt="@hasala2002's Holopin board" />
            </a>
        </div>
    </PageWrapper>
  )
}

export default About