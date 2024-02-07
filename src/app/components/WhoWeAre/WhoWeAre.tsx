'use client'
import React, { useState } from 'react'
import Space from '../Space/Space'
import styles from './WhoWeAre.module.css'
import { Tooltip } from 'react-tooltip'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import content from 'content.json'

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

const WhoWeAre = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const itemsPerRow = 3
    const totalItems = content['chi-siamo'].whoWeAreList.length
    const rest = totalItems % itemsPerRow
    var remainingItems
    if (rest > 0)
        remainingItems = itemsPerRow - (totalItems % itemsPerRow)
    else
        remainingItems = 0

    // Add invisible placeholder items to fill the last row
    const filledItems = remainingItems > 0 ? [...content['chi-siamo'].whoWeAreList, ...Array(remainingItems).fill(null)] : content['chi-siamo'].whoWeAreList

    return (
        <div>
            <p className={styles.whoWeAreTitle}>CHI SIAMO</p>
            <Space />
            <div className={styles.gridContainer}>
                {filledItems.map((item, index) => (
                    <div className={styles.item} key={index} onMouseMove={handleMouseMove}>
                        {item && ( // Render only if item exists (skip invisible placeholders)
                            <div id={`my-anchor-element${index}`} className={styles.nameColumn}>
                                <div className={styles.title}>{item.name}</div>
                                <div className={styles.desc}>{item.role}</div>
                                {(item.tooltipQuote || item.tooltipImage) && (
                                    <Tooltip
                                        arrowColor={'transparent'}
                                        className={styles.tooltipContainer}
                                        anchorSelect={`#my-anchor-element${index}`}
                                        style={{ top: cursorPosition.y, left: cursorPosition.x }}
                                    >
                                        <CustomTooltip quote={item.tooltipQuote} img={item.tooltipImage} />
                                    </Tooltip>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhoWeAre