'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './PartnersList.module.css';

interface PartnersListProps {
  partners: string[];
}

const PartnersList = (props: PartnersListProps) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [totalWidth, setTotalWidth] = useState(0);

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateArrowVisibility();

    // Add event listener for window resize
    const handleResize = () => {
      updateArrowVisibility();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [props.partners]);

  const updateArrowVisibility = () => {
    if (listRef.current) {
      const containerWidth = Math.floor(listRef.current.clientWidth);
      const newTotalWidth = Math.floor(props.partners.length * 100);
      const maxScrollPosition = Math.max(0, newTotalWidth - containerWidth);

      setTotalWidth(newTotalWidth);
      setShowLeftArrow(listRef.current.scrollLeft > 0);
      setShowRightArrow(listRef.current.scrollLeft < maxScrollPosition);
    }
  };

  const handleScroll = () => {
    if (listRef.current) {
      setShowLeftArrow(listRef.current.scrollLeft > 0);
      setShowRightArrow(listRef.current.scrollLeft < totalWidth - listRef.current.clientWidth);
    }
  };

  const scrollLeft = () => {
    if (listRef.current) {
      const containerWidth = Math.floor(listRef.current.clientWidth);
      const newScrollPosition = Math.max(0, listRef.current.scrollLeft - containerWidth);

      listRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      const containerWidth = Math.floor(listRef.current.clientWidth);
      const maxScrollPosition = Math.max(0, totalWidth - containerWidth);
      const newScrollPosition = Math.min(listRef.current.scrollLeft + containerWidth, maxScrollPosition);

      listRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.imageListContainer}>
      {showLeftArrow && (
        <button
          className={`${styles.scrollButton} ${styles.scrollLeft}`}
          onClick={scrollLeft}
        >
          &lt;
        </button>
      )}
      <div
        className={styles.imageList}
        onScroll={handleScroll}
        ref={listRef}
      >
        {props.partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
            className={styles.partnerImage}
          />
        ))}
      </div>
      {showRightArrow && (
        <button
          className={`${styles.scrollButton} ${styles.scrollRight}`}
          onClick={scrollRight}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default PartnersList;
