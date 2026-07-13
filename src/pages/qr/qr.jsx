import styles from './qr.module.css';

export const QrPage = () => {
    return (
        <>
            <div className={styles.bgImage}></div>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.subtitle}>НАЗВАНИЕ</p>
                    <h3>Генерация изображения - процесс создания ссылки на QR-код</h3>
                </div>
                <div className={styles.block}>
                    <p className={styles.subtitle}>НАПРАВЛЕНИЕ</p>
                    <div className={styles.tools}>
                        <div className={styles.toolItem}>UX/UI</div>
                        <div className={styles.toolItem}>Дизайн система</div>
                        <div className={styles.toolItem}>Продуктовый дизайн</div>
                    </div>
                </div>
            </div>
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
                <img src='src/assets/telegram.svg' alt="telegram" />
            </div>
            <div className={styles.row}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>ДОСТУПНЫЕ ДЕЙСТВИЯ ДЛЯ ВЕБА</p>
                    </div>
                    <img src='src/assets/telegram.svg' alt="telegram" />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>КОНЕЧНЫЙ ВИД</p>
                    </div>
                    <img src='src/assets/telegram.svg' alt="telegram" />
                </div>
            </div>
        </>
    )
}