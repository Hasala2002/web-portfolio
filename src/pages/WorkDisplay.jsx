import PageWrapper from '../utilities/PageWrapper'
import styles from './styles/WorkDisplay.module.scss'
import { WorkDB } from '../utilities/Data.js'
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import WorkPreview from './WorkPreview';

const WorkDisplay = () => {

    const { workType } = useParams()
    const navigate = useNavigate()

    const [workTitle,setWorkTitle] = useState("")
    const [workList,setWorkList] = useState([])

    const [selectedWork,setSelectedWork] = useState(undefined)

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
            <div className={styles.work}>
            <div className={`${styles.workGrid} ${selectedWork ? styles.workGridOpen : ''}`}>
                {
                    workList && workList.map(work => {
                        return(
                            <div onClick={()=>{
                                setSelectedWork(work)
                                window.scrollTo(0, 0);
                                }} className={`${styles.workBox} ${selectedWork ? styles.workBoxOpen : ''}`} key={work.title}>
                                <div className={`${styles.workCard} ${selectedWork ? styles.workCardOpen : ''}`}>
                                    <span>{work.title}</span>
                                    <div style={{backgroundImage: `url(${work.img})`}} className={styles.workPreview}>
                                    </div>
                                </div>
                            </div> 
                        )
                    })
                }
                </div>
                <div className={`${styles.workPreviewSection} ${selectedWork ? styles.workPreviewSectionOpen : ''}`}>
                    {selectedWork && <WorkPreview work={selectedWork} setWork={setSelectedWork} />}
                </div>
            </div>
        </div>
    </PageWrapper>
  )
}

export default WorkDisplay