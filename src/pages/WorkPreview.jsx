import React from 'react'
import styles from './styles/WorkPreview.module.scss'
import img from "../img/work/catalyst.png"
import { IoCloseCircle } from "react-icons/io5";

const tagColors = {
  ['node js'] : "#0F9D58",
  ['adobe dimension'] : "#0F9D58",
  ['ejs'] : "#F4B400",
  ['javascript'] : "#F4B400",
  ['jquery'] : "#F4B400",
  ['socket io'] : "#DB4437",
  ['figma'] : "#DB4437",
  ['peer js'] : "#DB4437",
  ['react'] : "#4285F4",
  ['react native'] : "#4285F4",
  ['css'] : "#4285F4",
  ['redux'] : "#3b5bdb",
  ['parcel js'] : "#3b5bdb",
  ['firebase'] : "#f25a51",
  ['html'] : "#f16529",
  ['ionic capacitor'] : "#3880FF",
  ['scss'] : "#E3056C",
}


const WorkPreview = ({work,setWork}) => {
  return (
    <>
        <div className={styles.mainTitle}>
          <h1>{work.title}</h1>
          <div className={styles.closeIcon} onClick={()=>{setWork(undefined)}}><IoCloseCircle /></div>
        </div>
        <img className={styles.articleImg} src={work.img} alt="Work" />
        <span className={styles.title}>description</span>
        <p>{work.desc}</p>
        <p><i>{work.time}</i></p>
        <span className={styles.title}>technologies used</span>
        <div className={styles.tags}>
            {work.tags && work.tags.map(tag => {
              return(
                <div style={{backgroundColor: tagColors[`${tag}`]}} className={styles.tag}>{tag}</div>
              )
            })}
        </div>
        { work.links &&
          <>
            <span className={styles.title}>useful links</span>
            {work.links.map(link =>{
              return(
                <a className={styles.linkForWork} href={link} target="_blank">{link}</a>
                )
              })
            }
          </>
        }
    </>
  )
}

export default WorkPreview