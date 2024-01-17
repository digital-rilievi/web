import styles from './ScrollingText.module.css';

const ScrollingText = () => {
    return (
        <>

            <div className={styles.horizontalScrollingItems}>
                <div className={styles.horizontalScrollingItemsItem}>
                    Here is some horizontally scrolling text used for a tutorial. It will loop smoothly.&nbsp
                </div>
                <div className={styles.horizontalScrollingItemsItem}>
                    Here is some horizontally scrolling text used for a tutorial. It will loop smoothly.&nbsp
                </div>
            </div>
        </>
    );
};


export default ScrollingText;