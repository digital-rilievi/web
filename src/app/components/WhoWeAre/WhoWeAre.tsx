'use client'
import React from 'react'
import Space from '../Space/Space';
import styles from './WhoWeAre.module.css'
import { Tooltip } from 'react-tooltip'
import CustomTooltip from '../CustomTooltip/CustomTooltip';

interface Item {
    name: string,
    role: string,
    title1: string,
    desc1: string,
    title2: string,
    desc2: string,
    tooltipQuote: string,
    tooltipImage: string
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
                        <div className={styles.namesColumnWrapper}>
                            <div id={`my-anchor-element${index}`} className={styles.nameColumn}>
                                <div className={styles.title}>{item.name}</div>
                                <div className={styles.desc}>{item.role}</div>
                                {(item.tooltipQuote || item.tooltipImage) && (
                                    <Tooltip offset={0} place={"right"} arrowColor={"transparent"} className={styles.tooltipContainer} anchorSelect={`#my-anchor-element${index}`}>
                                        <CustomTooltip quote={item.tooltipQuote} img={item.tooltipImage} />
                                    </Tooltip>
                                )}
                            </div>
                        </div >

                        <div className={styles.column}>
                            <h3 className={styles.title}>{item.title1}</h3>
                            <p className={styles.desc}>{item.desc1}</p>
                        </div>
                        <div className={styles.column}>
                            <h3 className={styles.title}>{item.title2}</h3>
                            <p className={styles.desc}>{item.desc2}</p>
                        </div>
                    </div >
                    <div className={styles.separator}></div>
                </div>
            ))}
        </div>
    );
};

export default WhoWeAre
