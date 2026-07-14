import { Border } from '../../components/border/border';
import { Header } from '../../components/header/header';
import { ShowScript } from '../../components/show-script/show-script';
import { cases } from '../../material/mock';
import styles from './input.module.css';
import input from '../../assets/input.png';
import settings from '../../assets/settings.png';
import mobile from '../../assets/mobile.png';

export const InputPage = () => {
    return (
        <>
            <Border></Border>
            <Header item={cases[1]}></Header>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.title}>ПРОБЛЕМА</p>
                    <p>Формы оплаты — один из самых проблемных этапов взаимодействия с любым финтех-продуктом. При вводе значений в обычный инпут пользователи часто ошибаются при вводе номеров карт и счетов, платежные системы не распознаются, нет возможности валидировать введенные значения.</p>
                    <hr className={styles.line}></hr>
                    <p>Задача состояла в том, чтобы спроектировать единый, переиспользуемый компонент ввода, способный работать с картами, банковскими счетами и смешанным форматом. Он должен был отображать логотип платежной системы, флаг страны и код валюты, выполняя при этом валидацию  по мере ввода данных пользователем.</p>
                </div>
                <div className={`${styles.block} ${styles.borderLeft}`}>
                    <p className={styles.title}>РЕШЕНИЕ</p>
                    <p>Я спроектировала и реализовала этот компонент в рамках no-code платформы. Я определила состояния компонента (по умолчанию, наведение, фокус, активное состояние, неактивное состояние, ошибка), описала логику маскирования и валидации для каждого режима ввода (карта, счет, карта/счет), а также подготовила макеты в Figma и реализовала фронтенд-часть как для веб, так и для мобильных/адаптивных платформ.</p>
                    <hr className={styles.line}></hr>
                    <p>Компонент был создан на базе существующего поля ввода, чтобы сохранить возможность размещения элементов по обеим сторонам поля (стандартные поля ввода такой паттерн не поддерживали).</p>
                </div>
            </div>
            <div className={`${styles.content} ${styles.margin}`}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>ДОБАВЛЕНИЕ ВИДЖЕТА НА ФОРМУ</p>
                </div>
                <img className={styles.img} src={input} alt="Добавление виджета" height={600} />
            </div>
            <div className={styles.rowSmall}>
                <div className={`${styles.content} ${styles.margin}`}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>ВАЛИДАЦИЯ</p>
                    </div>
                    <div className={styles.imgBlock}>
                        <img src={settings} alt="Настройки валидации" />
                    </div>
                </div>
                <p className={`${styles.block} ${styles.margin}`}>При разработке столкнулась с отсутвием требований для поведения номера карты или счета при отсутствии сохраненной маски. Чтобы это решить были добавлены параметры валидации по минимальному и максимальному количеству символов для обработки форматов, не имеющих заранее заданной маски. Например, в режиме ввода карты стандартный диапазон составляет от 13 до 19 символов (согласно международному стандарту), однако, если пользователь знает, что перевод осуществляется только на карту Visa, максимальное значение можно ограничить 16 символами - маска при этом не требуется. </p>
            </div>

            <p className={`${styles.block} ${styles.margin}`}>Единый переиспользуемый компонент заменил разрозненные поля ввода платежных данных, использовавшиеся ранее на платформе. Клиенты получили возможность настраивать его под конкретные платежные системы без необходимости заказывать индивидуальную разработку.</p>
            <div className={styles.content}>
                <div className={styles.header}>
                    <p className={styles.headerTitle}>ИСПОЛЬЗОВАНИЕ ВИДЖЕТА В МОБИЛЬНОМ ПРИЛОЖЕНИИ</p>
                </div>
                <img className={styles.img} src={mobile} alt="Использование в мобильном приложении" />
            </div>
            <ShowScript src={'https://www.figma.com/design/X6LfqnBqRXnIoM589sjXVD/%D0%A1%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8?node-id=1-2987&t=4PpAZoTMpTpbstdY-1'}></ShowScript>
        </>
    )
}