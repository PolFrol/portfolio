import { Border } from '../../components/border/border';
import { Header } from '../../components/header/header';
import { cases } from '../../material/mock';
import styles from './dashboard.module.css';
import light from '../../assets/light.png';
import dark from '../../assets/dark.png';

export const DashboardPage = () => {
    return (
        <>
            <Border></Border>
            <Header item={cases[2]}></Header>
            <div className={styles.block}>
                <p className={styles.title}>ЗАДАЧА</p>
                <p>Создать дашборд для изучения английского языка в двух темах: светлой и темной</p>
                <p>Поработать с сеткой, компанентами и цветовыми токенами</p>
            </div>
            <div className={styles.block}>
                <p className={styles.title}>РЕШЕНИЕ</p>
                <p className={styles.text}>Начала с аудита контента: определила, какая информация должна присутствовать на дашборде — прогресс по текущим курсам, статус выполнения домашних заданий, рейтинг среди друзей и общая успеваемость.</p>
                <p className={styles.text}>Дальше сгруппировала контент по смысловым блокам и расставила приоритеты по их значимости для пользователя. График успеваемости самый информационно насыщенный элемент (динамика по дням, сравнение показателей), поэтому ему отдала наибольшую площадь и разместила
 в центре — по F-паттерну это первая зона внимания после верхнего меню.</p>
                <p>Блоки «Домашние задания» и «Счёт друзей» построила по единой логике: оба показывают список из нескольких элементов с прогресс-баром/значением справа. Раз структура данных одинаковая (список + метрика), сделала их равными по размеру и выровняла по высоте — это создаёт визуальный баланс в нижней части экрана и сигнализирует пользователю, что это контент одного уровня важности, а не основной/второстепенный.</p>
                <hr className={styles.line}></hr>
                <p>Компонент был создан на базе существующего поля ввода, чтобы сохранить возможность размещения элементов по обеим сторонам поля (стандартные поля ввода такой паттерн не поддерживали).</p>
            </div>
            <div className={styles.row}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>СВЕТЛАЯ ТЕМА</p>
                    </div>
                    <img className={styles.img} src={light} alt="Светлая тема" />
                </div>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>ТЕМНАЯ ТЕМА</p>
                    </div>
                    <img className={styles.img} src={dark} alt="Темная тема" />
                </div>
            </div>
        </>
    )
}