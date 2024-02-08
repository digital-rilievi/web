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
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [gridContainerOffset, setGridContainerOffset] = useState({ top: 0, left: 0 });
    const [hoveredItem, setHoveredItem] = useState<Item | null>(null);

    const handleMouseEnter = (item: Item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        const gridContainer = document.querySelector(`.${styles.gridContainer}`);
        if (gridContainer) {
            const rect = gridContainer.getBoundingClientRect();
            setGridContainerOffset({ top: rect.top, left: rect.left });
        }
    };

    const calculateTooltipPosition = () => {
        const { x, y } = cursorPosition;
        const { top, left } = gridContainerOffset;
        const tooltipElement = document.querySelector(`.${styles.tooltipContainer}`) as HTMLElement;
      
        if (!tooltipElement) {
          return { top: 0, left: 0 };
        }
      
        // Get actual dimensions and position of the tooltip dynamically
        const tooltipRect = tooltipElement.getBoundingClientRect();
      
        // Calculate initial positions
        let tooltipTop = y - top;
        let tooltipLeft = x - left;
      
        // Adjust positions to keep the tooltip within the screen boundaries
        if (tooltipTop + tooltipRect.height > window.innerHeight) {
          tooltipTop = window.innerHeight - tooltipRect.height;
        } else if (tooltipTop < 0) {
          tooltipTop = 0;
        }
      
        if (tooltipLeft + tooltipRect.width > window.innerWidth) {
          tooltipLeft = window.innerWidth - tooltipRect.width;
        } else if (tooltipLeft < 0) {
          tooltipLeft = 0;
        }
      
        // If tooltip is close to the right edge, mirror to the opposite side
        if (x - left > window.innerWidth - (x - tooltipLeft) - tooltipRect.width) {
          tooltipLeft = x - left - tooltipRect.width;
        }
      
        // If tooltip is close to the bottom edge, mirror to the opposite side
        if (y - top > window.innerHeight - (y - tooltipTop) - tooltipRect.height) {
          tooltipTop = y - top - tooltipRect.height;
        }
      
        // Build the final object
        const tooltipPosition: React.CSSProperties = {
          top: tooltipTop,
          left: tooltipLeft,
        };
      
        return tooltipPosition;
      };
      
      

    return (
        <>
            <p className={styles.whoWeAreTitle}>CHI SIAMO</p>
            <Space />
            <div className={styles.gridContainer} onMouseMove={handleMouseMove}>
                {content['chi-siamo'].whoWeAreList.map((item, index) => (
                    <div
                        className={styles.item}
                        key={index}
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item && (
                            <div id={`my-anchor-element${index}`} className={styles.nameColumn}>
                                <div className={styles.title}>{item.name}</div>
                                <div className={styles.desc}>{item.role}</div>
                            </div>
                        )}
                        {hoveredItem === item && (
                            <div className={styles.tooltipContainer} style={{ ...calculateTooltipPosition(), position: 'absolute' }}>
                                <CustomTooltip quote={item.tooltipQuote} img={item.tooltipImage} />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default WhoWeAre;