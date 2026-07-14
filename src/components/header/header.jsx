import styles from './header.module.css';

export const Header = ({ item }) => {
    return (
        <>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.subtitle}>НАЗВАНИЕ</p>
                    <h3>{item.title}</h3>
                </div>

                <div className={styles.block}>
                    <p className={styles.subtitle}>НАПРАВЛЕНИЕ</p>

                    <div className={styles.tools}>
                        {item.tools.map((tool) => (
                            <div key={tool} className={styles.toolItem}>
                                {tool}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}