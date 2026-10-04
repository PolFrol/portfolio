import { Link } from 'react-router';
import styles from './cases.module.css';
// import list from './list.module.css';
import grid from './grid.module.css';
// import { useState } from 'react';
import { cases } from '../../material/mock';
import { useTranslation } from 'react-i18next';

export const Cases = () => {
    // const [mode, setMode] = useState('grid');
    const { t } = useTranslation();

    return (
        <>
            <section id="cases" className={styles.section}>
                <div className={styles.header}>
                    <h2>{t('cases.title')}</h2>
                    {/* <div>
                        <button
                            type="button"
                            onClick={() => setMode(mode === 'list' ? 'grid' : 'list')}
                        >
                            {mode === 'list' ? (
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 4H4V13.3333H13.3333V4Z" stroke="#F05024" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 4H18.6667V13.3333H28V4Z" stroke="#F05024" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M28 18.6667H18.6667V28H28V18.6667Z" stroke="#F05024" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.3333 18.6667H4V28H13.3333V18.6667Z" stroke="#F05024" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            ) : (
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 16H28M4 8H28M4 24H28" stroke="#F05024" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div> */}
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