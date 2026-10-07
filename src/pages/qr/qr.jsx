import styles from './qr.module.css';
import webAction from '../../assets/webAction.png';
import editAction from '../../assets/editAction.png';
import finalAction from '../../assets/finalAction.png';
import alfa from '../../assets/alfa.png';
import tbank from '../../assets/tbank.png';
import sber from '../../assets/sber.png';
import ozon from '../../assets/ozon.png';
import raif from '../../assets/raif.png';
import generator from '../../assets/generator.png';
import modalGenegator from '../../assets/modalGenegator.png';
import modalSelectGenerator from '../../assets/modalSelectGenerator.png';
import modalSelectedGenerator from '../../assets/modalSelectedGenerator.png';
import alfaScreen from '../../assets/alfaScreen.png';
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
            <div className={`${styles.block} ${styles.borderBottom}`}>
                <p className={styles.title}>{t('input.company.title')}</p>
                <p className={styles.text}>{t('input.company.text')}</p>
            </div>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.title}>{t('qr.problem.title')}</p>
                    <p className={styles.text}>{t('qr.problem.text')}</p>
                </div>
                <div className={`${styles.block} ${styles.borderLeft}`}>
                    <p className={styles.title}>{t('qr.importance.title')}</p>
                    <p className={styles.text}>{t('qr.importance.text')}</p>
                </div>
            </div>
            <div className={`${styles.block} ${styles.borderBottom}`}>
                <p className={styles.title}>{t('input.team.title')}</p>
                <div>
                    <p className={styles.role}>{t('input.team.role1')}</p>
                    <p className={styles.role}>{t('input.team.role2')}</p>
                    <p className={styles.role}>{t('input.team.role3')}</p>
                    <p className={styles.role}>{t('input.team.role4')}</p>
                </div>
            </div>
            <div className={`${styles.block} ${styles.borderBottom}`}>
                <p className={styles.title}>АНАЛИЗ КОНКУРЕНТОВ</p>
                <p className={`${styles.text} ${styles.marginSmall}`}>Изучила как реализована страница у конкурентов и какие средства для работы с QR кодом у них есть. Выделила плюсы и минусы каждого интерфейса.</p>
                <div className={styles.col3}>
                    <div className={`${styles.rowFlex} ${styles.gap} ${styles.marginMedium}`}>
                        <img src={tbank} alt="Альфа" height={100} width={100} />
                        <img src={alfa} alt="Тбанк" height={100} width={100} />
                        <img src={raif} alt="Райфайзен" height={100} width={100} />
                        <img src={ozon} alt="Озон" height={100} width={100} />
                        <img src={sber} alt="Сбер" height={100} width={100} />
                    </div>
                </div>
                <div className={`${styles.col2} ${styles.align}`}>
                    <div className={`${styles.imageBlock} ${styles.withoutMargin}`}>
                        <img className={styles.img} src={alfaScreen} alt="Альфа экран" height={175} width={375} />
                    </div>
                    <div className={`${styles.rowSmall} ${styles.blockHorizontal}`}>
                        <div className={styles.tableCol}>
                            <div className={styles.tableRow}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0013 6.6665V25.3332M6.66797 15.9998H25.3346" stroke="#74C57D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>«Поделиться ссылкой» — главное действие, расположено на всю ширину сразу под QR. Намерение экрана понятно: получить перевод и отправить код.</p>
                            </div>
                            <div className={styles.tableRow}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0013 6.6665V25.3332M6.66797 15.9998H25.3346" stroke="#74C57D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Белая подложка под QR и логотип СБП в центре обеспечивают хороший контраст для сканирования. Бренд банка над кодом сразу показывает, чей это QR.</p>
                            </div>
                            <div className={styles.tableRow}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0013 6.6665V25.3332M6.66797 15.9998H25.3346" stroke="#74C57D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Доступны два способа: поделиться ссылкой и скачать QR-код. Пользователь может выбрать подходящий формат.</p>
                            </div>
                        </div>
                        <div>
                            <div className={styles.tableRow}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66797 16H25.3346" stroke="#F37B7B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Нет предпросмотра: непонятно, что откроется по ссылке и как она выглядит у получателя.</p>
                            </div>
                            <div className={styles.tableRow}>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66797 16H25.3346" stroke="#F37B7B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Два способа используют разные паттерны взаимодействия: кнопка и нажатие на сам QR. Подсказка о скачивании набрана мелким серым текстом и может остаться незамеченной.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.block} ${styles.borderLeft}`}>
                <p className={styles.title}>{t('qr.desition.title')}</p>
                <p className={styles.text}>{t('qr.desition.text1')}</p>
                <hr className={styles.line}></hr>
                <p className={styles.text}>{t('qr.desition.text2')}</p>
            </div>
            <div className={styles.block}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('qr.settings')}</p>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.block}>
                            <div>
                                <p className={styles.subtitle}>ДОБАВЛЕНИЕ ДЕЙСТВИЯ</p>
                            </div>
                            <p className={styles.text}>При нажатии «Добавить» открывается контекстное меню с выбором экшена.</p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img className={styles.img} src={generator} alt="Вызов модального окна" />
                        </div>
                        <div className={styles.block}>
                            <div>
                                <p className={styles.subtitle}>НАСТРОЙКА ПАРАМЕТРОВ</p>
                            </div>
                            <p className={styles.text}>При выборе экшена открывается модальное окно с необходимыми параметрами для настройки.</p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img className={styles.img} src={modalGenegator} alt="Модальное окно" />
                        </div>
                        <div className={styles.block}>
                            <div>
                                <p className={styles.subtitle}>ЗАПОЛНЕНИЕ ЗНАЧЕНИЙ</p>
                            </div>
                            <p className={styles.text}>Тип контрола определила в зависимости от характера значения: селект - для выбора из доступных вариантов, текстовый инпут - для произвольного ввода. Использовала компоненты внутренней дизайн-системы.</p>
                        </div>
                        <div className={`${styles.imageBlock} ${styles.medium}`}>
                            <div className={`${styles.rowSmall} ${styles.gap}`}>
                                <img className={styles.img} src={modalSelectGenerator} alt="Выбор значения" />
                                <img className={styles.img} src={modalSelectedGenerator} alt="Выбранное значение" />
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div>
                                <p className={styles.subtitle}>СОХРАНЕННОЕ ДЕЙСТВИЕ</p>
                            </div>
                            <p className={styles.text}>Поскольку для одного слоя может быть настроено несколько действий, после сохранения они отображаются в виде списка.</p>
                        </div>
                        <div className={styles.imageBlock}>
                            <img className={styles.img} src={finalAction} alt="Выбор значения" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rowSmall}>
                <div className={styles.contentSmall}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('qr.web')}</p>
                    </div>
                    <img className={styles.img} src={webAction} alt="Действия на вебе" />
                </div>
                <div className={styles.contentSmall}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('qr.edit')}</p>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img className={styles.img} src={editAction} alt="Конечный вид настройки" />
                    </div>
                </div>
            </div>
            <ShowScript src={'https://www.figma.com/design/X6LfqnBqRXnIoM589sjXVD/%D0%A1%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8?node-id=1-1112&t=4PpAZoTMpTpbstdY-1'}></ShowScript>
        </>
    )
}