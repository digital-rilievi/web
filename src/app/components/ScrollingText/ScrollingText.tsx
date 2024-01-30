import styles from './ScrollingText.module.css'

interface ScrollingtextProps {
    text: string
}

const ScrollingText = (props: ScrollingtextProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.scroll}>
                <div className={`${''}`}>
                    <span className={styles.text}>{`${props.text}`}</span>
                    <span className={styles.text}>{`${props.text}`}</span>
                    <span className={styles.text}>{`${props.text}`}</span>
                    <span className={styles.text}>{`${props.text}`}</span>
                    </div>
                <div className={''}>&nbsp;</div>
                <div className={`${''}`}>
                    <span className={styles.text}>{`${props.text}`}</span>
                    <span className={styles.text}>{`${props.text}`}</span>
                    <span className={styles.text}>{`${props.text}`}</span>
                    <span className={styles.text}>{`${props.text}`}</span>
                    </div>
            </div>
        </div>
    )
}


export default ScrollingText