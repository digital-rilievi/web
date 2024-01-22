import styles from './PartnersList.module.css'
import Image from 'next/image'

interface PartnersListProps {
  className: string,
  partners: string[]
}

const PartnersList = (props: PartnersListProps) => {

  var realPartnersList = props.partners.concat(props.partners)

  return (
    <div className={styles.container}>
      <div className={styles.scrollWrapper}>

        <div className={styles.imageLists}>
          {props.partners.map((image, index) => (
            <div className={styles.imageWrapper} key={index}>
              <Image width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} unoptimized={true} />
            </div>
          ))}
        </div>

        <div className={styles.imageLists}>
          {props.partners.map((image, index) => (
            <div className={styles.imageWrapper} key={index}>
              <Image width={1} height={1} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} unoptimized={true} />
            </div>
          ))}
        </div>

        <div className={styles.imageLists}>
          {props.partners.map((image, index) => (
            <div className={styles.imageWrapper} key={index}>
              <Image width={12} height={80} className={styles.imageItem} src={`${image}`} alt={`Image ${index}`} unoptimized={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default PartnersList
