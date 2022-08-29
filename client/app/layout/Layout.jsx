import Link from 'next/link';
import styles from './Layout.module.scss';

const Layout = ({title, children}) => {
    return (
        <>
            <head>
                <title>{title}</title>  
            </head>
            <header className={styles.header}>
                <Link href="/">
                    <a className={styles.blogName}>
                        Blog of DasoN 
                    </a>
                </Link>
                <div className={styles.headerRightBlock}>
                    <button className={styles.headerRightBlock__createBtn}>+</button>
                    <form action='/send-data-here' method='post' className={styles.headerRightBlock__input}>
                    <input 
                        type="text"
                        id="roll"
                        name="roll"
                        maxlength="40"
                    />
                    </form>
                </div>
                
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                this is footer
            </footer>
        </>
    );
}

export default Layout;