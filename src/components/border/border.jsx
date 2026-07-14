import styles from './border.module.css';

export const Border = () => {
    return (
        <div className={styles.imageBlock}>
            <div className={styles.bgImage}>
                <svg className={styles.svg}
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '50%',
                        transform: 'translateX(-50%) skewX(-45deg)',
                        width: 'calc(100% + 4400px)',
                        height: '100%',
                        opacity: 0.4,
                        display: 'block',
                        transformOrigin: 'center center',
                    }}
                >
                    <defs><pattern id="tp-R1kal9aop" x="0" y="0" width="10" height="100%" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="1" height="100%" fill="rgb(234, 67, 36)"></rect></pattern></defs>

                    <rect x="0" y="0" width="100%" height="100%" fill="url(#tp-R1kal9aop)"></rect>
                </svg>
            </div>
        </div>
    )
}
