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
                <meta charSet="UTF-8"/>
                <meta name="author" content="Ankoki"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>

            <main className={styles.main}>
                <h1 className={styles.title}>ANKOKI</h1>
                <p className={styles.typewriter}>Hi, i'm Jay, i develop stuff!</p>
            </main>

            <footer className={styles.footer}>
                <a href="https://discord.gg/3RWFg2xDBF">
                    <img src="/discord_logo.png" alt="Join the Aspect Productions discord." className={styles.logo}/>
                </a>
                <a href="https://github.com/Ankoki-Dev/">
                    <img src="/github_logo.png" alt="Browse my GitHub." className={styles.logo}/>
                </a>
                <a href="https://open.spotify.com/user/2mauo1ot2h9agsixazyb0cps3?si=dcaab9a0c8c44e38">
                    <img src="/spotify_logo.png" alt="See what music i like." className={styles.logo}/>
                </a>
                <a href="https://www.twitter.com/ankokii">
                    <img src="/twitter_logo.png" alt="Follow my twitter." className={styles.logo}/>
                </a>
            </footer>
        </div>
)
}