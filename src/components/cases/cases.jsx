import { Link } from 'react-router';
import styles from './cases.module.css';
import grid from './grid.module.css';
import { cases } from '../../material/mock';
import { useTranslation } from 'react-i18next';

export const Cases = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id="cases" className={styles.section}>
                <div className={styles.header}>
                    <h2>{t('cases.title')}</h2>
                </div>
                <ul className={ grid.grid }>
                    {cases.map((item) => (
                        <li key={item.id}>
                            <Link to={item.path} className={ grid.item }>
                                <div className={ grid.content }>
                                    <div className={styles.inner}>
                                        <div className={styles.tools}>
                                            {item.tools.map((tool) => (
                                                <div key={tool} className={styles.toolItem}>{tool}</div>
                                            ))}
                                        </div>
                                        <h3 className={styles.itemTitle}>{t(`cases.${item.id}.title`)}</h3>
                                        <p className={styles.itemDescr}>{t(`cases.${item.id}.text`)}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className={ grid.imageBlock }>
                                        <img className={ grid.img } src={item.image} height='250' />
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}