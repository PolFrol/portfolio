import styles from './qr.module.css';
import actionSetting from '../../assets/actionSetting.png';
import actionWeb from '../../assets/actionWeb.png';
import actionEnd from '../../assets/actionEnd.png';
import { ShowScript } from '../../components/show-script/show-script';
import { Header } from '../../components/header/header';
import { cases } from '../../material/mock';
import { Border } from '../../components/border/border';
import { useTranslation } from 'react-i18next';

export const QrPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Border></Border>
            <Header item={cases[0]}></Header>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.title}>{t('qr.problem.title')}</p>
                    <p>{t('qr.problem.text')}</p>
                </div>
                <div className={`${styles.block} ${styles.borderLeft}`}>
                    <p className={styles.title}>{t('qr.desition.title')}</p>
                    <p>{t('qr.desition.text1')}</p>
                    <hr className={styles.line}></hr>
                    <p>{t('qr.desition.text2')}</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>{t('qr.settings')}</p>
                </div>
                <img className={styles.img} src={actionSetting} alt="Настройка действия" height={600} />
            </div>
            <div className={styles.rowSmall}>
                <div className={styles.contentSmall}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('qr.web')}</p>
                    </div>
                    <img className={styles.img} src={actionWeb} alt="Действия на вебе" />
                </div>
                <div className={styles.contentSmall}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('qr.final')}</p>
                    </div>
                    <img className={styles.img} src={actionEnd} alt="Конечный вид настройки" />
                </div>
            </div>
            <ShowScript src={'https://www.figma.com/design/X6LfqnBqRXnIoM589sjXVD/%D0%A1%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8?node-id=1-1112&t=4PpAZoTMpTpbstdY-1'}></ShowScript>
        </>
    )
}