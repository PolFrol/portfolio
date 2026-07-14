import styles from './qr.module.css';
import actionSetting from '../../assets/actionSetting.png';
import actionWeb from '../../assets/actionWeb.png';
import actionEnd from '../../assets/actionEnd.png';
import { ShowScript } from '../../components/show-script/show-script';
import { Header } from '../../components/header/header';
import { cases } from '../../material/mock';
import { Border } from '../../components/border/border';

export const QrPage = () => {
    return (
        <>
            <Border></Border>
            <Header item={cases[0]}></Header>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.title}>ПРОБЛЕМА</p>
                    <p>Пользователям требовалась возможность создавать и делиться ссылкой на QR-коды, которые можно было бы сохранять и отправлять другим. Однако, поскольку речь шла о no-code платформе, решение должно было интегрироваться в ее систему действий, работать как в веб-версии, так и на мобильных устройствах, а также учитывать различия в доступных API (например, печать доступна только в вебе, а системное меню «Поделиться» — только на мобильных устройствах).</p>
                </div>
                <div className={`${styles.block} ${styles.borderLeft}`}>
                    <p className={styles.title}>РЕШЕНИЕ</p>
                    <p>Я выбрала создание отдельного действия вместо использования встроенного виджета QR-кода, так как это позволяло решить сразу несколько задач: то же самое действие могло генерировать миниатюры для шаблонов страниц — что было актуальной потребностью на тот момент. Действие запускается определенным событием пользователя, получает ID HTML-элемента и использует библиотеку html-to-image для создания файла изображения.</p>
                    <hr className={styles.line}></hr>
                    <p>Такой подход сделал решение более гибким: количество кнопок и тип действия можно было настраивать для каждого клиента без дополнительной разработки.</p>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>НАСТРОЙКА ДЕЙСТВИЯ</p>
                </div>
                <img className={styles.img} src={actionSetting} alt="Настройка действия" height={600} />
            </div>
            <div className={styles.rowSmall}>
                <div className={styles.contentSmall}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>ДОСТУПНЫЕ ДЕЙСТВИЯ ДЛЯ ВЕБА</p>
                    </div>
                    <img className={styles.img} src={actionWeb} alt="Действия на вебе" />
                </div>
                <div className={styles.contentSmall}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>КОНЕЧНЫЙ ВИД</p>
                    </div>
                    <img className={styles.img} src={actionEnd} alt="Конечный вид настройки" />
                </div>
            </div>
            <ShowScript src={'https://www.figma.com/design/X6LfqnBqRXnIoM589sjXVD/%D0%A1%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8?node-id=1-1112&t=4PpAZoTMpTpbstdY-1'}></ShowScript>
        </>
    )
}