import styles from './Button.module.scss'
import Link from 'next/dist/client/link';

const Button = ({text, id}) => {
    return (
        <Link href={"/blog/"+id}>
            <a  className={styles.button}>
                    {text} 
            </a>
        </Link>
        
    );
}

export default Button;