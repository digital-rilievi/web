'use client'
import React, { useState, useEffect } from 'react'
import styles from './ValuesList.module.css'
import BlueCircle from '../BlueCircle/BlueCircle'

interface Value {
    value: string;
    description: string;
}

interface ValuesListProps {
    items: Value[];
}

const ValuesList = (props: ValuesListProps) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        const ball = document.getElementById(`blurredBall-${index}`)
        ball?.classList?.add(styles.animate)
    }

    const handleMouseLeave = (index: number) => {
        const ball = document.getElementById(`blurredBall-${index}`)
        ball?.classList?.remove(styles.animate)
    }

    useEffect(() => {
        const handleScroll = () => {
          const windowHeight = window.innerHeight;
          const scrollPosition = window.scrollY;
    
          // Calculate the area between 30% and 60% of the viewport height
          const startArea = windowHeight * 0.1;
          const endArea = windowHeight * 0.9;
    
          // Find the index of the item that enters the area
          const newItemIndex = props.items.findIndex((_, index) => {
            const itemOffsetTop = document.getElementById(`blurredBall-${index}`)?.offsetTop || 0;
            console.log("offset: " + itemOffsetTop)
            console.log("is in it: " + (scrollPosition + startArea < itemOffsetTop && itemOffsetTop < scrollPosition + endArea))
            return scrollPosition + startArea < itemOffsetTop && itemOffsetTop < scrollPosition + endArea;
          });
    

          setExpandedIndex(newItemIndex);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <>
            <div className={`${styles.column} ${styles.invisibleInMobile}`}>
                {props.items.map((item, index) => (
                    <div key={index} className={styles.row}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className={styles.title}>{item.value}</div>
                        <div className={styles.text}>
                            {item.description}
                        </div>
                        <div id={`blurredBall-${index}`} className={styles.blurredBall}>
                            <BlueCircle />
                        </div>
                    </div>
                ))}
            </div>

            <div className={`${styles.column} ${styles.visibleInMobile}`}>
                {props.items.map((item, index) => (
                    <div key={index} className={styles.row}
                    >
                        <div className={styles.title}>{item.value}</div>
                        <div className={styles.text}>
                            {item.description}
                        </div>
                        <div id={`blurredBall-${index}`} className={`${styles.blurredBall} ${expandedIndex === index ? styles.expanded : ''}`}>
                            <BlueCircle />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ValuesList;