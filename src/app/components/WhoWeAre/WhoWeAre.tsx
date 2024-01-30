import React from 'react'
import Space from '../Space/Space';
import styles from './WhoWeAre.module.css'

interface Item {
    name: string;
    role: string;
    title1: string;
    desc1: string;
    title2: string;
    desc2: string;
}

interface WhoWeAreProps {
    items: Item[];
}

const WhoWeAre = (props: WhoWeAreProps) => {
    return (
        <div>
            <p className={styles.whoWeAreTitle}>CHI SIAMO</p>
            <Space />
            {props.items.map((item, index) => (
                <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                    <div className={styles.item}>
                        <div className={styles.column}>
                            <div className={styles.title}>{item.name}</div>
                            <div className={styles.desc}>{item.role}</div>
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.title}>{item.title1}</h3>
                            <p className={styles.desc}>{item.desc1}</p>
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.title}>{item.title2}</h3>
                            <p className={styles.desc}>{item.desc2}</p>
                        </div>
                    </div>
                    {index < props.items.length - 1 && <div className={styles.separator}></div>}
                </div>
            ))}
        </div>
    );
};

export default WhoWeAre;
