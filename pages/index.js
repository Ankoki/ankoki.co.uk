import head from 'next/head'
import styles from '../styles/Home.module.css'
import Typist from 'react-typist'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faSpotify, faDiscord, faTwitch} from '@fortawesome/free-brands-svg-icons'

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <div className={styles.container}>

            <head>
                <title>Ankoki | Jay</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Ankoki"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>

            <main className={styles.main}>
                <h1 className={styles.a}>A N K O K I</h1>
                <Typist
                    className={styles.typist}
                    avgTypingDelay={50}
                    cursor={{
                        show: true,
                        blink: true,
                        element: "|",
                        hideWhenDone: true,
                        hideWhenDoneDelay: 0,
                    }}>My name is Jay, I'm 18 and from Earth!
                    <Typist.Delay ms={500}/>
                    <Typist.Backspace count={6} delay={500}/>
                    Britain!
                    <Typist.Delay ms={500}/>
                    <Typist.Backspace count={8} delay={500}/>
                    <Typist.Delay ms={500}/>
                    England!
                </Typist>
                <p className={styles.center}>
                    I currently work full time at a pub in York and enjoy developing projects in Java when I have the time!<br/><br/>
                    Projects I like to take include: <br/>
                    - Discord Bots <br/>
                    - Minecraft Plugins <br/><br/>
                    You could check out some of my recent projects by visiting my personal GitHub.<br/>
                    You can find it linked along with my other socials at the bottom of the page.<br/><br/>
                    <span className={styles.typist}>« Stan ITZY »</span><br/><br/>
                    <span className={styles.center}>Thanks for reading ^.^</span>
                </p>
            </main>

            <footer className={styles.footer}>
                <a href="https://discord.gg/3RWFg2xDBF" target="_blank" className={styles.logo}><FontAwesomeIcon
                    icon={faDiscord}/></a>
                <a href="https://github.com/Ankoki-Dev" target="_blank" className={styles.logo}><FontAwesomeIcon
                    icon={faGithub}/></a>
                <a href="https://open.spotify.com/user/2mauo1ot2h9agsixazyb0cps3?si=dcaab9a0c8c44e38" target="_blank"
                   className={styles.logo}><FontAwesomeIcon icon={faSpotify}/></a>
                <a href="https://www.twitter.com/ankokii" target="_blank" className={styles.logo}><FontAwesomeIcon
                    icon={faTwitter}/></a>
                <a href="https://www.twitch.tv/ankokii" target="_blank" className={styles.logo}><FontAwesomeIcon
                    icon={faTwitch}/></a>
            </footer>
        </div>
    )
}