import { Border } from '../border/border';
import styles from './main.module.css';
import { Trans, useTranslation } from 'react-i18next';

export const Main = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <header>
                <nav className={styles.navigation}>
                    <div className={styles.navName}>{t('navigation.name')}</div>
                    <ul className={styles.list}>
                        <li className={styles.nav}>
                            <a href="#cases">{t('navigation.cases')}</a>
                        </li>
                        <li className={styles.nav}>
                            <a href="#about">{t('navigation.about')}</a>
                        </li>
                        <li className={styles.nav}>
                            <a href="#contacts">{t('navigation.contacts')}</a>
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
                        <h1>
                            <Trans
                            i18nKey="main.title"
                            components={{ br: <br /> }}
                        /></h1>
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.descr}>{t('main.description')}</p>
                    </div>
                    <div className={styles.footer}>
                        <button type='button' className={styles.button}>
                            <a href="#cases">{t('main.projects')}</a>
                        </button>
                        <button type='button' className={styles.buttonInversion}>
                            <a href='https://t.me/pol_frol'>{t('main.invite')}</a>
                        </button>
                    </div>
                </div>
                <Border></Border>
            </section>
        </>
    )
}