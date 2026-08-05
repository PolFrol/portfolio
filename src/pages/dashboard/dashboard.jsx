import { Border } from '../../components/border/border';
import { Header } from '../../components/header/header';
import { cases } from '../../material/mock';
import styles from './dashboard.module.css';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';
import { useTranslation } from 'react-i18next';

export const DashboardPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Border></Border>
            <Header item={cases[2]}></Header>
            <div className={styles.block}>
                <p className={styles.title}>{t('dashboard.task.title')}</p>
                <p>{t('dashboard.task.text1')}</p>
                <p>{t('dashboard.task.text2')}</p>
            </div>
            <div className={styles.block}>
                <p className={styles.title}>{t('dashboard.desition.title')}</p>
                <p className={styles.text}>{t('dashboard.desition.text1')}</p>
                <p className={styles.text}>{t('dashboard.desition.text2')}</p>
                <p>{t('dashboard.desition.text3')}</p>
                <hr className={styles.line}></hr>
                <p>{t('dashboard.desition.text4')}</p>
            </div>
            <div className={styles.row}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('dashboard.light')}</p>
                    </div>
                    <img className={styles.img} src={light} alt="Светлая тема" />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('dashboard.dark')}</p>
                    </div>
                    <img className={styles.img} src={dark} alt="Темная тема" />
                </div>
            </div>
        </>
    )
}