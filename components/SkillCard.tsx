import styles from '../styles/skillcard.module.css'


function SkillCard({image, title}: {image: string, title: string}){
    return(
        <div className = {styles.skillCard}>
            <img alt = '' src = {image}/>
            <p>{title}</p>
        </div>
    )
}

export default SkillCard