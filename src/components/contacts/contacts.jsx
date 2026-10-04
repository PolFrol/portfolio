import { useTranslation } from 'react-i18next';
import { Border } from '../border/border';
import styles from './contacts.module.css';

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <>
            <section id="contacts">
                <Border></Border>
                <h2 className={styles.title}>{t('contacts')}</h2>
                <div className={styles.contacts}>
                    <a className={styles.mail} href='mailto:polfroll@gmail.com'>polfroll@gmail.com</a>
                    <div className={styles.links}>
                        <a href='https://www.linkedin.com/in/polina-frolova-607610344'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6654 13.3335C29.3175 13.3335 31.8611 14.3871 33.7364 16.2624C35.6118 18.1378 36.6654 20.6813 36.6654 23.3335V35.0002H29.9987V23.3335C29.9987 22.4494 29.6475 21.6016 29.0224 20.9765C28.3973 20.3514 27.5494 20.0002 26.6654 20.0002C25.7813 20.0002 24.9335 20.3514 24.3083 20.9765C23.6832 21.6016 23.332 22.4494 23.332 23.3335V35.0002H16.6654V23.3335C16.6654 20.6813 17.7189 18.1378 19.5943 16.2624C21.4697 14.3871 24.0132 13.3335 26.6654 13.3335Z" stroke="#F05024" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.9987 15.0002H3.33203V35.0002H9.9987V15.0002Z" stroke="#F05024" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6.66536 10.0002C8.50631 10.0002 9.9987 8.50778 9.9987 6.66683C9.9987 4.82588 8.50631 3.3335 6.66536 3.3335C4.82442 3.3335 3.33203 4.82588 3.33203 6.66683C3.33203 8.50778 4.82442 10.0002 6.66536 10.0002Z" stroke="#F05024" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href='https://t.me/pol_frol'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10_76)">
                                <path d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z" fill="#F05024"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0532 19.7889C14.8836 17.2487 18.7715 15.574 20.7167 14.7649C26.271 12.4547 27.4251 12.0534 28.1773 12.0402C28.3428 12.0373 28.7127 12.0783 28.9523 12.2727C29.1547 12.4369 29.2103 12.6587 29.237 12.8143C29.2636 12.97 29.2968 13.3246 29.2704 13.6017C28.9694 16.7641 27.6671 24.4386 27.0045 27.9806C26.7241 29.4794 26.1721 29.9819 25.6377 30.0311C24.4762 30.138 23.5943 29.2636 22.4694 28.5262C20.7091 27.3723 19.7147 26.654 18.0061 25.528C16.0314 24.2268 17.3115 23.5116 18.4368 22.3428C18.7313 22.0369 23.8487 17.3823 23.9477 16.9601C23.9601 16.9072 23.9716 16.7104 23.8546 16.6065C23.7377 16.5025 23.5651 16.5381 23.4406 16.5663C23.264 16.6064 20.452 18.4651 15.0044 22.1423C14.2063 22.6904 13.4833 22.9574 12.8355 22.9434C12.1214 22.928 10.7478 22.5397 9.7266 22.2077C8.4741 21.8006 7.47864 21.5853 7.56532 20.8939C7.61047 20.5337 8.10643 20.1654 9.0532 19.7889Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_10_76">
                                <rect width="40" height="40" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}