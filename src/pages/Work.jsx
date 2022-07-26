import styles from './styles/Work.module.scss'
import PageWrapper from '../utilities/PageWrapper'
import { useNavigate } from "react-router-dom";

const Work = () => {

  const navigate = useNavigate()

  function handleClick(path){
    navigate(`/work/${path}`)
  }

  return (
    <PageWrapper>
        <div className={styles.workPage}>
            <h1>[Selected] Work</h1>
            <div className={styles.notimp}>I work sometimes (*˘︶˘*)</div>
            <div className={styles.workGrid}>
                <div className={styles.workBox}>
                    <div className={styles.workCard} onClick={()=>{handleClick("fullstack")}}>
                        <span>Full Stack Projects</span>
                        <div data-id="fullstack" className={styles.workPreview}>
                        </div>
                    </div>
                </div>
                <div className={styles.workBox}>
                    <div className={styles.workCard} onClick={()=>{handleClick("uiux")}}>
                        <span>UI/UX Designs</span>
                        <div data-id="uiux" className={styles.workPreview}></div>
                    </div>
                </div>
                <div className={styles.workBox}>
                    <div className={styles.workCard} onClick={()=>{handleClick("webtools")}}>
                        <span>Web Tools</span>
                        <div data-id="webtools" className={styles.workPreview}></div>
                    </div>
                </div>
                <div className={styles.workBox}>
                    <div className={styles.workCard} onClick={()=>{handleClick("freelance")}}>
                        <span>Freelance Projects</span>
                        <div data-id="freelance" className={styles.workPreview}></div>
                    </div>
                </div>
                <div className={styles.workBox}>
                    <div className={styles.workCard} onClick={()=>{handleClick("graphicdesign")}}>
                        <span>Graphic Design</span>
                        <div data-id="graphicdesign" className={styles.workPreview}></div>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
  )
}

export default Work