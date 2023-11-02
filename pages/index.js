import head from 'next/head'
import styles from '../styles/stylesheet.module.css'

// noinspection JSUnusedGlobalSymbols
export default function Home() {
    return (
        <body>
            <head>
                <title>Ankoki | Jay</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="author" content="Ankoki"/>
            </head>

            <body id={styles.wrapper}>
                <div id={styles.baseContainer}>
                    <div id="me" className={styles.seperator}>
                        <img src="/smoke.png" alt="Puff Of Smoke"></img>
                        <p className={styles.leftTitle}>ANKOKI</p>
                        <p className={styles.left}>who am i</p>
                        <p className={styles.left}><a href="#aboutMe">get to know me</a></p>
                    </div>
                    <div id="byeol" className={styles.seperator}>
                        <img src="/byeol.png" alt="Byeol Discord Logo"></img>
                        <p className={styles.middleTitle}>별 DEVELOPMENT</p>
                        <p className={styles.middle}>java plugins and libraries</p>
                        <p className={styles.middle}><a href="https://discord.gg/3RWFg2xDBF">join the discord</a></p>
                    </div>
                    <div id="cogs" className={styles.seperator}>
                        <img src="/cogs.png" alt="Cogs"></img>
                        <p className={styles.rightTitle}>MY PROJECTS</p>
                        <p className={styles.right}>the projects i'm most proud of</p>
                        <p className={styles.right}><a href="#projects">come and see them</a></p>
                    </div>
                </div>

                <div id={styles.contentContainer}>
                    <div id="aboutMe">
                        <h1 className={styles.leftTitle}>JAY | ANKOKI</h1>
                        <br></br>
                        <br></br>
                        <img className={styles.leftImage} src="/laptop.png" alt="Laptop"></img>
                        <p className={styles.leftO}>
                            I'm 20 and I currently attend University. <br></br>
                            I am currently studying Computer Science at the University of Brighton, and I'm in my first year.
                        </p>
                        <p className={styles.leftO}>
                            In my free time I love to work on projects, usually revolving around Minecraft plugins or <a href="https://www.github.com/SkriptLang/Skript">Skript</a> add-ons. <br></br>
                            Most of my work is public and stored on my <a href="https://www.github.com/Ankoki">GitHub</a>.
                        </p>
                        <p className={styles.leftO}>
                            I also enjoy playing video games such as League of Legends, Phasmophobia and Dead By Daylight. <br></br>
                            I'm quite awful at them but it's the thought that counts I hope. <br></br>
                        </p>
                        <p className={styles.leftO}>
                            I'll be honest, website development is very new to me as I previously just shoved together google results, however my University module has made me want to attempt to make something pretty, so here we are.
                        </p>
                        <p className={styles.leftO}>
                            Currently I am unemployed, however I have worked as a Chef and Bartender in York and Glasgow. I do miss pub work and I'm eager to get back to it.
                        </p>
                        <p className={styles.leftO}>
                            Listening to music is all I ever do, and I love loads of genres. The music I listen too most is definitely K-Pop, however 
                            I listen to much more, my music taste is weird. If you're interested, you can check out my <a href="https://open.spotify.com/user/2mauo1ot2h9agsixazyb0cps3?si=_XvjqSchRsO6RYl78VqLLQ">Spotify</a>.
                        </p>
                    </div>

                    <div id="projects">
                        <h1 className={styles.rightTitle}>My Projects</h1>
                        <p className={styles.right}>
                            Watch this space! My favourite projects will appear soon.
                        </p>
                    </div>
                </div>
            </body>
        </body>
    )
}