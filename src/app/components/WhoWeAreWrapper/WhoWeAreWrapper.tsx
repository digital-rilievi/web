import WhoWeAre from "../WhoWeAre/WhoWeAre"
import WhoWeAreMobile from "../WoWeAreMobile/WoWeAreMobile"
import styles from './WhoWeAreWrapper.module.css'

interface Item {
    name: string,
    role: string,
    tooltipQuote: string,
    tooltipImage: string
}


const WhoWeAreWrapper = () => {

    return (
        <>
        <div className={styles.invisibleInMobile}>
        <WhoWeAre />
        </div>
        <div className={styles.visibleInMobile}>
        <WhoWeAreMobile />
        </div>
        </>
    )
}

export default WhoWeAreWrapper