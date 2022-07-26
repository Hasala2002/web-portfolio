import PageWrapper from '../utilities/PageWrapper'
import styles from './styles/WorkDisplay.module.scss'
import { WorkDB } from '../utilities/Data.js'
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const WorkDisplay = () => {

    const { workType } = useParams()
    const navigate = useNavigate()

    const [workTitle,setWorkTitle] = useState("")
    const [workList,setWorkList] = useState([])

    useEffect(()=>{
        if(WorkDB[`${workType}`]===undefined) {
            navigate("/oops")
            return
        }
    
        setWorkTitle(WorkDB[`${workType}`].title)
        setWorkList(WorkDB[`${workType}`].work)
    },[])

  return (
    <PageWrapper>
        <div className={styles.workPage}>
            <h1><Link to="/work">[Selected] Work</Link> &gt; {workTitle}</h1>
            <div className={styles.notimp}>Cool stuff eh? (˃́ᗜ˂̀`)</div>
            <div className={styles.workGrid}>
                {
                    workList && workList.map(work => {
                        return(
                            <div className={styles.workBox} key={work.title}>
                                <div className={styles.workCard}>
                                    <span>{work.title}</span>
                                    <div style={{backgroundImage: `url(${work.img})`}} className={styles.workPreview}>
                                    </div>
                                </div>
                            </div> 
                        )
                    })
                }
                {/* <div className={styles.workBox}>
                    <div className={styles.workCard}>
                        <span>Full Stack Projects</span>
                        <div data-id="fullstack" className={styles.workPreview}>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </PageWrapper>
  )
}

export default WorkDisplay