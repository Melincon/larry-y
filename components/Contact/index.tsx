import { FC } from 'react'
import styles from './style.module.css';

export interface ContactProps {}

const Contact: FC<ContactProps> = () => (
    <div className={styles.Contact}>
        <div className={styles.Contact__text}>
            <h3 className={styles.Contact__title}>
                GET IN TOUCH
            </h3>
            <div className={styles.Contact__socialLinks}>
                <span>
                    in
                </span>
                <span className={styles.Contact__socialLink}>
                    gm
                </span>
            </div>
        </div>
    </div>
)

export default Contact;