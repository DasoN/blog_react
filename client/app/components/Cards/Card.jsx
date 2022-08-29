import styles from "./Card.module.scss"
import Button from "../../shared/Button/Button";

const Card = ({name, description, id}) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.name}>{name}</h1>
            <span>{description}</span>
            <Button text="Follow to post" id={id}/>
        </div>
       
        );
}

export default Card;