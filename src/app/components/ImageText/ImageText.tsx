import React from "react";
import BlueCircle from "../BlueCircle/BlueCircle";
import CircularButton from "../CircularButton/CircularButton";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import Space from "../Space/Space";
import styles from "./ImageText.module.css";

interface ImageTextProps {
  image: string;
  title?: String;
  text?: string;
  secondaryText?: string;
  /** Smaller type for the bottom secondary block */
  smallPrintBottomText?: boolean;
  firstMetric?: string;
  secondMetric?: string;
  /** Small logos row (paths under public/) */
  tinyLogos?: string[];
  link?: string;
  linkLabel?: string;
  /** false for PDFs and external URLs so the button uses a normal anchor (new tab). */
  linkRemainsInPage?: boolean;
  inverted?: String | Boolean;
  blueCircle?: Boolean;
}

function tinyLogoAltFromSrc(src: string): string {
  if (
    src.includes("loghi-istituzionali") ||
    src.includes("striscia-loghi-istituzionali")
  ) {
    return "Cofinanziamento europeo, Stato italiano, programma di coesione e Regione Friuli Venezia Giulia";
  }
  if (src.includes("coesione-it-fvg")) {
    return "Coesione Italia 2021-2027 Friuli Venezia Giulia";
  }
  if (src.includes("eu-cofunded") || src.includes("Co-funded")) {
    return "Cofinanziato dall'Unione europea";
  }
  if (src.includes("repubblica-italiana-emblem")) {
    return "Emblema della Repubblica Italiana";
  }
  if (src.includes("regione")) {
    return "Regione Autonoma Friuli Venezia Giulia";
  }
  return "";
}

const ImageText = (props: ImageTextProps) => {
  return (
    <div
      className={`${styles.container} ${props.inverted ? "" : styles.inverted}`}
    >
      <ImageWrapper
        className={`${styles.image} ${props.secondaryText && styles.invisibleInMobile}`}
        src={props.image}
        backgroundColor={"#767676"}
      />
      <div
        className={`${styles.content} ${props.blueCircle ? styles.contentWithCircle : ""}`}
      >
        {props.secondaryText && (
          <ImageWrapper
            className={`${styles.image} ${styles.visibleInMobile} ${styles.imageMobileLead}`}
            src={props.image}
            backgroundColor={"#767676"}
          />
        )}
        {props.title && <h2 className={styles.title}>{props.title}</h2>}
        {props.text && (
          <div className={styles.text}>
            <p>{props.text}</p>
          </div>
        )}
        {props.firstMetric && (
          <h2 className={styles.duration}>{props.firstMetric}</h2>
        )}
        {props.secondMetric && (
          <h2 className={styles.duration}>{props.secondMetric}</h2>
        )}
        {props.link && (
          <div className={styles.circularButtonWrapper}>
            <CircularButton
              link={props.link}
              label={props.linkLabel}
              remainsInPage={props.linkRemainsInPage !== false}
            />
          </div>
        )}
        <div className={styles.flexGrowSpacer}>
          <Space size={"small"} />
        </div>
        {props.tinyLogos && props.tinyLogos.length > 0 && (
          <div
            className={styles.tinyLogosBanner}
            aria-label="Banner loghi istituzionali"
          >
            <div
              className={`${styles.tinyLogosRow} ${props.tinyLogos.length === 1 ? styles.tinyLogosRowStrip : ""}`}
            >
              {props.tinyLogos.map((src, i) => (
                <img
                  key={`${src}-${i}`}
                  src={src}
                  alt={tinyLogoAltFromSrc(src)}
                  className={styles.tinyLogo}
                  decoding="async"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
        {props.secondaryText && (
          <div
            className={`${styles.secondaryText} ${props.smallPrintBottomText ? styles.smallPrintBottomText : ""}`}
          >
            {props.secondaryText}
          </div>
        )}
      </div>
      {props.blueCircle && (
        <div className={styles.blueCircleContainer}>
          <div className={styles.blueCircleWrapper}>
            <BlueCircle />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageText;
