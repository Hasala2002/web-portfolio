import React, { useEffect, useState } from 'react'
import PageWrapper from '../utilities/PageWrapper'
import styles from './styles/Skills.module.scss'

import { Skills as SkillsList } from "../utilities/Data.js"

const Skills = () => {

    const [skillsList, setSkillsList] = useState([])

    useEffect(() => {
        setSkillsList(SkillsList)
    },[skillsList])

    return (
    <PageWrapper>
        <div className={styles.skillsPage}>
            <h1>What I can do</h1>
            <span>Wait, what can I do? (￣ロ￣;)</span>
            <div className={styles.skillsGrid}>
                {
                    skillsList && skillsList.map(skill => {
                        return (
                        <div className={styles.skillsBox} key={skill.title}>
                            <div className={styles.skillsCard}>
                                <img src={skill.img} alt="" />
                                <span>{skill.title}</span>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </PageWrapper>
  )
}

export default Skills