import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../../../lib/DTO';
import styles from './PostCard.module.css';
export default function PostCard(post: Post) {
    let userAvatarUrl = "https://i.pravatar.cc/40?img=" + post.userId;
    //console.log(userAvatarUrl);
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card__header}>
                    <span className={`${styles.tag} ${styles['tag-blue']}`}>{post.tag}</span>
                    <div className={styles.user}>
                        <div className={styles.user__info}>
                            <h5>{post.author}</h5>
                            <small>{post.time}</small>
                        </div>
                        <Image
                            src={userAvatarUrl}
                            alt="user__image"
                            className={styles.user__image}
                            width="30"
                            height="30"
                        />
                    </div>
                </div>
                <Link href={"/posts/" + post.id} >

                    <div className={styles.image__container}>
                        <Image
                            src={post.imgUrl}
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
                        <div className={styles.card_info_header}><h4>{post.title}</h4></div>
                        <div className={styles.card_info_body}><p>{post.info}</p></div>
                    </div>
                </Link>
            </div>
        </div>
    );
}