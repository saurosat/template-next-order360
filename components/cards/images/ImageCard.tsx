import Image from 'next/image';
import { Img } from '../../../lib/DTO';
import styles from './ImageCard.module.css';

export function ImageCard(imageCardProps: Img) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card__header}>&nbsp;
                </div>
                <div className={styles.image__container}>
                    <Image
                        src={imageCardProps.imgUrl}
                        alt="card__image"
                        className={styles.image}
                        fill={true}
                        sizes="100vw"
                    />
                </div>
                <div className={styles.card__body}>
                    <div className={styles.card_info_body}><p>{imageCardProps.info}</p></div>
                </div>
            </div>
        </div>
    );
}
