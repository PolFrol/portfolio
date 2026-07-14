import { Link } from 'react-router';
import styles from './cases.module.css';
import list from './list.module.css';
import grid from './grid.module.css';
import { useState } from 'react';
import { cases } from '../../material/mock';

export const Cases = () => {
    // const navigate = useNavigate();
    const [mode, setMode] = useState('grid');

    return (
        <>
            <section id="cases" className={styles.section}>
                <div className={styles.header}>
                    <h2>КЕЙСЫ</h2>
                    <div>
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
                    </div>
                </div>
                <ul className={mode === 'grid' ? grid.grid : list.list}>
                    {cases.map((item) => (
                        <li key={item.id} className={list.wrapper}>
                            <Link to={item.path} className={`${mode === 'grid' ? grid.item : list.item}`}>
                                <div className={`${mode === 'grid' ? grid.content : list.content}`}>
                                    <div className={styles.inner}>
                                        <div className={styles.tools}>
                                            {item.tools.map((tool) => (
                                                <div key={tool} className={styles.toolItem}>{tool}</div>
                                            ))}
                                        </div>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                    {/* <Link to={item.path} className={styles.button}>
                                        ПОСМОТРЕТЬ КЕЙС
                                    </Link> */}
                                </div>
                                <div>
                                    <div className={`${mode === 'grid' ? grid.imageBlock : list.imageBlock}`}>
                                        <img className={`${mode === 'grid' ? grid.img : list.img}`} src={item.image} height='250' />
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