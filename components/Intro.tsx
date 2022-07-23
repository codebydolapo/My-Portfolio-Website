import styles from '../styles/intro.module.css'
import Link from "next/link";


function Intro(){
    return(
        <div className = {styles.intro} id = 'intro'>
            <div className = {styles.left}>
                <h1 className= {styles.hello}>Hello There! I'm</h1>
                <h1 className = {styles.dolapo}>DOLAPO</h1>
                <h1 className = {styles.profession}>A web/software developer</h1>
                <div className = {styles.underline}></div>
                <h1 className = {styles.leftExplanation}>I build awesome websites, web-apps and other scalable webtools for awesome people.</h1>
            </div>
            <div className = {styles.right}>
                <h1 className = {styles.rightHeader}>Okay, But Who Am I, Really?</h1>
                <p className = {styles.rightExpo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus incidunt nihil dignissimos magni quis vel natus, iusto facilis mollitia repudiandae maxime ab, odio blanditiis vero qui, magnam quasi at. Accusantium.</p>
                <p className = {styles.rightExpo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link href = '/#portfolio'>
                    <button className = {styles.button}>Click Here To See My Portfolio</button>
                </Link>
            </div>
        </div>
    )
}

export default Intro