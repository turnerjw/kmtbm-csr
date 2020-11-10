import styles from "../styles/FallbackCard.module.css";

export const FallbackCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.text}/>
            <div className={styles.image}/>
        </div>
    )
}