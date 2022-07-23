import styles from '../styles/portfoliocard.module.css'


function PortfolioCard({image, title}: {image: string, title: string}){
    return(
        <div className = {styles.portfoliocard}>
            <img className = {styles.image} src = {image}/>
            <h1 className = {styles.title}>{title}</h1>
            <div className = {styles.buttonDiv}>
            <button className = {styles.button}>View Live</button>
            <button className = {styles.button}>See Repo</button>
            </div>
            <div className = {styles.stackDiv}></div>
        </div>
    )
}

export default PortfolioCard