import PageWrapper from "../utilities/PageWrapper"
import styles from "./styles/Contact.module.scss"


const Contact = () => {
  return (
    <PageWrapper>
        <div className={styles.contactPage}>
            <h1>Get in touch.</h1>
            <div className={styles.notimp}>Love to hear from you! („• ᴗ •„)</div>
            <form action="">
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="John Smith" />
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="john@example.com" />
                    </div>
                </div>
                <div className={styles.messageSection}>
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Type out your message here..."></textarea>
                </div>
                <button type="submit">Sumbit Message</button>
            </form>
        </div>
    </PageWrapper>
  )
}

export default Contact