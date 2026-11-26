import { Border } from '../../components/border/border';
import { Header } from '../../components/header/header';
import { cases } from '../../material/mock';
import styles from './dashboard.module.css';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';
import dropdownDark from '../../assets/dropdownDark.png';
import dropdownLight from '../../assets/dropdownLight.png';
import notfound from '../../assets/notfound.png';
import search from '../../assets/search.png';
import { useTranslation } from 'react-i18next';

export const DashboardPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Border></Border>
            <Header item={cases[2]}></Header>
            <div className={styles.block}>
                <p className={styles.title}>{t('dashboard.task.title')}</p>
                <p className={styles.text}>{t('dashboard.task.text1')}</p>
                <p className={styles.text}>{t('dashboard.task.text2')}</p>
            </div>
            <div className={styles.block}>
                <p className={styles.title}>{t('dashboard.desition.title')}</p>
                <p className={`${styles.text} ${styles.margin}`}>{t('dashboard.desition.text1')}</p>
                <p className={`${styles.text} ${styles.margin}`}>{t('dashboard.desition.text2')}</p>
                <p className={styles.text}>{t('dashboard.desition.text3')}</p>
                <hr className={styles.line}></hr>
                <p className={styles.text}>{t('dashboard.desition.text4')}</p>
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
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>ДРОПДАУН</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <p className={styles.text}>В виджете Homework можно посмотреть задания за день, неделю или месяц. Текущий период отображается на кнопке и отмечен галочкой в списке. Компонент оформлен для светлой и тёмной тем.</p>
                    </div>
                    <img className={styles.img} src={dropdownLight} alt="Дропдаун светлая тема" />
                    <img className={styles.img} src={dropdownDark} alt="Дропдаун темная тема" />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>ПОИСК ПО КУРСАМ</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.textContent}>
                        <p className={styles.text}>Запрос фильтрует список курсов внутри виджета. Если совпадений нет, на месте карточек появляется сообщение No results found. Введённый запрос остаётся в поле и доступен для редактирования.</p>
                    </div>
                    <img className={styles.img} src={search} alt="Поиск" />
                    <img className={styles.img} src={notfound} alt="Ничего не найдено" />
                </div>
            </div>
        </>
    )
}