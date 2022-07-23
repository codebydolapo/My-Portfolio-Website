import styles from '../styles/mainbody.module.css'
import Landing from './Landing'
import Intro from './Intro'
import Menubar from './Menubar'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'

function Mainbody(){
    return(
        <div className = {styles.mainbody}>
            <Landing/>
            <Intro/>
            <Portfolio/>
            <Skills/>
            <Contact/>
            <Menubar/>
        </div>
    )
}

export default Mainbody;