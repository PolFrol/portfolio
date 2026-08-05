import { useTranslation } from 'react-i18next';
import styles from './header.module.css';

export const Header = ({ item }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={styles.row}>
                <div className={styles.block}>
                    <p className={styles.subtitle}>{t('header.name')}</p>
                    <h3>{t(`cases.${item.id}.title`)}</h3>
                </div>

                <div className={styles.block}>
                    <p className={styles.subtitle}>{t('header.industry')}</p>

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