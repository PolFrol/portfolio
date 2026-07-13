import styles from './about.module.css';
import avatar from '../../assets/avatar.jpg';


export const About = () => {
    return (
        <>
            <section id="about">
                <h2 className={styles.title}>О СЕБЕ</h2>
                <div className={styles.bgImage}></div>
                <div className={styles.grid}>
                    <div className={styles.cell}>
                        <img className={styles.img} src={avatar}/>
                    </div>
                    <div className={`${styles.cell} ${styles.borderLeft}`}>
                        <p className={styles.text}>5 лет коммерческого опыта работы фронтенд-разработчиком в fintech-проектах из которых 2 года я совмещала с продуктовым дизайном: создавала мобильные и веб приложения для банков,  модульную UI-архитектуру с настраиваемыми параметрами  интерфейса для no-code платформы с нуля. В какой-то момент поняла, что меня больше всего захватывает не код, а то, каким должен быть интерфейс и почему.</p>
                        <p>Я перешла в продуктовый дизайн и забрала с собой понимание технических ограничений, компонентное мышление и привычку думать об ограничениях системы. Мои макеты реальны: я знаю, как это будет создано.</p>
                    </div>
                    <div className={`${styles.cell} ${styles.experience}`}>
                        <div>
                            <p className={styles.subtitle}>2020–2023 — Freelance Web Design</p>
                            <p>Создала 10+ лендингов для образовательных проектов (курсы испанского, английского) и ивент-индустрии (свадебные приглашения). Работала напрямую с клиентами без брифов — самостоятельно формулировала цели страницы, визуальный стиль под каждый запрос.</p>
                        </div>
                        <div>
                            <p className={styles.subtitle}>2021–2023 — Верстальщик в финтехе</p>
                            <p>Создавала внутреннюю дизайн систему компании: верстала контролы и компоненты, их состояния, обсуждала с дизайнерами технические ограничения. Описывала цветовые токены, которые переиспользовались командой в нескольких приложениях — это сократило время сборки новых экранов и снизило визуальные расхождения между продуктами.</p>
                        </div>
                        <div>
                            <p className={styles.subtitle}>2023–2026 — Frontend Developer, no-code платформа</p>
                            <p>Создавала UI-модули для конструктора страниц и форм - проектировала гибкие компоненты, которые сами становятся инструментом для чужого дизайна, так как пользователи no-code платформы строят из них свои интерфейсы.
Проводила ревью макетов, что помогало подсветить спорные моменты из-за которых могли возникнуть проблемы выпуска фичи в прод.</p>
                        </div>
                    </div>
                    <div className={`${styles.cell} ${styles.border}`}>
                        <h4 className={styles.text}>Работала с компаниями</h4>
                        <ul className={styles.partners}>
                            <li>
                                <p>Rysgal Bank</p>
                            </li>
                            <li>
                                <p>Айыл Банк</p>
                            </li>
                            <li>
                                <p>Ингосстрах Банк</p>
                            </li>
                            <li>
                                <p>Кубань Кредит Банк</p>
                            </li>
                            <li>
                                <p>РНКБ Банк</p>
                            </li>
                            <li>
                                <p>Banco Caboverdiano de Negócios</p>
                            </li>
                        </ul>
                    </div>
                    <div  className={`${styles.cell} ${styles.border}`}>
                        <h4 className={styles.text}>Карьерный трек</h4>
                        <div className={styles.jobs}>
                            <div className={styles.job}>
                                <p>Продуктовый дизайнер / 2025</p>
                            </div>
                            <div className={styles.job}>
                                <p>Фронтенд разработчик / 2023</p>
                            </div>
                            <div className={styles.job}>
                                <p>Верстальщик / 2021</p>
                            </div>
                        </div>
                        <button type='button' className={styles.button}>СМОТРЕТЬ РЕЗЮМЕ</button>
                    </div>
                </div>
            </section>
        </>
    )
}