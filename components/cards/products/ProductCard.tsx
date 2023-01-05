import Image from 'next/image';
import styles from './ProductCard.module.css';

export interface IModelProductCard {
    tag: string;
    title: string;
    body: string;
    author: string;
    time: string;
    imgUrl: string;
}

const ProductCard: React.FC<IModelProductCard> = ({ tag, title, body, author, time, imgUrl }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
                    <div className={styles.user}>
                        <div className={styles.user__info}>
                            <h5>{author}</h5>
                            <small>{time}</small>
                        </div>
                        <Image
                            src="https://i.pravatar.cc/40?img=3"
                            alt="user__image"
                            className={styles.user__image}
                            width="30"
                            height="30"
                        />
                    </div>
                </div>
                <div className={styles.image__container}>
                    <Image
                        src={imgUrl}
                        alt="card__image"
                        className={styles.image}
                        fill={true}
                        sizes=" (max-width: 375px) 100vw,
                                (max-width: 600px) 50vw,
                                (max-width: 768px) 33vw,
                                (max-width: 1200px) 25vw,
                                20vw"
                    />
                </div>
                <div className={styles.card__body}>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
                <div className={styles.card__footer}>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;