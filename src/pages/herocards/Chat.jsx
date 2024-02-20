import styles from './styles/Chat.module.scss'
import { AiOutlineSend } from "react-icons/ai";
import HeroCardWrapper from './HeroCardWrapper';

const Chat = () => {
  return (
    <HeroCardWrapper>
        <header>
            <div className={styles.profilePhoto}>
                <div className={styles.online}></div>
            </div>
            <div className={styles.profileData}>
                <h3>John Smith</h3>
                <span>+1 234 456 7890</span>
            </div>
        </header>
        <div className={styles.chatBox}>
            <div className={styles.chatRecieve}>
                <span>Jul 11</span>
                <h3>Hey Hasala, can tell me about progress of project? I'm waiting for your response.
                </h3>
            </div>
            <div className={styles.chatSent}>
                <span>Jul 13</span>
                <h3>Yeah! We can schedule a meeting for the next one.</h3>
            </div>
        </div>
        <div className={styles.chatSend}>
            <div className={styles.chatInput}>Start Typing...</div>
           <div className={styles.sendBtn}><AiOutlineSend /></div> 
        </div>
    </HeroCardWrapper>
  )
}

export default Chat