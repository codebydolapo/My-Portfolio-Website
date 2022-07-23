import styles from '../styles/skills.module.css'
import SkillCard from './SkillCard'
import {skillData} from './data'


function Skills(){
    return(
        <div className = {styles.skills} id = 'skills'>
            <div className = {styles.top}>
                <h1>My Skills</h1>
                <p>Here is a testimonial of all my hard work over the years. This is a list of all the skills I currently possess.</p>
            </div>
            <div className = {styles.bottom}>
                {skillData.map(({icon, title}: {icon: string, title: string})=>{
                    return <SkillCard
                        image = {icon}
                        title= {title}
                    />
                })}
            </div>
        </div>
    )
}

export default Skills