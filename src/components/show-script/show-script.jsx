import styles from './show-script.module.css';

export const ShowScript = ({src}) => {
    return (
        <a href={src} className={styles.showScript}>
            <h4 className={styles.title}>ПОСМОТЕТЬ СЦЕНАРИЙ ПОЛНОСТЬЮ</h4>
            <svg className={styles.svg} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.33203 20.0002H31.6654M19.9987 31.6668L31.6654 20.0002L19.9987 8.3335" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    )
}
