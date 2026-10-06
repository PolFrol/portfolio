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
                        <div className={styles.list}>
                            <img className={styles.img} src={option} alt="Опции" />
                            <img className={styles.img} src={optionSystem} alt="Хинт платежной системы" />
                            <img className={styles.img} src={optionFlag} alt="Хинт флаг" />
                            <img className={styles.img} src={optionCurrency} alt="Хинт валюты" />
                        </div>
                    </div>
                </div>
                <div className={styles.margin}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.headerTitle}>РАЗДЕЛ ПОДСКАЗКИ</p>
                        </div>
                        <div className={styles.block}>
                            <p className={`${styles.text} ${styles.marginSmall}`}>Для настройки включения подсказок у контрола был также выбран toggle. При положении on появляется textarea для ввода текста.</p>
                            <p className={styles.text}>Подсказки настраиваются для плейсхолдера и хинта у тултипа.</p>
                        </div>
                        <div className={styles.rowSmall}>
                            <img className={styles.img} src={hint} alt="Настройки валидации" />
                            <img className={styles.img} src={hintFulled} alt="Настройки валидации" />
                        </div>
                    </div>
                </div>
                <div className={styles.margin}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.headerTitle}>НАСТРОЙКА МАСКИ</p>
                        </div>
                        <div className={styles.block}>
                            <p className={styles.text}>Самая важная настройка контрола - маска. По маске происходит валидация введенного значения.</p>
                        </div>
                        <img className={`${styles.img} ${styles.marginSmall}`} src={mask} alt="Настройка маски" />
                        <div className={styles.block}>
                            <p className={styles.text}>При нажатии на кнопку перед пользователем появляется модальное окно с необходимыми для настройки полями.</p>
                        </div>
                        <img className={`${styles.img} ${styles.marginSmall}`} src={modal} alt="Модальное окно настройки" />
                        <div className={styles.block}>
                            <p className={styles.text}>Для удобства пользователей были добавлены хинты с подсказками, так как настройка сложная и могут возникнуть трудности.</p>
                        </div>
                        <img className={`${styles.img} ${styles.marginSmall}`} src={hintModal} alt="Хинты для настройки маски" />
                        <div className={styles.block}>
                            <p className={styles.text}>При нажатии на кнопку "Загрузить изображение" появляется модальное окно для настройки изображения, которое будет выводиться в контроле.</p>
                        </div>
                        <img className={`${styles.img} ${styles.marginSmall}`} src={imageModal} alt="Настройка изображения" />
                        <div className={styles.block}>
                            <p className={`${styles.text} ${styles.marginSmall}`}>Значения в контролы вводятся вручную, поэтому был выбран текстовый инпут.</p>
                            <p className={styles.text}>Маски могут быть любыми, в зависимости от типа платежной системы или номера счета, требование от банка было, что корректность введенных значений на совести пользователя. Накакую дополнительную валидацию для этого не добавляли.</p>
                        </div>
                        <img className={`${styles.img} ${styles.marginSmall}`} src={filledModal} alt="Заполненное модальное окно" />
                        <div className={styles.block}>
                            <p className={`${styles.text} ${styles.marginSmall}`}>Так как масок может быть несколько, при сохранении модального окна с настройками, формируется список из сохраненных масок.</p>
                            <p className={styles.text}>В плашке сохраненной маске содержится информация о названии маски и на какие начальные значения она работает.</p>
                        </div>
                        <img className={styles.img} src={selectedMask} alt="Сохраненная маска" />
                    </div>
                </div>
            </div>
            <div className={styles.rowSmall}>
                <div className={`${styles.content} ${styles.margin}`}>
                    <div className={styles.header}>
                        <p className={styles.headerTitle}>{t('input.validation')}</p>
                    </div>
                    <div className={styles.imgBlock}>
                        <img src={settings} alt="Настройки валидации" />
                    </div>
                </div>
                <p className={`${styles.block} ${styles.margin} ${styles.text}`}>{t('input.textValidator')}</p>
            </div>

            <p className={`${styles.block} ${styles.margin} ${styles.text}`}>{t('input.text')}</p>
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