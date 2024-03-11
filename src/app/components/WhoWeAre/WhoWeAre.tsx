'use client'
import React, { useEffect, useState } from 'react'
import Space from '../Space/Space'
import styles from './WhoWeAre.module.css'
import CustomTooltip from '../CustomTooltip/CustomTooltip'
import content from 'content.json'

interface Item {
    name: string,
    role: string,
    tooltipQuote: string,
    tooltipImage: string
}


const WhoWeAre = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const [gridContainerOffset, setGridContainerOffset] = useState({ top: 0, left: 0 })
    const [hoveredItem, setHoveredItem] = useState<Item | null>(null)

    const handleMouseEnter = (item: Item) => {
        const gridContainer = document.querySelector(`.${styles.gridContainer}`)
        if (gridContainer) {
            const rect = gridContainer.getBoundingClientRect()
            setGridContainerOffset({ top: rect.top, left: rect.left })
        }
        setHoveredItem(item)
    }

    const handleMouseLeave = () => {
        setHoveredItem(null)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
        const gridContainer = document.querySelector(`.${styles.gridContainer}`)
        if (gridContainer) {
            const rect = gridContainer.getBoundingClientRect()
            setGridContainerOffset({ top: rect.top, left: rect.left })
        }
    }

    const handleWheel = (e: WheelEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY })
        const gridContainer = document.querySelector(`.${styles.gridContainer}`)
        if (gridContainer) {
            const rect = gridContainer.getBoundingClientRect()
            setGridContainerOffset({ top: rect.top, left: rect.left })
        }
    }

    useEffect(() => {
        //window.addEventListener('mousemove', handleMouseMove as unknown as EventListener)
        window.addEventListener('wheel', handleWheel)


        return () => {
            //window.removeEventListener('mousemove', handleMouseMove as unknown as EventListener)
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])

    const calculateTooltipPosition = () => {
        const { x, y } = cursorPosition
        const { top, left } = gridContainerOffset
        const tooltipElement = document.querySelector(`.${styles.tooltipContainer}`) as HTMLElement

        // Calculate initial positions
        let tooltipTop = y - top
        let tooltipLeft = x - left

        if (!tooltipElement) {
                return { top: tooltipTop, left: tooltipLeft }
        }

        const tooltipRect = tooltipElement.getBoundingClientRect()

        // Adjust positions to keep the tooltip within the screen boundaries
        if (tooltipTop + tooltipRect.height > document.body.clientHeight) {
            tooltipTop = document.body.clientHeight - tooltipRect.height
        } else if (tooltipTop < 0) {
            tooltipTop = 0
        }

        if (tooltipLeft + tooltipRect.width > document.body.clientWidth) {
            tooltipLeft = document.body.clientWidth - tooltipRect.width
        } else if (tooltipLeft < 0) {
            tooltipLeft = 0
        }

        // Mirror to the opposite side if tooltip is close to the right edge
        if (document.body.clientWidth - (x - left) < tooltipRect.width + 32) {
            tooltipLeft = x - left - tooltipRect.width - 16
        }

        // Mirror to the opposite side if tooltip is close to the bottom edge
        if (y - top > window.innerHeight - (y - tooltipTop) - tooltipRect.height) {
            // Calculate the amount of overflow
            const overflowHeight = (y - top) - (window.innerHeight - (y - tooltipTop) - tooltipRect.height)

            // Adjust tooltipTop to keep it within the screen boundaries
            tooltipTop = tooltipTop - overflowHeight

            return { top: tooltipTop, left: tooltipLeft }
        }

        return { top: tooltipTop, left: tooltipLeft }
    }

    const itemsPerRow = 3
    const totalItems = content['chi-siamo'].whoWeAreList.length
    const remainingItems = itemsPerRow - (totalItems % itemsPerRow)

    // Add invisible placeholder items to fill the last row
    const filledItems = remainingItems > 0 ? [...content['chi-siamo'].whoWeAreList, ...Array(remainingItems).fill(null)] : content['chi-siamo'].whoWeAreList

    return (
        <div onMouseMove={handleMouseMove} onMouseEnter={handleMouseMove}>
            <p className={styles.whoWeAreTitle}>CHI SIAMO</p>
            <Space />
            <div className={styles.gridContainer}>
                {filledItems.map((item, index) => (
                    <div
                        className={styles.item}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item && (
                            <div id={`my-anchor-element${index}`} className={`${hoveredItem === item ? styles.nameColumnHovered : styles.nameColumn}`}>
                                <div className={styles.title}>{item.name}</div>
                                <div className={styles.desc}>{item.role}</div>
                            </div>
                        )}
                        {(item && hoveredItem === item) && (
                            <div className={`${styles.tooltipContainer} ${styles.tooltipFadeIn}`} style={{ ...calculateTooltipPosition(), position: 'absolute' }}>
                                <CustomTooltip quote={item.tooltipQuote} img={item.tooltipImage} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhoWeAre