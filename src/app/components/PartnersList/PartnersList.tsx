import styles from './PartnersList.module.css'
import Image from 'next/image'
import Space from '../Space/Space'

interface PartnersListProps {
    className: string,
    partners: string[]
}

const PartnersList = (props: PartnersListProps) => {
    return (
        <div className={styles.container}>
            <p className={styles.partnersTitle}>I NOSTRI PARTNER</p>
            <Space />
            <div className={styles.scroll}>
                <div className={`${''}`}>
                    {props.partners.map((image, index) => (
                        <img key={index} width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} loading={"eager"} />
                    ))}
                </div>
                <div className={''}>&nbsp;</div>
                <div className={`${''}`}>
                    {props.partners.map((image, index) => (
                        <img key={index} width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} loading={"eager"} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default PartnersList