import styles from './PartnersList.module.css'
import Image from 'next/image'

interface PartnersListProps {
    className: string,
    partners: string[]
}

const PartnersList = (props: PartnersListProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll}>
                <div className={`${''}`}>
                    {props.partners.map((image, index) => (
                            <Image key={index} width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} unoptimized={true} loading={"eager"} />
                    ))}
                </div>
                <div className={''}>&nbsp;</div>
                <div className={`${''}`}>
                    {props.partners.map((image, index) => (
                        <Image key={index} width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} unoptimized={true} loading={"eager"} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default PartnersList