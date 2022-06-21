import styles from './navbar.module.css'
import A from '../A/A'

export default function () {
    return (
        <nav className={styles.navbar}>
            <A href="/">Main</A>
            <A href="/users">Users</A>
        </nav>
    )
}