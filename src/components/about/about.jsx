import styles from './about.module.css';
import avatar from '../../assets/avatar.jpg';
import { Border } from '../border/border';
import { useTranslation } from 'react-i18next';


export const About = () => {
    const { t } = useTranslation();
    
    return (
        <>
            <section id="about" className={styles.section}>
                <h2 className={styles.title}>{t('about.title')}</h2>
                <Border></Border>
                <div className={styles.grid}>
                    <div className={styles.cell}>
                        <img className={styles.img} src={avatar} />
                    </div>
                    <div className={`${styles.cell} ${styles.borderLeft}`}>
                        <p className={styles.text}>{t('about.text1')}</p>
                        <p>{t('about.text2')}</p>
                    </div>
                    <div className={`${styles.cell} ${styles.experience}`}>
                        <div>
                            <p className={styles.subtitle}>{t('about.subtitle1')}</p>
                            <p>{t('about.text3')}</p>
                        </div>
                        <div>
                            <p className={styles.subtitle}>{t('about.subtitle2')}</p>
                            <p>{t('about.text4')}</p>
                        </div>
                        <div>
                            <p className={styles.subtitle}>{t('about.subtitle3')}</p>
                            <p>{t('about.text5')}</p>
                        </div>
                    </div>
                    <div className={`${styles.cell} ${styles.border}`}>
                        <h4 className={styles.text}>{t('about.companies')}</h4>
                        <ul className={styles.partners}>
                            <li>
                                <p>{t('about.rysgal')}</p>
                            </li>
                            <li>
                                <p>{t('about.aiyl')}</p>
                            </li>
                            <li>
                                <p>{t('about.ingo')}</p>
                            </li>
                            <li>
                                <p>{t('about.kyban')}</p>
                            </li>
                            <li>
                                <p>{t('about.rnkb')}</p>
                            </li>
                            <li>
                                <p>{t('about.bcn')}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.cell} ${styles.border}`}>
                        <h4 className={styles.text}>{t('about.track')}</h4>
                        <div className={styles.jobs}>
                            <div className={styles.job}>
                                <p>{t('about.job1')}</p>
                            </div>
                            <div className={styles.job}>
                                <p>{t('about.job2')}</p>
                            </div>
                            <div className={styles.job}>
                                <p>{t('about.job3')}</p>
                            </div>
                        </div>
                        <button type='button' className={styles.button}>
                            <a href='https://docs.google.com/document/d/1KBvB_hHpMe2RsS7OspyTQ0qIZo4MX_HNlit-h13PU6I/edit?usp=sharing'>{t('about.button')}</a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}