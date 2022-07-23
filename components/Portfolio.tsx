import styles from "../styles/portfolio.module.css";
import PortfolioCard from "./PortfolioCard";
import {portfolioData, Data} from "./data";
import Link from "next/link";


function Portfolio() {
  return (
    <div className={styles.portfolio} id = 'portfolio'>
      <h1 className={styles.title}>My Portfolio</h1>
      <div className={styles.portfolioContainer}>
        {portfolioData.map(({ image, title }) => {
          return <PortfolioCard image={image} title={title} />;
        })}
      </div>
      <div className={styles.nextButtonDiv}>
          <Link href = "/#skills">
            <button>Check out My Skills Below</button>
          </Link>
      </div>
    </div>
  );
}

export default Portfolio;
