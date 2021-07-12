import head from 'next/head'
import styles from '../styles/Home.module.css'

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <div className={styles.container} onLoad={() => {
            document.body.style.opacity = '1'
            document.body.style.color = '#164A41'
        }}>
            <head>
                <title>Ankoki | Jay</title>
                <link rel="icon" href="/favicon.ico"/>
            </head>

            <header className={styles.header}>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>ANKOKI</h1>
                <p className={styles.typewriter}>Hi, i'm Jay, I develop stuff!</p>
            </main>

            <footer className={styles.footer}>
                <a href="https://discord.gg/3RWFg2xDBF">
                    <img src="/aspect_logo.png" alt="Join the Aspect Productions discord." className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}