import styles from './PartnersList.module.css'

interface PartnersListProps {
  className: string,
  partners: string[];
}

const PartnersList = (props: PartnersListProps) => {

  var realPartnersList = props.partners.concat(props.partners)

  return (
    <div className={styles.container}>
      <div className={styles.scrollWrapper}>

        <div className={styles.imageLists}>
          {props.partners.map((image, index) => (
            <div className={styles.imageWrapper}>
              <img className={styles.horizontalScrollingItemsItem} key={index} src={`${image}`} alt={`Image ${index}`} />
            </div>
          ))}
        </div>

        <div className={styles.imageLists}>
          {props.partners.map((image, index) => (
            <div className={styles.imageWrapper}>
              <img className={styles.horizontalScrollingItemsItem} key={index} src={`${image}`} alt={`Image ${index}`} />
            </div>
          ))}
        </div>

        <div className={styles.imageLists}>
          {props.partners.map((image, index) => (
            <div className={styles.imageWrapper}>
              <img className={styles.horizontalScrollingItemsItem} key={index} src={`${image}`} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default PartnersList;
