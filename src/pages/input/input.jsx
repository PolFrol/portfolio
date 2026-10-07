import { Border } from '../../components/border/border';
import { Header } from '../../components/header/header';
import { ShowScript } from '../../components/show-script/show-script';
import { cases } from '../../material/mock';
import styles from './input.module.css';
import input from '../../assets/input.png';
import buttons from '../../assets/buttons.png';
import settings from '../../assets/settings.png';
import optionCurrency from '../../assets/optionCurrency.png';
import optionFlag from '../../assets/optionFlag.png';
import optionSystem from '../../assets/optionSystem.png';
import hint from '../../assets/hint.png';
import hintFulled from '../../assets/hintFulled.png';
import option from '../../assets/option.png';
import mobile from '../../assets/mobile.png';
import filledModal from '../../assets/filledModal.png';
import hintModal from '../../assets/hintModal.png';
import imageModal from '../../assets/imageModal.png';
import mask from '../../assets/mask.png';
import modal from '../../assets/modal.png';
import selectedMask from '../../assets/selectedMask.png';
import { useTranslation } from 'react-i18next';

export const InputPage = () => {
    const { t } = useTranslation();
    const requirements = t('input.requirements', {
        returnObjects: true
    });

    return (
        <>
            <Border></Border>
            <Header item={cases[1]}></Header>
            <div className={`${styles.block} ${styles.borderBottom}`}>
                <p className={styles.title}>{t('input.company.title')}</p>
                <p className={styles.text}>{t('input.company.text')}</p>
            </div>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.title}>{t('input.problem.title')}</p>
                    <p className={styles.text}>{t('input.problem.text')}</p>
                </div>
                <div className={`${styles.block} ${styles.borderLeft}`}>
                    <p className={styles.title}>{t('input.importance.title')}</p>
                    <p className={styles.text}>{t('input.importance.text')}</p>
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
                <p className={styles.title}>{t('input.requirements.title')}</p>
                <p className={`${styles.text} ${styles.marginSmall}`}>От аналитиков пришли требования какой функционал должен быть у фичи.</p>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">{t('input.requirements.columns.element')}</th>
                            <th scope="col">{t('input.requirements.columns.purpose')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requirements.rows.map((row) => (
                            <tr key={row.element}>
                                <td>{row.element}</td>
                                <td>{row.purpose}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p className={`${styles.text} ${styles.marginSmall}`}>В компании есть внутреняя дизайн система, при проектировании сценария я использовала ее.</p>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>ФРАГМЕНТ ДИЗАЙН СИСТЕМЫ</p>
                    </div>
                    <img className={styles.img} src={buttons} alt="Кнопки" />
                </div>
            </div>
            <div className={styles.block}>
                <p className={styles.title}>{t('input.desition.title')}</p>
                <p className={styles.text}>{t('input.desition.text2')}</p>
                <div className={`${styles.content} ${styles.margin}`}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('input.adding')}</p>
                    </div>
                    <img className={styles.img} src={input} alt="Добавление виджета" height={600} />
                </div>
                <div className={styles.margin}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.headerTitle}>РАЗДЕЛ ОПЦИИ</p>
                        </div>
                        <div className={styles.block}>
                            <p className={`${styles.text} ${styles.marginSmall}`}>Опции отвечают за наполнение контрола иконками флага страны, платежной системы или валюты, а также иконкой быстрой очистки контрола от введенного значения.</p>
                            <p className={`${styles.text} ${styles.marginSmall}`}>Для настройки опций был выбран toggle, так как позволяет пользователю сразу увидеть текущее состояние настройки и изменить его одним действием.</p>
                            <p className={styles.text}>Для понимания пользователей о значении опции были добавлены тултипы с описанием.</p>
                        </div>
                        <div className={`${styles.imageBlock} ${styles.big}`}>
                            <div className={styles.list}>
                                <img className={styles.img} src={option} alt="Опции" />
                                <img className={styles.img} src={optionSystem} alt="Хинт платежной системы" />
                                <img className={styles.img} src={optionFlag} alt="Хинт флаг" />
                                <img className={styles.img} src={optionCurrency} alt="Хинт валюты" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.margin}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.headerTitle}>РАЗДЕЛ ПОДСКАЗКИ</p>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.block}>
                                <p className={`${styles.text} ${styles.marginSmall}`}>Для настройки включения подсказок у контрола был также выбран toggle. При положении on появляется textarea для ввода текста.</p>
                                <p className={styles.text}>Подсказки настраиваются для плейсхолдера и хинта у тултипа.</p>
                            </div>                        
                            <div className={`${styles.imageBlock} ${styles.medium}`}>
                                <div className={styles.rowSmall}>
                                    <img className={styles.img} src={hint} alt="Настройки валидации" />
                                    <img className={styles.img} src={hintFulled} alt="Настройки валидации" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.margin}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.headerTitle}>НАСТРОЙКА МАСКИ</p>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.block}>
                                <div>
                                    <p className={styles.subtitle}>ДОБАВЛЕНИЕ МАСКИ</p>
                                </div>
                                <p className={styles.text}>Маска - ключевая настройка контрола: по ней определяется формат и валидность введённого значения.</p>
                            </div>
                            <div className={styles.imageBlock}>
                                <img className={styles.img} src={mask} alt="Настройка маски" />
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.block}>
                                <div>
                                    <p className={styles.subtitle}>НАСТРОЙКА ПАРАМЕТРОВ</p>
                                </div>
                                <p className={`${styles.text} ${styles.marginSmall}`}>При нажатии «Добавить маску» открывается модальное окно с необходимыми параметрами для настройки.</p>
                                <p className={styles.text}>Поскольку значения задаются вручную и могут иметь произвольный формат, для их ввода выбран текстовый инпут.</p>
                            </div>
                            <div className={styles.imageBlock}>
                                <img className={styles.img} src={modal} alt="Модальное окно настройки" />
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.block}>
                                <div>
                                    <p className={styles.subtitle}>ПОДСКАЗКИ</p>
                                </div>
                                <p className={styles.text}>Настройка маски содержит несколько параметров и может быть сложной для пользователя, поэтому для ключевых полей добавлены контекстные подсказки.</p>
                            </div>
                            <div className={styles.imageBlock}>
                                <img className={styles.img} src={hintModal} alt="Хинты для настройки маски" />
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.block}>
                                <div>
                                    <p className={styles.subtitle}>ВЫБОР ИЗОБРАЖЕНИЯ</p>
                                </div>
                                <p className={styles.text}>Для настройки изображения используется отдельное модальное окно, которое открывается по нажатию «Загрузить изображение».</p>
                            </div>
                            <div className={styles.imageBlock}>
                                <img className={styles.img}  src={imageModal} alt="Настройка изображения" />
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.block}>
                                <div>
                                    <p className={styles.subtitle}>ВВОД ЗНАЧЕНИЙ</p>
                                </div>
                                <p className={`${styles.text} ${styles.marginSmall}`}>Маски могут отличаться в зависимости от типа платёжной системы или номера счёта.</p>
                                <p className={styles.text}>По требованиям банка дополнительная валидация маски не выполняется — корректность введённого значения остаётся на стороне пользователя.</p>
                            </div>
                            <div className={styles.imageBlock}>
                                <img className={styles.img} src={filledModal} alt="Заполненное модальное окно" />
                            </div>
                        </div>
                        <div className={styles.col2}>
                            <div className={styles.block}>
                                <div>
                                    <p className={styles.subtitle}>СОХРАНЕННАЯ МАСКА</p>
                                </div>
                                <p className={`${styles.text} ${styles.marginSmall}`}>Поскольку для одного контрола может быть настроено несколько масок, после сохранения они отображаются в виде списка.</p>
                                <p className={styles.text}>В каждой маске пользователь видит её название и начальные значения, для которых она применяется.</p>
                            </div>
                            <div className={styles.imageBlock}>
                                <img className={styles.img} src={selectedMask} alt="Сохраненная маска" />
                            </div>
                        </div>
                    </div>
                </div>
                 <div className={styles.margin}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.headerTitle}>{t('input.validation')}</p>
                        </div>
                        <div className={styles.col3}>
                            <div className={styles.imageBlock}>
                                <img src={settings} alt="Настройки валидации" />
                            </div>
                            <div className={styles.blockRight}>
                                <p className={`${styles.text} ${styles.marginSmall}`}>Выявила пробел в требованиях: не был определён сценарий обработки номера карты или счёта, если для него не задана маска. Чтобы контрол мог работать с такими форматами, добавила настройку минимальной и максимальной длины значения.</p>
                                <p className={styles.text}>Это дало возможность гибко ограничивать допустимый формат ввода без создания отдельной маски. Например, для номера карты можно задать стандартный диапазон 13–19 символов, а для сценария, где поддерживаются только карты Visa, ограничить значение 16 символами.</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <p className={`${styles.block} ${styles.text}`}>{t('input.text')}</p>
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