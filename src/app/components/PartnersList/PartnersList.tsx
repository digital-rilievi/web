'use client'
import React, { useState, useRef, useEffect } from 'react';
import styles from './PartnersList.module.css';

interface PartnersListProps {
  className: string,
  partners: string[];
}

const PartnersList = (props: PartnersListProps) => {

  var realPartnersList = props.partners.concat(props.partners)

  return (
    <div className={props.className}>
      <div className={styles.horizontalScrollingItems}>
        {Array.from({ length: realPartnersList.length }).map((_, index) => {
          return (

            <img
              src={realPartnersList[index]}
              alt={`Partner ${index + 1}`}
              className={`${styles.horizontalScrollingItemsItem}`} key={index}
            />

          )
        })
        }
      </div>
    </div>
  );
};


export default PartnersList;
