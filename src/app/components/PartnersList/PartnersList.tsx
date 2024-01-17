'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './PartnersList.module.css';

interface PartnersListProps {
  partners: string[];
}
// ... (previous imports)

const PartnersList = (props: PartnersListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [prevItemsPerPage, setPrevItemsPerPage] = useState(4);

  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateTotalPages();
    if (itemsPerPage !== prevItemsPerPage) {
      setCurrentPage(1);
      setPrevItemsPerPage(itemsPerPage);
    }
  }, [props.partners, itemsPerPage, prevItemsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      updateTotalPages();
      if (itemsPerPage !== prevItemsPerPage) {
        setCurrentPage(1);
        setPrevItemsPerPage(itemsPerPage);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [totalPages, itemsPerPage, prevItemsPerPage]); // Fix the dependency array here

  const updateTotalPages = () => {
    if (containerRef.current && listRef.current) {
      const containerWidth = Math.floor(containerRef.current.clientWidth);
      const validItemsPerPage = props.partners.length % 2 === 0 ? [2, 4, 6] : [2, 3, 4, 5, 6];

      let newItemsPerPage = Math.max(...validItemsPerPage.filter((n) => n <= containerWidth / 100));

      const newTotalPages = Math.ceil(props.partners.length / newItemsPerPage);

      setItemsPerPage(newItemsPerPage);
      setTotalPages(newTotalPages);
    }
  };

  const scrollLeft = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const scrollRight = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  return (
    <>
      <div className={styles.imageListContainer} ref={containerRef}>
        {currentPage > 1 && (
          <button
            className={`${styles.scrollButton} ${styles.scrollLeft}`}
            onClick={scrollLeft}
          >
            &lt;
          </button>
        )}
        <div className={styles.imageList} ref={listRef}>
          {Array.from({ length: itemsPerPage }).map((_, index) => {
            const partnerIndex = (currentPage - 1) * itemsPerPage + index;
            return partnerIndex < props.partners.length ? (
              <div key={index} className={styles.partnerContainer}>
                <img
                  src={props.partners[partnerIndex]}
                  alt={`Partner ${index + 1}`}
                  className={styles.partnerImage}
                />
              </div>
            ) : null;
          })}
        </div>
        {currentPage < totalPages && (
          <button
            className={`${styles.scrollButton} ${styles.scrollRight}`}
            onClick={scrollRight}
          >
            &gt;
          </button>
        )}
      </div>
    </>
  );
};

export default PartnersList;
