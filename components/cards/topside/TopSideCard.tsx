import styles from "./TopSideCard.module.css";
const TopSideCard: React.FC<String> = (info) => {
    return (
        <div className={styles.topside}>
            <header className={styles.topside_header}>OKIEST</header>
            <p className={styles.topside_info}>{info}</p>
        </div>
    );
}
export default TopSideCard;