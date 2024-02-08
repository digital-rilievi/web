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
                <div className={styles.tooltipContainer} style={{ top: cursorPosition.y - gridContainerOffset.top, left: cursorPosition.x - gridContainerOffset.left, position: 'absolute' }}>
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