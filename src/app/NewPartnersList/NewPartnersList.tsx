import styles from './NewPartnersList.module.css'
import Image from 'next/image'

interface NewPartnersListProps {
    className: string,
    partners: string[]
}

const NewPartnersList = (props: NewPartnersListProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll}>
                <div className={`${''}`}>
                    {props.partners.map((image, index) => (
                        <div className={styles.imageWrapper} key={index}>
                            <Image width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} unoptimized={true} />
                        </div>
                    ))}
                </div>
                <div className={''}>&nbsp;</div>
                <div className={`${''}`}>
                    {props.partners.map((image, index) => (
                        <div className={styles.imageWrapper} key={index}>
                            <Image width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} unoptimized={true} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default NewPartnersList