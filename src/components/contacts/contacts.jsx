import styles from './contacts.module.css';

export const Contacts = () => {
    return (
        <>
            <section id="contacts">
                <div className={styles.bgImage}></div>
                <h2 className={styles.title}>КОНТАКТЫ</h2>
                <div className={styles.contacts}>
                    <a className={styles.mail} href='mailto:polfroll@gmail.com'>polfroll@gmail.com</a>
                    <div className={styles.links}>
                        <a href='https://www.linkedin.com/in/polina-frolova-607610344'>
                            <img src='src/assets/linkedin.svg' alt="linkedin" />
                        </a>
                        <a href='https://t.me/pol_frol'>
                            <img src='src/assets/telegram.svg' alt="telegram" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}