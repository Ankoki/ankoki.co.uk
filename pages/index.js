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
                <p className={styles.typewriter}>hi, i'm jay, i develop stuff!</p>
                <p className={styles.center}>
                    my name is jay, i'm from england and i am 18:)<br/>
                    i mainly like to mess around with java, usually in discord bots or<br/>
                    minecraft plugins. when i'm not developing, i'll play games <br/>
                    such as genshin impact, valorant or league of legends<br/>
                    on the off chance i'll be binge watching miraculous ladybug,<br/>
                    but thats not one of my flexes x)
                </p>
            </main>

            <footer className={styles.footer}>
                <a href="https://discord.gg/3RWFg2xDBF" target="_blank">
                    <img src="/discord_logo.png" alt="Join the Aspect Productions discord." className={styles.logo}/>
                </a>
                <a href="https://github.com/Ankoki-Dev/" target="_blank">
                    <img src="/github_logo.png" alt="Browse my GitHub." className={styles.logo}/>
                </a>
                <a href="https://open.spotify.com/user/2mauo1ot2h9agsixazyb0cps3?si=dcaab9a0c8c44e38" target="_blank">
                    <img src="/spotify_logo.png" alt="See what music i like." className={styles.logo}/>
                </a>
                <a href="https://www.twitter.com/ankokii" target="_blank">
                    <img src="/twitter_logo.png" alt="Follow my twitter." className={styles.logo}/>
                </a>
                <a href="https://www.twitch.tv/ankokii" target="_blank">
                    <img src="/twitch_logo.png" alt="Follow my twitch." className={styles.logo}/>
                </a>
            </footer>
        </div>
)
}