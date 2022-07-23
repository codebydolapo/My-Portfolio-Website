import styles from '../styles/landing.module.css'
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from 'next/link'



function Landing(){
    return(
        <div className  = {styles.landing} id = 'landing'>
            <h1 className = {styles.bashorun}>BASHORUN</h1>
            <h1 className = {styles.dolapo}>DOLAPO</h1>
            <div className= {styles.underline}></div>
            <h1 className = {styles.profession}>Professional Web Developer</h1>
            <Link href = '/#intro'>
                <ChevronDownIcon className = {styles.landingIcon}/>
            </Link>
            <button className = {styles.cv}>Read My CV Here</button>
        </div>
    )
}

export default Landing