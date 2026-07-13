import styles from './dashboard.module.css';

export const DashboardPage = () => {
    return (
        <>
            <div className={styles.bgImage}></div>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.subtitle}>НАЗВАНИЕ</p>
                    <h3>Дашборд</h3>
                </div>
                <div className={styles.block}>
                    <p className={styles.subtitle}>НАПРАВЛЕНИЕ</p>
                    <div className={styles.tools}>
                        <div className={styles.toolItem}>UX/UI</div>
                    </div>
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.title}>ЗАДАЧА</p>
                <p>Создать дашборд для изучения английского языка в двух темах: светлой и темной</p>
                <p>Поработать с сеткой, компанентами и цветовыми токенами</p>
            </div>
            <div className={`${styles.block} ${styles.borderLeft}`}>
                <p className={styles.title}>РЕШЕНИЕ</p>
                <p>Я спроектировала и реализовала этот компонент в рамках no-code платформы. Я определила состояния компонента (по умолчанию, наведение, фокус, активное состояние, неактивное состояние, ошибка), описала логику маскирования и валидации для каждого режима ввода (карта, счет, карта/счет), а также подготовила макеты в Figma и реализовала фронтенд-часть как для веб, так и для мобильных/адаптивных платформ.</p>
                <hr className={styles.line}></hr>
                <p>Компонент был создан на базе существующего поля ввода, чтобы сохранить возможность размещения элементов по обеим сторонам поля (стандартные поля ввода такой паттерн не поддерживали).</p>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>ДОБАВЛЕНИЕ ВИДЖЕТА НА ФОРМУ</p>
                </div>
                <img src='src/assets/telegram.svg' alt="telegram" />
            </div>
            <div className={styles.row}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>ВАЛИДАЦИЯ</p>
                    </div>
                    <img src='src/assets/telegram.svg' alt="telegram" />
                </div>
                <p>При разработке столкнулась с отсутвием требований для поведения номера карты или счета при отсутствии сохраненной маски. Чтобы это решить были добавлены параметры валидации по минимальному и максимальному количеству символов для обработки форматов, не имеющих заранее заданной маски. Например, в режиме ввода карты стандартный диапазон составляет от 13 до 19 символов (согласно международному стандарту), однако, если пользователь знает, что перевод осуществляется только на карту Visa, максимальное значение можно ограничить 16 символами - маска при этом не требуется. </p>
            </div>
            
            <p>Единый переиспользуемый компонент заменил разрозненные поля ввода платежных данных, использовавшиеся ранее на платформе. Клиенты получили возможность настраивать его под конкретные платежные системы без необходимости заказывать индивидуальную разработку.</p>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>ИСПОЛЬЗОВАНИЕ ВИДЖЕТА В МОБИЛЬНОМ ПРИЛОЖЕНИИ</p>
                </div>
                <img src='src/assets/telegram.svg' alt="telegram" />
            </div>
        </>
    )
}