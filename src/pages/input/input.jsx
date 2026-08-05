import { Border } from '../../components/border/border';
import { Header } from '../../components/header/header';
import { ShowScript } from '../../components/show-script/show-script';
import { cases } from '../../material/mock';
import styles from './input.module.css';
import input from '../../assets/input.png';
import settings from '../../assets/settings.png';
import mobile from '../../assets/mobile.png';
import { useTranslation } from 'react-i18next';

export const InputPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Border></Border>
            <Header item={cases[1]}></Header>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.title}>{t('input.problem.title')}</p>
                    <p>{t('input.problem.text1')}</p>
                    <hr className={styles.line}></hr>
                    <p>{t('input.problem.text2')}</p>
                </div>
                <div className={`${styles.block} ${styles.borderLeft}`}>
                    <p className={styles.title}>{t('input.desition.title')}</p>
                    <p>{t('input.desition.text1')}</p>
                    <hr className={styles.line}></hr>
                    <p>{t('input.desition.text2')}</p>
                </div>
            </div>
            <div className={`${styles.content} ${styles.margin}`}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>{t('input.adding')}</p>
                </div>
                <img className={styles.img} src={input} alt="Добавление виджета" height={600} />
            </div>
            <div className={styles.rowSmall}>
                <div className={`${styles.content} ${styles.margin}`}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('input.validation')}</p>
                    </div>
                    <div className={styles.imgBlock}>
                        <img src={settings} alt="Настройки валидации" />
                    </div>
                </div>
                <p className={`${styles.block} ${styles.margin}`}>{t('input.textValidator')}</p>
            </div>

            <p className={`${styles.block} ${styles.margin}`}>{t('input.text')}</p>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>{t('input.mobile')}</p>
                </div>
                <img className={styles.img} src={mobile} alt="Использование в мобильном приложении" />
            </div>
            <ShowScript src={'https://www.figma.com/design/X6LfqnBqRXnIoM589sjXVD/%D0%A1%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8?node-id=1-2987&t=4PpAZoTMpTpbstdY-1'}></ShowScript>
        </>
    )
}