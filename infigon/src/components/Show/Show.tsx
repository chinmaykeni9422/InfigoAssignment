import Button from "../Button/Button"
import styles from "./Show.module.css"

function HeroPage() {
  return (
   <>
   <header>
        <div className={`${styles.container} ${styles.headerSection}  ${styles.flex}`}>
            {/*  left header */}
            <div className={styles.headerLeft}>
                <h1>Design Confidently</h1>
                <p className="pb-4">UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                <Button title={"Get started"}/>
            </div>
            {/*  Right Header  */}
            <div className="headerRight">
                <img src="https://uploads-ssl.webflow.com/63f5ff2d3827b085d542bb85/641abd141b9332582d5959dd_Group%2052.svg" alt="hero image"/>
            </div>
        </div>
    </header>
   </>
  )
}

export default HeroPage