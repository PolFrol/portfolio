import { Border } from '../border/border';
import styles from './main.module.css';

export const Main = () => {
    return (
        <>
            <header>
                <nav className={styles.navigation}>
                    <div className={styles.navName}>ФРОЛОВА ПОЛИНА</div>
                    <ul className={styles.list}>
                        <li className={styles.nav}>
                            <a href="#cases">КЕЙСЫ</a>
                        </li>
                        <li className={styles.nav}>
                            <a href="#about">О СЕБЕ</a>
                        </li>
                        <li className={styles.nav}>
                            <a href="#contacts">КОНТАКТЫ</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className={styles.section}>
                <Border></Border>
                <div className={styles.block}>
                    <div className={styles.blockVideo}>
                        <video
                            className={styles.video}
                            src="https://Framer-Expert.b-cdn.net/moire_hero.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        />
                    </div>
                    <div className={styles.textBlock}>
                        <h1>Продуктовый дизайнер <br />с бэкграундом фронтенд разработки</h1>
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.descr}>Я создаю интерфейсы и знаю как это будет работать</p>
                    </div>
                    <div className={styles.footer}>
                        <button type='button' className={styles.button}>
                            <a href="#cases">ПОСМОТРЕТЬ ПРОЕКТЫ</a>
                        </button>
                        <button type='button' className={styles.buttonInversion}>
                            <a href='https://t.me/pol_frol'>ПРИГЛАСИТЬ НА СОБЕСЕДОВАНИЕ</a>
                        </button>
                    </div>
                </div>
                <Border></Border>
            </section>
        </>
    )
}